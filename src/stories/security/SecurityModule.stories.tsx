// src/stories/security/SecurityModule.stories.tsx
import React from 'react';
// @ts-ignore
import type { Meta, StoryObj } from '@storybook/react';
import { SecurityOverview } from './components/SecurityOverview';
import { SecurityLayers as SecurityLayersComponent } from './components/SecurityLayers';
import { SecurityModules } from './components/SecurityModules';
import { SystemActor, SecurityLayer } from './types';

const meta: Meta<typeof SecurityOverview> = {
  title: 'Security/Security Module',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SecurityOverview>;

export const Overview: Story = {
  render: () => (
    <SecurityOverview
      title="🔐 Módulo de Segurança Systentando"
      description="Documentação completa para integração com o sistema centralizado de segurança do ecossistema Systentando."
      features={[
        'Autenticação JWT com refresh tokens',
        'Sistema de Roles e Permissões (RBAC)',
        'Validação de Tokens em tempo real',
        'Rate Limiting e retry automático',
        'Client Libraries para Python, Node.js e Golang',
        'Guards e Decorators para controle de acesso'
      ]}
    />
  ),
};

export const ArchitectureOverview: Story = {
  render: () => (
    <SecurityOverview
      title="🏗️ Arquitetura do Sistema"
      description="Visão geral da arquitetura do sistema de segurança"
      features={[
        'AuthModule - Módulo principal de autenticação',
        'UsersModule - Gerenciamento de usuários',
        'RolesModule - Sistema de roles e permissões',
        'TokensModule - Gerenciamento de tokens JWT',
        'DevicesModule - Controle de dispositivos',
        'DomainsModule - Controle de domínios/aplicações'
      ]}
      actors={[
        {
          name: 'AuthModule',
          level: 'Core',
          domains: ['all'],
          permissions: ['auth:manage'],
          description: 'Módulo principal de autenticação',
          capabilities: ['JWT Strategy', 'Local Strategy', 'API Key Guard', 'Refresh Tokens']
        },
        {
          name: 'UsersModule',
          level: 'Core',
          domains: ['all'],
          permissions: ['users:manage'],
          description: 'Gerenciamento de usuários',
          capabilities: ['User CRUD', 'Profile Management', 'User Validation']
        },
        {
          name: 'RolesModule',
          level: 'Core',
          domains: ['all'],
          permissions: ['roles:manage'],
          description: 'Sistema de roles e permissões',
          capabilities: ['Role Management', 'Permission Assignment', 'RBAC Implementation']
        },
        {
          name: 'TokensModule',
          level: 'Core',
          domains: ['all'],
          permissions: ['tokens:manage'],
          description: 'Gerenciamento de tokens JWT',
          capabilities: ['Token Generation', 'Token Validation', 'Token Refresh']
        },
        {
          name: 'DevicesModule',
          level: 'Core',
          domains: ['all'],
          permissions: ['devices:manage'],
          description: 'Controle de dispositivos',
          capabilities: ['Device Registration', 'Device Validation', 'Device Management']
        },
        {
          name: 'DomainsModule',
          level: 'Core',
          domains: ['all'],
          permissions: ['domains:manage'],
          description: 'Controle de domínios/aplicações',
          capabilities: ['Domain Management', 'Application Access', 'Domain Validation']
        }
      ]}
      layers={[
        {
          name: 'Autenticação',
          description: 'Verificação de identidade (JWT, API Keys)',
          components: ['JWT Strategy', 'Local Strategy', 'API Key Guard'],
          color: '#e8f5e8',
          borderColor: '#4caf50'
        },
        {
          name: 'Autorização',
          description: 'Controle de acesso (Roles, Permissions)',
          components: ['Roles Guard', 'Permissions Guard', 'Domain Access Guard'],
          color: '#fff3e0',
          borderColor: '#ff9800'
        },
        {
          name: 'Validação',
          description: 'Verificação de dados e tokens',
          components: ['Input Validation', 'Token Validation', 'User Validation'],
          color: '#fce4ec',
          borderColor: '#e91e63'
        },
        {
          name: 'Rate Limiting',
          description: 'Controle de taxa de requisições',
          components: ['Throttle Guard', 'Rate Limiter', 'Request Counter'],
          color: '#f3e5f5',
          borderColor: '#9c27b0'
        },
        {
          name: 'Domain Access',
          description: 'Controle por domínio/aplicação',
          components: ['Domain Guard', 'Application Guard', 'Screen Guard'],
          color: '#e0f2f1',
          borderColor: '#009688'
        }
      ]}
    />
  ),
};

export const SecurityModulesOverview: Story = {
  render: () => (
    <SecurityModules
      title="🏗️ Módulos do Sistema de Segurança"
      modules={[
        {
          name: 'AuthModule',
          level: 'Core',
          domains: ['all'],
          permissions: ['auth:manage'],
          description: 'Módulo principal de autenticação responsável por todas as estratégias de autenticação do sistema.',
          capabilities: [
            'JWT Strategy - Tokens seguros com expiração',
            'Local Strategy - Login com credenciais',
            'API Key Guard - Autenticação por chave',
            'Refresh Tokens - Renovação automática de tokens',
            'Password Recovery - Recuperação de senhas',
            'Two-Factor Auth - Autenticação de dois fatores'
          ]
        },
        {
          name: 'UsersModule',
          level: 'Core',
          domains: ['all'],
          permissions: ['users:manage'],
          description: 'Gerenciamento completo de usuários com controle de perfis e validações.',
          capabilities: [
            'User CRUD - Criação, leitura, atualização e exclusão',
            'Profile Management - Gerenciamento de perfis',
            'User Validation - Validação de dados de usuário',
            'Password Policy - Políticas de senha',
            'Inactive Users - Controle de usuários inativos',
            'User Status - Controle de status de usuários'
          ]
        },
        {
          name: 'RolesModule',
          level: 'Core',
          domains: ['all'],
          permissions: ['roles:manage'],
          description: 'Sistema completo de roles e permissões baseado em RBAC (Role-Based Access Control).',
          capabilities: [
            'Role Management - Gerenciamento de roles',
            'Permission Assignment - Atribuição de permissões',
            'RBAC Implementation - Implementação de RBAC',
            'Role Hierarchy - Hierarquia de roles',
            'Permission Validation - Validação de permissões',
            'Access Control - Controle de acesso granular'
          ]
        },
        {
          name: 'TokensModule',
          level: 'Core',
          domains: ['all'],
          permissions: ['tokens:manage'],
          description: 'Gerenciamento avançado de tokens JWT com cache e validação em tempo real.',
          capabilities: [
            'Token Generation - Geração de tokens JWT',
            'Token Validation - Validação de tokens',
            'Token Refresh - Renovação de tokens',
            'Token Revocation - Revogação de tokens',
            'Token Cache - Cache inteligente de tokens',
            'Token Analytics - Análise de uso de tokens'
          ]
        },
        {
          name: 'DevicesModule',
          level: 'Core',
          domains: ['all'],
          permissions: ['devices:manage'],
          description: 'Controle de dispositivos com registro e validação de dispositivos autorizados.',
          capabilities: [
            'Device Registration - Registro de dispositivos',
            'Device Validation - Validação de dispositivos',
            'Device Management - Gerenciamento de dispositivos',
            'Device Tracking - Rastreamento de dispositivos',
            'Device Security - Segurança de dispositivos',
            'Device Analytics - Análise de dispositivos'
          ]
        },
        {
          name: 'DomainsModule',
          level: 'Core',
          domains: ['all'],
          permissions: ['domains:manage'],
          description: 'Controle de domínios e aplicações com acesso granular por domínio.',
          capabilities: [
            'Domain Management - Gerenciamento de domínios',
            'Application Access - Controle de acesso por aplicação',
            'Domain Validation - Validação de domínios',
            'Screen Access - Controle de acesso por tela',
            'Multi-tenant Support - Suporte multi-tenant',
            'Domain Analytics - Análise de domínios'
          ]
        }
      ]}
    />
  ),
};

export const SecurityLayers: Story = {
  render: () => (
    <SecurityLayersComponent
      title="🛡️ Camadas de Segurança Implementadas"
      layers={[
        {
          name: '🔐 Autenticação',
          description: 'Estratégias de autenticação implementadas',
          components: [
            'JWT Strategy - Tokens seguros',
            'Local Strategy - Login com credenciais',
            'API Key Guard - Autenticação por chave',
            'Refresh Tokens - Renovação automática'
          ],
          color: '#e8f5e8',
          borderColor: '#4caf50'
        },
        {
          name: '👥 Autorização',
          description: 'Controle de acesso por roles e permissões',
          components: [
            'Roles Guard - Controle por roles',
            'Permissions Guard - Controle por permissões',
            'Domain Access Guard - Controle por domínio',
            'Screen Access - Controle por tela'
          ],
          color: '#e3f2fd',
          borderColor: '#2196f3'
        },
        {
          name: '⚡ Performance',
          description: 'Otimizações de performance e rate limiting',
          components: [
            'Rate Limiting - 100 req/min',
            'Cache Interceptor - Cache de tokens',
            'Logging Interceptor - Monitoramento',
            'Compression - Otimização de dados'
          ],
          color: '#fff3e0',
          borderColor: '#ff9800'
        },
        {
          name: '🔒 Validação',
          description: 'Validação de dados e tokens',
          components: [
            'Input Validation - Validação de entrada',
            'Token Validation - Verificação de tokens',
            'User Validation - Verificação de usuários',
            'Permission Validation - Verificação de permissões'
          ],
          color: '#fce4ec',
          borderColor: '#e91e63'
        }
      ]}
    />
  ),
};
