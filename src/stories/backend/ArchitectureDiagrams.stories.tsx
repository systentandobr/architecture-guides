// src/stories/backend/ArchitectureDiagrams.stories.tsx
import React from 'react';
// @ts-ignore
import type { Meta, StoryObj } from '@storybook/react';
import { BackendOverview } from './components/BackendOverview';
import { ArchitectureDiagram } from './components/ArchitectureDiagram';
import { SystemFlowDiagram } from './components/SystemFlowDiagram';
import { TechnologyIntegration } from './components/TechnologyIntegration';

const meta: Meta<typeof BackendOverview> = {
  title: 'Backend/Architecture Diagrams',
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
      title="🏛️ Diagramas de Arquitetura"
      description="Documentação visual da arquitetura do backend Monorepo, incluindo fluxos de dados, integrações e responsabilidades de cada componente."
      technologies={[
        'Microserviços - Arquitetura distribuída',
        'API Gateway - Entrada única para APIs',
        'Load Balancer - Distribuição de carga',
        'Message Queue - Comunicação assíncrona',
        'Database Sharding - Particionamento de dados',
        'Caching Strategy - Estratégia de cache distribuído'
      ]}
      responsibilities={[
        'Visualização da arquitetura geral',
        'Fluxos de dados entre componentes',
        'Integrações entre tecnologias',
        'Responsabilidades de cada serviço',
        'Estratégias de escalabilidade',
        'Padrões de comunicação'
      ]}
    />
  ),
};

export const SystemArchitecture: Story = {
  render: () => (
    <ArchitectureDiagram
      title="🏗️ Arquitetura do Sistema"
      description="Visão geral da arquitetura do backend Monorepo com todas as tecnologias e responsabilidades"
      layers={[
        {
          name: '🌐 API Gateway',
          description: 'Entrada única para todas as APIs do sistema',
          components: ['Nginx', 'Load Balancer', 'Rate Limiting', 'SSL Termination'],
          color: '#e6fffa',
          borderColor: '#38b2ac'
        },
        {
          name: '🔧 Microserviços',
          description: 'Serviços especializados por domínio e tecnologia',
          components: ['Node.js APIs', 'Golang Services', 'Python Agents', 'Message Queue'],
          color: '#f0fff4',
          borderColor: '#68d391'
        },
        {
          name: '💾 Persistência',
          description: 'Camada de dados e cache distribuído',
          components: ['MongoDB Cluster', 'Redis Cluster', 'File Storage', 'Backup System'],
          color: '#fff5f5',
          borderColor: '#fc8181'
        },
        {
          name: '🔗 Integrações',
          description: 'Serviços externos e APIs de terceiros',
          components: ['Binance API', 'Payment Gateways', 'AI Services', 'Notification Services'],
          color: '#faf5ff',
          borderColor: '#b794f6'
        },
        {
          name: '📊 Monitoramento',
          description: 'Observabilidade e métricas do sistema',
          components: ['Prometheus', 'Grafana', 'ELK Stack', 'Alert Manager'],
          color: '#fffbf0',
          borderColor: '#f6ad55'
        }
      ]}
    />
  ),
};

export const DataFlowDiagram: Story = {
  render: () => (
    <SystemFlowDiagram
      title="🔄 Fluxo de Dados do Sistema"
      description="Como os dados fluem através do sistema, desde a entrada até o processamento e armazenamento"
      flows={[
        {
          name: 'Fluxo de Autenticação',
          steps: [
            'Cliente envia credenciais',
            'API Gateway valida request',
            'Node.js API processa autenticação',
            'MongoDB valida usuário',
            'JWT é gerado e retornado',
            'Cliente armazena token'
          ],
          technologies: ['API Gateway', 'Node.js', 'MongoDB', 'Redis']
        },
        {
          name: 'Fluxo de Análise Financeira',
          steps: [
            'Golang service coleta dados da Binance',
            'Dados são processados e analisados',
            'Indicadores técnicos são calculados',
            'Resultados são armazenados no MongoDB',
            'Cache é atualizado no Redis',
            'Notificações são enviadas'
          ],
          technologies: ['Golang', 'Binance API', 'MongoDB', 'Redis', 'Notification Service']
        },
        {
          name: 'Fluxo de IA e ML',
          steps: [
            'Python agent recebe dados do usuário',
            'Modelos ML são aplicados',
            'Análise preditiva é executada',
            'Recomendações são geradas',
            'Resultados são armazenados',
            'Insights são entregues ao usuário'
          ],
          technologies: ['Python', 'LangChain', 'ML Engine', 'MongoDB', 'Analytics Service']
        }
      ]}
    />
  ),
};

