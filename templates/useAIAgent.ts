// src/hooks/useAIAgent.ts
import { useState, useCallback } from 'react';
import { AIAgentHook, ChatMessage, DataSchema, MessageRole } from '../components/chatbot-collector/types';

/**
 * Hook para integração com agentes de IA específicos por domínio
 * Implementa o padrão MCP (Model-Controller-Prompt)
 * @param agentType Tipo de agente a ser utilizado
 */
export function useAIAgent(
  agentType: 'health' | 'nutrition' | 'finance' | 'productivity'
): AIAgentHook {
  // Estado para controle de cache (opcional)
  const [cache] = useState<Record<string, any>>({});

  /**
   * Obtém resposta do LLM para uma mensagem
   */
  const getResponse = useCallback(async (
    content: string, 
    context: {
      previousMessages: ChatMessage[];
      collectedData: Record<string, any>;
      dataSchema: DataSchema;
      flowId: string;
      initialContext?: Record<string, any>;
    }
  ): Promise<{ message: string; metadata?: any }> => {
    try {
      // Estrutura mensagens para o modelo
      const messages = [
        // Mensagem de sistema com instruções específicas para o agente
        {
          role: MessageRole.SYSTEM,
          content: getSystemPrompt(agentType, context.dataSchema, context.collectedData)
        },
        // Histórico recente de mensagens
        ...getRecentHistory(context.previousMessages),
        // Mensagem atual do usuário
        {
          role: MessageRole.USER,
          content
        }
      ];

      // Chama o serviço LLM
      const response = await callLLMService(messages, {
        agentType,
        collectedData: context.collectedData,
        dataSchema: context.dataSchema,
        flowId: context.flowId,
        initialContext: context.initialContext
      });

      return response;
    } catch (error) {
      console.error('Erro ao obter resposta do LLM:', error);
      throw error;
    }
  }, [agentType, cache]);

  /**
   * Extrai dados estruturados de uma conversa
   */
  const extractData = useCallback(async (
    messages: ChatMessage[],
    schema: DataSchema
  ): Promise<Record<string, any>> => {
    try {
      // Cria um prompt para extração de dados
      const extractionPrompt = [
        {
          role: MessageRole.SYSTEM,
          content: getExtractionPrompt(agentType, schema)
        },
        // Inclui todas as mensagens recentes
        ...getRecentHistory(messages)
      ];

      // Chama o serviço LLM para extração
      const response = await callLLMService(extractionPrompt, {
        agentType,
        dataSchema: schema,
        isExtraction: true
      });

      // Parse do JSON retornado
      const extractedData = parseExtractedData(response.message, schema);
      
      return extractedData;
    } catch (error) {
      console.error('Erro ao extrair dados:', error);
      return {};
    }
  }, [agentType]);

  /**
   * Gera prompts sugeridos com base nos dados coletados
   */
  const getSuggestedPrompts = useCallback((
    collectedData: Record<string, any>,
    schema: DataSchema
  ): string[] => {
    // Identifica campos pendentes
    const pendingFields = Object.entries(schema)
      .filter(([key, config]) => config.required && !collectedData[key])
      .map(([key, config]) => ({ key, config }));

    // Gera prompts específicos para o tipo de agente
    return generateSuggestedPrompts(agentType, pendingFields, collectedData);
  }, [agentType]);

  /**
   * Determina o progresso de coleta com base nos dados e schema
   */
  const determineProgress = useCallback((
    collectedData: Record<string, any>,
    schema: DataSchema
  ): number => {
    // Contagem de campos obrigatórios
    const requiredFields = Object.entries(schema)
      .filter(([_, config]) => config.required)
      .length;
    
    if (requiredFields === 0) return 100;
    
    // Contagem de campos obrigatórios preenchidos
    const filledRequiredFields = Object.entries(schema)
      .filter(([key, config]) => config.required && collectedData[key] !== undefined)
      .length;
    
    return Math.min(100, Math.round((filledRequiredFields / requiredFields) * 100));
  }, []);

  return {
    getResponse,
    extractData,
    getSuggestedPrompts,
    determineProgress
  };
}

// Funções auxiliares (implementações fictícias para exemplo)

/**
 * Gera o prompt de sistema para o agente específico
 */
