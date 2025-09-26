import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button, Input, Card, CardHeader, CardContent, CardFooter } from '../components';
import '../styles/globals.css';

// Componente wrapper para demonstração
const DesignSystemShowcase = () => {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light');
  
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <div>
      <h1>Design System</h1>
      <p>Este é o design system do Systentando.</p>
      <Button>Clique aqui</Button>
      <Input placeholder="Digite algo" />
      
    </div>
  );
};

const meta = {
  title: 'Design System/Overview',
  component: DesignSystemShowcase,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Visão geral completa do sistema de design com todos os componentes, cores, tipografia e espaçamentos padronizados.',
      },
    },
  },
} satisfies Meta<typeof DesignSystemShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  args: {},
};

export const LightTheme: Story = {
  args: {},
  parameters: {
    backgrounds: { default: 'light' },
  },
};

export const DarkTheme: Story = {
  args: {},
  parameters: {
    backgrounds: { default: 'dark' },
  },
  decorators: [
    (Story) => {
      React.useEffect(() => {
        document.documentElement.setAttribute('data-theme', 'dark');
        return () => {
          document.documentElement.setAttribute('data-theme', 'light');
        };
      }, []);
      return <Story />;
    },
  ],
};