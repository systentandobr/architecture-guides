// src/stories/ChatbotCollector.stories.tsx
import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ChatbotCollector } from '../components/chatbot-collector/ChatbotCollector';
import { DataSchema } from '../components/chatbot-collector/types';

export default {
  title: 'Components/ChatbotCollector',
  component: ChatbotCollector,
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#121212' },
        { name: 'light', value: '#ffffff' },
      ],
    },
  },
  argTypes: {
    agentType: {
      control: {
        type: 'select',
        options: ['health', 'nutrition', 'finance', 'productivity'],
      },
      description: 'Tipo de agente especialista',
      defaultValue: 'health',
    },
    flowId: {
      control: 'text',
      description: 'Identificador único do fluxo',
      defaultValue: 'demo-flow',
    },
    welcomeMessage: {
      control: 'text',
      description: 'Mensagem de boas-vindas personalizada',
    },
    onComplete: { action: 'onComplete' },
  },
} as Meta;

const Template: Story = (args) => {
  // Schemas específicos para cada tipo de agente
  const schemas = {
    health: {
      age: {
        type: 'number',
        required: true,
        description: 'Idade do usuário',
      },
      weight: {
        type: 'number',
        required: true,
        description: 'Peso em kg',
      },
      height: {
        type: 'number',
        required: true,
        description: 'Altura em cm',
      },
      exerciseFrequency: {
        type: 'string',
        required: true,
        description: 'Frequência de exercícios',
      },
      sleepHours: {
        type: 'number',
        required: false,
        description: 'Horas de sono por noite',
      },
      healthGoals: {
        type: 'array',
        required: true,
        description: 'Objetivos de saúde',
      },
    },
    nutrition: {
      dietType: {
        type: 'string',
        required: true,
        description: 'Tipo de dieta',
      },
      allergies: {
        type: 'array',
        required: true,
        description: 'Alergias alimentares',
      },
      mealsPerDay: {
        type: 'number',
        required: true,
        description: 'Número de refeições por dia',
      },
      waterConsumption: {
        type: 'string',
        required: true,
        description: 'Consumo diário de água',
      },
      preferredFoods: {
        type: 'array',
        required: false,
        description: 'Alimentos preferidos',
      },
    },
    finance: {
      income: {
        type: 'string',
        required: true,
        description: 'Faixa de renda mensal',
      },
      savingsGoal: {
        type: 'string',
        required: true,
        description: 'Objetivo de poupança',
      },
      riskTolerance: {
        type: 'string',
        required: true,
        description: 'Tolerância a riscos',
      },
      investmentExperience: {
        type: 'string',
        required: true,
        description: 'Experiência com investimentos',
      },
      retirementAge: {
        type: 'number',
        required: false,
        description: 'Idade planejada para aposentadoria',
      },
    },
    productivity: {
      workStyle: {
        type: 'string',
        required: true,
        description: 'Estilo de trabalho',
      },
      mainChallenges: {
        type: 'array',
        required: true,
        description: 'Principais desafios de produtividade',
      },
      productivePeriod: {
        type: 'string',
        required: true,
        description: 'Período mais produtivo do dia',
      },
      toolsUsed: {
        type: 'array',
        required: false,
        description: 'Ferramentas de produtividade utilizadas',
      },
      workSchedule: {
        type: 'string',
        required: true,
        description: 'Horário de trabalho',
      },
    },
  };

  // Selecionando schema de acordo com o tipo de agente
  const dataSchema = schemas[args.agentType] as DataSchema;

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto' }}>
      <ChatbotCollector
        {...args}
        dataSchema={dataSchema}
      />
    </div>
  );
};

export const HealthAgent = Template.bind({});
HealthAgent.args = {
  agentType: 'health',
  flowId: 'health-assessment',
  welcomeMessage: 'Olá! Vou ajudar a coletar algumas informações sobre sua saúde para personalizar sua experiência. Como está se sentindo hoje?',
};

export const NutritionAgent = Template.bind({});
NutritionAgent.args = {
  agentType: 'nutrition',
  flowId: 'nutrition-assessment',
  welcomeMessage: 'Olá! Sou seu nutricionista virtual. Vamos conversar sobre seus hábitos alimentares para criar um plano nutricional personalizado?',
};

export const FinanceAgent = Template.bind({});
FinanceAgent.args = {
  agentType: 'finance',
  flowId: 'finance-assessment',
  welcomeMessage: 'Bem-vindo! Sou seu consultor financeiro virtual. Vamos conversar sobre seus objetivos financeiros para criar um plano personalizado?',
};

export const ProductivityAgent = Template.bind({});
ProductivityAgent.args = {
  agentType: 'productivity',
  flowId: 'productivity-assessment',
  welcomeMessage: 'Olá! Sou seu coach de produtividade. Vamos entender sua rotina atual para encontrar oportunidades de melhoria?',
};
