import { Badge } from '../src/components/demo/Badge';

export default {
  title: 'Systentando Design/Badge',
  component: Badge,
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
      options: ['default', 'arena', 'level', 'early', 'exclusive', 'pioneer', 'success', 'error', 'warning', 'neon'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    theme: {
      control: { type: 'select' },
      options: ['light', 'dark'],
    },
    glow: {
      control: { type: 'boolean' },
    },
    icon: {
      control: { type: 'text' },
    },
  },
  tags: ['autodocs'],
};

// Template base
const Template = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default Badge',
  variant: 'default',
  size: 'md',
  theme: 'dark',
  glow: false,
};

export const Arena = Template.bind({});
Arena.args = {
  children: 'Arena dos Devs',
  variant: 'arena',
  size: 'md',
  theme: 'dark',
  glow: true,
  icon: '🏆',
};

export const Level = Template.bind({});
Level.args = {
  children: 'LVL 1 • BETA',
  variant: 'level',
  size: 'md',
  theme: 'dark',
  glow: true,
  icon: '⭐',
};

export const EarlyAdopter = Template.bind({});
EarlyAdopter.args = {
  children: 'Early Adopter',
  variant: 'early',
  size: 'md',
  theme: 'dark',
  glow: true,
  icon: '🏆',
};

export const ExclusiveAccess = Template.bind({});
ExclusiveAccess.args = {
  children: 'Exclusive Access',
  variant: 'exclusive',
  size: 'md',
  theme: 'dark',
  glow: true,
  icon: '💎',
};

export const Pioneer = Template.bind({});
Pioneer.args = {
  children: 'Pioneer',
  variant: 'pioneer',
  size: 'md',
  theme: 'dark',
  glow: true,
  icon: '🚀',
};

export const Success = Template.bind({});
Success.args = {
  children: 'Sucesso',
  variant: 'success',
  size: 'md',
  theme: 'dark',
  glow: true,
  icon: '✅',
};

export const Error = Template.bind({});
Error.args = {
  children: 'Erro',
  variant: 'error',
  size: 'md',
  theme: 'dark',
  glow: true,
  icon: '❌',
};

export const Warning = Template.bind({});
Warning.args = {
  children: 'Atenção',
  variant: 'warning',
  size: 'md',
  theme: 'dark',
  glow: true,
  icon: '⚠️',
};

export const Neon = Template.bind({});
Neon.args = {
  children: 'Neon Effect',
  variant: 'neon',
  size: 'md',
  theme: 'dark',
  glow: true,
  icon: '⚡',
};

export const Small = Template.bind({});
Small.args = {
  children: 'Small',
  variant: 'arena',
  size: 'sm',
  theme: 'dark',
  glow: true,
};

export const Large = Template.bind({});
Large.args = {
  children: 'Large Badge',
  variant: 'arena',
  size: 'lg',
  theme: 'dark',
  glow: true,
  icon: '🏆',
};

export const LightTheme = Template.bind({});
LightTheme.args = {
  children: 'Light Theme',
  variant: 'arena',
  size: 'md',
  theme: 'light',
  glow: true,
  icon: '☀️',
};

