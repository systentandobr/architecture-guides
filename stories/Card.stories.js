import { Card } from '../src/components/demo/Card';

export default {
  title: 'Systentando Design/Card',
  component: Card,
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#121212' },
        { name: 'light', value: '#ffffff' },
      ],
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'glassmorphism', 'neon', 'arena', 'gaming'],
    },
    theme: {
      control: { type: 'select' },
      options: ['light', 'dark'],
    },
    glow: {
      control: { type: 'boolean' },
    },
    interactive: {
      control: { type: 'boolean' },
    },
  },
  tags: ['autodocs'],
};

// Template base
const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <div>
      <h3 style={{ margin: 0, marginBottom: '1rem', color: '#ffffff' }}>
        Default Card
      </h3>
      <p style={{ margin: 0, color: '#cccccc', lineHeight: 1.6 }}>
        Este é um card padrão com o novo design system inspirado no systentando.com.
        Apresenta bordas arredondadas e um design limpo e moderno.
      </p>
    </div>
  ),
  variant: 'default',
  theme: 'dark',
  glow: false,
  interactive: false,
};

export const Glassmorphism = Template.bind({});
Glassmorphism.args = {
  children: (
    <div>
      <h3 style={{ margin: 0, marginBottom: '1rem', color: '#ffffff' }}>
        🌟 Glassmorphism Card
      </h3>
      <p style={{ margin: 0, color: '#cccccc', lineHeight: 1.6 }}>
        Card com efeito glassmorphism, apresentando fundo translúcido, 
        backdrop blur e bordas com glow sutil. Perfeito para interfaces modernas.
      </p>
    </div>
  ),
  variant: 'glassmorphism',
  theme: 'dark',
  glow: true,
  interactive: true,
};

export const Neon = Template.bind({});
Neon.args = {
  children: (
    <div>
      <h3 style={{ margin: 0, marginBottom: '1rem', color: '#00FFC8' }}>
        ⚡ Neon Card
      </h3>
      <p style={{ margin: 0, color: '#cccccc', lineHeight: 1.6 }}>
        Card com efeitos neon intensos, bordas brilhantes e cores vibrantes.
        Ideal para destacar conteúdo importante ou call-to-actions.
      </p>
    </div>
  ),
  variant: 'neon',
  theme: 'dark',
  glow: true,
  interactive: true,
};

export const Arena = Template.bind({});
Arena.args = {
  children: (
    <div>
      <h3 style={{ margin: 0, marginBottom: '1rem', color: '#00FFC8' }}>
        🏆 Arena Card
      </h3>
      <p style={{ margin: 0, color: '#cccccc', lineHeight: 1.6 }}>
        Card temático da "Arena dos Devs" com cores e efeitos específicos
        do ecosistema systentando. Perfeito para elementos gamificados.
      </p>
    </div>
  ),
  variant: 'arena',
  theme: 'dark',
  glow: true,
  interactive: true,
};

export const Gaming = Template.bind({});
Gaming.args = {
  children: (
    <div>
      <h3 style={{ margin: 0, marginBottom: '1rem', color: '#ffffff' }}>
        🎮 Gaming Card
      </h3>
      <p style={{ margin: 0, color: '#cccccc', lineHeight: 1.6 }}>
        Card com tema gamer completo, incluindo gradientes complexos de fundo,
        efeitos visuais avançados e elementos que remetem ao universo dos jogos.
      </p>
    </div>
  ),
  variant: 'gaming',
  theme: 'dark',
  glow: true,
  interactive: true,
};

export const Interactive = Template.bind({});
Interactive.args = {
  children: (
    <div>
      <h3 style={{ margin: 0, marginBottom: '1rem', color: '#ffffff' }}>
        🖱️ Card Interativo
      </h3>
      <p style={{ margin: 0, color: '#cccccc', lineHeight: 1.6 }}>
        Passe o mouse sobre este card para ver os efeitos de hover.
        Inclui animações suaves e mudanças visuais que tornam a interface mais envolvente.
      </p>
    </div>
  ),
  variant: 'glassmorphism',
  theme: 'dark',
  glow: false,
  interactive: true,
};

export const LightTheme = Template.bind({});
LightTheme.args = {
  children: (
    <div>
      <h3 style={{ margin: 0, marginBottom: '1rem', color: '#1a1a1a' }}>
        ☀️ Light Theme Card
      </h3>
      <p style={{ margin: 0, color: '#64748b', lineHeight: 1.6 }}>
        Versão em tema claro do card, mantendo os efeitos visuais mas
        adaptando as cores para fundos claros. Versátil e acessível.
      </p>
    </div>
  ),
  variant: 'default',
  theme: 'light',
  glow: true,
  interactive: true,
};

export const AllVariants = () => (
  <div style={{ 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
    gap: '2rem',
    padding: '2rem',
    background: '#121212',
    minHeight: '100vh'
  }}>
    <Card variant="default" theme="dark" glow interactive>
      <h4 style={{ margin: '0 0 1rem 0', color: '#ffffff' }}>Default</h4>
      <p style={{ margin: 0, color: '#cccccc', fontSize: '0.9rem' }}>
        Card padrão com design limpo
      </p>
    </Card>

    <Card variant="glassmorphism" theme="dark" glow interactive>
      <h4 style={{ margin: '0 0 1rem 0', color: '#ffffff' }}>Glassmorphism</h4>
      <p style={{ margin: 0, color: '#cccccc', fontSize: '0.9rem' }}>
        Efeito de vidro translúcido
      </p>
    </Card>

    <Card variant="neon" theme="dark" glow interactive>
      <h4 style={{ margin: '0 0 1rem 0', color: '#00FFC8' }}>Neon</h4>
      <p style={{ margin: 0, color: '#cccccc', fontSize: '0.9rem' }}>
        Bordas e efeitos neon intensos
      </p>
    </Card>

    <Card variant="arena" theme="dark" glow interactive>
      <h4 style={{ margin: '0 0 1rem 0', color: '#00FFC8' }}>Arena</h4>
      <p style={{ margin: 0, color: '#cccccc', fontSize: '0.9rem' }}>
        Tema Arena dos Devs
      </p>
    </Card>

    <Card variant="gaming" theme="dark" glow interactive>
      <h4 style={{ margin: '0 0 1rem 0', color: '#ffffff' }}>Gaming</h4>
      <p style={{ margin: 0, color: '#cccccc', fontSize: '0.9rem' }}>
        Gradientes e tema gamer
      </p>
    </Card>
  </div>
);

AllVariants.parameters = {
  layout: 'fullscreen',
};