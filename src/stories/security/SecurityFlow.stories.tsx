// src/stories/security/SecurityFlow.stories.tsx
import React from 'react';
// @ts-ignore
import type { Meta, StoryObj } from '@storybook/react';
import { AuthFlow } from './components/AuthFlow';
import { ActorsGrid } from './components/ActorsGrid';
import { SecurityLayers } from './components/SecurityLayers';
import { SecurityArchitectureDiagram } from './components/SecurityArchitectureDiagram';
import { SecurityFlowDiagram } from './components/SecurityFlowDiagram';
import { SecurityMetrics } from './components/SecurityMetrics';
import { AuthFlowStep, SystemActor, SecurityLayer } from './types';

const meta: Meta<typeof AuthFlow> = {
  title: 'Security/Security Flow & Actors',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AuthFlow>;

export const AuthenticationFlow: Story = {
  render: () => (
    <AuthFlow
      title="🔄 Fluxo de Autenticação"
      steps={[
        {
          step: 1,
          title: "Login do Usuário",
          description: "Processo de autenticação do usuário",
          participants: ["Cliente", "API Gateway", "Auth Service"],
          request: `POST /api/v1/auth/login
{
  "username": "user@example.com",
  "password": "password123"
}`,
          validations: [
            "Verificar credenciais",
            "Verificar usuário ativo",
            "Verificar domínio permitido",
            "Verificar rate limiting"
          ],
          tokens: [
            "🔑 Access Token (15min)",
            "🔄 Refresh Token (7 dias)",
            "📱 Device Token (opcional)"
          ]
        },
        {
          step: 2,
          title: "Validação e Geração de Tokens",
          description: "Processo de validação e geração de tokens JWT",
          participants: ["Auth Service"],
          response: `{
  "success": true,
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "user123",
    "username": "user@example.com",
    "roles": [
      {
        "name": "cliente",
        "permissions": ["read:profile", "update:profile"]
      }
    ],
    "permissions": ["read:profile", "update:profile"]
  },
  "expiresIn": 900
}`,
          validations: [
            "Verificar credenciais",
            "Verificar usuário ativo",
            "Verificar domínio permitido",
            "Verificar rate limiting"
          ],
          tokens: [
            "🔑 Access Token (15min)",
            "🔄 Refresh Token (7 dias)",
            "📱 Device Token (opcional)"
          ]
        }
      ]}
    />
  ),
};

export const AuthorizationFlow: Story = {
  render: () => (
    <AuthFlow
      title="🔐 Fluxo de Autorização"
      steps={[
        {
          step: 1,
          title: "Requisição com Token",
          description: "Processo de autorização com token JWT",
          participants: ["Cliente", "API Gateway", "Auth Service"],
          request: `GET /api/v1/protected-resource
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`,
          validations: [
            "Assinatura válida",
            "Token não expirado",
            "Usuário ativo",
            "Token não revogado"
          ]
        },
        {
          step: 2,
          title: "Validação do Token",
          description: "Verificação e validação do token JWT",
          participants: ["Auth Service"],
          validations: [
            "Assinatura válida",
            "Token não expirado",
            "Usuário ativo",
            "Token não revogado"
          ]
        },
        {
          step: 3,
          title: "Verificação de Permissões",
          description: "Verificação de permissões e autorização",
          participants: ["Auth Service"],
          validations: [
            "Autenticação (JWT válido)",
            "Autorização (Roles)",
            "Permissões específicas",
            "Acesso ao domínio",
            "Acesso à tela"
          ]
        }
      ]}
    />
  ),
};

export const ActorsAndContexts: Story = {
  render: () => (
    <ActorsGrid
      title="👥 Atores e Contextos do Sistema"
      actors={[
        {
          name: "🔧 System Admin",
          level: "Máximo",
          domains: ["Todos"],
          permissions: ["Todas"],
          description: "Administrador do sistema com acesso total",
          capabilities: [
            "Gerenciar usuários",
            "Configurar roles",
            "Monitorar sistema",
            "Acesso total"
          ]
        },
        {
          name: "🌐 Web Admin",
          level: "Administrativo",
          domains: ["Aplicações web"],
          permissions: ["Administrativas"],
          description: "Administrador de aplicações web",
          capabilities: [
            "Gerenciar aplicações web",
            "Configurar usuários",
            "Monitorar performance",
            "Acesso limitado por domínio"
          ]
        },
        {
          name: "📊 Web Monitor",
          level: "Monitoramento",
          domains: ["Aplicações web"],
          permissions: ["Leitura e relatórios"],
          description: "Monitor de aplicações web",
          capabilities: [
            "Visualizar métricas",
            "Gerar relatórios",
            "Monitorar logs",
            "Acesso somente leitura"
          ]
        },
        {
          name: "👔 Gerente",
          level: "Gerencial",
          domains: ["Específicos"],
          permissions: ["Gerenciais limitadas"],
          description: "Gerente com acesso limitado",
          capabilities: [
            "Gerenciar equipe",
            "Configurar permissões",
            "Visualizar relatórios",
            "Acesso por domínio"
          ]
        },
        {
          name: "🏢 Franqueado",
          level: "Franquia",
          domains: ["Franquia específica"],
          permissions: ["Franquia"],
          description: "Franqueado com acesso à franquia",
          capabilities: [
            "Gerenciar franquia",
            "Configurar usuários locais",
            "Visualizar métricas locais",
            "Acesso limitado à franquia"
          ]
        },
        {
          name: "🤝 Parceiro",
          level: "Parceria",
          domains: ["Parceria específica"],
          permissions: ["Parceria"],
          description: "Parceiro com acesso limitado",
          capabilities: [
            "Acesso a APIs específicas",
            "Integração limitada",
            "Dados compartilhados",
            "Acesso controlado"
          ]
        },
        {
          name: "👤 Cliente",
          level: "Usuário final",
          domains: ["Aplicações públicas"],
          permissions: ["Básicas"],
          description: "Cliente final do sistema",
          capabilities: [
            "Acesso ao perfil",
            "Configurações pessoais",
            "Dados próprios",
            "Acesso limitado"
          ]
        }
      ]}
    />
  ),
};

export const SecurityLayersDiagram: Story = {
  render: () => (
    <SecurityArchitectureDiagram
      title="🛡️ Arquitetura de Segurança Systentando"
      layers={[
        {
          name: "🌐 Cliente (Frontend/Mobile/Desktop)",
          description: "Aplicações cliente que consomem o serviço de segurança",
          components: [
            "React/Next.js Applications",
            "Mobile Apps (React Native)",
            "Desktop Applications",
            "Third-party Integrations"
          ],
          technologies: ["React", "Next.js", "React Native", "Electron"],
          color: "#e3f2fd",
          borderColor: "#2196f3",
          height: "120px"
        },
        {
          name: "🚪 API Gateway & Rate Limiting",
          description: "Gateway de entrada com controle de taxa e segurança",
          components: [
            "ThrottlerModule (100 req/min)",
            "CORS Configuration",
            "Helmet Security Headers",
            "Request Compression"
          ],
          technologies: ["NestJS", "Throttler", "Helmet", "Compression"],
          color: "#f3e5f5",
          borderColor: "#9c27b0",
          height: "120px"
        },
        {
          name: "🔐 Camada de Autenticação",
          description: "Estratégias de autenticação e validação de tokens",
          components: [
            "JWT Strategy (15min access)",
            "Local Strategy (username/password)",
            "API Key Strategy",
            "Refresh Token Strategy (7 days)"
          ],
          technologies: ["Passport", "JWT", "bcrypt", "NestJS Guards"],
          color: "#e8f5e8",
          borderColor: "#4caf50",
          height: "140px"
        },
        {
          name: "👥 Camada de Autorização",
          description: "Controle de acesso baseado em roles e permissões",
          components: [
            "RolesGuard (RBAC)",
            "PermissionsGuard (Granular)",
            "DomainAccessGuard (Multi-tenant)",
            "ScreenAccessGuard (UI Control)"
          ],
          technologies: ["NestJS Guards", "Reflector", "Decorators"],
          color: "#fff3e0",
          borderColor: "#ff9800",
          height: "140px"
        },
        {
          name: "✅ Camada de Validação",
          description: "Validação de dados e tokens com cache inteligente",
          components: [
            "Input Validation (DTOs)",
            "Token Validation (JWT)",
            "User Status Validation",
            "Cache Interceptor (Performance)"
          ],
          technologies: ["Class Validator", "JWT", "Redis Cache", "Mongoose"],
          color: "#fce4ec",
          borderColor: "#e91e63",
          height: "140px"
        },
        {
          name: "🏗️ Aplicação de Negócio",
          description: "Módulos de negócio e lógica de aplicação",
          components: [
            "AuthModule (Authentication)",
            "UsersModule (User Management)",
            "RolesModule (Role Management)",
            "DomainsModule (Multi-tenant)",
            "TokensModule (Token Management)",
            "DevicesModule (Device Control)"
          ],
          technologies: ["NestJS", "Mongoose", "TypeScript", "MongoDB"],
          color: "#f1f8e9",
          borderColor: "#8bc34a",
          height: "160px"
        },
        {
          name: "💾 Camada de Dados",
          description: "Persistência e cache de dados de segurança",
          components: [
            "MongoDB (Primary Database)",
            "Redis Cache (Token Cache)",
            "Logging Interceptor",
            "Metrics Collection"
          ],
          technologies: ["MongoDB", "Redis", "Winston", "Prometheus"],
          color: "#e0f2f1",
          borderColor: "#009688",
          height: "120px"
        }
      ]}
    />
  ),
};

export const DetailedAuthenticationFlow: Story = {
  render: () => (
    <SecurityFlowDiagram
      title="🔄 Fluxo Detalhado de Autenticação"
      steps={[
        {
          id: "client-request",
          title: "Requisição do Cliente",
          description: "Cliente envia credenciais para autenticação",
          participants: ["Frontend App", "Mobile App", "Desktop App"],
          position: { x: 20, y: 20 },
          color: "#e3f2fd",
          borderColor: "#2196f3",
          backgroundColor: "#2196f3"
        },
        {
          id: "gateway-validation",
          title: "Gateway & Rate Limiting",
          description: "Validação de taxa e headers de segurança",
          participants: ["API Gateway", "ThrottlerModule"],
          validations: [
            "Rate Limit Check (100/min)",
            "CORS Validation",
            "Security Headers",
            "Request Size Validation"
          ],
          position: { x: 50, y: 20 },
          color: "#f3e5f5",
          borderColor: "#9c27b0",
          backgroundColor: "#9c27b0"
        },
        {
          id: "auth-validation",
          title: "Validação de Credenciais",
          description: "Verificação de usuário e senha",
          participants: ["AuthService", "LocalStrategy"],
          validations: [
            "User Existence Check",
            "Password Hash Validation",
            "User Status Check (Active)",
            "Domain Access Check"
          ],
          position: { x: 80, y: 20 },
          color: "#e8f5e8",
          borderColor: "#4caf50",
          backgroundColor: "#4caf50"
        },
        {
          id: "token-generation",
          title: "Geração de Tokens",
          description: "Criação de JWT access e refresh tokens",
          participants: ["JwtService", "TokenCacheService"],
          tokens: [
            "🔑 Access Token (15min)",
            "🔄 Refresh Token (7 days)",
            "📱 Device Token (opcional)"
          ],
          position: { x: 50, y: 50 },
          color: "#fff3e0",
          borderColor: "#ff9800",
          backgroundColor: "#ff9800"
        },
        {
          id: "cache-storage",
          title: "Cache de Tokens",
          description: "Armazenamento em cache para performance",
          participants: ["Redis Cache", "TokenCacheService"],
          validations: [
            "Token Caching",
            "Cache TTL Setup",
            "Performance Optimization"
          ],
          position: { x: 20, y: 50 },
          color: "#fce4ec",
          borderColor: "#e91e63",
          backgroundColor: "#e91e63"
        },
        {
          id: "response-delivery",
          title: "Resposta ao Cliente",
          description: "Entrega dos tokens e dados do usuário",
          participants: ["AuthController", "Client"],
          position: { x: 20, y: 80 },
          color: "#f1f8e9",
          borderColor: "#8bc34a",
          backgroundColor: "#8bc34a"
        }
      ]}
    />
  ),
};

export const AuthorizationFlowDiagram: Story = {
  render: () => (
    <SecurityFlowDiagram
      title="🔐 Fluxo de Autorização Detalhado"
      steps={[
        {
          id: "protected-request",
          title: "Requisição Protegida",
          description: "Cliente faz requisição com token JWT",
          participants: ["Client App", "API Gateway"],
          position: { x: 20, y: 20 },
          color: "#e3f2fd",
          backgroundColor: "#2196f3",
          borderColor: "#2196f3"
        },
        {
          id: "jwt-validation",
          title: "Validação JWT",
          description: "Verificação de assinatura e expiração",
          participants: ["JwtAuthGuard", "JwtService"],
          validations: [
            "Token Signature Validation",
            "Token Expiration Check",
            "User Status Validation",
            "Token Revocation Check"
          ],
          position: { x: 50, y: 20 },
          color: "#e8f5e8",
          backgroundColor: "#4caf50",
          borderColor: "#4caf50"
        },
        {
          id: "cache-check",
          title: "Verificação de Cache",
          description: "Busca por dados em cache para performance",
          participants: ["CacheInterceptor", "TokenCacheService"],
          position: { x: 80, y: 20 },
          color: "#fce4ec",
          borderColor: "#e91e63",
          backgroundColor: "#e91e63"
        },
        {
          id: "roles-validation",
          title: "Validação de Roles",
          description: "Verificação de roles necessárias",
          participants: ["RolesGuard", "User Roles"],
          validations: [
            "Required Roles Check",
            "User Role Validation",
            "Role Hierarchy Check"
          ],
          position: { x: 50, y: 50 },
          color: "#fff3e0",
          borderColor: "#ff9800",
          backgroundColor: "#ff9800"
        },
        {
          id: "permissions-check",
          title: "Verificação de Permissões",
          description: "Validação de permissões granulares",
          participants: ["PermissionsGuard", "User Permissions"],
          validations: [
            "Required Permissions Check",
            "User Permission Validation",
            "Permission Inheritance"
          ],
          position: { x: 20, y: 50 },
          color: "#f3e5f5",
          borderColor: "#9c27b0",
          backgroundColor: "#9c27b0"
        },
        {
          id: "domain-access",
          title: "Controle de Domínio",
          description: "Verificação de acesso ao domínio/aplicação",
          participants: ["DomainAccessGuard", "DomainsService"],
          validations: [
            "Domain Access Check",
            "Screen Access Validation",
            "Multi-tenant Security"
          ],
          position: { x: 20, y: 80 },
          color: "#e0f2f1",
          borderColor: "#009688",
          backgroundColor: "#009688"
        },
        {
          id: "business-logic",
          title: "Lógica de Negócio",
          description: "Execução da lógica de aplicação",
          participants: ["Controllers", "Services", "Business Logic"],
          position: { x: 50, y: 80 },
          color: "#f1f8e9",
          borderColor: "#8bc34a",
          backgroundColor: "#8bc34a"
        }
      ]}
    />
  ),
};

export const SecurityMetricsDashboard: Story = {
  render: () => (
    <SecurityMetrics
      title="📊 Dashboard de Métricas de Segurança"
      metrics={[
        {
          name: "Uptime do Sistema",
          value: "99.9",
          unit: "%",
          status: "success",
          description: "Disponibilidade do serviço de segurança nos últimos 30 dias",
          trend: "stable"
        },
        {
          name: "Latência Média",
          value: "45",
          unit: "ms",
          status: "success",
          description: "Tempo médio de resposta para validação de tokens",
          trend: "down"
        },
        {
          name: "Taxa de Sucesso",
          value: "99.7",
          unit: "%",
          status: "success",
          description: "Percentual de autenticações bem-sucedidas",
          trend: "up"
        },
        {
          name: "Tokens Ativos",
          value: "12.5K",
          unit: "",
          status: "info",
          description: "Número de tokens JWT ativos no sistema",
          trend: "up"
        },
        {
          name: "Tentativas de Ataque",
          value: "23",
          unit: "",
          status: "warning",
          description: "Tentativas de acesso não autorizado bloqueadas hoje",
          trend: "down"
        },
        {
          name: "Cache Hit Rate",
          value: "94.2",
          unit: "%",
          status: "success",
          description: "Taxa de acerto do cache Redis para validação de tokens",
          trend: "up"
        },
        {
          name: "Usuários Conectados",
          value: "1.2K",
          unit: "",
          status: "info",
          description: "Usuários ativos no momento",
          trend: "stable"
        },
        {
          name: "Taxa de Erro",
          value: "0.3",
          unit: "%",
          status: "success",
          description: "Percentual de erros em requisições de autenticação",
          trend: "down"
        }
      ]}
    />
  ),
};
