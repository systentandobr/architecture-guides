// src/stories/security/ProductionIntegration.stories.tsx
import React from 'react';
// @ts-ignore
import type { Meta, StoryObj } from '@storybook/react';
import { CodeExample } from './components/CodeExample';

const meta: Meta = {
  title: 'Security/Production Integration',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const ProductionSetup: Story = {
  render: () => (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h2>🚀 Configuração para Produção</h2>
      
      <div style={{ background: '#fff3cd', padding: '1rem', borderRadius: '8px', margin: '1rem 0', borderLeft: '4px solid #ffc107' }}>
        <h3>⚠️ Ambiente de Produção</h3>
        <p><strong>URL Base:</strong> <code>https://auth.systentando.com</code></p>
        <p>O sistema de segurança está centralizado e disponível para todas as aplicações do ecossistema Systentando.</p>
      </div>
      
      <CodeExample
        title="🔧 Variáveis de Ambiente"
        code={`# Configuração de Produção
SYS_SEGURANCA_BASE_URL=https://auth.systentando.com
SYS_SEGURANCA_API_KEY=your-production-api-key
SYS_SEGURANCA_TIMEOUT=30000
SYS_SEGURANCA_RETRY_ATTEMPTS=3

# Configuração de Segurança
JWT_SECRET=your-super-secure-jwt-secret
JWT_ACCESS_EXPIRES=15m
JWT_REFRESH_EXPIRES=7d

# Configuração de Rate Limiting
THROTTLE_TTL=60000
THROTTLE_LIMIT=100`}
        backgroundColor="#d1ecf1"
        borderColor="#17a2b8"
      />
    </div>
  ),
};

export const WebApplicationIntegration: Story = {
  render: () => (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h2>🌐 Integração com Aplicação Web</h2>
      
      <CodeExample
        title="React/Next.js Integration"
        code={`// hooks/useAuth.js
import { useState, useEffect } from 'react';
import { SysSegurancaClient } from 'systentando-security-client';

export function useAuth() {
  const [client] = useState(() => new SysSegurancaClient({
    baseURL: process.env.NEXT_PUBLIC_SYS_SEGURANCA_URL,
    apiKey: process.env.NEXT_PUBLIC_SYS_SEGURANCA_API_KEY,
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
  
  return { user, login, logout, loading };
}`}
        backgroundColor="#f8f9fa"
        borderColor="#6c757d"
      />
      
      <CodeExample
        title="Protected Route Component"
        code={`// components/ProtectedRoute.jsx
import { useAuth } from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';

export function ProtectedRoute({ children, requiredRoles = [], requiredPermissions = [] }) {
  const { user, loading } = useAuth();
  
  if (loading) {
    return <div>Carregando...</div>;
  }
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  // Verificar roles
  if (requiredRoles.length > 0) {
    const hasRole = requiredRoles.some(role => 
      user.roles.some(userRole => userRole.name === role)
    );
    if (!hasRole) {
      return <Navigate to="/unauthorized" replace />;
    }
  }
  
  // Verificar permissões
  if (requiredPermissions.length > 0) {
    const hasPermission = requiredPermissions.every(permission =>
      user.permissions.includes(permission)
    );
    if (!hasPermission) {
      return <Navigate to="/unauthorized" replace />;
    }
  }
  
  return children;
}`}
        backgroundColor="#e8f5e8"
        borderColor="#4caf50"
      />
    </div>
  ),
};

export const MobileApplicationIntegration: Story = {
  render: () => (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h2>📱 Integração com Aplicativo Mobile</h2>
      
      <CodeExample
        title="React Native Integration"
        code={`// services/AuthService.js
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SysSegurancaClient } from 'systentando-security-client';

class AuthService {
  constructor() {
    this.client = new SysSegurancaClient({
      baseURL: 'https://auth.systentando.com',
      apiKey: 'your-mobile-api-key',
      enableTokenStorage: true
    });
  }
  
  async login(credentials) {
    try {
      const result = await this.client.login(credentials);
      await AsyncStorage.setItem('auth_token', result.accessToken);
      await AsyncStorage.setItem('refresh_token', result.refreshToken);
      return result;
    } catch (error) {
      throw new Error('Falha na autenticação: ' + error.message);
    }
  }
  
  async logout() {
    try {
      await this.client.logout();
      await AsyncStorage.removeItem('auth_token');
      await AsyncStorage.removeItem('refresh_token');
    } catch (error) {
      console.error('Erro no logout:', error);
    }
  }
  
  async getCurrentUser() {
    try {
      const token = await AsyncStorage.getItem('auth_token');
      if (!token) return null;
      
      return await this.client.validateToken(token);
    } catch (error) {
      await this.logout();
      return null;
    }
  }
}

export default new AuthService();`}
        backgroundColor="#f0f8ff"
        borderColor="#2196f3"
      />
      
      <CodeExample
        title="Flutter Integration (Dart)"
        code={`// lib/services/auth_service.dart
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:shared_preferences/shared_preferences.dart';

class AuthService {
  static const String baseUrl = 'https://auth.systentando.com';
  static const String apiKey = 'your-mobile-api-key';
  
  Future<Map<String, dynamic>> login(String username, String password) async {
    final response = await http.post(
      Uri.parse('\$baseUrl/api/v1/auth/login'),
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
      },
      body: jsonEncode({
        'username': username,
        'password': password,
      }),
    );
    
    if (response.statusCode == 200) {
      final data = jsonDecode(response.body);
      await _saveTokens(data['accessToken'], data['refreshToken']);
      return data;
    } else {
      throw Exception('Falha na autenticação');
    }
  }
  
  Future<void> _saveTokens(String accessToken, String refreshToken) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString('auth_token', accessToken);
    await prefs.setString('refresh_token', refreshToken);
  }
  
  Future<Map<String, dynamic>?> getCurrentUser() async {
    final prefs = await SharedPreferences.getInstance();
    final token = prefs.getString('auth_token');
    
    if (token == null) return null;
    
    try {
      final response = await http.get(
        Uri.parse('\$baseUrl/api/v1/auth/validate'),
        headers: {
          'Authorization': 'Bearer \$token',
          'x-api-key': apiKey,
        },
      );
      
      if (response.statusCode == 200) {
        return jsonDecode(response.body);
      }
    } catch (e) {
      await logout();
    }
    
    return null;
  }
  
  Future<void> logout() async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.remove('auth_token');
    await prefs.remove('refresh_token');
  }
}`}
        backgroundColor="#fff3e0"
        borderColor="#ff9800"
      />
    </div>
  ),
};

export const DesktopApplicationIntegration: Story = {
  render: () => (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h2>🖥️ Integração com Aplicação Desktop</h2>
      
      <CodeExample
        title="Electron Integration"
        code={`// main/auth-manager.js
const { SysSegurancaClient } = require('systentando-security-client');
const { ipcMain } = require('electron');

class AuthManager {
  constructor() {
    this.client = new SysSegurancaClient({
      baseURL: 'https://auth.systentando.com',
      apiKey: 'your-desktop-api-key',
      enableTokenStorage: true
    });
    
    this.setupIpcHandlers();
  }
  
  setupIpcHandlers() {
    ipcMain.handle('auth:login', async (event, credentials) => {
      try {
        const result = await this.client.login(credentials);
        return { success: true, data: result };
      } catch (error) {
        return { success: false, error: error.message };
      }
    });
    
    ipcMain.handle('auth:logout', async () => {
      try {
        await this.client.logout();
        return { success: true };
      } catch (error) {
        return { success: false, error: error.message };
      }
    });
    
    ipcMain.handle('auth:getUser', async () => {
      try {
        const user = await this.client.getCurrentUser();
        return { success: true, data: user };
      } catch (error) {
        return { success: false, error: error.message };
      }
    });
  }
}

module.exports = AuthManager;`}
        backgroundColor="#f8f9fa"
        borderColor="#6c757d"
      />
      
      <CodeExample
        title="Python Desktop (Tkinter/PyQt)"
        code={`# auth_manager.py
import tkinter as tk
from tkinter import messagebox
from sys_seguranca_client import SysSegurancaClient, LoginRequest
import json
import os

class AuthManager:
    def __init__(self):
        self.client = SysSegurancaClient(
            base_url="https://auth.systentando.com",
            api_key="your-desktop-api-key"
        )
        self.user = None
        self.load_stored_credentials()
    
    def load_stored_credentials(self):
        """Carrega credenciais salvas localmente"""
        try:
            with open('auth_config.json', 'r') as f:
                config = json.load(f)
                if 'token' in config:
                    # Validar token salvo
                    self.user = self.client.validate_token(config['token'])
        except (FileNotFoundError, Exception):
            pass
    
    def login(self, username, password):
        """Realiza login"""
        try:
            login_request = LoginRequest(username=username, password=password)
            result = self.client.login(login_request)
            
            # Salvar token localmente
            with open('auth_config.json', 'w') as f:
                json.dump({'token': result.accessToken}, f)
            
            self.user = result.user
            return True
        except Exception as e:
            messagebox.showerror("Erro", f"Falha na autenticação: {str(e)}")
            return False
    
    def logout(self):
        """Realiza logout"""
        try:
            self.client.logout()
            self.user = None
            if os.path.exists('auth_config.json'):
                os.remove('auth_config.json')
        except Exception as e:
            print(f"Erro no logout: {e}")
    
    def is_authenticated(self):
        """Verifica se está autenticado"""
        return self.user is not None
    
    def has_permission(self, permission):
        """Verifica se tem permissão específica"""
        if not self.user:
            return False
        return permission in self.user.permissions`}
        backgroundColor="#e8f5e8"
        borderColor="#4caf50"
      />
    </div>
  ),
};
