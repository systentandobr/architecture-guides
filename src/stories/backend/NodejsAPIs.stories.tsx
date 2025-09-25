// src/stories/backend/NodejsAPIs.stories.tsx
import React from 'react';
// @ts-ignore
import type { Meta, StoryObj } from '@storybook/react';
import { BackendOverview } from './components/BackendOverview';
import { APIDocumentation } from './components/APIDocumentation';
import { BusinessRules } from './components/BusinessRules';
import { IntegrationFlow } from './components/IntegrationFlow';

const meta: Meta<typeof BackendOverview> = {
  title: 'Backend/Node.js APIs',
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
      title="🟢 Node.js APIs (NestJS)"
      description="Documentação completa das APIs Node.js do Monorepo, incluindo regras de negócio, fluxos de integração e responsabilidades."
      technologies={[
        'NestJS Framework - Arquitetura modular e escalável',
        'TypeScript - Tipagem estática e desenvolvimento seguro',
        'MongoDB - Banco de dados NoSQL principal',
        'Redis - Cache e gerenciamento de sessões',
        'JWT - Autenticação e autorização',
        'Swagger - Documentação automática de APIs'
      ]}
      responsibilities={[
        'APIs RESTful para frontend e mobile',
        'Autenticação e autorização de usuários',
        'Processamento de pagamentos e transações',
        'Gerenciamento de produtos e catálogo',
        'Sistema de gamificação e analytics',
        'Assistente educacional com IA'
      ]}
    />
  ),
};

export const LifeTrackerAPI: Story = {
  render: () => (
    <APIDocumentation
      title="📊 Life Tracker API"
      description="Sistema completo de rastreamento de vida, produtividade e gamificação"
      endpoints={[
        {
          method: 'GET',
          path: '/api/life-tracker/analytics',
          description: 'Obter analytics de produtividade',
          parameters: ['userId', 'dateRange', 'metrics'],
          response: 'AnalyticsData'
        },
        {
          method: 'POST',
          path: '/api/life-tracker/habits',
          description: 'Criar novo hábito',
          parameters: ['name', 'frequency', 'target', 'category'],
          response: 'HabitCreated'
        },
        {
          method: 'PUT',
          path: '/api/life-tracker/goals/{id}',
          description: 'Atualizar meta',
          parameters: ['id', 'progress', 'status'],
          response: 'GoalUpdated'
        },
        {
          method: 'GET',
          path: '/api/life-tracker/gamification/achievements',
          description: 'Obter conquistas do usuário',
          parameters: ['userId'],
          response: 'AchievementsList'
        }
      ]}
      businessRules={[
        'Usuários podem criar até 10 hábitos simultâneos',
        'Metas devem ter prazo definido (máximo 1 ano)',
        'Sistema de pontos baseado em completude de tarefas',
        'Notificações automáticas para lembretes',
        'Analytics atualizados em tempo real'
      ]}
      integrations={[
        'MongoDB - Persistência de dados',
        'Redis - Cache de sessões',
        'JWT Service - Autenticação',
        'Notification Service - Alertas',
        'Analytics Engine - Processamento de dados'
      ]}
    />
  ),
};

export const PaymentAPI: Story = {
  render: () => (
    <APIDocumentation
      title="💳 Payment API"
      description="Sistema de processamento de pagamentos e transações financeiras"
      endpoints={[
        {
          method: 'POST',
          path: '/api/payments/process',
          description: 'Processar pagamento',
          parameters: ['amount', 'currency', 'paymentMethod', 'customerId'],
          response: 'PaymentResult'
        },
        {
          method: 'GET',
          path: '/api/payments/transactions',
          description: 'Listar transações do usuário',
          parameters: ['userId', 'dateRange', 'status'],
          response: 'TransactionsList'
        },
        {
          method: 'POST',
          path: '/api/payments/refund',
          description: 'Processar reembolso',
          parameters: ['transactionId', 'amount', 'reason'],
          response: 'RefundResult'
        },
        {
          method: 'GET',
          path: '/api/payments/balance',
          description: 'Obter saldo da conta',
          parameters: ['userId'],
          response: 'AccountBalance'
        }
      ]}
      businessRules={[
        'Pagamentos acima de R$ 1.000 requerem autenticação 2FA',
        'Reembolsos só são permitidos em até 30 dias',
        'Taxa de processamento de 2.9% + R$ 0.39',
        'Limite diário de R$ 10.000 por usuário',
        'Transações são criptografadas e auditadas'
      ]}
      integrations={[
        'Stripe - Gateway de pagamento',
        'MongoDB - Histórico de transações',
        'Redis - Cache de sessões',
        'Audit Service - Log de transações',
        'Notification Service - Confirmações'
      ]}
    />
  ),
};

