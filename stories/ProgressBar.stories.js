import { ProgressBar } from '../src/components/demo/ProgressBar';

export default {
  title: 'Systentando Design/ProgressBar',
  component: ProgressBar,
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
      options: ['primary', 'success', 'error', 'warning', 'neon', 'arena'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
    },
    theme: {
      control: { type: 'select' },
      options: ['light', 'dark'],
    },
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
    max: {
      control: { type: 'number' },
    },
    showValue: {
      control: { type: 'boolean' },
    },
    showMarkers: {
      control: { type: 'boolean' },
    },
    animated: {
      control: { type: 'boolean' },
    },
    glow: {
      control: { type: 'boolean' },
    },
    label: {
      control: { type: 'text' },
    },
  },
  tags: ['autodocs'],
};

// Template base
const Template = (args) => (
  <div style={{ width: '400px' }}>
    <ProgressBar {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  value: 65,
  max: 100,
  variant: 'primary',
  size: 'md',
  theme: 'dark',
  showValue: true,
  showMarkers: false,
  animated: false,
  glow: true,
  label: 'Player Engagement Level',
};

export const Arena = Template.bind({});
Arena.args = {
  value: 75,
  max: 100,
  variant: 'arena',
  size: 'md',
  theme: 'dark',
  showValue: true,
  showMarkers: true,
  animated: true,
  glow: true,
  label: '🎮 Player Progress',
};

export const Success = Template.bind({});
Success.args = {
  value: 90,
  max: 100,
  variant: 'success',
  size: 'md',
  theme: 'dark',
  showValue: true,
  showMarkers: false,
  animated: true,
  glow: true,
  label: '✅ Task Completion',
};

export const Error = Template.bind({});
Error.args = {
  value: 25,
  max: 100,
  variant: 'error',
  size: 'md',
  theme: 'dark',
  showValue: true,
  showMarkers: false,
  animated: false,
  glow: true,
  label: '❌ Error Rate',
};

export const Warning = Template.bind({});
Warning.args = {
  value: 45,
  max: 100,
  variant: 'warning',
  size: 'md',
  theme: 'dark',
  showValue: true,
  showMarkers: false,
  animated: true,
  glow: true,
  label: '⚠️ Warning Level',
};

export const Neon = Template.bind({});
Neon.args = {
  value: 80,
  max: 100,
  variant: 'neon',
  size: 'lg',
  theme: 'dark',
  showValue: true,
  showMarkers: true,
  animated: true,
  glow: true,
  label: '⚡ Neon Progress',
};

export const WithMarkers = Template.bind({});
WithMarkers.args = {
  value: 60,
  max: 100,
  variant: 'arena',
  size: 'md',
  theme: 'dark',
  showValue: true,
  showMarkers: true,
  animated: true,
  glow: true,
  label: 'Level Progress with Markers',
};

export const Animated = Template.bind({});
Animated.args = {
  value: 70,
  max: 100,
  variant: 'neon',
  size: 'lg',
  theme: 'dark',
  showValue: true,
  showMarkers: false,
  animated: true,
  glow: true,
  label: 'Animated Progress Bar',
};

export const Small = Template.bind({});
Small.args = {
  value: 40,
  max: 100,
  variant: 'primary',
  size: 'sm',
  theme: 'dark',
  showValue: false,
  showMarkers: false,
  animated: false,
  glow: true,
};

export const Large = Template.bind({});
Large.args = {
  value: 85,
  max: 100,
  variant: 'arena',
  size: 'lg',
  theme: 'dark',
  showValue: true,
  showMarkers: true,
  animated: true,
  glow: true,
  label: 'Large Progress Bar',
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  value: 95,
  max: 100,
  variant: 'success',
  size: 'xl',
  theme: 'dark',
  showValue: true,
  showMarkers: true,
  animated: true,
  glow: true,
  label: 'Extra Large Progress Bar',
};

export const LightTheme = Template.bind({});
LightTheme.args = {
  value: 55,
  max: 100,
  variant: 'primary',
  size: 'md',
  theme: 'light',
  showValue: true,
  showMarkers: false,
  animated: true,
  glow: true,
  label: 'Light Theme Progress',
};

// Gaming Progress como no systentando.com
export const GamingProgress = () => (
  <div style={{ 
    display: 'flex', 
    flexDirection: 'column',
    gap: '2rem',
    padding: '2rem',
    background: '#121212',
    minHeight: '100vh',
    width: '100%',
    maxWidth: '600px',
    margin: '0 auto',
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
      🎮 Player Engagement Dashboard
    </h2>
    
    <ProgressBar 
      value={0} 
      variant="arena" 
      size="md" 
      theme="dark" 
      showValue 
      showMarkers 
      animated 
      glow 
      label="🎮 Player Engagement Level"
    />
    
    <div style={{ 
      background: 'rgba(10, 10, 20, 0.8)',
      border: '1px solid rgba(0, 255, 200, 0.2)',
      borderRadius: '1rem',
      padding: '1.5rem',
      backdropFilter: 'blur(10px)',
    }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '1rem',
        fontSize: '0.9rem',
        fontWeight: '600',
        color: '#00FFC8'
      }}>
        <span>🎮 Player Engagement Level</span>
        <span style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 'bold' }}>0%</span>
      </div>
      
      <ProgressBar 
        value={0} 
        variant="arena" 
        size="md" 
        theme="dark" 
        showMarkers 
        animated 
        glow 
      />
      
      <div style={{ 
        textAlign: 'center',
        fontSize: '0.8rem',
        fontWeight: '600',
        color: '#999999',
        textShadow: '0 0 8px #99999977',
        transition: 'color 0.5s ease',
        marginTop: '0.5rem'
      }}>
        🎮 Continue explorando para desbloquear recompensas...
      </div>
      
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        marginTop: '0.5rem', 
        fontSize: '0.7rem', 
        color: '#666666' 
      }}>
        <span>⭐</span>
        <span>🏆</span>
        <span>💎</span>
        <span>🎖️</span>
      </div>
    </div>
  </div>
);

