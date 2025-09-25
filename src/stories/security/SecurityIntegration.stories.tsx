// src/stories/security/SecurityIntegration.stories.tsx
import React from 'react';
// @ts-ignore
import type { Meta, StoryObj } from '@storybook/react';
import { SecurityOverview } from './components/SecurityOverview';
import { CodeExample } from './components/CodeExample';
import { SecurityStoryConfig } from './types';

const meta: Meta<typeof SecurityOverview> = {
  title: 'Security/Security Integration Demo',
  component: SecurityOverview,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SecurityOverview>;

export const InteractiveDemo: Story = {
  render: () => (
    <SecurityOverview
      title="🔐 Demonstração Interativa do Sistema de Autenticação"
      description="Demonstração interativa do sistema de autenticação e autorização. Teste as credenciais fornecidas para ver diferentes níveis de acesso."
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
  parameters: {
    docs: {
      description: {
        story: 'Demonstração interativa do sistema de autenticação e autorização. Teste as credenciais fornecidas para ver diferentes níveis de acesso.',
      },
    },
  },
};

export const IntegrationExamples: Story = {
  render: () => (
    <div className="security-container">
      <h2 className="security-subtitle">🔧 Exemplos de Integração</h2>
      
      <div className="security-code-examples">
        <div className="security-code-example security-code-react">
          <h3>React Hook de Autenticação</h3>
          <pre>{`// hooks/useAuth.js
import { useState, useEffect } from 'react';
import { SysSegurancaClient } from 'systentando-security-client';

export function useAuth() {
  const [client] = useState(() => new SysSegurancaClient({
    baseURL: process.env.REACT_APP_SYS_SEGURANCA_URL,
    apiKey: process.env.REACT_APP_SYS_SEGURANCA_API_KEY,
    enableTokenStorage: true
  }));
  
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const initAuth = async () => {
      try {
        const token = localStorage.getItem('auth_token');
        if (token) {
          const userData = await client.validateToken(token);
          setUser(userData);
        }
      } catch (error) {
        localStorage.removeItem('auth_token');
      } finally {
        setLoading(false);
      }
    };
    
    initAuth();
  }, []);
  
  const login = async (credentials) => {
    const result = await client.login(credentials);
    localStorage.setItem('auth_token', result.accessToken);
    setUser(result.user);
    return result;
  };
  
  const logout = async () => {
    await client.logout();
    localStorage.removeItem('auth_token');
    setUser(null);
  };
  
  const hasRole = (role) => {
    return user?.roles?.some(userRole => userRole.name === role);
  };
  
  const hasPermission = (permission) => {
    return user?.permissions?.includes(permission);
  };
  
  return { 
    user, 
    login, 
    logout, 
    loading, 
    hasRole, 
    hasPermission 
  };
}`}</pre>
        </div>
      
        <div className="security-code-example security-code-component">
          <h3>Componente de Rota Protegida</h3>
          <pre>{`// components/ProtectedRoute.jsx
import { useAuth } from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';

export function ProtectedRoute({ 
  children, 
  requiredRoles = [], 
  requiredPermissions = [] 
}) {
  const { user, loading, hasRole, hasPermission } = useAuth();
  
  if (loading) {
    return <div>Carregando...</div>;
  }
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  // Verificar roles
  if (requiredRoles.length > 0) {
    const hasRequiredRole = requiredRoles.some(role => hasRole(role));
    if (!hasRequiredRole) {
      return <Navigate to="/unauthorized" replace />;
    }
  }
  
  // Verificar permissões
  if (requiredPermissions.length > 0) {
    const hasRequiredPermission = requiredPermissions.every(permission =>
      hasPermission(permission)
    );
    if (!hasRequiredPermission) {
      return <Navigate to="/unauthorized" replace />;
    }
  }
  
  return children;
}`}</pre>
        </div>
      
        <div className="security-code-example security-code-app">
          <h3>Uso em Aplicação</h3>
          <pre>{`// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from './components/ProtectedRoute';
import { useAuth } from './hooks/useAuth';

function App() {
  const { user, login, logout } = useAuth();
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute requiredRoles={['cliente']}>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/admin" 
          element={
            <ProtectedRoute 
              requiredRoles={['admin', 'webadmin']}
              requiredPermissions={['admin:access']}
            >
              <AdminPanel />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}`}</pre>
        </div>
      </div>
    </div>
  ),
};

export const SecurityBestPractices: Story = {
  render: () => (
    <div className="security-container">
      <h2 className="security-subtitle">🛡️ Melhores Práticas de Segurança</h2>
      
      <div className="security-practices-grid">
        <div className="security-practice-card security-practice-auth">
          <h3>🔐 Autenticação</h3>
          <ul>
            <li>Use HTTPS em produção</li>
            <li>Implemente rate limiting</li>
            <li>Valide tokens em cada requisição</li>
            <li>Use refresh tokens</li>
            <li>Implemente logout seguro</li>
          </ul>
        </div>
        
        <div className="security-practice-card security-practice-authorization">
          <h3>👥 Autorização</h3>
          <ul>
            <li>Implemente RBAC (Role-Based Access Control)</li>
            <li>Use permissões granulares</li>
            <li>Verifique permissões no backend</li>
            <li>Implemente controle por domínio</li>
            <li>Use princípio do menor privilégio</li>
          </ul>
        </div>
        
        <div className="security-practice-card security-practice-data">
          <h3>🔒 Dados</h3>
          <ul>
            <li>Criptografe dados sensíveis</li>
            <li>Use variáveis de ambiente</li>
            <li>Implemente validação de entrada</li>
            <li>Sanitize dados de saída</li>
            <li>Use CSP (Content Security Policy)</li>
          </ul>
        </div>
        
        <div className="security-practice-card security-practice-monitoring">
          <h3>📊 Monitoramento</h3>
          <ul>
            <li>Implemente logging completo</li>
            <li>Monitore tentativas de acesso</li>
            <li>Implemente alertas de segurança</li>
            <li>Use métricas de performance</li>
            <li>Implemente auditoria</li>
          </ul>
        </div>
      </div>
      
      <div className="security-warning-alert">
        <h3>⚠️ Pontos de Atenção</h3>
        <ul>
          <li><strong>Nunca</strong> armazene senhas em texto plano</li>
          <li><strong>Nunca</strong> confie apenas na validação do frontend</li>
          <li><strong>Nunca</strong> exponha tokens em logs</li>
          <li><strong>Nunca</strong> use tokens JWT para dados sensíveis</li>
          <li><strong>Sempre</strong> valide permissões no backend</li>
        </ul>
      </div>
    </div>
  ),
};
