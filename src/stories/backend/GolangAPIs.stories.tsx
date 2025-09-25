// src/stories/backend/GolangAPIs.stories.tsx
import React from 'react';
// @ts-ignore
import type { Meta, StoryObj } from '@storybook/react';
import { BackendOverview } from './components/BackendOverview';
import { APIDocumentation } from './components/APIDocumentation';
import { BusinessRules } from './components/BusinessRules';
import { IntegrationFlow } from './components/IntegrationFlow';

const meta: Meta<typeof BackendOverview> = {
  title: 'Backend/Golang APIs',
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
      title="🔵 Golang APIs (Invest Tracker)"
      description="Documentação completa das APIs Golang do Monorepo, focadas em análise de mercado, estratégias de investimento e processamento de alta performance."
      technologies={[
        'Golang - Linguagem de alta performance',
        'Gin Framework - Framework web minimalista',
        'MongoDB - Banco de dados para dados financeiros',
        'Redis - Cache para dados em tempo real',
        'Binance API - Integração com mercado de criptomoedas',
        'Docker - Containerização e deploy'
      ]}
      responsibilities={[
        'Análise de dados financeiros em tempo real',
        'Estratégias de investimento automatizadas',
        'Integração com APIs externas (Binance)',
        'Processamento de alta performance',
        'Simulação de estratégias de trading',
        'Notificações de oportunidades de mercado'
      ]}
    />
  ),
};

export const InvestTrackerAPI: Story = {
  render: () => (
    <APIDocumentation
      title="📈 Invest Tracker API"
      description="Sistema completo de análise de investimentos e estratégias de trading"
      endpoints={[
        {
          method: 'GET',
          path: '/api/invest/analysis',
          description: 'Obter análise de mercado',
          parameters: ['symbol', 'timeframe', 'indicators'],
          response: 'MarketAnalysis'
        },
        {
          method: 'POST',
          path: '/api/invest/strategy',
          description: 'Criar nova estratégia',
          parameters: ['name', 'type', 'parameters', 'riskLevel'],
          response: 'StrategyCreated'
        },
        {
          method: 'GET',
          path: '/api/invest/opportunities',
          description: 'Obter oportunidades de investimento',
          parameters: ['market', 'riskLevel', 'timeframe'],
          response: 'OpportunitiesList'
        },
        {
          method: 'POST',
          path: '/api/invest/simulation',
          description: 'Simular estratégia de trading',
          parameters: ['strategyId', 'initialCapital', 'period'],
          response: 'SimulationResult'
        }
      ]}
      businessRules={[
        'Análises são atualizadas a cada 5 minutos',
        'Estratégias devem ter nível de risco definido',
        'Simulações são limitadas a 1 ano de dados',
        'Oportunidades são filtradas por perfil de risco',
        'Dados são validados antes do processamento'
      ]}
      integrations={[
        'Binance API - Dados de mercado em tempo real',
        'MongoDB - Persistência de estratégias e análises',
        'Redis - Cache de dados de mercado',
        'Notification Service - Alertas de oportunidades',
        'Analytics Engine - Processamento de dados'
      ]}
    />
  ),
};

export const MarketAnalysisAPI: Story = {
  render: () => (
    <APIDocumentation
      title="📊 Market Analysis API"
      description="Análise avançada de mercado com indicadores técnicos e fundamentais"
      endpoints={[
        {
          method: 'GET',
          path: '/api/market/indicators',
          description: 'Obter indicadores técnicos',
          parameters: ['symbol', 'timeframe', 'indicators'],
          response: 'TechnicalIndicators'
        },
        {
          method: 'GET',
          path: '/api/market/trend',
          description: 'Analisar tendência do mercado',
          parameters: ['symbol', 'period', 'confidence'],
          response: 'TrendAnalysis'
        },
        {
          method: 'POST',
          path: '/api/market/scan',
          description: 'Escanear mercado por oportunidades',
          parameters: ['filters', 'criteria', 'limit'],
          response: 'MarketScanResults'
        },
        {
          method: 'GET',
          path: '/api/market/volatility',
          description: 'Calcular volatilidade do ativo',
          parameters: ['symbol', 'period', 'method'],
          response: 'VolatilityData'
        }
      ]}
      businessRules={[
        'Indicadores são calculados em tempo real',
        'Tendências são baseadas em múltiplos timeframes',
        'Scans são limitados a 100 resultados',
        'Volatilidade é calculada usando GARCH',
        'Dados históricos são mantidos por 2 anos'
      ]}
      integrations={[
        'Binance API - Dados de preços e volume',
        'MongoDB - Histórico de análises',
        'Redis - Cache de indicadores',
        'ML Engine - Algoritmos de análise',
        'Alert Service - Notificações de alertas'
      ]}
    />
  ),
};

