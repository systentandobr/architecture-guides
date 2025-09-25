// src/stories/backend/PythonAPIs.stories.tsx
import React from 'react';
// @ts-ignore
import type { Meta, StoryObj } from '@storybook/react';
import { BackendOverview } from './components/BackendOverview';
import { APIDocumentation } from './components/APIDocumentation';
import { BusinessRules } from './components/BusinessRules';
import { IntegrationFlow } from './components/IntegrationFlow';

const meta: Meta<typeof BackendOverview> = {
  title: 'Backend/Python APIs',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BackendOverview>;

export const Overview: Story = {
  render: () => (
    <BackendOverview
      title="🐍 Python APIs (Life Tracker AI)"
      description="Documentação completa das APIs Python do Monorepo, focadas em inteligência artificial, machine learning e agentes de onboarding."
      technologies={[
        'Python 3.10+ - Linguagem principal',
        'FastAPI - Framework web moderno',
        'LangChain - Framework para LLMs',
        'MongoDB - Banco de dados para dados de usuários',
        'Redis - Cache para sessões de IA',
        'Docker - Containerização e deploy'
      ]}
      responsibilities={[
        'Agentes de IA para onboarding personalizado',
        'Machine learning e análise preditiva',
        'Processamento de linguagem natural',
        'Recomendações personalizadas',
        'Análise de comportamento do usuário',
        'Geração de insights inteligentes'
      ]}
    />
  ),
};

export const LifeTrackerAIAgent: Story = {
  render: () => (
    <APIDocumentation
      title="🤖 Life Tracker AI Agent"
      description="Agente de IA para onboarding e recomendações personalizadas"
      endpoints={[
        {
          method: 'POST',
          path: '/api/ai/onboarding',
          description: 'Iniciar processo de onboarding',
          parameters: ['userId', 'preferences', 'goals', 'profile'],
          response: 'OnboardingPlan'
        },
        {
          method: 'GET',
          path: '/api/ai/recommendations',
          description: 'Obter recomendações personalizadas',
          parameters: ['userId', 'category', 'limit'],
          response: 'RecommendationsList'
        },
        {
          method: 'POST',
          path: '/api/ai/analyze',
          description: 'Analisar comportamento do usuário',
          parameters: ['userId', 'data', 'timeframe'],
          response: 'BehaviorAnalysis'
        },
        {
          method: 'GET',
          path: '/api/ai/insights',
          description: 'Gerar insights inteligentes',
          parameters: ['userId', 'type', 'period'],
          response: 'InsightsData'
        }
      ]}
      businessRules={[
        'Onboarding é personalizado por perfil do usuário',
        'Recomendações são baseadas em machine learning',
        'Análises são processadas em tempo real',
        'Insights são gerados diariamente',
        'Dados são criptografados e anonimizados'
      ]}
      integrations={[
        'LangChain - Framework para LLMs',
        'MongoDB - Dados de usuários e perfis',
        'Redis - Cache de sessões de IA',
        'ML Engine - Modelos de machine learning',
        'Analytics Service - Métricas de comportamento'
      ]}
    />
  ),
};

export const AgentOnboardingAPI: Story = {
  render: () => (
    <APIDocumentation
      title="🎯 Agent Onboarding API"
      description="Sistema de onboarding inteligente com agentes de IA especializados"
      endpoints={[
        {
          method: 'POST',
          path: '/api/agent/start',
          description: 'Iniciar agente de onboarding',
          parameters: ['userId', 'agentType', 'context'],
          response: 'AgentStarted'
        },
        {
          method: 'POST',
          path: '/api/agent/interact',
          description: 'Interagir com o agente',
          parameters: ['sessionId', 'message', 'context'],
          response: 'AgentResponse'
        },
        {
          method: 'GET',
          path: '/api/agent/status',
          description: 'Obter status do agente',
          parameters: ['sessionId'],
          response: 'AgentStatus'
        },
        {
          method: 'POST',
          path: '/api/agent/complete',
          description: 'Finalizar onboarding',
          parameters: ['sessionId', 'feedback'],
          response: 'OnboardingCompleted'
        }
      ]}
      businessRules={[
        'Agentes são especializados por domínio',
        'Sessões são mantidas por 24 horas',
        'Interações são processadas em tempo real',
        'Feedback é usado para melhorar o agente',
        'Dados são armazenados de forma segura'
      ]}
      integrations={[
        'LangChain - Processamento de linguagem',
        'MongoDB - Sessões e histórico',
        'Redis - Cache de contexto',
        'ML Engine - Modelos de conversação',
        'Analytics Service - Métricas de engajamento'
      ]}
    />
  ),
};

export const DataAnalysisAPI: Story = {
  render: () => (
    <APIDocumentation
      title="📊 Data Analysis API"
      description="Análise avançada de dados com machine learning e insights preditivos"
      endpoints={[
        {
          method: 'POST',
          path: '/api/analysis/predict',
          description: 'Fazer predições baseadas em dados',
          parameters: ['model', 'data', 'features'],
          response: 'PredictionResult'
        },
        {
          method: 'GET',
          path: '/api/analysis/patterns',
          description: 'Detectar padrões nos dados',
          parameters: ['dataset', 'algorithm', 'threshold'],
          response: 'PatternAnalysis'
        },
        {
          method: 'POST',
          path: '/api/analysis/cluster',
          description: 'Agrupar dados similares',
          parameters: ['data', 'algorithm', 'clusters'],
          response: 'ClusteringResult'
        },
        {
          method: 'GET',
          path: '/api/analysis/trends',
          description: 'Identificar tendências temporais',
          parameters: ['data', 'timeframe', 'granularity'],
          response: 'TrendAnalysis'
        }
      ]}
      businessRules={[
        'Modelos são treinados com dados históricos',
        'Predições são validadas antes da entrega',
        'Padrões são detectados usando algoritmos ML',
        'Clustering é otimizado para performance',
        'Tendências são calculadas em tempo real'
      ]}
      integrations={[
        'ML Engine - Modelos de machine learning',
        'MongoDB - Dados de treinamento',
        'Redis - Cache de resultados',
        'Analytics Engine - Processamento de dados',
        'Visualization Service - Gráficos e dashboards'
      ]}
    />
  ),
};

export const PythonBusinessRules: Story = {
  render: () => (
    <BusinessRules
      title="📋 Regras de Negócio - Python APIs"
      rules={[
        {
          category: 'Inteligência Artificial',
          rules: [
            'Modelos são atualizados semanalmente',
            'Predições são validadas antes da entrega',
            'Agentes são especializados por domínio',
            'Sessões de IA são mantidas por 24 horas',
            'Dados são anonimizados para privacidade'
          ]
        },
        {
          category: 'Machine Learning',
          rules: [
            'Modelos são treinados com dados históricos',
            'Validação cruzada é obrigatória',
            'Overfitting é monitorado e prevenido',
            'Modelos são versionados e auditados',
            'Performance é monitorada continuamente'
          ]
        },
        {
          category: 'Processamento de Dados',
          rules: [
            'Dados são validados antes do processamento',
            'Limpeza de dados é automática',
            'Outliers são detectados e tratados',
            'Dados são criptografados em trânsito',
            'Backup é realizado diariamente'
          ]
        },
        {
          category: 'Privacidade e Segurança',
          rules: [
            'Dados pessoais são anonimizados',
            'Criptografia end-to-end para comunicações',
            'Logs são mantidos por 90 dias',
            'Acesso é controlado por roles',
            'Auditoria é realizada mensalmente'
          ]
        }
      ]}
    />
  ),
};

export const PythonIntegrationFlow: Story = {
  render: () => (
    <IntegrationFlow
      title="🔄 Fluxo de Integração - Python APIs"
      description="Como as APIs Python se integram com serviços de IA e machine learning"
      flows={[
        {
          name: 'Fluxo de Onboarding com IA',
          steps: [
            'Usuário inicia processo de onboarding',
            'Agente de IA analisa perfil do usuário',
            'Sistema gera plano personalizado',
            'Recomendações são baseadas em ML',
            'Feedback é coletado e processado',
            'Modelo é atualizado com novos dados'
          ],
          integrations: ['LangChain', 'MongoDB', 'ML Engine', 'Analytics Service']
        },
        {
          name: 'Fluxo de Análise Preditiva',
          steps: [
            'Dados são coletados de múltiplas fontes',
            'Limpeza e validação automática',
            'Modelos ML são aplicados',
            'Predições são geradas',
            'Resultados são validados',
            'Insights são entregues ao usuário'
          ],
          integrations: ['ML Engine', 'MongoDB', 'Redis', 'Analytics Engine']
        },
        {
          name: 'Fluxo de Recomendações',
          steps: [
            'Comportamento do usuário é analisado',
            'Padrões são identificados por ML',
            'Recomendações são geradas',
            'Relevância é calculada',
            'Resultados são filtrados',
            'Recomendações são entregues'
          ],
          integrations: ['ML Engine', 'Analytics Service', 'MongoDB', 'Recommendation Engine']
        }
      ]}
    />
  ),
};
