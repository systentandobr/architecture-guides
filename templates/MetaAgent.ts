// src/ai/meta-agent/meta-agent.ts
import { BaseAgent } from '../core/base-agent';
import { AgentRegistry } from '../core/agent-registry';
import { AgentCommunication } from '../core/agent-communication';
import { LLMGateway } from '../core/llm-gateway';
import { MemoryManager } from '../core/memory-manager';
import { renderPromptTemplate } from '../core/prompt-templates';
import { metaAgentPrompts } from './prompts';
import { UserProfile } from '../../models/user-profile';
import { ProductIntegration } from '../../types/product-integration';

/**
 * Meta-Agente responsável por coordenar os agentes especialistas dos diferentes produtos
 * Implementa o padrão MCP (Model-Controller-Prompt)
 */
export class MetaAgent extends BaseAgent {
  private agentRegistry: AgentRegistry;
  private agentComm: AgentCommunication;
  private productIntegrations: Map<string, ProductIntegration>;
  private userProfile: UserProfile;

  /**
   * Cria uma nova instância do Meta-Agente
   * @param userId ID do usuário para o qual o agente será criado
   */
  constructor(userId: string) {
    super({
      agentId: 'meta-agent',
      userId,
      llmConfig: {
        model: 'gpt-4',
        temperature: 0.4, // Mais determinístico para coordenação
        maxTokens: 1500
      }
    });
    
    this.agentRegistry = new AgentRegistry();
    this.agentComm = new AgentCommunication();
    this.productIntegrations = new Map();
    this.userProfile = new UserProfile(userId);
    
    // Registrar integrações com os produtos
    this.registerProductIntegrations();
  }

  /**
   * Registra as integrações com os produtos do ecossistema
   * @private
   */
  private registerProductIntegrations(): void {
    // Registrar cada produto no meta-agente
    const zenLauncherIntegration = require('../../integrations/zen-launcher').default;
    const meuNutriIntegration = require('../../integrations/meu-nutri').default;
    const investmentMomentIntegration = require('../../integrations/investment-moment').default;
    const healthWellbeingIntegration = require('../../integrations/health-wellbeing').default;
    
    this.productIntegrations.set('zen-launcher', new zenLauncherIntegration(this.userId));
    this.productIntegrations.set('meu-nutri', new meuNutriIntegration(this.userId));
    this.productIntegrations.set('investment-moment', new investmentMomentIntegration(this.userId));
    this.productIntegrations.set('health-wellbeing', new healthWellbeingIntegration(this.userId));
  }

  /**
   * Processa uma consulta do usuário e determina quais agentes devem ser acionados
   * @param query Consulta do usuário
   * @returns Resposta unificada dos agentes relevantes
   */
  async routeUserQuery(query: string): Promise<any> {
    // 1. Compreender a intenção do usuário
    const userIntent = await this.classifyUserIntent(query);
    
    // 2. Determinar produtos relevantes
    const relevantProducts = this.determineRelevantProducts(userIntent);
    
    // 3. Coletar contexto holístico do usuário
    const userContext = await this.collectUserContext(relevantProducts);
    
    // 4. Consultar agentes especializados
    const agentResponses = await this.consultSpecialistAgents(query, userIntent, relevantProducts, userContext);
    
    // 5. Sintetizar uma resposta unificada
    const unifiedResponse = await this.synthesizeResponse(query, agentResponses, userContext);
    
    // 6. Atualizar o contexto do usuário com esta interação
    await this.updateUserContext(query, unifiedResponse, userIntent);
    
    return unifiedResponse;
  }

  /**
   * Classifica a intenção do usuário para determinar quais agentes acionar
   * @param query Consulta do usuário
   * @private
   */
  private async classifyUserIntent(query: string): Promise<any> {
    const prompt = renderPromptTemplate(metaAgentPrompts.intentClassification, {
      query,
      availableIntents: [
        'habit_tracking', 'focus_improvement', 'screen_time', // ZEN Launcher
        'nutrition_advice', 'meal_planning', 'diet_analysis', // Meu Nutri
        'investment_advice', 'risk_assessment', 'market_trends', // Momento do Investimento
        'fitness_tracking', 'sleep_optimization', 'wellness_monitoring', // Saúde e Bem-estar
        'general_inquiry', 'cross_product_integration' // Integrações entre produtos
      ]
    });
    
    const response = await this.llm.complete(prompt);
    return JSON.parse(response.trim());
  }