GamingProgress.parameters = {
  layout: 'fullscreen',
};

// Showcase de todos os tamanhos
export const AllSizes = () => (
  <div style={{ 
    display: 'flex', 
    flexDirection: 'column', 
    gap: '2rem', 
    padding: '2rem',
    background: '#121212',
    width: '100%',
    maxWidth: '600px',
  }}>
    <div>
      <h4 style={{ color: '#ffffff', margin: '0 0 1rem 0' }}>Small</h4>
      <ProgressBar 
        value={40} 
        variant="primary" 
        size="sm" 
        theme="dark" 
        glow 
      />
    </div>
    
    <div>
      <h4 style={{ color: '#ffffff', margin: '0 0 1rem 0' }}>Medium</h4>
      <ProgressBar 
        value={60} 
        variant="arena" 
        size="md" 
        theme="dark" 
        showValue 
        glow 
        label="Medium Progress"
      />
    </div>
    
    <div>
      <h4 style={{ color: '#ffffff', margin: '0 0 1rem 0' }}>Large</h4>
      <ProgressBar 
        value={80} 
        variant="success" 
        size="lg" 
        theme="dark" 
        showValue 
        showMarkers 
        animated 
        glow 
        label="Large Progress"
      />
    </div>
    
    <div>
      <h4 style={{ color: '#ffffff', margin: '0 0 1rem 0' }}>Extra Large</h4>
      <ProgressBar 
        value={95} 
        variant="neon" 
        size="xl" 
        theme="dark" 
        showValue 
        showMarkers 
        animated 
        glow 
        label="Extra Large Progress"
      />
    </div>
  </div>
);

AllSizes.parameters = {
  layout: 'fullscreen',
};

// Showcase de todas as variantes
export const AllVariants = () => (
  <div style={{ 
    display: 'flex', 
    flexDirection: 'column', 
    gap: '2rem',
    padding: '2rem',
    background: '#121212',
    minHeight: '100vh',
    width: '100%',
    maxWidth: '800px',
    margin: '0 auto',
  }}>
    <h2 style={{ 
      color: '#ffffff', 
      margin: '0 0 2rem 0', 
      textAlign: 'center' 
    }}>
      All Progress Bar Variants
    </h2>
    
    <ProgressBar 
      value={75} 
      variant="primary" 
      theme="dark" 
      showValue 
      animated 
      glow 
      label="Primary Progress"
    />
    
    <ProgressBar 
      value={85} 
      variant="arena" 
      theme="dark" 
      showValue 
      showMarkers 
      animated 
      glow 
      label="🏆 Arena Progress"
    />
    
    <ProgressBar 
      value={90} 
      variant="success" 
      theme="dark" 
      showValue 
      animated 
      glow 
      label="✅ Success Progress"
    />
    
    <ProgressBar 
      value={30} 
      variant="error" 
      theme="dark" 
      showValue 
      animated 
      glow 
      label="❌ Error Progress"
    />
    
    <ProgressBar 
      value={50} 
      variant="warning" 
      theme="dark" 
      showValue 
      animated 
      glow 
      label="⚠️ Warning Progress"
    />
    
    <ProgressBar 
      value={95} 
      variant="neon" 
      theme="dark" 
      showValue 
      showMarkers 
      animated 
      glow 
      label="⚡ Neon Progress"
    />
  </div>
);

AllVariants.parameters = {
  layout: 'fullscreen',
};