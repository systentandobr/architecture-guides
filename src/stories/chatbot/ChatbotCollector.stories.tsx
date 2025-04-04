import React from 'react';
import { fn } from '@storybook/test';
import { ChatbotCollector } from '../../components/chatbot-collector/ChatbotCollector';
import { DataSchema } from '../../components/chatbot-collector/types';

export default {
  title: 'Chatbot/ChatbotCollector',
  component: ChatbotCollector,
  parameters: {
    layout: 'padded',
    // Incluir link para o design no Figma
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/...',
    },
  },
  argTypes: {
    agentType: {
      control: {
        type: 'select',
        options: ['health', 'nutrition', 'finance', 'productivity'],
      },
    },
    onDataSubmit: { action: 'dataSubmitted' },
    onMessageSend: { action: 'messageSent' },
  },
  args: {
    onDataSubmit: fn(),
    onMessageSend: fn(),
  },
};

// Schema exemplo para o componente
const schema: DataSchema = {
  name: {
    type: 'string',
    required: true,
    description: 'Nome do usuário',
  },
  age: {
    type: 'number',
    required: true,
    description: 'Idade do usuário',
  },
  // Outros campos específicos do domínio
};

// Variantes do componente

export const HealthAgentExample = {
  args: {
    agentType: 'health',
    flowId: 'health-assessment',
    welcomeMessage: 'Olá! Vou ajudar a coletar algumas informações sobre sua saúde. Como está se sentindo hoje?',
    dataSchema: schema,
  },
  render: (args) => (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <ChatbotCollector {...args} />
    </div>
  ),
};

export const FinanceAgentExample = {
  args: {
    agentType: 'finance',
    flowId: 'finance-assessment',
    welcomeMessage: 'Olá! Vamos falar sobre seus objetivos financeiros para personalizar sua experiência.',
    dataSchema: schema,
  },
  render: (args) => (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <ChatbotCollector {...args} />
    </div>
  ),
};

export const ProductivityAgentExample = {
  args: {
    agentType: 'productivity',
    flowId: 'productivity-flow',
    welcomeMessage: 'Vamos entender melhor sua produtividade.',
    dataSchema: schema,
  },
  render: (args) => (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <ChatbotCollector {...args} />
    </div>
  ),
};