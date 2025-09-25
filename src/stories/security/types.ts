// src/stories/security/types.ts

/**
 * Tipos para os stories de segurança do Systentando
 */

/**
 * Interface para configuração de story de segurança
 */
export interface SecurityStoryConfig {
  title: string;
  component?: React.ComponentType;
  parameters?: {
    layout?: 'fullscreen' | 'padded' | 'centered';
    docs?: {
      description?: {
        story?: string;
      };
    };
  };
  tags?: string[];
}

/**
 * Interface para dados de usuário nos stories
 */
export interface UserData {
  id: string;
  username: string;
  email: string;
  roles: Array<{
    name: string;
    permissions: string[];
  }>;
  permissions: string[];
}

/**
 * Interface para resposta de autenticação
 */
export interface AuthResponse {
  success: boolean;
  accessToken: string;
  refreshToken: string;
  user: UserData;
  expiresIn: number;
}

/**
 * Interface para credenciais de login
 */
export interface LoginCredentials {
  username: string;
  password: string;
}

/**
 * Interface para configuração do cliente de segurança
 */
export interface SecurityClientConfig {
  baseURL: string;
  apiKey: string;
  enableTokenStorage?: boolean;
  timeout?: number;
  retryAttempts?: number;
}

/**
 * Interface para dados de domínio
 */
export interface DomainData {
  name: string;
  description: string;
  permissions: string[];
  screens: string[];
}

/**
 * Interface para dados de tela
 */
export interface ScreenData {
  name: string;
  domain: string;
  permissions: string[];
  description: string;
}

/**
 * Interface para guard de segurança
 */
export interface SecurityGuard {
  name: string;
  description: string;
  implementation: string;
  usage: string;
}

/**
 * Interface para decorator de segurança
 */
export interface SecurityDecorator {
  name: string;
  description: string;
  parameters: string[];
  usage: string;
}

/**
 * Interface para exemplo de integração
 */
export interface IntegrationExample {
  title: string;
  description: string;
  code: string;
  language: 'javascript' | 'typescript' | 'python' | 'go' | 'dart';
  framework?: string;
}

/**
 * Interface para ator do sistema
 */
export interface SystemActor {
  name: string;
  level: string;
  domains: string[];
  permissions: string[];
  description: string;
  capabilities: string[];
}

/**
 * Interface para camada de segurança
 */
export interface SecurityLayer {
  name: string;
  description: string;
  components: string[];
  color: string;
  borderColor: string;
}

/**
 * Interface para fluxo de autenticação
 */
export interface AuthFlowStep {
  step: number;
  title: string;
  description: string;
  participants: string[];
  request?: string;
  response?: string;
  validations?: string[];
  tokens?: string[];
}

/**
 * Interface para configuração de produção
 */
export interface ProductionConfig {
  baseURL: string;
  apiKey: string;
  timeout: number;
  retryAttempts: number;
  jwtSecret: string;
  jwtAccessExpires: string;
  jwtRefreshExpires: string;
  throttleTTL: number;
  throttleLimit: number;
}

/**
 * Enum para tipos de agente
 */
export enum AgentType {
  HEALTH = 'health',
  NUTRITION = 'nutrition',
  FINANCE = 'finance',
  PRODUCTIVITY = 'productivity'
}

/**
 * Enum para níveis de acesso
 */
export enum AccessLevel {
  SYSTEM_ADMIN = 'system_admin',
  WEB_ADMIN = 'web_admin',
  WEB_MONITOR = 'web_monitor',
  MANAGER = 'manager',
  FRANCHISEE = 'franchisee',
  PARTNER = 'partner',
  CLIENT = 'client'
}

/**
 * Enum para tipos de permissão
 */
export enum PermissionType {
  READ = 'read',
  WRITE = 'write',
  DELETE = 'delete',
  ADMIN = 'admin',
  MONITOR = 'monitor'
}

/**
 * Interface para configuração de story
 */
export interface StoryMeta {
  title: string;
  component?: React.ComponentType;
  parameters?: Record<string, any>;
  tags?: string[];
  argTypes?: Record<string, any>;
  args?: Record<string, any>;
}
