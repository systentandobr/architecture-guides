# Configuração do Storybook para o Ecossistema Systentando

Este guia explica como configurar o Storybook para documentar e testar visualmente os componentes do ecossistema Systentando, com foco especial nos componentes de chatbot e na integração com agentes de IA.

## Visão Geral

O Storybook serve como uma ferramenta essencial no desenvolvimento do Systentando, permitindo:

1. **Documentação visual** de componentes de UI
2. **Desenvolvimento isolado** de componentes
3. **Testes visuais** e de interação
4. **Colaboração** entre designers e desenvolvedores

## Instalação

Para configurar o Storybook em um projeto do Systentando:

```bash
# Navegue até a raiz do projeto
cd /caminho/para/projeto

# Instale o Storybook
npx storybook init

# Instale dependências adicionais para o Systentando
npm install --save-dev @storybook/addon-a11y @storybook/addon-designs @storybook/addon-docs
```

## Estrutura de Diretórios

Recomendamos a seguinte estrutura para organizar as stories:

```
src/
└── stories/
    ├── Introduction.stories.mdx    # Página de introdução
    ├── assets/                     # Imagens e recursos
    ├── core/                       # Componentes core
    │   ├── Button.stories.tsx
    │   └── ...
    ├── composites/                 # Componentes compostos
    │   ├── Card.stories.tsx
    │   └── ...
    ├── chatbot/                    # Componentes de chatbot
    │   ├── ChatbotCollector.stories.tsx
    │   ├── ChatMessage.stories.tsx
    │   └── ...
    └── ai/                         # Demonstrações de integração com IA
        ├── AgentResponses.stories.tsx
        └── ...
```

## Configuração Personalizada

### 1. Criar arquivo de configuração principal

```js
// .storybook/main.js
module.exports = {
  "stories": [
    "../src/stories/**/*.stories.mdx",
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "@storybook/addon-designs"
  ],
  "framework": "@storybook/react",
  "staticDirs": ['../public']
}
```

### 2. Configurar temas e decoradores

```js
// .storybook/preview.js
import { ThemeProvider } from '../src/contexts/theme-context';
import { themes } from '../src/styles/themes';
import '../src/styles/globals.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: '#121212',
      },
      {
        name: 'light',
        value: '#ffffff',
      },
    ],
  },
  // Parâmetros para organizar a sidebar
  options: {
    storySort: {
      order: [
        'Introduction',
        'Design System',
        'Core',
        'Composites',
        'Chatbot',
        'AI',
        'Pages',
      ],
    },
  },
}

// Decorador global para aplicar o tema
export const decorators = [
  (Story) => (
    <ThemeProvider theme={themes.dark}>
      <div style={{ margin: '2rem' }}>
        <Story />
      </div>
    </ThemeProvider>
  ),
];
```

### 3. Personalizar interface do Storybook

```js
// .storybook/manager.js
import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';
import systentandoTheme from './systentando-theme';

// Aplica um tema personalizado ao Storybook
addons.setConfig({
  theme: systentandoTheme,
});
```

```js
// .storybook/systentando-theme.js
import { create } from '@storybook/theming';
import logo from './assets/systentando-logo.svg';

export default create({
  base: 'dark',
  
  // Cores da marca
  colorPrimary: '#004f4f',
  colorSecondary: '#ff7d50',

  // UI
  appBg: '#121212',
  appContentBg: '#1e1e1e',
  appBorderColor: '#333333',
  appBorderRadius: 8,

  // Tipografia
  fontBase: '"Inter", sans-serif',
  fontCode: '"JetBrains Mono", monospace',

  // Branding
  brandTitle: 'Systentando UI',
  brandUrl: 'https://systentando.com',
  brandImage: logo,
  brandTarget: '_blank',
});
```

## Criando Stories para o Chatbot

### Componente ChatbotCollector

