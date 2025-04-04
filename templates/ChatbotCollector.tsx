// src/components/chatbot-collector/ChatbotCollector.tsx
import React, { useState, useEffect, useRef } from 'react';
import { useAIAgent } from '../../hooks/useAIAgent';
import { useDataStore } from '../../hooks/useDataStore';
import { ChatMessage, MessageRole, DataSchema } from './types';
import { ChatbotMessage } from './ChatbotMessage';
import { ChatbotInput } from './ChatbotInput';
import { ProgressIndicator } from '../ui/ProgressIndicator';

interface ChatbotCollectorProps<T extends DataSchema> {
  /**
   * Identificador único do fluxo de coleta
   */
  flowId: string;
  
  /**
   * Contexto inicial para o chatbot
   */
  initialContext?: Record<string, any>;
  
  /**
   * Esquema dos dados a serem coletados
   */
  dataSchema: T;
  
  /**
   * Callback chamado quando todos os dados forem coletados
   */
  onComplete?: (data: Record<keyof T, any>) => void;
  
  /**
   * Chatbot personalizado por produto
   */
  agentType: 'health' | 'nutrition' | 'finance' | 'productivity';
  
  /**
   * Mensagem de boas vindas customizada (opcional)
   */
  welcomeMessage?: string;
}

/**
 * Componente reutilizável para coleta de dados via chatbot
 * Substitui os formulários tradicionais com uma interface conversacional
 */
export function ChatbotCollector<T extends DataSchema>({
  flowId,
  initialContext,
  dataSchema,
  onComplete,
  agentType,
  welcomeMessage
}: ChatbotCollectorProps<T>) {
  // Estado para mensagens de chat
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  
  // Estado para armazenar dados já coletados
  const [collectedData, setCollectedData] = useState<Partial<Record<keyof T, any>>>({});
  
  // Estado para controlar loading
  const [loading, setLoading] = useState(false);
  
  // Estado para controle de progresso
  const [progress, setProgress] = useState(0);
  
  // Ref para scroll automático
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Hook customizado para integração com agente de IA
  const { 
    getResponse, 
    extractData,
    getSuggestedPrompts,
    determineProgress
  } = useAIAgent(agentType);
  
  // Hook para persistência de dados
  const { saveData, loadSession } = useDataStore();

  // Inicialização do chat
  useEffect(() => {
    // Carrega sessão anterior se existir
    const previousSession = loadSession(flowId);
    
    if (previousSession) {
      setMessages(previousSession.messages);
      setCollectedData(previousSession.data);
      setProgress(previousSession.progress);
    } else {
      // Inicia nova conversa
      const initialMessage: ChatMessage = {
        id: "welcome",
        role: MessageRole.ASSISTANT,
        content: welcomeMessage || getWelcomeMessage(),
        timestamp: new Date()
      };
      
      setMessages([initialMessage]);
    }
  }, [flowId]);

  // Scroll automático quando mensagens são adicionadas
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Gera mensagem de boas-vindas baseada no agente específico
  const getWelcomeMessage = () => {
    switch (agentType) {
      case 'health':
        return "Olá! Vou ajudar a coletar algumas informações sobre sua saúde e bem-estar. Como está se sentindo hoje?";
      case 'nutrition':
        return "Olá! Vamos conversar sobre seus hábitos alimentares para entender melhor suas necessidades nutricionais.";
      case 'finance':
        return "Bem-vindo! Vamos conversar sobre seus objetivos financeiros para personalizar sua experiência.";
      case 'productivity':
        return "Olá! Vamos entender seus hábitos e rotina para ajudar a melhorar sua produtividade.";
      default:
        return "Olá! Estou aqui para facilitar a coleta de algumas informações. Como posso ajudar?";
    }
  };

  // Processa a mensagem do usuário e obtém resposta
  const handleSendMessage = async (content: string) => {
    // Adiciona mensagem do usuário
    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: MessageRole.USER,
      content,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setLoading(true);
    
    try {
      // Obtém resposta do LLM com contexto atual
      const response = await getResponse(content, {
        previousMessages: messages,
        collectedData,
        dataSchema,
        flowId,
        initialContext
      });
      
      // Extrai dados estruturados da conversa
      const extractedData = await extractData(
        [...messages, userMessage],
        dataSchema
      );
      
      // Atualiza dados coletados
      const newCollectedData = {
        ...collectedData,
        ...extractedData
      };
      setCollectedData(newCollectedData);
      
      // Adiciona resposta do assistente
      const assistantMessage: ChatMessage = {
        id: `assistant-${Date.now()}`,
        role: MessageRole.ASSISTANT,
        content: response.message,
        timestamp: new Date(),
        suggestedPrompts: getSuggestedPrompts(newCollectedData, dataSchema)
      };
      
      setMessages(prev => [...prev, assistantMessage]);
      
      // Calcula e atualiza progresso
      const newProgress = determineProgress(newCollectedData, dataSchema);
      setProgress(newProgress);
      
      // Salva sessão
      saveData(flowId, {
        messages: [...messages, userMessage, assistantMessage],
        data: newCollectedData,
        progress: newProgress
      });
      
      // Verifica se todos os dados foram coletados
      if (newProgress >= 100 && onComplete) {
        onComplete(newCollectedData as Record<keyof T, any>);
      }
    } catch (error) {
      console.error('Erro ao processar mensagem:', error);
      
      // Adiciona mensagem de erro
      const errorMessage: ChatMessage = {
        id: `error-${Date.now()}`,
        role: MessageRole.ASSISTANT,
        content: "Desculpe, tive um problema ao processar sua mensagem. Poderia tentar novamente?",
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chatbot-collector">
      <div className="chatbot-header">
        <h3 className="chatbot-title">
          {agentType === 'health' && 'Assistente de Saúde'}
          {agentType === 'nutrition' && 'Nutricionista Virtual'}
          {agentType === 'finance' && 'Consultor Financeiro'}
          {agentType === 'productivity' && 'Coach de Produtividade'}
        </h3>
        
        <ProgressIndicator 
          progress={progress} 
          label={`${Math.round(progress)}% completo`} 
        />
      </div>
      
      <div className="chatbot-messages">
        {messages.map((message) => (
          <ChatbotMessage
            key={message.id}
            message={message}
            onSuggestedPromptClick={handleSendMessage}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <ChatbotInput
        onSendMessage={handleSendMessage}
        disabled={loading}
        loading={loading}
      />
    </div>
  );
}