function getSystemPrompt(
  agentType: string, 
  dataSchema: DataSchema, 
  collectedData: Record<string, any>
): string {
  // Implementação específica por tipo de agente
  const agentInstructions = {
    health: `Você é um assistente especializado em saúde e bem-estar. 
    Seu objetivo é coletar informações sobre saúde de forma conversacional.
    Seja amigável, empático e profissional. Evite termos técnicos demais.
    Colete as seguintes informações: ${Object.entries(dataSchema)
      .map(([key, config]) => `${key}: ${config.description}`)
      .join(', ')}.`,
    
    nutrition: `Você é um nutricionista virtual especializado em orientação alimentar.
    Colete informações sobre hábitos alimentares de forma natural e profissional.
    Use linguagem acessível, mas precisa. Seja motivador e não julgue as escolhas alimentares.
    Informações a coletar: ${Object.entries(dataSchema)
      .map(([key, config]) => `${key}: ${config.description}`)
      .join(', ')}.`,
    
    finance: `Você é um consultor financeiro especializado.
    Seu objetivo é entender as necessidades financeiras do usuário através de conversa natural.
    Seja discreto, profissional e evite julgamentos sobre decisões financeiras passadas.
    Colete: ${Object.entries(dataSchema)
      .map(([key, config]) => `${key}: ${config.description}`)
      .join(', ')}.`,
    
    productivity: `Você é um coach de produtividade especializado.
    Converse naturalmente para entender as rotinas e hábitos do usuário.
    Seja motivador e positivo, evitando tom crítico sobre hábitos atuais.
    Colete: ${Object.entries(dataSchema)
      .map(([key, config]) => `${key}: ${config.description}`)
      .join(', ')}.`
  };

  // Adiciona contexto dos dados já coletados
  const collectedContext = Object.keys(collectedData).length > 0
    ? `\nInformações já coletadas: ${JSON.stringify(collectedData)}`
    : '';

  return `${agentInstructions[agentType]}${collectedContext}`;
}

/**
 * Obtém histórico recente da conversa
 */
function getRecentHistory(messages: ChatMessage[], limit = 10): Array<{ role: string; content: string }> {
  return messages
    .slice(-limit)
    .map(msg => ({
      role: msg.role,
      content: msg.content
    }));
}

/**
 * Chama o serviço LLM para obter resposta
 */
async function callLLMService(
  messages: Array<{ role: string; content: string }>,
  options: {
    agentType: string;
    collectedData?: Record<string, any>;
    dataSchema: DataSchema;
    flowId?: string;
    initialContext?: Record<string, any>;
    isExtraction?: boolean;
  }
): Promise<{ message: string; metadata?: any }> {
  try {
    // Simulação da chamada ao serviço LLM
    // Em produção, aqui estaria a chamada para o serviço real (OpenAI, Anthropic, etc.)
    console.log('Calling LLM Service with messages:', messages);
    console.log('Options:', options);
    
    // Simulação de resposta
    return new Promise(resolve => {
      setTimeout(() => {
        if (options.isExtraction) {
          // Simulação de extração de dados
          const extractedData = {};
          
          // Lógica fictícia para simular extração
          Object.keys(options.dataSchema).forEach(key => {
            if (Math.random() > 0.3 && !options.collectedData?.[key]) {
              extractedData[key] = mockDataForType(options.dataSchema[key].type);
            }
          });
          
          resolve({
            message: JSON.stringify(extractedData),
            metadata: { extractedData }
          });
        } else {
          // Simulação de resposta conversacional
          const responses = {
            health: [
              "Como você tem se sentido fisicamente nas últimas semanas?",
              "Você pratica alguma atividade física regularmente?",
              "Quantas horas de sono você costuma ter por noite?",
              "Obrigado pelas informações! Com base no que você compartilhou, posso sugerir algumas recomendações específicas."
            ],
            nutrition: [
              "Como você descreveria seus hábitos alimentares atuais?",
              "Você tem alguma restrição alimentar ou alergia?",
              "Quantas refeições você costuma fazer por dia?",
              "Entendi! Suas informações me ajudarão a personalizar recomendações nutricionais adequadas."
            ],
            finance: [
              "Quais são seus principais objetivos financeiros atualmente?",
              "Você possui investimentos ou está planejando investir?",
              "Como você descreveria sua tolerância a riscos em investimentos?",
              "Ótimo! Com essas informações, posso ajudar a traçar um plano financeiro alinhado aos seus objetivos."
            ],
            productivity: [
              "Como você organiza suas tarefas diárias atualmente?",
              "Quais são seus principais desafios de produtividade?",
              "Em qual período do dia você se sente mais produtivo?",
              "Perfeito! Agora posso sugerir estratégias personalizadas para melhorar sua produtividade."
            ]
          };
          
          const index = Math.floor(Math.random() * responses[options.agentType].length);
          
          resolve({
            message: responses[options.agentType][index],
            metadata: { intent: "data_collection" }
          });
        }
      }, 800);
    });
  } catch (error) {
    console.error('Error calling LLM service:', error);
    throw error;
  }
}

