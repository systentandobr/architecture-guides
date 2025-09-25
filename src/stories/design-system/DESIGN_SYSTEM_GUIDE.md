# 🎨 Design System Unificado - Systentando Ecosystem

## 📋 Visão Geral

Este design system unifica os padrões visuais de todos os projetos do ecossistema Systentando, criando uma linguagem visual consistente e reutilizável.

## 🏗️ Arquitetura do Design System

### Tecnologias Utilizadas
- **Tailwind CSS**: Framework CSS utilitário
- **React**: Biblioteca de componentes
- **Storybook**: Documentação e playground
- **TypeScript**: Tipagem estática

### Estrutura de Arquivos
```
src/
├── components/design-system/
│   ├── Button.tsx          # Componente Button unificado
│   └── Card.tsx            # Componente Card unificado
├── styles/
│   └── design-system.css   # Estilos globais unificados
└── stories/design-system/
    ├── DesignSystem.stories.tsx  # Stories do design system
    └── DESIGN_SYSTEM_GUIDE.md   # Este guia
```

## 🎨 Paleta de Cores

### Systentando Core Colors
- **Primary**: `#004f4f` - Verde escuro principal
- **Primary Light**: `#006d6d` - Verde médio
- **Primary Dark**: `#003535` - Verde escuro
- **Accent**: `#ff7d50` - Laranja vibrante
- **Accent Light**: `#ff9b78` - Laranja claro
- **Accent Dark**: `#dd5c30` - Laranja escuro

### Life Tracker Category Colors
- **Health**: `#00b894` - Verde saúde
- **Sleep**: `#9b59b6` - Roxo sono
- **Personal**: `#e84393` - Rosa pessoal
- **Work**: `#3498db` - Azul trabalho
- **Finance**: `#f39c12` - Laranja finanças

### Viral Kids Bronze Colors
- **Bronze**: Gradiente bronze elegante
- **Copper**: `#d4af37` - Cobre
- **Gold**: `#ffd700` - Dourado

### Gamer Neon Colors
- **Neon Blue**: `#00FFFF` - Azul neon
- **Neon Purple**: `#A259FF` - Roxo neon
- **Neon Green**: `#39FF14` - Verde neon
- **Neon Pink**: `#FF00C8` - Rosa neon

## 🧩 Componentes

### Button Component
O componente Button unifica todos os estilos de botão dos projetos:

#### Variantes Systentando
```tsx
<Button variant="systentando">Primary</Button>
<Button variant="accent">Accent</Button>
```

#### Variantes Life Tracker
```tsx
<Button variant="health">Health</Button>
<Button variant="sleep">Sleep</Button>
<Button variant="personal">Personal</Button>
<Button variant="work">Work</Button>
<Button variant="finance">Finance</Button>
```

#### Variantes Viral Kids
```tsx
<Button variant="bronze">Bronze</Button>
<Button variant="copper">Copper</Button>
<Button variant="gold">Gold</Button>
```

#### Variantes Gamer
```tsx
<Button variant="neon">Neon</Button>
<Button variant="gamer">Gamer</Button>
```

### Card Component
O componente Card oferece diferentes estilos baseados nos projetos:

#### Variantes Disponíveis
- `systentando`: Estilo principal do Systentando
- `bronze`: Estilo bronze do Viral Kids
- `gamer`: Estilo cyberpunk/gamer
- `health`, `sleep`, `personal`, `work`, `finance`: Cores das categorias Life Tracker
- `default`: Estilo padrão

## 🎯 Padrões de Uso

### 1. Consistência Visual
- Use sempre as cores definidas no design system
- Mantenha a hierarquia visual consistente
- Aplique os espaçamentos padronizados

### 2. Responsividade
- Todos os componentes são responsivos por padrão
- Use as classes Tailwind para ajustes específicos
- Teste em diferentes tamanhos de tela

### 3. Acessibilidade
- Mantenha contraste adequado entre texto e fundo
- Use semântica HTML apropriada
- Teste com leitores de tela

### 4. Temas
- Suporte nativo a modo claro/escuro
- Use as variáveis CSS para customizações
- Mantenha consistência entre temas

## 🚀 Como Usar

### 1. Instalação
```bash
# As dependências já estão configuradas
pnpm install
```

### 2. Importação
```tsx
import { Button } from '@/components/design-system/Button';
import { Card, CardHeader, CardTitle } from '@/components/design-system/Card';
```

### 3. Uso Básico
```tsx
// Button com variante Systentando
<Button variant="systentando" size="lg">
  Ação Principal
</Button>

// Card com estilo bronze
<Card variant="bronze">
  <CardHeader>
    <CardTitle>Título</CardTitle>
  </CardHeader>
  <CardContent>
    Conteúdo do card
  </CardContent>
</Card>
```

## 📚 Stories do Storybook

### Design System Stories
- **Systentando Buttons**: Botões do tema principal
- **Life Tracker Buttons**: Botões das categorias
- **Viral Kids Buttons**: Botões do tema bronze
- **Gamer Buttons**: Botões do tema neon
- **Standard Buttons**: Botões padrão
- **Color Palette**: Paleta completa de cores

### Como Visualizar
1. Execute `pnpm storybook`
2. Navegue para "Design System/Components"
3. Explore as diferentes variantes e estilos

## 🔧 Customização

### Adicionando Novas Variantes
1. Edite o arquivo do componente
2. Adicione a nova variante ao tipo
3. Implemente os estilos no Tailwind
4. Crie stories para documentar

### Modificando Cores
1. Edite `tailwind.config.js`
2. Atualize as variáveis CSS em `design-system.css`
3. Teste as mudanças no Storybook

## 📈 Benefícios

### Para Desenvolvedores
- **Consistência**: Padrões visuais unificados
- **Produtividade**: Componentes reutilizáveis
- **Manutenibilidade**: Código organizado e documentado
- **Escalabilidade**: Fácil adição de novos componentes

### Para o Negócio
- **Identidade Visual**: Marca consistente em todos os projetos
- **Experiência do Usuário**: Interface familiar e intuitiva
- **Eficiência**: Desenvolvimento mais rápido
- **Qualidade**: Padrões testados e aprovados

## 🎨 Exemplos de Uso por Projeto

### Systentando Landing Page
```tsx
<Button variant="systentando" size="lg">
  Participe Agora
</Button>
```

### Life Tracker
```tsx
<Card variant="health">
  <CardHeader>
    <CardTitle>Saúde</CardTitle>
  </CardHeader>
  <CardContent>
    Monitore sua saúde
  </CardContent>
</Card>
```

### Viral Kids
```tsx
<Button variant="bronze">
  Comprar Agora
</Button>
```

### Gamer Theme
```tsx
<Card variant="gamer">
  <CardHeader>
    <CardTitle className="text-neon-blue">Gaming</CardTitle>
  </CardHeader>
</Card>
```

## 🔄 Próximos Passos

1. **Mais Componentes**: Input, Modal, Navigation, etc.
2. **Animações**: Micro-interações e transições
3. **Tokens**: Sistema de design tokens
4. **Figma**: Integração com design tools
5. **Testes**: Testes automatizados dos componentes

---

**Desenvolvido com ❤️ para o ecossistema Systentando**