export const StrategySimulatorAPI: Story = {
  render: () => (
    <APIDocumentation
      title="🎯 Strategy Simulator API"
      description="Simulador de estratégias de trading com backtesting avançado"
      endpoints={[
        {
          method: 'POST',
          path: '/api/simulator/backtest',
          description: 'Executar backtest de estratégia',
          parameters: ['strategy', 'startDate', 'endDate', 'capital'],
          response: 'BacktestResult'
        },
        {
          method: 'GET',
          path: '/api/simulator/performance',
          description: 'Obter métricas de performance',
          parameters: ['simulationId', 'metrics'],
          response: 'PerformanceMetrics'
        },
        {
          method: 'POST',
          path: '/api/simulator/optimize',
          description: 'Otimizar parâmetros da estratégia',
          parameters: ['strategy', 'parameters', 'objective'],
          response: 'OptimizationResult'
        },
        {
          method: 'GET',
          path: '/api/simulator/risk',
          description: 'Analisar risco da estratégia',
          parameters: ['strategy', 'scenarios'],
          response: 'RiskAnalysis'
        }
      ]}
      businessRules={[
        'Backtests são limitados a 5 anos de dados',
        'Simulações são executadas em paralelo',
        'Otimizações são limitadas a 1000 iterações',
        'Análises de risco incluem stress testing',
        'Resultados são armazenados por 30 dias'
      ]}
      integrations={[
        'Historical Data Service - Dados históricos',
        'MongoDB - Resultados de simulações',
        'Redis - Cache de cálculos',
        'ML Engine - Algoritmos de otimização',
        'Risk Engine - Cálculos de risco'
      ]}
    />
  ),
};

export const GolangBusinessRules: Story = {
  render: () => (
    <BusinessRules
      title="📋 Regras de Negócio - Golang APIs"
      rules={[
        {
          category: 'Análise de Mercado',
          rules: [
            'Dados são atualizados a cada 5 minutos',
            'Indicadores são calculados em tempo real',
            'Tendências são baseadas em múltiplos timeframes',
            'Análises são validadas antes da publicação',
            'Cache é invalidado após 10 minutos'
          ]
        },
        {
          category: 'Estratégias de Investimento',
          rules: [
            'Estratégias devem ter nível de risco definido',
            'Parâmetros são validados antes da execução',
            'Simulações são limitadas a 5 anos de dados',
            'Otimizações são limitadas a 1000 iterações',
            'Resultados são armazenados por 30 dias'
          ]
        },
        {
          category: 'Integração com APIs Externas',
          rules: [
            'Rate limiting: 1200 requests/min para Binance',
            'Retry automático em caso de falha',
            'Timeout de 30 segundos para requests',
            'Dados são validados antes do armazenamento',
            'Logs são mantidos por 90 dias'
          ]
        },
        {
          category: 'Performance e Escalabilidade',
          rules: [
            'Processamento paralelo para análises',
            'Cache de dados por 10 minutos',
            'Compressão de dados históricos',
            'Limpeza automática de dados antigos',
            'Monitoramento de performance em tempo real'
          ]
        }
      ]}
    />
  ),
};

export const GolangIntegrationFlow: Story = {
  render: () => (
    <IntegrationFlow
      title="🔄 Fluxo de Integração - Golang APIs"
      description="Como as APIs Golang se integram com serviços externos e internos"
      flows={[
        {
          name: 'Fluxo de Análise de Mercado',
          steps: [
            'Coleta de dados da Binance API',
            'Validação e limpeza dos dados',
            'Cálculo de indicadores técnicos',
            'Análise de tendências e padrões',
            'Armazenamento no MongoDB',
            'Cache no Redis para acesso rápido'
          ],
          integrations: ['Binance API', 'MongoDB', 'Redis', 'ML Engine']
        },
        {
          name: 'Fluxo de Simulação de Estratégia',
          steps: [
            'Recebimento de parâmetros da estratégia',
            'Carregamento de dados históricos',
            'Execução da simulação em paralelo',
            'Cálculo de métricas de performance',
            'Análise de risco e drawdown',
            'Armazenamento dos resultados'
          ],
          integrations: ['Historical Data Service', 'MongoDB', 'Risk Engine', 'Analytics Engine']
        },
        {
          name: 'Fluxo de Notificações',
          steps: [
            'Detecção de oportunidades de mercado',
            'Filtragem por perfil de risco',
            'Cálculo de confiança da oportunidade',
            'Envio de notificação ao usuário',
            'Log da notificação para auditoria'
          ],
          integrations: ['Alert Service', 'Notification Service', 'MongoDB', 'User Service']
        }
      ]}
    />
  ),
};