export const ProductsAPI: Story = {
  render: () => (
    <APIDocumentation
      title="📦 Products API"
      description="Sistema de gerenciamento de produtos e catálogo"
      endpoints={[
        {
          method: 'GET',
          path: '/api/products',
          description: 'Listar produtos',
          parameters: ['category', 'priceRange', 'availability', 'sort'],
          response: 'ProductsList'
        },
        {
          method: 'POST',
          path: '/api/products',
          description: 'Criar novo produto',
          parameters: ['name', 'description', 'price', 'category', 'inventory'],
          response: 'ProductCreated'
        },
        {
          method: 'PUT',
          path: '/api/products/{id}',
          description: 'Atualizar produto',
          parameters: ['id', 'name', 'description', 'price', 'inventory'],
          response: 'ProductUpdated'
        },
        {
          method: 'GET',
          path: '/api/products/{id}/reviews',
          description: 'Obter avaliações do produto',
          parameters: ['id', 'rating', 'dateRange'],
          response: 'ProductReviews'
        }
      ]}
      businessRules={[
        'Produtos devem ter preço mínimo de R$ 1.00',
        'Estoque não pode ser negativo',
        'Avaliações são moderadas automaticamente',
        'Produtos inativos não aparecem na busca',
        'Categorias são hierárquicas (máximo 3 níveis)'
      ]}
      integrations={[
        'MongoDB - Catálogo de produtos',
        'Elasticsearch - Busca e filtros',
        'Image Service - Upload de imagens',
        'Review Service - Sistema de avaliações',
        'Inventory Service - Controle de estoque'
      ]}
    />
  ),
};

export const StudyAssistantAPI: Story = {
  render: () => (
    <APIDocumentation
      title="🎓 Study Assistant API"
      description="Assistente educacional com IA para estudos e concursos"
      endpoints={[
        {
          method: 'POST',
          path: '/api/study/plan',
          description: 'Criar plano de estudos',
          parameters: ['subject', 'level', 'deadline', 'availableTime'],
          response: 'StudyPlan'
        },
        {
          method: 'GET',
          path: '/api/study/questions',
          description: 'Obter questões de estudo',
          parameters: ['subject', 'difficulty', 'type', 'count'],
          response: 'QuestionsList'
        },
        {
          method: 'POST',
          path: '/api/study/simulation',
          description: 'Iniciar simulação de prova',
          parameters: ['examType', 'duration', 'questions'],
          response: 'SimulationStarted'
        },
        {
          method: 'GET',
          path: '/api/study/progress',
          description: 'Obter progresso do estudante',
          parameters: ['userId', 'subject', 'period'],
          response: 'StudyProgress'
        }
      ]}
      businessRules={[
        'Planos de estudo são personalizados por IA',
        'Questões são selecionadas por algoritmo adaptativo',
        'Simulações têm tempo limitado e são cronometradas',
        'Progresso é calculado baseado em acertos e tempo',
        'Recomendações são atualizadas diariamente'
      ]}
      integrations={[
        'AI Service - Geração de planos',
        'Question Bank - Base de questões',
        'Progress Tracker - Acompanhamento',
        'Recommendation Engine - Sugestões',
        'Analytics Service - Métricas de aprendizado'
      ]}
    />
  ),
};

export const NodejsBusinessRules: Story = {
  render: () => (
    <BusinessRules
      title="📋 Regras de Negócio - Node.js APIs"
      rules={[
        {
          category: 'Autenticação e Segurança',
          rules: [
            'Tokens JWT expiram em 24 horas',
            'Refresh tokens são válidos por 30 dias',
            'Tentativas de login são limitadas a 5 por minuto',
            'Senhas devem ter pelo menos 8 caracteres',
            'Autenticação 2FA é obrigatória para pagamentos'
          ]
        },
        {
          category: 'Limites e Quotas',
          rules: [
            'Rate limiting: 100 requests/min por usuário',
            'Upload de arquivos: máximo 10MB',
            'Hábitos simultâneos: máximo 10 por usuário',
            'Metas ativas: máximo 5 por usuário',
            'Transações diárias: máximo R$ 10.000'
          ]
        },
        {
          category: 'Validação de Dados',
          rules: [
            'Emails devem ser únicos no sistema',
            'CPF deve ser válido e único',
            'Datas não podem ser futuras para criação',
            'Preços devem ser positivos',
            'Categorias devem existir na base'
          ]
        },
        {
          category: 'Processamento',
          rules: [
            'Pagamentos são processados em até 24h',
            'Notificações são enviadas em tempo real',
            'Analytics são atualizados a cada hora',
            'Backups são realizados diariamente',
            'Logs são mantidos por 1 ano'
          ]
        }
      ]}
    />
  ),
};

export const NodejsIntegrationFlow: Story = {
  render: () => (
    <IntegrationFlow
      title="🔄 Fluxo de Integração - Node.js APIs"
      description="Como as APIs Node.js se integram com outros serviços"
      flows={[
        {
          name: 'Fluxo de Autenticação',
          steps: [
            'Cliente envia credenciais',
            'API valida dados no MongoDB',
            'JWT é gerado e retornado',
            'Cliente armazena token',
            'Requests subsequentes incluem token'
          ],
          integrations: ['MongoDB', 'JWT Service', 'Redis Cache']
        },
        {
          name: 'Fluxo de Pagamento',
          steps: [
            'Cliente inicia pagamento',
            'API valida dados e limites',
            'Stripe processa transação',
            'Resultado é salvo no MongoDB',
            'Notificação é enviada ao usuário'
          ],
          integrations: ['Stripe', 'MongoDB', 'Notification Service']
        },
        {
          name: 'Fluxo de Analytics',
          steps: [
            'Dados são coletados das APIs',
            'Processamento em tempo real',
            'Métricas são calculadas',
            'Resultados são armazenados',
            'Dashboard é atualizado'
          ],
          integrations: ['MongoDB', 'Analytics Engine', 'Redis Cache']
        }
      ]}
    />
  ),
};