```tsx
// src/stories/chatbot/ChatbotCollector.stories.tsx
import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ChatbotCollector } from '../../components/chatbot-collector/ChatbotCollector';
import { DataSchema } from '../../components/chatbot-collector/types';

export default {
  title: 'Chatbot/ChatbotCollector',
  component: ChatbotCollector,
  parameters: {
    layout: 'padded',
    // Incluir link para o design no Figma
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/...',
    },
  },
  argTypes: {
    agentType: {
      control: {
        type: 'select',
        options: ['health', 'nutrition', 'finance', 'productivity'],
      },
    },
  },
} as Meta;

// Template básico
const Template: Story = (args) => {
  // Schema exemplo para o componente
  const schema: DataSchema = {
    name: {
      type: 'string',
      required: true,
      description: 'Nome do usuário',
    },
    age: {
      type: 'number',
      required: true,
      description: 'Idade do usuário',
    },
    // Outros campos específicos do domínio
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <ChatbotCollector
        {...args}
        dataSchema={schema}
      />
    </div>
  );
};

// Variantes do componente

export const HealthAgentExample = Template.bind({});
HealthAgentExample.args = {
  agentType: 'health',
  flowId: 'health-assessment',
  welcomeMessage: 'Olá! Vou ajudar a coletar algumas informações sobre sua saúde. Como está se sentindo hoje?',
};

export const FinanceAgentExample = Template.bind({});
FinanceAgentExample.args = {
  agentType: 'finance',
  flowId: 'finance-assessment',
  welcomeMessage: 'Olá! Vamos falar sobre seus objetivos financeiros para personalizar sua experiência.',
};

// Exemplo com simulação de interação
export const WithInteraction = Template.bind({});
WithInteraction.args = {
  agentType: 'productivity',
  flowId: 'productivity-flow',
  welcomeMessage: 'Vamos entender melhor sua produtividade.'
};
WithInteraction.play = async ({ canvasElement }) => {
  // Simular interação do usuário
  const canvas = within(canvasElement);
  
  // Esperar que o componente seja renderizado
  await waitFor(() => canvas.getByText('Vamos entender melhor sua produtividade.'));
  
  // Encontrar o campo de input
  const input = canvas.getByPlaceholderText('Digite sua mensagem...');
  
  // Digitar uma mensagem
  await userEvent.type(input, 'Tenho problemas para focar no trabalho');
  
  // Clicar no botão de enviar
  const sendButton = canvas.getByRole('button');
  await userEvent.click(sendButton);
  
  // Verificar se a resposta foi recebida
  await waitFor(() => canvas.getByText(/Entendo que você está tendo dificuldades/));
};
```

### Componente de Mensagem do Chat

```tsx
// src/stories/chatbot/ChatMessage.stories.tsx
import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ChatbotMessage } from '../../components/chatbot-collector/ChatbotMessage';
import { ChatMessageProps, MessageRole } from '../../components/chatbot-collector/types';

export default {
  title: 'Chatbot/ChatMessage',
  component: ChatbotMessage,
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'dark',
    },
  },
  argTypes: {
    message: { control: 'object' },
    onSuggestedPromptClick: { action: 'suggestedPromptClicked' },
  },
} as Meta;

const Template: Story<ChatMessageProps> = (args) => <ChatbotMessage {...args} />;

export const UserMessage = Template.bind({});
UserMessage.args = {
  message: {
    id: 'user-1',
    role: MessageRole.USER,
    content: 'Olá, gostaria de saber mais sobre como melhorar minha produtividade.',
    timestamp: new Date(),
  },
};

export const AssistantMessage = Template.bind({});
AssistantMessage.args = {
  message: {
    id: 'assistant-1',
    role: MessageRole.ASSISTANT,
    content: 'Olá! Posso ajudar com dicas de produtividade. Para começar, você poderia me contar um pouco sobre sua rotina atual?',
    timestamp: new Date(),
  },
};

export const AssistantMessageWithSuggestions = Template.bind({});
AssistantMessageWithSuggestions.args = {
  message: {
    id: 'assistant-2',
    role: MessageRole.ASSISTANT,
    content: 'Para melhorar sua produtividade, precisamos entender alguns aspectos da sua rotina. Você pode me contar mais sobre:',
    timestamp: new Date(),
    suggestedPrompts: [
      'Como é minha rotina de trabalho',
      'Quais são minhas maiores distrações',
      'Em que horário me sinto mais produtivo'
    ],
  },
};

export const LongMessage = Template.bind({});
LongMessage.args = {
  message: {
    id: 'assistant-3',
    role: MessageRole.ASSISTANT,
    content: `Uma boa produtividade está relacionada a diversos fatores, como organização, foco, energia e motivação.

Alguns aspectos importantes a considerar:
- Rotina bem estruturada
- Pausas regulares
- Ambiente de trabalho adequado
- Boa alimentação e hidratação
- Sono de qualidade

Poderia me contar um pouco mais sobre qual desses aspectos você sente que precisa de mais atenção?`,
    timestamp: new Date(),
  },
};

export const ErrorMessage = Template.bind({});
ErrorMessage.args = {
  message: {
    id: 'assistant-error',
    role: MessageRole.ASSISTANT,
    content: 'Desculpe, tive um problema ao processar sua solicitação. Poderia tentar novamente?',
    timestamp: new Date(),
  },
};
```

### Integração com Agentes de IA

```tsx
// src/stories/ai/AgentResponses.stories.tsx
import React from 'react';
import { Meta, Story } from '@storybook/react';
import { AgentResponseDemo } from '../../components/demo/AgentResponseDemo';

export default {
  title: 'AI/AgentResponses',
  component: AgentResponseDemo,
  parameters: {
    layout: 'padded',
  },
} as Meta;

// Componente de demonstração para simular respostas de agentes
const Template: Story = (args) => <AgentResponseDemo {...args} />;

export const HealthAgentDemo = Template.bind({});
HealthAgentDemo.args = {
  agentType: 'health',
  query: 'Como posso melhorar minha qualidade de sono?',
  context: {
    userProfile: {
      age: 35,
      sleepHours: 6,
      screenTimeBeforeBed: 2,
      exerciseFrequency: 'rare'
    }
  }
};

export const MetaAgentDemo = Template.bind({});
MetaAgentDemo.args = {
  agentType: 'meta',
  query: 'Como meus hábitos alimentares podem afetar minha produtividade?',
  context: {
    relevantProducts: ['zen-launcher', 'meu-nutri'],
    userProfile: {
      // Dados do perfil para demonstração
    }
  }
};
```