  /**
   * Determina quais produtos são relevantes para a consulta do usuário
   * @param userIntent Intenção do usuário
   * @private
   */
  private determineRelevantProducts(userIntent: any): string[] {
    const productMapping = {
      // ZEN Launcher
      'habit_tracking': 'zen-launcher',
      'focus_improvement': 'zen-launcher',
      'screen_time': 'zen-launcher',
      
      // Meu Nutri
      'nutrition_advice': 'meu-nutri',
      'meal_planning': 'meu-nutri',
      'diet_analysis': 'meu-nutri',
      
      // Momento do Investimento
      'investment_advice': 'investment-moment',
      'risk_assessment': 'investment-moment',
      'market_trends': 'investment-moment',
      
      // Saúde e Bem-estar
      'fitness_tracking': 'health-wellbeing',
      'sleep_optimization': 'health-wellbeing',
      'wellness_monitoring': 'health-wellbeing',
      
      // Meta-intents
      'general_inquiry': 'all',
      'cross_product_integration': 'all'
    };
    
    const primaryIntent = userIntent.primaryIntent;
    const secondaryIntents = userIntent.secondaryIntents || [];
    
    const relevantProducts = new Set<string>();
    
    // Adicionar produto da intenção primária
    if (productMapping[primaryIntent] === 'all') {
      relevantProducts.add('zen-launcher');
      relevantProducts.add('meu-nutri');
      relevantProducts.add('investment-moment');
      relevantProducts.add('health-wellbeing');
    } else {
      relevantProducts.add(productMapping[primaryIntent]);
    }
    
    // Adicionar produtos das intenções secundárias
    secondaryIntents.forEach(intent => {
      if (productMapping[intent] && productMapping[intent] !== 'all') {
        relevantProducts.add(productMapping[intent]);
      }
    });
    
    return Array.from(relevantProducts);
  }

  /**
   * Coleta contexto holístico do usuário de todos os produtos relevantes
   * @param relevantProducts Produtos relevantes para a consulta
   * @private
   */
  private async collectUserContext(relevantProducts: string[]): Promise<any> {
    const contextPromises = relevantProducts.map(async (productId) => {
      const integration = this.productIntegrations.get(productId);
      if (!integration) return null;
      
      return {
        productId,
        context: await integration.getUserContext()
      };
    });
    
    const contexts = await Promise.all(contextPromises);
    const userProfile = await this.userProfile.getFullProfile();
    
    return {
      profile: userProfile,
      productContexts: contexts.filter(Boolean)
    };
  }

  /**
   * Consulta os agentes especialistas dos produtos relevantes
   * @param query Consulta do usuário
   * @param userIntent Intenção do usuário
   * @param relevantProducts Produtos relevantes
   * @param userContext Contexto do usuário
   * @private
   */
  private async consultSpecialistAgents(
    query: string,
    userIntent: any,
    relevantProducts: string[],
    userContext: any
  ): Promise<any[]> {
    const consultPromises = relevantProducts.map(async (productId) => {
      const integration = this.productIntegrations.get(productId);
      if (!integration) return null;
      
      // Determinar quais agentes consultar dentro do produto
      const agentsToConsult = integration.determineRelevantAgents(userIntent);
      
      // Consultar cada agente relevante
      const agentPromises = agentsToConsult.map(agentId => 
        integration.consultAgent(agentId, query, userContext)
      );
      
      const agentResponses = await Promise.all(agentPromises);
      
      return {
        productId,
        responses: agentResponses
      };
    });
    
    return (await Promise.all(consultPromises)).filter(Boolean);
  }

  /**
   * Sintetiza uma resposta unificada com base nas respostas dos agentes especializados
   * @param query Consulta original do usuário
   * @param agentResponses Respostas dos agentes especializados
   * @param userContext Contexto do usuário
   * @private
   */
  private async synthesizeResponse(
    query: string,
    agentResponses: any[],
    userContext: any
  ): Promise<any> {
    const prompt = renderPromptTemplate(metaAgentPrompts.responseSynthesis, {
      query,
      agentResponses: JSON.stringify(agentResponses),
      userContext: JSON.stringify(userContext)
    });
    
    const response = await this.llm.complete(prompt);
    return JSON.parse(response.trim());
  }

  /**
   * Atualiza o contexto do usuário com base na interação atual
   * @param query Consulta do usuário
   * @param response Resposta gerada
   * @param userIntent Intenção do usuário
   * @private
   */
  private async updateUserContext(
    query: string,
    response: any,
    userIntent: any
  ): Promise<void> {
    // Registrar a interação na memória
    await this.memory.saveInteraction({
      input: { query, intent: userIntent },
      output: response
    });
    
    // Atualizar perfil do usuário
    await this.userProfile.updateFromInteraction(query, response, userIntent);
    
    // Propagar alterações de contexto para produtos relevantes
    for (const [productId, integration] of this.productIntegrations.entries()) {
      if (response.productUpdates && response.productUpdates[productId]) {
        await integration.updateContext(response.productUpdates[productId]);
      }
    }
  }
}
