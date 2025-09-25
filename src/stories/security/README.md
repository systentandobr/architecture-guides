# Security Stories - Melhorias de Contraste e Legibilidade

## Problema Identificado
Os stories de segurança apresentavam problemas graves de contraste entre texto e fundo, tornando a leitura muito difícil, especialmente em temas escuros.

## Soluções Implementadas

### 1. **Sistema de Temas Global**
- Criado arquivo `src/stories/security/styles/theme.css` com variáveis CSS para temas claro e escuro
- Implementado sistema de variáveis CSS que se adapta automaticamente ao tema
- Melhor contraste garantido para todos os elementos

### 2. **Classes CSS Específicas para Contraste**
- `.security-container`: Container principal com fundo e texto otimizados
- `.security-title`: Títulos com contraste máximo
- `.security-subtitle`: Subtítulos com boa legibilidade
- `.security-description`: Texto descritivo com contraste adequado
- `.security-text`: Texto geral com legibilidade garantida
- `.security-high-contrast`: Texto com contraste máximo
- `.security-code`: Blocos de código com fundo escuro e texto claro

### 3. **Componentes Atualizados**
Todos os componentes foram atualizados para usar as classes CSS com melhor contraste:

- **SecurityOverview**: Títulos e descrições com contraste otimizado
- **CodeExample**: Blocos de código com fundo escuro e texto claro
- **SecurityLayers**: Cards com bordas e fundos que respeitam o tema
- **ActorsGrid**: Grid de atores com texto legível
- **AuthFlow**: Fluxos de autenticação com melhor visualização

### 4. **Configuração Global do Storybook**
- Atualizado `.storybook/preview.jsx` para importar automaticamente o CSS de tema
- Aplicado tema escuro por padrão com `data-theme="dark"`
- Configurado decorador global para garantir consistência

## Benefícios das Melhorias

### ✅ **Contraste Otimizado**
- Texto principal: `#ffffff` sobre fundo escuro
- Texto secundário: `#e9ecef` sobre fundo escuro
- Texto com contraste máximo: `#ffffff` com peso 500

### ✅ **Legibilidade Garantida**
- Tamanhos de fonte adequados (1rem para texto, 1.5rem para subtítulos)
- Line-height otimizado (1.6 para texto corrido)
- Espaçamento consistente entre elementos

### ✅ **Acessibilidade Melhorada**
- Contraste mínimo de 4.5:1 para texto normal
- Contraste mínimo de 3:1 para texto grande
- Foco visível para elementos interativos

### ✅ **Responsividade**
- Layout adaptável para diferentes tamanhos de tela
- Padding e margens otimizados para mobile

## Como Usar

### Para Novos Componentes
```tsx
import '../styles/theme.css';

export const MeuComponente = () => {
  return (
    <div className="security-container">
      <h1 className="security-title">Título Principal</h1>
      <p className="security-description">Descrição com bom contraste</p>
      <div className="security-card">
        <h3 className="security-high-contrast">Subtítulo</h3>
        <p className="security-text">Texto legível</p>
      </div>
    </div>
  );
};
```

### Para Blocos de Código
```tsx
<pre className="security-code">
  <code>{codigo}</code>
</pre>
```

## Variáveis CSS Disponíveis

### Cores do Tema
- `--security-bg-primary`: Fundo principal
- `--security-bg-secondary`: Fundo secundário
- `--security-text-primary`: Texto principal
- `--security-text-secondary`: Texto secundário
- `--security-border`: Bordas
- `--security-accent`: Cor de destaque

### Classes Utilitárias
- `.security-high-contrast`: Contraste máximo
- `.security-muted`: Texto discreto
- `.security-alert-*`: Alertas coloridos
- `.security-button`: Botões estilizados

## Resultado Final

✅ **Texto totalmente legível** em todos os temas
✅ **Contraste otimizado** para acessibilidade
✅ **Consistência visual** em todos os stories
✅ **Manutenibilidade** com sistema de variáveis CSS
✅ **Responsividade** para diferentes dispositivos

O problema de legibilidade foi completamente resolvido, garantindo uma experiência de leitura excelente em todos os stories de segurança.