/**
 * Gera um valor mock para o tipo de dado especificado
 */
function mockDataForType(type: string): any {
  switch (type) {
    case 'string':
      return 'Exemplo de texto';
    case 'number':
      return Math.floor(Math.random() * 100);
    case 'boolean':
      return Math.random() > 0.5;
    case 'date':
      return new Date().toISOString();
    case 'array':
      return ['item1', 'item2'];
    case 'object':
      return { key: 'value' };
    default:
      return null;
  }
}

/**
 * Parse dos dados extraídos do LLM
 */
function parseExtractedData(message: string, schema: DataSchema): Record<string, any> {
  try {
    // Tenta fazer o parse do JSON
    const data = JSON.parse(message);
    
    // Valida e converte os tipos de acordo com o schema
    const validatedData = {};
    
    Object.entries(data).forEach(([key, value]) => {
      if (schema[key]) {
        // Converte os tipos conforme necessário
        switch (schema[key].type) {
          case 'number':
            validatedData[key] = typeof value === 'number' ? value : parseFloat(value as string);
            break;
          case 'boolean':
            validatedData[key] = typeof value === 'boolean' ? value : value === 'true';
            break;
          case 'date':
            validatedData[key] = value instanceof Date ? value : new Date(value as string);
            break;
          default:
            validatedData[key] = value;
        }
      }
    });
    
    return validatedData;
  } catch (error) {
    console.error('Erro ao fazer parse dos dados extraídos:', error);
    return {};
  }
}

/**
 * Gera o prompt para extração de dados
 */
function getExtractionPrompt(agentType: string, schema: DataSchema): string {
  const schemaDescription = Object.entries(schema)
    .map(([key, config]) => `${key} (${config.type}): ${config.description}`)
    .join('\n');
  
  return `Você é um assistente especializado em extração de dados para o domínio de ${agentType}.
  Analise a conversa e extraia as seguintes informações em formato JSON:
  
  ${schemaDescription}
  
  Retorne apenas um objeto JSON válido com os dados extraídos, sem texto adicional.
  Para campos que não foram mencionados na conversa, omita-os do JSON.
  Apenas inclua dados que o usuário forneceu explicitamente.`;
}

/**
 * Gera prompts sugeridos para o usuário
 */
function generateSuggestedPrompts(
  agentType: string, 
  pendingFields: Array<{ key: string; config: any }>,
  collectedData: Record<string, any>
): string[] {
  // Limita a 3 prompts sugeridos
  const limitedFields = pendingFields.slice(0, 3);
  
  // Template de prompts por tipo de agente
  const promptTemplates = {
    health: {
      weight: "Qual é o seu peso atual?",
      height: "Qual é a sua altura?",
      exerciseFrequency: "Com que frequência você pratica exercícios físicos?",
      sleepHours: "Quantas horas você dorme por noite em média?",
      healthGoals: "Quais são seus principais objetivos de saúde?",
      default: "Você poderia me contar mais sobre sua saúde?"
    },
    nutrition: {
      dietRestrictions: "Você tem alguma restrição alimentar?",
      mealsPerDay: "Quantas refeições você faz por dia?",
      waterIntake: "Quanto de água você costuma beber diariamente?",
      foodPreferences: "Quais alimentos você mais gosta de consumir?",
      default: "Poderia me contar mais sobre sua alimentação diária?"
    },
    finance: {
      income: "Qual é sua faixa de renda mensal?",
      savings: "Você tem alguma reserva financeira?",
      investmentGoals: "Quais são seus objetivos de investimento?",
      riskTolerance: "Como você descreveria sua tolerância a riscos em investimentos?",
      default: "Poderia me contar sobre seus objetivos financeiros?"
    },
    productivity: {
      workHours: "Quantas horas você trabalha por dia?",
      distractions: "O que mais te distrai durante o trabalho?",
      productivePeriod: "Em qual período do dia você se sente mais produtivo?",
      toolsUsed: "Quais ferramentas você usa para organizar suas tarefas?",
      default: "Como você organiza suas tarefas diárias?"
    }
  };
  
  // Gera prompts baseados nos campos pendentes
  return limitedFields.map(({ key }) => {
    const templates = promptTemplates[agentType];
    return templates[key] || templates.default;
  });
}
