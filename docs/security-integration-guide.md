# 🔐 Guia de Integração - Módulo de Segurança Systentando

## 📋 Visão Geral

Este documento fornece um guia completo para integração com o sistema centralizado de segurança do ecossistema Systentando. O SYS-SEGURANÇA é um serviço que fornece autenticação, autorização e gestão de usuários para todas as aplicações do ecossistema.

## 🎯 Características Principais

- ✅ **Autenticação JWT** com refresh tokens
- ✅ **Sistema de Roles e Permissões** (RBAC)
- ✅ **Validação de Tokens** em tempo real
- ✅ **Rate Limiting** e retry automático
- ✅ **Client Libraries** para Python, Node.js e Golang
- ✅ **Guards e Decorators** para controle de acesso
- ✅ **Controle por Domínio** e tela

## 🏗️ Arquitetura do Sistema

### Componentes Principais

1. **AuthModule** - Módulo principal de autenticação
2. **UsersModule** - Gerenciamento de usuários
3. **RolesModule** - Sistema de roles e permissões
4. **TokensModule** - Gerenciamento de tokens JWT
5. **DevicesModule** - Controle de dispositivos
6. **DomainsModule** - Controle de domínios/aplicações

### Camadas de Segurança

1. **Autenticação** - Verificação de identidade (JWT, API Keys)
2. **Autorização** - Controle de acesso (Roles, Permissions)
3. **Validação** - Verificação de dados e tokens
4. **Rate Limiting** - Controle de taxa de requisições
5. **Domain Access** - Controle por domínio/aplicação

## 🛡️ Guards e Decorators Implementados

### Guards de Segurança

- **JwtAuthGuard** - Autenticação via JWT
- **ApiKeyGuard** - Autenticação via API Key
- **RolesGuard** - Controle de acesso por roles
- **PermissionsGuard** - Controle de acesso por permissões
- **DomainAccessGuard** - Controle de acesso por domínio

### Decorators Disponíveis

- **@Roles()** - Especifica roles necessárias
- **@Permissions()** - Especifica permissões necessárias
- **@Domain()** - Especifica domínio necessário
- **@Screen()** - Especifica tela necessária
- **@CurrentUser()** - Injeta usuário atual
- **@ApiKey()** - Marca endpoint para API Key

## 📚 Client Libraries

### Python Client Library

```python
from sys_seguranca_client import SysSegurancaClient, LoginRequest

client = SysSegurancaClient(
    base_url="https://auth.systentando.com",
    api_key="your-api-key"
)

# Login
login_response = await client.login(
    LoginRequest(username="user@example.com", password="password123")
)

# Validação de token
user = await client.validate_token(login_response.accessToken)
```

### Node.js Client Library

```typescript
import { SysSegurancaClient } from 'systentando-security-client';

const client = new SysSegurancaClient({
  baseURL: 'https://auth.systentando.com',
  apiKey: 'your-api-key'
});

// Login
const loginResponse = await client.login({
  username: 'user@example.com',
  password: 'password123'
});

// Validação de token
const user = await client.validateToken(loginResponse.accessToken);
```

### Golang Client Library

```go
package main

import (
    "fmt"
    "sys-seguranca-client/pkg/client"
)

func main() {
    client := client.NewSysSegurancaClient(
        "https://auth.systentando.com",
        "your-api-key",
    )
    
    // Login
    loginResp, err := client.Login("user@example.com", "password123")
    if err != nil {
        panic(err)
    }
    
    // Validação de token
    user, err := client.ValidateToken(loginResp.AccessToken)
    if err != nil {
        panic(err)
    }
    
    fmt.Printf("Usuário: %s\n", user.Username)
}
```

## 🚀 Configuração para Produção

### Variáveis de Ambiente

```bash
# Configuração de Produção
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
THROTTLE_LIMIT=100
```

## 👥 Atores e Contextos

### Níveis de Acesso

1. **System Admin** - Acesso total ao sistema
2. **Web Admin** - Acesso administrativo às aplicações web
3. **Web Monitor** - Acesso de monitoramento e relatórios
4. **Gerente** - Acesso gerencial limitado por domínio
5. **Franqueado** - Acesso específico para franquias
6. **Parceiro** - Acesso limitado para parceiros
7. **Cliente** - Acesso básico do usuário final

### Domínios Suportados

- **systentando-web** - Aplicação web principal
- **systentando-mobile** - Aplicativo mobile
- **viralkids-web** - Aplicação web do ViralKids
- **objetivos-web** - Aplicação web do Seus Objetivos
- **development** - Ambiente de desenvolvimento

## 🔄 Fluxo de Autenticação

1. **Login do Usuário** - Cliente envia credenciais
2. **Validação** - Sistema valida credenciais e usuário ativo
3. **Geração de Tokens** - Sistema gera access e refresh tokens
4. **Resposta** - Cliente recebe tokens e informações do usuário

## 🔐 Fluxo de Autorização

1. **Requisição com Token** - Cliente envia token JWT
2. **Validação do Token** - Sistema verifica assinatura e expiração
3. **Verificação de Permissões** - Sistema verifica roles e permissões
4. **Acesso** - Sistema permite ou nega acesso ao recurso

## 🛡️ Melhores Práticas

### Autenticação
- ✅ Use HTTPS em produção
- ✅ Implemente rate limiting
- ✅ Valide tokens em cada requisição
- ✅ Use refresh tokens
- ✅ Implemente logout seguro

### Autorização
- ✅ Implemente RBAC (Role-Based Access Control)
- ✅ Use permissões granulares
- ✅ Verifique permissões no backend
- ✅ Implemente controle por domínio
- ✅ Use princípio do menor privilégio

### Dados
- ✅ Criptografe dados sensíveis
- ✅ Use variáveis de ambiente
- ✅ Implemente validação de entrada
- ✅ Sanitize dados de saída
- ✅ Use CSP (Content Security Policy)

### Monitoramento
- ✅ Implemente logging completo
- ✅ Monitore tentativas de acesso
- ✅ Implemente alertas de segurança
- ✅ Use métricas de performance
- ✅ Implemente auditoria

## ⚠️ Pontos de Atenção

- 🔒 **Nunca** armazene senhas em texto plano
- 🔒 **Nunca** confie apenas na validação do frontend
- 🔒 **Nunca** exponha tokens em logs
- 🔒 **Nunca** use tokens JWT para dados sensíveis
- 🔒 **Sempre** valide permissões no backend

## 📖 Documentação Adicional

Para mais informações sobre implementação específica, consulte:

- [Guia de Client Libraries](./client-libraries-guide.md)
- [Guia de Guards e Decorators](./guards-decorators-guide.md)
- [Guia de Integração Frontend](./frontend-integration-guide.md)
- [Guia de Integração Backend](./backend-integration-guide.md)

## 🆘 Suporte

Para dúvidas ou problemas com a integração, entre em contato com a equipe de desenvolvimento através dos canais oficiais do projeto.