export const TechnologyIntegrationStory: Story = {
  render: () => (
    <TechnologyIntegration
      title="🔗 Integração entre Tecnologias"
      description="Como as diferentes tecnologias se integram e comunicam no sistema"
      integrations={[
        {
          name: 'Node.js ↔ Golang',
          description: 'Comunicação via HTTP/REST para análise financeira',
          protocol: 'HTTP/REST',
          dataFormat: 'JSON',
          useCase: 'Node.js solicita análises de mercado do Golang'
        },
        {
          name: 'Node.js ↔ Python',
          description: 'Comunicação via HTTP/REST para serviços de IA',
          protocol: 'HTTP/REST',
          dataFormat: 'JSON',
          useCase: 'Node.js solicita recomendações do Python'
        },
        {
          name: 'Golang ↔ Python',
          description: 'Comunicação via Message Queue para processamento assíncrono',
          protocol: 'Message Queue',
          dataFormat: 'JSON',
          useCase: 'Golang envia dados para análise ML no Python'
        },
        {
          name: 'Todas ↔ MongoDB',
          description: 'Persistência de dados compartilhada',
          protocol: 'MongoDB Driver',
          dataFormat: 'BSON',
          useCase: 'Armazenamento de dados de usuários, análises e resultados'
        },
        {
          name: 'Todas ↔ Redis',
          description: 'Cache distribuído para performance',
          protocol: 'Redis Protocol',
          dataFormat: 'String/JSON',
          useCase: 'Cache de sessões, dados de mercado e resultados de ML'
        }
      ]}
    />
  ),
};

export const ScalabilityStrategy: Story = {
  render: () => (
    <ArchitectureDiagram
      title="📈 Estratégia de Escalabilidade"
      description="Como o sistema escala horizontalmente e verticalmente"
      layers={[
        {
          name: '🔄 Load Balancing',
          description: 'Distribuição de carga entre instâncias',
          components: ['Nginx Load Balancer', 'Health Checks', 'Auto Scaling', 'Traffic Routing'],
          color: '#e6f3ff',
          borderColor: '#4299e1'
        },
        {
          name: '📊 Horizontal Scaling',
          description: 'Escalabilidade horizontal por serviço',
          components: ['Container Orchestration', 'Service Discovery', 'Auto Scaling Groups', 'Load Distribution'],
          color: '#f0fff4',
          borderColor: '#68d391'
        },
        {
          name: '💾 Database Scaling',
          description: 'Escalabilidade do banco de dados',
          components: ['MongoDB Sharding', 'Redis Cluster', 'Read Replicas', 'Connection Pooling'],
          color: '#fff5f5',
          borderColor: '#fc8181'
        },
        {
          name: '🚀 Performance Optimization',
          description: 'Otimizações de performance',
          components: ['Caching Strategy', 'CDN', 'Compression', 'Async Processing'],
          color: '#faf5ff',
          borderColor: '#b794f6'
        }
      ]}
    />
  ),
};

export const SecurityArchitecture: Story = {
  render: () => (
    <ArchitectureDiagram
      title="🔒 Arquitetura de Segurança"
      description="Camadas de segurança implementadas no sistema"
      layers={[
        {
          name: '🛡️ Network Security',
          description: 'Segurança de rede e comunicação',
          components: ['SSL/TLS', 'VPN', 'Firewall', 'DDoS Protection'],
          color: '#e6fffa',
          borderColor: '#38b2ac'
        },
        {
          name: '🔐 Authentication',
          description: 'Autenticação e autorização',
          components: ['JWT Tokens', 'OAuth 2.0', 'RBAC', 'Multi-Factor Auth'],
          color: '#f0fff4',
          borderColor: '#68d391'
        },
        {
          name: '🔒 Data Security',
          description: 'Proteção de dados',
          components: ['Encryption at Rest', 'Encryption in Transit', 'Data Masking', 'Audit Logs'],
          color: '#fff5f5',
          borderColor: '#fc8181'
        },
        {
          name: '📊 Monitoring',
          description: 'Monitoramento de segurança',
          components: ['Security Logs', 'Intrusion Detection', 'Vulnerability Scanning', 'Incident Response'],
          color: '#faf5ff',
          borderColor: '#b794f6'
        }
      ]}
    />
  ),
};
