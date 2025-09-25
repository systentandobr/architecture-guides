// src/stories/security/ClientLibraries.stories.tsx
import React from 'react';
// @ts-ignore
import type { Meta, StoryObj } from '@storybook/react';
import { CodeExample } from './components/CodeExample';

const meta: Meta = {
  title: 'Security/Client Libraries',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const PythonClient: Story = {
  render: () => (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h2>🐍 Python Client Library</h2>
      
      <CodeExample
        title="Instalação"
        code={`# Instalar dependências
cd src/client-libs/python
pip install -r requirements.txt

# Instalar a biblioteca
pip install -e .`}
        backgroundColor="#f0f8ff"
        borderColor="#2196f3"
      />
      
      <CodeExample
        title="Uso Básico"
        code={`from sys_seguranca_client import SysSegurancaClient, LoginRequest

client = SysSegurancaClient(
    base_url="https://auth.systentando.com",
    api_key="your-api-key"
)

# Login
login_response = await client.login(
    LoginRequest(username="user@example.com", password="password123")
)

# Validação de token
user = await client.validate_token(login_response.accessToken)`}
        backgroundColor="#f0fff0"
        borderColor="#4caf50"
      />
      
      <CodeExample
        title="Integração com FastAPI"
        code={`from fastapi import FastAPI, Depends
from sys_seguranca_client.fastapi import get_current_user, require_roles

app = FastAPI()

@app.get("/protected")
async def protected_route(current_user = Depends(get_current_user)):
    return {"message": f"Olá {current_user.username}!"}

@app.get("/admin-only")
@require_roles("admin")
async def admin_route(current_user = Depends(get_current_user)):
    return {"message": "Acesso administrativo"}`}
        backgroundColor="#fff8f0"
        borderColor="#ff9800"
      />
    </div>
  ),
};

export const NodeJSClient: Story = {
  render: () => (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h2>🟢 Node.js Client Library</h2>
      
      <CodeExample
        title="Instalação"
        code={`# Instalar dependências
cd src/client-libs/nodejs
npm install

# Build da biblioteca
npm run build

# Ou instalar via npm
npm install systentando-security-client`}
        backgroundColor="#f0f8ff"
        borderColor="#2196f3"
      />
      
      <CodeExample
        title="Uso Básico"
        code={`import { SysSegurancaClient } from 'systentando-security-client';

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
const user = await client.validateToken(loginResponse.accessToken);`}
        backgroundColor="#f0fff0"
        borderColor="#4caf50"
      />
      
      <CodeExample
        title="Integração com NestJS"
        code={`import { Module } from '@nestjs/common';
import { SysSegurancaModule } from 'systentando-security-client';

@Module({
  imports: [
    SysSegurancaModule.forRoot({
      baseURL: 'https://auth.systentando.com',
      apiKey: 'your-api-key'
    })
  ]
})
export class AppModule {}

// Uso em controllers
@Controller('protected')
@UseGuards(SysSegurancaGuard)
export class ProtectedController {
  @Get()
  @Roles('admin')
  async getProtectedData(@CurrentUser() user: User) {
    return { message: \`Olá \${user.username}!\` };
  }
}`}
        backgroundColor="#fff8f0"
        borderColor="#ff9800"
      />
    </div>
  ),
};

export const GolangClient: Story = {
  render: () => (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h2>🔵 Golang Client Library</h2>
      
      <CodeExample
        title="Instalação"
        code={`# Instalar dependências
cd src/client-libs/golang
go mod tidy
go mod download`}
        backgroundColor="#f0f8ff"
        borderColor="#2196f3"
      />
      
      <CodeExample
        title="Uso Básico"
        code={`package main

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
    
    fmt.Printf("Usuário: %s\\n", user.Username)
}`}
        backgroundColor="#f0fff0"
        borderColor="#4caf50"
      />
      
      <CodeExample
        title="Integração com Gin"
        code={`package main

import (
    "github.com/gin-gonic/gin"
    "sys-seguranca-client/pkg/middleware"
)

func main() {
    r := gin.Default()
    
    // Middleware de autenticação
    r.Use(middleware.SysSegurancaAuth())
    
    // Rota protegida
    r.GET("/protected", func(c *gin.Context) {
        user := c.MustGet("user").(User)
        c.JSON(200, gin.H{
            "message": "Olá " + user.Username,
        })
    })
    
    r.Run(":8080")
}`}
        backgroundColor="#fff8f0"
        borderColor="#ff9800"
      />
    </div>
  ),
};
