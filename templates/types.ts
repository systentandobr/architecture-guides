// src/components/chatbot-collector/types.ts

/**
 * Enumeração de papéis de mensagem no chat
 */
export enum MessageRole {
  USER = 'user',
  ASSISTANT = 'assistant',
  SYSTEM = 'system'
}

/**
 * Interface que define a estrutura de uma mensagem no chat
 */
export interface ChatMessage {
  /**
   * Identificador único da mensagem
   */
  id: string;
  
  /**
   * Papel do emissor da mensagem (usuário, assistente, sistema)
   */
  role: MessageRole;
  
  /**
   * Conteúdo textual da mensagem
   */
  content: string;
  
  /**
   * Timestamp da mensagem
   */
  timestamp: Date;
  
  /**
   * Sugestões de prompts para o usuário (opcional)
   */
  suggestedPrompts?: string[];
}

/**
 * Interface que define o esquema de dados a serem coletados
 * Cada propriedade representa um campo a ser coletado
 */
export interface DataSchema {
  [key: string]: {
    /**
     * Tipo de dado a ser coletado
     */
    type: 'string' | 'number' | 'boolean' | 'date' | 'object' | 'array';
    
    /**
     * Indica se o campo é obrigatório
     */
    required: boolean;
    
    /**
     * Descrição do campo para uso do LLM
     */
    description: string;
    
    /**
     * Função ou regex para validação do dado coletado (opcional)
     */
    validation?: RegExp | ((value: any) => boolean);
    
    /**
     * Dependências deste campo com outros campos (opcional)
     */
    dependsOn?: string[];
  }
}

/**
 * Interface para componente de mensagem no chat
 */
export interface ChatMessageProps {
  /**
   * Mensagem a ser renderizada
   */
  message: ChatMessage;
  
  /**
   * Callback para quando um prompt sugerido é clicado
   */
  onSuggestedPromptClick?: (content: string) => void;
}

/**
 * Interface para componente de entrada no chat
 */
export interface ChatInputProps {
  /**
   * Callback para quando uma mensagem é enviada
   */
  onSendMessage: (content: string) => void;
  
  /**
   * Indica se o componente está desabilitado
   */
  disabled?: boolean;
  
  /**
   * Indica se está carregando/processando
   */
  loading?: boolean;
  
  /**
   * Placeholder para o campo de texto
   */
  placeholder?: string;
}

/**
 * Interface para o hook de agente de IA
 */
export interface AIAgentHook {
  /**
   * Obtém resposta do LLM para uma mensagem
   */
  getResponse: (
    content: string, 
    context: {
      previousMessages: ChatMessage[];
      collectedData: Record<string, any>;
      dataSchema: DataSchema;
      flowId: string;
      initialContext?: Record<string, any>;
    }
  ) => Promise<{ 
    message: string;
    metadata?: any;
  }>;
  
  /**
   * Extrai dados estruturados de uma conversa
   */
  extractData: (
    messages: ChatMessage[],
    schema: DataSchema
  ) => Promise<Record<string, any>>;
  
  /**
   * Gera prompts sugeridos com base nos dados coletados
   */
  getSuggestedPrompts: (
    collectedData: Record<string, any>,
    schema: DataSchema
  ) => string[];
  
  /**
   * Determina o progresso de coleta com base nos dados e schema
   */
  determineProgress: (
    collectedData: Record<string, any>,
    schema: DataSchema
  ) => number;
}
