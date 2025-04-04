export enum MessageRole {
  USER = 'user',
  ASSISTANT = 'assistant',
  SYSTEM = 'system',
  ERROR = 'error'
}

export interface Message {
  id: string;
  role: MessageRole;
  content: string;
  timestamp: Date;
  suggestedPrompts?: string[];
}

export interface ChatMessageProps {
  message: Message;
  onSuggestedPromptClick?: (prompt: string) => void;
}

// Definição do Schema para validar e coletar dados
export interface DataField {
  type: 'string' | 'number' | 'boolean' | 'date';
  required: boolean;
  description: string;
  options?: string[];
  min?: number;
  max?: number;
  pattern?: string;
}

export interface DataSchema {
  [key: string]: DataField;
}
