# Sistema de Design Systentando

Um sistema de design moderno, harmonioso e acessível para o ecossistema Systentando.

## 🎨 Visão Geral

O Sistema de Design Systentando foi criado para garantir consistência visual, melhorar a experiência do usuário e acelerar o desenvolvimento através de componentes padronizados e reutilizáveis.

### Características Principais

- ✨ **Moderno e Profissional**: Design contemporâneo com foco na usabilidade
- 🌓 **Suporte a Temas**: Modos claro e escuro nativos
- ♿ **Acessível**: Compatível com WCAG 2.1 AA
- 📱 **Responsivo**: Funciona perfeitamente em todos os dispositivos
- 🎯 **Consistente**: Padrões visuais harmonizados
- 🚀 **Performance**: Otimizado para carregamento rápido

## 🚀 Início Rápido

### Instalação

```bash
npm install
```

### Uso Básico

```tsx
import { Button, Input, Card } from './src/components';
import './src/styles/globals.css';

function App() {
  return (
    <Card>
      <h1>Bem-vindo ao Systentando</h1>
      <Input label="Nome" placeholder="Digite seu nome" />
      <Button variant="primary">Enviar</Button>
    </Card>
  );
}
```

## 🎯 Design Tokens

### Cores

O sistema utiliza uma paleta de cores cuidadosamente selecionada:

#### Cores Primárias
- **Primary**: `#0ea5e9` - Cor principal da marca
- **Secondary**: `#64748b` - Cor de suporte

#### Cores de Estado
- **Success**: `#22c55e` - Sucesso e confirmações
- **Warning**: `#f59e0b` - Avisos e atenção
- **Error**: `#ef4444` - Erros e ações destrutivas

#### Cores Neutras
- **Background**: `#fafafa` (light) / `#0a0a0a` (dark)
- **Surface**: `#ffffff` (light) / `#171717` (dark)
- **Text**: `#171717` (light) / `#fafafa` (dark)

### Tipografia

- **Font Family**: Inter (sistema sans-serif moderno)
- **Font Mono**: JetBrains Mono (código e dados)
- **Tamanhos**: 12px - 72px (escala harmônica)
- **Pesos**: 100 - 900 (suporte completo)

### Espaçamentos

Sistema de espaçamento baseado em múltiplos de 4px:

```css
--space-1: 0.25rem;  /* 4px */
--space-2: 0.5rem;   /* 8px */
--space-3: 0.75rem;  /* 12px */
--space-4: 1rem;     /* 16px */
--space-6: 1.5rem;   /* 24px */
--space-8: 2rem;     /* 32px */
```

## 🧩 Componentes

### Button

Componente versátil com múltiplas variantes e estados.

```tsx
// Variantes
<Button variant="primary">Primário</Button>
<Button variant="secondary">Secundário</Button>
<Button variant="outline">Contorno</Button>
<Button variant="ghost">Fantasma</Button>
<Button variant="danger">Perigo</Button>

// Tamanhos
<Button size="sm">Pequeno</Button>
<Button size="md">Médio</Button>
<Button size="lg">Grande</Button>

// Estados
<Button isLoading>Carregando...</Button>
<Button disabled>Desabilitado</Button>

// Com ícones
<Button leftIcon={<Icon />}>Com Ícone</Button>
```

### Input

Campo de entrada padronizado com suporte a validação.

```tsx
// Variantes
<Input variant="default" />
<Input variant="filled" />
<Input variant="outline" />

// Com validação
<Input 
  label="Email"
  error="Email inválido"
  helperText="Digite um email válido"
/>

// Com ícones
<Input 
  leftIcon={<SearchIcon />}
  placeholder="Buscar..."
/>
```

### Card

Contêiner flexível para organizar conteúdo.

```tsx
<Card variant="elevated" shadow="md">
  <CardHeader 
    title="Título do Card"
    subtitle="Subtítulo"
    action={<Button size="sm">Ação</Button>}
  />
  <CardContent>
    <p>Conteúdo do card...</p>
  </CardContent>
  <CardFooter align="between">
    <span>Informação</span>
    <Button>Confirmar</Button>
  </CardFooter>
</Card>
```

