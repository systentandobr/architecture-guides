import React from 'react';
import { fn } from '@storybook/test';
import { ChatbotMessage } from '../../components/chatbot-collector/ChatbotMessage';
import { MessageRole } from '../../components/chatbot-collector/types';

export default {
  title: 'Chatbot/ChatMessage',
  component: ChatbotMessage,
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'dark',
    },
  },
  argTypes: {
    message: { control: 'object' },
    onSuggestedPromptClick: { action: 'suggestedPromptClicked' },
  },
  args: {
    onSuggestedPromptClick: fn()
  },
};

export const UserMessage = {
  args: {
    message: {
      id: 'user-1',
      role: MessageRole.USER,
      content: 'Olá, gostaria de saber mais sobre como melhorar minha produtividade.',
      timestamp: new Date(),
    },
  },
};

export const AssistantMessage = {
  args: {
    message: {
      id: 'assistant-1',
      role: MessageRole.ASSISTANT,
      content: 'Olá! Posso ajudar com dicas de produtividade. Para começar, você poderia me contar um pouco sobre sua rotina atual?',
      timestamp: new Date(),
    },
  },
};

export const AssistantMessageWithSuggestions = {
  args: {
    message: {
      id: 'assistant-2',
      role: MessageRole.ASSISTANT,
      content: 'Para melhorar sua produtividade, precisamos entender alguns aspectos da sua rotina. Você pode me contar mais sobre:',
      timestamp: new Date(),
      suggestedPrompts: [
        'Como é minha rotina de trabalho',
        'Quais são minhas maiores distrações',
        'Em que horário me sinto mais produtivo'
      ],
    },
  },
};

export const LongMessage = {
  args: {
    message: {
      id: 'assistant-3',
      role: MessageRole.ASSISTANT,
      content: `Uma boa produtividade está relacionada a diversos fatores, como organização, foco, energia e motivação.

Alguns aspectos importantes a considerar:
- Rotina bem estruturada
- Pausas regulares
- Ambiente de trabalho adequado
- Boa alimentação e hidratação
- Sono de qualidade

Poderia me contar um pouco mais sobre qual desses aspectos você sente que precisa de mais atenção?`,
      timestamp: new Date(),
    },
  },
};

export const ErrorMessage = {
  args: {
    message: {
      id: 'assistant-error',
      role: MessageRole.ASSISTANT,
      content: 'Desculpe, tive um problema ao processar sua solicitação. Poderia tentar novamente?',
      timestamp: new Date(),
    },
  },
};