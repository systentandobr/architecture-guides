import React from 'react';
import { fn } from '@storybook/test';
import { AgentResponseDemo } from '../../components/demo/AgentResponseDemo';

export default {
  title: 'AI/AgentResponses',
  component: AgentResponseDemo,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    onFeedback: { action: 'feedbackReceived' },
  },
  args: {
    onFeedback: fn()
  },
};

export const HealthAgentDemo = {
  args: {
    agentType: 'health',
    query: 'Como posso melhorar minha qualidade de sono?',
    context: {
      userProfile: {
        age: 35,
        sleepHours: 6,
        screenTimeBeforeBed: 2,
        exerciseFrequency: 'rare'
      }
    }
  }
};

export const MetaAgentDemo = {
  args: {
    agentType: 'meta',
    query: 'Como meus hábitos alimentares podem afetar minha produtividade?',
    context: {
      relevantProducts: ['zen-launcher', 'meu-nutri'],
      userProfile: {
        // Dados do perfil para demonstração
      }
    }
  }
};