## 🌓 Sistema de Temas

### Configuração

O sistema suporta temas claro e escuro automaticamente:

```tsx
// Alternar tema programaticamente
document.documentElement.setAttribute('data-theme', 'dark');

// Detectar preferência do sistema
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
```

### Usando CSS Custom Properties

```css
.meu-componente {
  background-color: var(--color-surface);
  color: var(--color-text);
  border: 1px solid var(--color-border);
  padding: var(--space-4);
  border-radius: var(--radius-md);
}
```

## 📱 Responsividade

### Breakpoints

```css
--breakpoint-xs: 475px;
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
--breakpoint-2xl: 1536px;
```

### Classes Utilitárias

```css
.container { max-width: 1280px; margin: 0 auto; }
.flex { display: flex; }
.flex-col { flex-direction: column; }
.items-center { align-items: center; }
.justify-center { justify-content: center; }
.gap-4 { gap: var(--space-4); }
```

## ♿ Acessibilidade

### Princípios

- **Contraste**: Mínimo 4.5:1 para texto normal
- **Foco**: Indicadores visuais claros
- **Navegação**: Suporte completo ao teclado
- **Semântica**: HTML semântico correto
- **ARIA**: Atributos apropriados quando necessário

### Implementação

```tsx
// Exemplo com acessibilidade
<Button 
  aria-label="Fechar modal"
  aria-expanded={isOpen}
  aria-controls="modal-content"
>
  <CloseIcon aria-hidden="true" />
</Button>
```

## 🛠️ Desenvolvimento

### Estrutura de Arquivos

```
src/
├── styles/
│   ├── design-tokens.js     # Tokens do design system
│   ├── themes.js           # Configuração de temas
│   └── globals.css         # Estilos globais
├── components/
│   ├── Button.tsx          # Componente Button
│   ├── Input.tsx           # Componente Input
│   ├── Card.tsx            # Componente Card
│   └── index.ts            # Exportações
└── stories/
    └── DesignSystem.stories.tsx
```

### Executar Storybook

```bash
npm run storybook
```

### Convenções

#### Nomenclatura
- **Componentes**: PascalCase (`Button`, `CardHeader`)
- **Props**: camelCase (`variant`, `isLoading`)
- **CSS Variables**: kebab-case (`--color-primary`, `--space-4`)

#### Estrutura de Componentes
```tsx
export interface ComponentProps {
  variant?: string;
  size?: string;
  className?: string;
  children?: React.ReactNode;
}

export const Component: React.FC<ComponentProps> = ({
  variant = 'default',
  size = 'md',
  className = '',
  children,
  ...props
}) => {
  // Lógica do componente
  return (
    <div className={`base-styles ${variant} ${size} ${className}`} {...props}>
      {children}
    </div>
  );
};
```

## 📚 Recursos Adicionais

### Links Úteis

- [Storybook - Componentes](http://localhost:6006)
- [Figma - Design System](#) (em breve)
- [Documentação da API](#) (em breve)

### Contribuindo

1. Clone o repositório
2. Instale as dependências: `npm install`
3. Execute o Storybook: `npm run storybook`
4. Faça suas alterações
5. Teste em ambos os temas (claro/escuro)
6. Submeta um pull request

### Versionamento

Seguimos [Semantic Versioning](https://semver.org/):
- **MAJOR**: Mudanças incompatíveis na API
- **MINOR**: Novas funcionalidades compatíveis
- **PATCH**: Correções de bugs

### Suporte

Para dúvidas ou sugestões:
- 📧 Email: design-system@systentando.com
- 💬 Slack: #design-system
- 🐛 Issues: GitHub Issues

---

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

**Versão Atual**: 1.0.0  
**Última Atualização**: Janeiro 2025  
**Mantido por**: Equipe Systentando

---

> 💡 **Dica**: Use sempre os design tokens (CSS custom properties) em vez de valores hardcoded para garantir consistência e facilitar a manutenção.