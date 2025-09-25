// src/stories/security/SecurityGuards.stories.tsx
import React from 'react';
// @ts-ignore
import type { Meta, StoryObj } from '@storybook/react';
import { SecurityOverview } from './components/SecurityOverview';
import { CodeExample } from './components/CodeExample';
import { SecurityGuard, SecurityDecorator } from './types';

const meta: Meta<typeof SecurityOverview> = {
  title: 'Security/Security Guards & Decorators',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SecurityOverview>;

export const GuardsOverview: Story = {
  render: () => (
    <SecurityOverview
      title="🛡️ Guards e Decorators de Segurança"
      description="Visão geral dos guards e decorators implementados no sistema de segurança"
      features={[
        'JwtAuthGuard - Autenticação via JWT',
        'ApiKeyGuard - Autenticação via API Key',
        'RolesGuard - Controle de acesso por roles',
        'PermissionsGuard - Controle de acesso por permissões',
        'DomainAccessGuard - Controle de acesso por domínio'
      ]}
      actors={[
        {
          name: 'Guards Implementados',
          level: 'Security',
          domains: ['all'],
          permissions: ['security:manage'],
          description: 'Guards de segurança implementados',
          capabilities: [
            'JwtAuthGuard - Autenticação via JWT',
            'ApiKeyGuard - Autenticação via API Key',
            'RolesGuard - Controle de acesso por roles',
            'PermissionsGuard - Controle de acesso por permissões',
            'DomainAccessGuard - Controle de acesso por domínio'
          ]
        },
        {
          name: 'Decorators Disponíveis',
          level: 'Security',
          domains: ['all'],
          permissions: ['security:manage'],
          description: 'Decorators de segurança disponíveis',
          capabilities: [
            '@Roles() - Especifica roles necessárias',
            '@Permissions() - Especifica permissões necessárias',
            '@Domain() - Especifica domínio necessário',
            '@Screen() - Especifica tela necessária',
            '@CurrentUser() - Injeta usuário atual',
            '@ApiKey() - Marca endpoint para API Key'
          ]
        }
      ]}
    />
  ),
};

export const JWTGuardExample: Story = {
  render: () => (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h2>🔐 JWT Authentication Guard</h2>
      
      <CodeExample
        title="Implementação do Guard"
        code={`// guards/jwt-auth.guard.ts
import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}
  
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    
    if (!token) {
      throw new UnauthorizedException('Token não fornecido');
    }
    
    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: process.env.JWT_SECRET,
      });
      
      // Adicionar usuário ao request
      request.user = payload;
      return true;
    } catch {
      throw new UnauthorizedException('Token inválido');
    }
  }
  
  private extractTokenFromHeader(request: any): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}`}
        backgroundColor="#f0f8ff"
        borderColor="#2196f3"
      />
      
      <CodeExample
        title="Uso em Controllers"
        code={`// controllers/protected.controller.ts
import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { CurrentUser } from '../decorators/current-user.decorator';

@Controller('protected')
@UseGuards(JwtAuthGuard)
export class ProtectedController {
  @Get('profile')
  getProfile(@CurrentUser() user: any) {
    return {
      id: user.sub,
      username: user.username,
      email: user.email
    };
  }
}`}
        backgroundColor="#fff3e0"
        borderColor="#ff9800"
      />
    </div>
  ),
};

export const RolesGuardExample: Story = {
  render: () => (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h2>👥 Roles Guard</h2>
      
      <CodeExample
        title="Implementação do Roles Guard"
        code={`// guards/roles.guard.ts
import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  
  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );
    
    if (!requiredRoles) {
      return true;
    }
    
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    
    if (!user) {
      throw new ForbiddenException('Usuário não autenticado');
    }
    
    const userRoles = user.roles.map(role => role.name);
    const hasRole = requiredRoles.some(requiredRole =>
      userRoles.includes(requiredRole),
    );
    
    if (!hasRole) {
      throw new ForbiddenException(
        \`Acesso negado. Roles necessárias: \${requiredRoles.join(', ')}\`
      );
    }
    
    return true;
  }
}`}
        backgroundColor="#f0f8ff"
        borderColor="#2196f3"
      />
      
      <CodeExample
        title="Decorator de Roles"
        code={`// decorators/roles.decorator.ts
import { SetMetadata } from '@nestjs/common';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);`}
        backgroundColor="#e8f5e8"
        borderColor="#4caf50"
      />
      
      <CodeExample
        title="Uso Combinado"
        code={`// controllers/admin.controller.ts
import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { RolesGuard } from '../guards/roles.guard';
import { Roles } from '../decorators/roles.decorator';

@Controller('admin')
@UseGuards(JwtAuthGuard, RolesGuard)
export class AdminController {
  @Get('dashboard')
  @Roles('admin', 'webadmin')
  getDashboard() {
    return { message: 'Dashboard administrativo' };
  }
  
  @Get('users')
  @Roles('admin', 'webadmin', 'gerente')
  getUsers() {
    return { message: 'Lista de usuários' };
  }
}`}
        backgroundColor="#fff3e0"
        borderColor="#ff9800"
      />
    </div>
  ),
};

export const PermissionsGuardExample: Story = {
  render: () => (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h2>🔑 Permissions Guard</h2>
      
      <CodeExample
        title="Implementação do Permissions Guard"
        code={`// guards/permissions.guard.ts
import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PERMISSIONS_KEY } from '../decorators/permissions.decorator';

@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  
  canActivate(context: ExecutionContext): boolean {
    const requiredPermissions = this.reflector.getAllAndOverride<string[]>(
      PERMISSIONS_KEY,
      [context.getHandler(), context.getClass()],
    );
    
    if (!requiredPermissions) {
      return true;
    }
    
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    
    if (!user) {
      throw new ForbiddenException('Usuário não autenticado');
    }
    
    const userPermissions = this.extractUserPermissions(user);
    const hasPermission = requiredPermissions.every(permission =>
      userPermissions.includes(permission),
    );
    
    if (!hasPermission) {
      const missingPermissions = requiredPermissions.filter(
        permission => !userPermissions.includes(permission),
      );
      
      throw new ForbiddenException(
        \`Acesso negado. Permissões necessárias: \${missingPermissions.join(', ')}\`
      );
    }
    
    return true;
  }
  
  private extractUserPermissions(user: any): string[] {
    // Extrair permissões do usuário e suas roles
    const rolePermissions = user.roles.flatMap(role => role.permissions || []);
    const userPermissions = user.permissions || [];
    
    return [...new Set([...rolePermissions, ...userPermissions])];
  }
}`}
        backgroundColor="#f0f8ff"
        borderColor="#2196f3"
      />
      
      <CodeExample
        title="Decorator de Permissões"
        code={`// decorators/permissions.decorator.ts
import { SetMetadata } from '@nestjs/common';

export const PERMISSIONS_KEY = 'permissions';
export const Permissions = (...permissions: string[]) => SetMetadata(PERMISSIONS_KEY, permissions);`}
        backgroundColor="#e8f5e8"
        borderColor="#4caf50"
      />
      
      <CodeExample
        title="Uso com Permissões Granulares"
        code={`// controllers/users.controller.ts
import { Controller, Get, Post, Put, Delete, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { PermissionsGuard } from '../guards/permissions.guard';
import { Permissions } from '../decorators/permissions.decorator';

@Controller('users')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class UsersController {
  @Get()
  @Permissions('users:read')
  getUsers() {
    return { message: 'Lista de usuários' };
  }
  
  @Post()
  @Permissions('users:create')
  createUser() {
    return { message: 'Usuário criado' };
  }
  
  @Put(':id')
  @Permissions('users:update')
  updateUser() {
    return { message: 'Usuário atualizado' };
  }
  
  @Delete(':id')
  @Permissions('users:delete')
  deleteUser() {
    return { message: 'Usuário deletado' };
  }
}`}
        backgroundColor="#fff3e0"
        borderColor="#ff9800"
      />
    </div>
  ),
};

export const DomainAccessGuardExample: Story = {
  render: () => (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h2>🌐 Domain Access Guard</h2>
      
      <CodeExample
        title="Implementação do Domain Access Guard"
        code={`// guards/domain-access.guard.ts
import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { DomainsService } from '../modules/domains/domains.service';
import { ScreensService } from '../modules/screens/screens.service';
import { DOMAIN_KEY, SCREEN_KEY } from '../decorators/domain.decorator';

@Injectable()
export class DomainAccessGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private domainsService: DomainsService,
    private screensService: ScreensService,
  ) {}
  
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    
    if (!user) {
      throw new ForbiddenException('Usuário não autenticado');
    }
    
    // Verificar acesso ao domínio
    const requiredDomain = this.reflector.getAllAndOverride<string>(
      DOMAIN_KEY,
      [context.getHandler(), context.getClass()],
    );
    
    if (requiredDomain) {
      const userRoles = user.roles.map(role => role.name);
      const hasDomainAccess = await this.domainsService.hasAccess(
        requiredDomain,
        userRoles,
      );
      
      if (!hasDomainAccess) {
        throw new ForbiddenException(
          \`Acesso negado ao domínio '\${requiredDomain}'. Usuário não possui permissão.\`
        );
      }
    }
    
    // Verificar acesso à tela
    const requiredScreen = this.reflector.getAllAndOverride<string>(
      SCREEN_KEY,
      [context.getHandler(), context.getClass()],
    );
    
    if (requiredScreen) {
      const userRoles = user.roles.map(role => role.name);
      const userDomains = await this.domainsService.getAccessibleDomains(userRoles);
      const domainNames = userDomains.map(domain => domain.name);
      
      const hasScreenAccess = await this.screensService.hasAccess(
        requiredScreen,
        userRoles,
        domainNames,
      );
      
      if (!hasScreenAccess) {
        throw new ForbiddenException(
          \`Acesso negado à tela '\${requiredScreen}'. Usuário não possui permissão.\`
        );
      }
    }
    
    return true;
  }
}`}
        backgroundColor="#f0f8ff"
        borderColor="#2196f3"
      />
      
      <CodeExample
        title="Decorators de Domínio"
        code={`// decorators/domain.decorator.ts
import { SetMetadata } from '@nestjs/common';

export const DOMAIN_KEY = 'domain';
export const SCREEN_KEY = 'screen';

export const Domain = (domain: string) => SetMetadata(DOMAIN_KEY, domain);
export const Screen = (screen: string) => SetMetadata(SCREEN_KEY, screen);`}
        backgroundColor="#e8f5e8"
        borderColor="#4caf50"
      />
      
      <CodeExample
        title="Uso com Controle de Domínio"
        code={`// controllers/app-specific.controller.ts
import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { DomainAccessGuard } from '../guards/domain-access.guard';
import { Domain, Screen } from '../decorators/domain.decorator';

@Controller('app-specific')
@UseGuards(JwtAuthGuard, DomainAccessGuard)
export class AppSpecificController {
  @Get('dashboard')
  @Domain('systentando-web')
  @Screen('dashboard')
  getDashboard() {
    return { message: 'Dashboard da aplicação web' };
  }
  
  @Get('mobile-data')
  @Domain('systentando-mobile')
  @Screen('mobile-dashboard')
  getMobileData() {
    return { message: 'Dados para aplicativo mobile' };
  }
  
  @Get('admin-panel')
  @Domain('systentando-web')
  @Screen('admin-panel')
  getAdminPanel() {
    return { message: 'Painel administrativo' };
  }
}`}
        backgroundColor="#fff3e0"
        borderColor="#ff9800"
      />
    </div>
  ),
};
