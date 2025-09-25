// src/stories/backend/BackendOverview.stories.tsx
import React from 'react';
// @ts-ignore
import type { Meta, StoryObj } from '@storybook/react';
import { BackendOverview } from './components/BackendOverview';
import { TechnologyStack } from './components/TechnologyStack';
import { ArchitectureDiagram } from './components/ArchitectureDiagram';

const meta: Meta<typeof BackendOverview> = {
  title: 'Backend/Monorepo Overview',
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
      title="🏗️ Backend Monorepo Systentando"
      description="Documentação completa do ecossistema backend do Systentando, incluindo APIs, regras de negócio, diagramas de fluxo e integrações."
      technologies={[
        'Node.js (NestJS) - APIs RESTful e microserviços',
        'Golang - Invest Tracker com análise de mercado',
        'Python - Life Tracker com agentes de IA',
        'MongoDB - Banco de dados principal',
        'Redis - Cache e sessões',
        'Docker - Containerização',
        'Railway - Deploy e infraestrutura'
      ]}
      responsibilities={[
        'APIs RESTful para frontend e mobile',
        'Processamento de dados em tempo real',
        'Integração com serviços externos (Binance, APIs financeiras)',
        'Sistema de gamificação e analytics',
        'Agentes de IA para onboarding e recomendações',
        'Análise de mercado e estratégias de investimento'
      ]}
    />
  ),
};

export const TechnologyStackOverview: Story = {
  render: () => (
    <TechnologyStack
      title="🛠️ Stack Tecnológico"
      technologies={[
        {
          name: 'Node.js (NestJS)',
          description: 'Framework principal para APIs RESTful',
          color: '#68d391',
          borderColor: '#38a169',
          icon: '🟢',
          modules: [
            'life-tracker - Sistema de vida e produtividade',
            'sys-pagamentos - Processamento de pagamentos',
            'sys-produtos - Catálogo de produtos',
            'sys-assistente-estudos - Assistente educacional'
          ],
          responsibilities: [
            'APIs RESTful e GraphQL',
            'Autenticação e autorização',
            'Integração com bancos de dados',
            'Microserviços especializados'
          ]
        },
        {
          name: 'Golang',
          description: 'Linguagem para análise de mercado e performance',
          color: '#63b3ed',
          borderColor: '#3182ce',
          icon: '🔵',
          modules: [
            'invest-tracker - Análise de investimentos',
            'market-analysis - Análise de mercado',
            'strategy-simulator - Simulador de estratégias'
          ],
          responsibilities: [
            'Análise de dados financeiros em tempo real',
            'Estratégias de investimento automatizadas',
            'Integração com APIs externas (Binance)',
            'Processamento de alta performance'
          ]
        },
        {
          name: 'Python',
          description: 'Linguagem para IA e machine learning',
          color: '#f6ad55',
          borderColor: '#dd6b20',
          icon: '🐍',
          modules: [
            'life-tracker - Agentes de IA',
            'agent-onboarding - Onboarding inteligente',
            'data-analysis - Análise de dados'
          ],
          responsibilities: [
            'Agentes de IA para onboarding',
            'Machine learning e análise preditiva',
            'Processamento de linguagem natural',
            'Recomendações personalizadas'
          ]
        }
      ]}
    />
  ),
};

export const ArchitectureOverview: Story = {
  render: () => (
    <ArchitectureDiagram
      title="🏛️ Arquitetura do Sistema"
      description="Visão geral da arquitetura do backend Monorepo"
      layers={[
        {
          name: '🌐 API Gateway',
          description: 'Entrada única para todas as APIs',
          components: ['Nginx', 'Load Balancer', 'Rate Limiting'],
          color: '#e6fffa',
          borderColor: '#38b2ac'
        },
        {
          name: '🔧 Microserviços',
          description: 'Serviços especializados por domínio',
          components: ['Node.js APIs', 'Golang Services', 'Python Agents'],
          color: '#f0fff4',
          borderColor: '#68d391'
        },
        {
          name: '💾 Persistência',
          description: 'Camada de dados e cache',
          components: ['MongoDB', 'Redis', 'File Storage'],
          color: '#fff5f5',
          borderColor: '#fc8181'
        },
        {
          name: '🔗 Integrações',
          description: 'Serviços externos e APIs',
          components: ['Binance API', 'Payment Gateways', 'AI Services'],
          color: '#faf5ff',
          borderColor: '#b794f6'
        }
      ]}
    />
  ),
};
