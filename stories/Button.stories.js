import { Button } from '../src/components/demo/Button';

export default {
  title: 'Systentando Design/Button',
  component: Button,
  parameters: {
    layout: 'centered',
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
      options: ['primary', 'secondary', 'neon', 'arena', 'gaming', 'ghost'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
    },
    theme: {
      control: { type: 'select' },
      options: ['light', 'dark'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    glow: {
      control: { type: 'boolean' },
    },
  },
  tags: ['autodocs'],
};

// Template base
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Entrar na Arena',
  variant: 'primary',
  size: 'md',
  theme: 'dark',
  glow: true,
  onClick: () => console.log('Button clicked!'),
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Explorar Ecossistema',
  variant: 'secondary',
  size: 'md',
  theme: 'dark',
  glow: false,
};

export const Neon = Template.bind({});
Neon.args = {
  children: 'Neon Effect',
  variant: 'neon',
  size: 'md',
  theme: 'dark',
  glow: true,
};

export const Arena = Template.bind({});
Arena.args = {
  children: '🏆 Arena dos Devs',
  variant: 'arena',
  size: 'lg',
  theme: 'dark',
  glow: true,
};

export const Gaming = Template.bind({});
Gaming.args = {
  children: '🎮 Gaming Mode',
  variant: 'gaming',
  size: 'lg',
  theme: 'dark',
  glow: true,
};

export const Ghost = Template.bind({});
Ghost.args = {
  children: 'Ghost Button',
  variant: 'ghost',
  size: 'md',
  theme: 'dark',
  glow: false,
};

export const Small = Template.bind({});
Small.args = {
  children: 'Small',
  variant: 'primary',
  size: 'sm',
  theme: 'dark',
  glow: true,
};

export const Large = Template.bind({});
Large.args = {
  children: 'Large Button',
  variant: 'primary',
  size: 'lg',
  theme: 'dark',
  glow: true,
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  children: 'Extra Large Button',
  variant: 'primary',
  size: 'xl',
  theme: 'dark',
  glow: true,
};

export const Loading = Template.bind({});
Loading.args = {
  children: 'Carregando...',
  variant: 'primary',
  size: 'md',
  theme: 'dark',
  loading: true,
  glow: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Button',
  variant: 'primary',
  size: 'md',
  theme: 'dark',
  disabled: true,
};

export const LightTheme = Template.bind({});
LightTheme.args = {
  children: 'Light Theme',
  variant: 'primary',
  size: 'md',
  theme: 'light',
  glow: true,
};

// Showcase de todos os tamanhos
export const AllSizes = () => (
  <div style={{ 
    display: 'flex', 
    flexDirection: 'column', 
    gap: '1rem', 
    alignItems: 'center',
    padding: '2rem'
  }}>
    <Button variant="primary" size="sm" theme="dark" glow>
      Small Button
    </Button>
    <Button variant="primary" size="md" theme="dark" glow>
      Medium Button
    </Button>
    <Button variant="primary" size="lg" theme="dark" glow>
      Large Button
    </Button>
    <Button variant="primary" size="xl" theme="dark" glow>
      Extra Large Button
    </Button>
  </div>
);

// Showcase de todas as variantes
export const AllVariants = () => (
  <div style={{ 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
    gap: '1.5rem',
    padding: '2rem',
    background: '#121212',
    minHeight: '100vh',
    alignItems: 'start',
  }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <h4 style={{ color: '#ffffff', margin: 0, textAlign: 'center' }}>Primary</h4>
      <Button variant="primary" theme="dark" glow>
        Entrar na Arena
      </Button>
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <h4 style={{ color: '#ffffff', margin: 0, textAlign: 'center' }}>Secondary</h4>
      <Button variant="secondary" theme="dark" glow>
        Explorar
      </Button>
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <h4 style={{ color: '#ffffff', margin: 0, textAlign: 'center' }}>Neon</h4>
      <Button variant="neon" theme="dark" glow>
        Neon Effect
      </Button>
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <h4 style={{ color: '#ffffff', margin: 0, textAlign: 'center' }}>Arena</h4>
      <Button variant="arena" theme="dark" glow>
        🏆 Arena
      </Button>
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <h4 style={{ color: '#ffffff', margin: 0, textAlign: 'center' }}>Gaming</h4>
      <Button variant="gaming" theme="dark" glow>
        🎮 Gaming
      </Button>
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <h4 style={{ color: '#ffffff', margin: 0, textAlign: 'center' }}>Ghost</h4>
      <Button variant="ghost" theme="dark">
        Ghost
      </Button>
    </div>
  </div>
);

AllVariants.parameters = {
  layout: 'fullscreen',
};

// Showcase de estados
export const AllStates = () => (
  <div style={{ 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
    gap: '1.5rem',
    padding: '2rem',
    background: '#121212',
    minHeight: '100vh',
  }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <h4 style={{ color: '#ffffff', margin: 0, textAlign: 'center' }}>Normal</h4>
      <Button variant="primary" theme="dark" glow>
        Normal Button
      </Button>
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <h4 style={{ color: '#ffffff', margin: 0, textAlign: 'center' }}>Loading</h4>
      <Button variant="primary" theme="dark" glow loading>
        Loading...
      </Button>
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <h4 style={{ color: '#ffffff', margin: 0, textAlign: 'center' }}>Disabled</h4>
      <Button variant="primary" theme="dark" disabled>
        Disabled
      </Button>
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <h4 style={{ color: '#ffffff', margin: 0, textAlign: 'center' }}>With Glow</h4>
      <Button variant="neon" theme="dark" glow>
        Glowing
      </Button>
    </div>
  </div>
);

AllStates.parameters = {
  layout: 'fullscreen',
};