## Documentação com MDX

Para criar páginas de documentação ricas, utilize MDX:

```mdx
// src/stories/Introduction.stories.mdx
import { Meta, Story, Canvas } from '@storybook/addon-docs';
import { Button } from '../components/ui/Button';

<Meta title="Introduction/Getting Started" />

# Bem-vindo ao Systentando UI

Esta é a documentação oficial dos componentes do ecossistema Systentando.

## Princípios de Design

O sistema de design do Systentando é baseado em três princípios fundamentais:

1. **Modularidade**: Componentes independentes e reutilizáveis
2. **Consistência**: Experiência visual unificada em todos os produtos
3. **Acessibilidade**: Design inclusivo para todos os usuários

## Exemplo de Componente

<Canvas>
  <Story name="Primary Button">
    <Button variant="primary">Botão Primário</Button>
  </Story>
</Canvas>

## Começando

Para utilizar os componentes em seu projeto:

```jsx
import { Button, Card, ChatbotCollector } from '@systentando/ui';

function MyComponent() {
  return (
    <div>
      <Card>
        <h2>Meu Componente</h2>
        <Button>Clique-me</Button>
      </Card>
    </div>
  );
}
```

## Temas por Produto

Cada produto do ecossistema possui sua própria paleta de cores, sempre mantendo consistência com o design system geral:

- **ZEN Launcher**: Foco em produtividade
- **Meu Nutri**: Nutrição e bem-estar
- **Momento do Investimento**: Finanças e investimentos
- **Saúde e Bem-estar**: Fitness e saúde
```

## Executando o Storybook

Para iniciar o Storybook em ambiente de desenvolvimento:

```bash
# Iniciar em modo de desenvolvimento
npm run storybook

# Construir versão estática para deploy
npm run build-storybook
```

O Storybook estará disponível em `http://localhost:6006` por padrão.

## Integração com Testes

O Storybook pode ser integrado com testes para garantir a qualidade dos componentes:

### Testes de Acessibilidade

```js
// .storybook/test-runner.js
module.exports = {
  async preRender(page) {
    // Preparar página para testes
  },
  async postRender(page, context) {
    // Executar testes de acessibilidade em cada story
    const a11yResults = await page.evaluate(() => {
      return axe.run();
    });
    
    // Verificar se há violações de acessibilidade
    expect(a11yResults.violations).toEqual([]);
  },
};
```

### Testes Visuais com Storybook

Para testes de regressão visual, integre com Chromatic:

```bash
# Instalar Chromatic
npm install --save-dev chromatic

# Executar testes visuais
npx chromatic --project-token=<seu-token>
```

## Documentação de Componentes com IA

Para componentes que integram com IA, como o ChatbotCollector, é importante documentar:

1. **Comportamentos Esperados**: Como o componente interage com o LLM
2. **Casos de Uso**: Exemplos práticos de aplicação
3. **Limitações**: O que o componente não é capaz de fazer
4. **Personalização**: Como adaptar para diferentes domínios

Exemplo de documentação para componente de IA:

```mdx
<Meta title="AI/Documentação/ChatbotCollector" />

# ChatbotCollector

O `ChatbotCollector` é um componente de interface conversacional que utiliza LLMs para coletar dados de forma natural, substituindo formulários tradicionais.

## Comportamento de IA

Este componente:
- Adapta suas perguntas com base nas respostas anteriores
- Extrai dados estruturados de conversas naturais
- Mantém contexto ao longo da interação
- Sugere prompts relevantes para o usuário

## Modelo de Integração

O componente segue o padrão MCP (Model-Controller-Prompt):

1. **Model**: Configura e acessa o LLM
2. **Controller**: Gerencia o fluxo e extração de dados
3. **Prompt**: Utiliza templates específicos por domínio

## Casos de Fallback

O componente está preparado para lidar com:
- Falhas na conexão com o LLM
- Respostas imprecisas ou ambíguas
- Usuários que não desejam fornecer certas informações
```

## Dicas para Documentação Efetiva

1. **Organize por Domínio**: Agrupe componentes por produto ou função
2. **Mostre Variações**: Demonstre diferentes estados e configurações
3. **Documente Props**: Liste todas as propriedades com descrições claras
4. **Inclua Exemplos**: Forneça snippets de código para uso comum
5. **Integre com Design**: Vincule ao Figma para referência visual
6. **Teste Interativo**: Use `play` function para demonstrar interação

## Recursos Adicionais

- [Documentação Oficial do Storybook](https://storybook.js.org/docs/react/get-started/introduction)
- [Storybook Addon Docs](https://storybook.js.org/docs/react/writing-docs/introduction)
- [Storybook Interactions](https://storybook.js.org/docs/react/essentials/interactions)
- [Testing com Storybook](https://storybook.js.org/docs/react/writing-tests/introduction)