// Showcase dos badges gamer do systentando
export const GamerBadges = () => (
  <div style={{ 
    display: 'flex', 
    flexDirection: 'column',
    gap: '1.5rem',
    padding: '2rem',
    background: '#121212',
    minHeight: '100vh',
    alignItems: 'center',
  }}>
    <h2 style={{ 
      color: '#ffffff', 
      margin: '0 0 2rem 0', 
      textAlign: 'center',
      background: 'linear-gradient(45deg, #ffffff, #00FFC8, #ffffff)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    }}>
      Badges do Ecossistema Systentando
    </h2>
    
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
      <Badge variant="arena" theme="dark" glow icon="🏆">
        Arena dos Devs
      </Badge>
      
      <Badge variant="level" theme="dark" glow icon="⭐">
        LVL 1 • BETA
      </Badge>
      
      <Badge variant="early" theme="dark" glow icon="🏆">
        Early Adopter
      </Badge>
      
      <Badge variant="exclusive" theme="dark" glow icon="💎">
        Exclusive Access
      </Badge>
      
      <Badge variant="pioneer" theme="dark" glow icon="🚀">
        Pioneer
      </Badge>
    </div>
  </div>
);

GamerBadges.parameters = {
  layout: 'fullscreen',
};

// Showcase de todos os tamanhos
export const AllSizes = () => (
  <div style={{ 
    display: 'flex', 
    flexDirection: 'column', 
    gap: '2rem', 
    alignItems: 'center',
    padding: '2rem',
    background: '#121212',
  }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
      <h4 style={{ color: '#ffffff', margin: 0 }}>Small</h4>
      <Badge variant="arena" size="sm" theme="dark" glow icon="🏆">
        Small Badge
      </Badge>
    </div>
    
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
      <h4 style={{ color: '#ffffff', margin: 0 }}>Medium</h4>
      <Badge variant="arena" size="md" theme="dark" glow icon="🏆">
        Medium Badge
      </Badge>
    </div>
    
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
      <h4 style={{ color: '#ffffff', margin: 0 }}>Large</h4>
      <Badge variant="arena" size="lg" theme="dark" glow icon="🏆">
        Large Badge
      </Badge>
    </div>
  </div>
);

AllSizes.parameters = {
  layout: 'fullscreen',
};

// Showcase de todas as variantes
export const AllVariants = () => (
  <div style={{ 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
    gap: '1.5rem',
    padding: '2rem',
    background: '#121212',
    minHeight: '100vh',
  }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
      <h4 style={{ color: '#ffffff', margin: 0, textAlign: 'center' }}>Default</h4>
      <Badge variant="default" theme="dark" glow>
        Default
      </Badge>
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
      <h4 style={{ color: '#ffffff', margin: 0, textAlign: 'center' }}>Arena</h4>
      <Badge variant="arena" theme="dark" glow icon="🏆">
        Arena
      </Badge>
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
      <h4 style={{ color: '#ffffff', margin: 0, textAlign: 'center' }}>Level</h4>
      <Badge variant="level" theme="dark" glow icon="⭐">
        Level
      </Badge>
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
      <h4 style={{ color: '#ffffff', margin: 0, textAlign: 'center' }}>Early</h4>
      <Badge variant="early" theme="dark" glow icon="🏆">
        Early
      </Badge>
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
      <h4 style={{ color: '#ffffff', margin: 0, textAlign: 'center' }}>Exclusive</h4>
      <Badge variant="exclusive" theme="dark" glow icon="💎">
        Exclusive
      </Badge>
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
      <h4 style={{ color: '#ffffff', margin: 0, textAlign: 'center' }}>Pioneer</h4>
      <Badge variant="pioneer" theme="dark" glow icon="🚀">
        Pioneer
      </Badge>
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
      <h4 style={{ color: '#ffffff', margin: 0, textAlign: 'center' }}>Success</h4>
      <Badge variant="success" theme="dark" glow icon="✅">
        Success
      </Badge>
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
      <h4 style={{ color: '#ffffff', margin: 0, textAlign: 'center' }}>Error</h4>
      <Badge variant="error" theme="dark" glow icon="❌">
        Error
      </Badge>
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
      <h4 style={{ color: '#ffffff', margin: 0, textAlign: 'center' }}>Warning</h4>
      <Badge variant="warning" theme="dark" glow icon="⚠️">
        Warning
      </Badge>
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
      <h4 style={{ color: '#ffffff', margin: 0, textAlign: 'center' }}>Neon</h4>
      <Badge variant="neon" theme="dark" glow icon="⚡">
        Neon
      </Badge>
    </div>
  </div>
);

AllVariants.parameters = {
  layout: 'fullscreen',
};