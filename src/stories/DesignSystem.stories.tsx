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
    <div className="p-8 min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center border-b border-[var(--color-border)] pb-8">
          <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
            Sistema de Design Systentando
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] mb-6">
            Componentes padronizados e harmonizados para uma experiência consistente
          </p>
          <Button onClick={toggleTheme} variant="outline">
            {theme === 'light' ? '🌙 Modo Escuro' : '☀️ Modo Claro'}
          </Button>
        </div>

        {/* Colors Palette */}
        <section>
          <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-6">Paleta de Cores</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card padding="sm">
              <div className="w-full h-16 rounded mb-2" style={{ backgroundColor: 'var(--color-primary)' }}></div>
              <p className="text-sm font-medium text-[var(--color-text)]">Primary</p>
              <p className="text-xs text-[var(--color-text-muted)]">var(--color-primary)</p>
            </Card>
            <Card padding="sm">
              <div className="w-full h-16 rounded mb-2" style={{ backgroundColor: 'var(--color-secondary)' }}></div>
              <p className="text-sm font-medium text-[var(--color-text)]">Secondary</p>
              <p className="text-xs text-[var(--color-text-muted)]">var(--color-secondary)</p>
            </Card>
            <Card padding="sm">
              <div className="w-full h-16 rounded mb-2" style={{ backgroundColor: 'var(--color-success)' }}></div>
              <p className="text-sm font-medium text-[var(--color-text)]">Success</p>
              <p className="text-xs text-[var(--color-text-muted)]">var(--color-success)</p>
            </Card>
            <Card padding="sm">
              <div className="w-full h-16 rounded mb-2" style={{ backgroundColor: 'var(--color-error)' }}></div>
              <p className="text-sm font-medium text-[var(--color-text)]">Error</p>
              <p className="text-xs text-[var(--color-text-muted)]">var(--color-error)</p>
            </Card>
          </div>
        </section>

        {/* Typography */}
        <section>
          <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-6">Tipografia</h2>
          <Card>
            <div className="space-y-4">
              <div>
                <h1 className="m-0">Heading 1 - 2.25rem</h1>
                <p className="text-sm text-[var(--color-text-muted)] m-0">font-size: var(--font-size-4xl)</p>
              </div>
              <div>
                <h2 className="m-0">Heading 2 - 1.875rem</h2>
                <p className="text-sm text-[var(--color-text-muted)] m-0">font-size: var(--font-size-3xl)</p>
              </div>
              <div>
                <h3 className="m-0">Heading 3 - 1.5rem</h3>
                <p className="text-sm text-[var(--color-text-muted)] m-0">font-size: var(--font-size-2xl)</p>
              </div>
              <div>
                <p className="m-0">Body Text - 1rem</p>
                <p className="text-sm text-[var(--color-text-muted)] m-0">font-size: var(--font-size-base)</p>
              </div>
              <div>
                <p className="text-sm m-0">Small Text - 0.875rem</p>
                <p className="text-sm text-[var(--color-text-muted)] m-0">font-size: var(--font-size-sm)</p>
              </div>
            </div>
          </Card>
        </section>

        {/* Buttons */}
        <section>
          <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-6">Botões</h2>
          <div className="space-y-6">
            
            {/* Button Variants */}
            <Card>
              <CardHeader title="Variantes" />
              <CardContent>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="danger">Danger</Button>
                </div>
              </CardContent>
            </Card>

            {/* Button Sizes */}
            <Card>
              <CardHeader title="Tamanhos" />
              <CardContent>
                <div className="flex items-center gap-4">
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                </div>
              </CardContent>
            </Card>

            {/* Button States */}
            <Card>
              <CardHeader title="Estados" />
              <CardContent>
                <div className="flex flex-wrap gap-4">
                  <Button>Normal</Button>
                  <Button isLoading>Loading</Button>
                  <Button disabled>Disabled</Button>
                  <Button leftIcon={<span>📧</span>}>With Icon</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Inputs */}
        <section>
          <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-6">Campos de Input</h2>
          <div className="space-y-6">
            
            {/* Input Variants */}
            <Card>
              <CardHeader title="Variantes" />
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Input variant="default" placeholder="Default variant" label="Default" />
                  <Input variant="filled" placeholder="Filled variant" label="Filled" />
                  <Input variant="outline" placeholder="Outline variant" label="Outline" />
                </div>
              </CardContent>
            </Card>

            {/* Input Sizes */}
            <Card>
              <CardHeader title="Tamanhos" />
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Input size="sm" placeholder="Small size" label="Small" />
                  <Input size="md" placeholder="Medium size" label="Medium" />
                  <Input size="lg" placeholder="Large size" label="Large" />
                </div>
              </CardContent>
            </Card>

            {/* Input States */}
            <Card>
              <CardHeader title="Estados" />
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input 
                    placeholder="Campo normal" 
                    label="Normal" 
                    helperText="Texto de ajuda"
                  />
                  <Input 
                    placeholder="Campo com erro" 
                    label="Com erro" 
                    error="Este campo é obrigatório"
                  />
                  <Input 
                    placeholder="Campo desabilitado" 
                    label="Desabilitado" 
                    disabled
                  />
                  <Input 
                    placeholder="Com ícone" 
                    label="Com ícone" 
                    leftIcon={<span>🔍</span>}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Cards */}
        <section>
          <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-6">Cards</h2>
          <div className="space-y-6">
            
            {/* Card Variants */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card variant="default">
                <CardContent>
                  <h4 className="m-0 mb-2">Default Card</h4>
                  <p className="m-0 text-sm">Estilo padrão do card</p>
                </CardContent>
              </Card>
              
              <Card variant="outlined">
                <CardContent>
                  <h4 className="m-0 mb-2">Outlined Card</h4>
                  <p className="m-0 text-sm">Card com borda destacada</p>
                </CardContent>
              </Card>
              
              <Card variant="elevated" shadow="md">
                <CardContent>
                  <h4 className="m-0 mb-2">Elevated Card</h4>
                  <p className="m-0 text-sm">Card com elevação</p>
                </CardContent>
              </Card>
              
              <Card variant="filled">
                <CardContent>
                  <h4 className="m-0 mb-2">Filled Card</h4>
                  <p className="m-0 text-sm">Card com fundo preenchido</p>
                </CardContent>
              </Card>
            </div>

            {/* Complete Card Example */}
            <Card shadow="md">
              <CardHeader 
                title="Card Completo"
                subtitle="Exemplo com header, content e footer"
                action={<Button size="sm" variant="outline">Ação</Button>}
              />
              <CardContent>
                <p>
                  Este é um exemplo de card completo com header, content e footer. 
                  Demonstra como os componentes trabalham juntos de forma harmoniosa.
                </p>
                <p className="mb-0">
                  O design system garante consistência visual em todos os elementos.
                </p>
              </CardContent>
              <CardFooter align="between">
                <span className="text-sm text-[var(--color-text-muted)]">Atualizado hoje</span>
                <div className="flex gap-2">
                  <Button size="sm" variant="ghost">Cancelar</Button>
                  <Button size="sm">Confirmar</Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Spacing */}
        <section>
          <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-6">Espaçamentos</h2>
          <Card>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3, 4, 6, 8, 12, 16].map(space => (
                  <div key={space} className="flex items-center gap-4">
                    <div 
                      className="bg-[var(--color-primary)] h-4"
                      style={{ width: `var(--space-${space})` }}
                    ></div>
                    <span className="text-sm font-medium">Space {space}</span>
                    <span className="text-xs text-[var(--color-text-muted)]">var(--space-{space})</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

      </div>
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