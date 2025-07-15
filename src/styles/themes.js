import { designTokens } from './design-tokens';

export const themes = {
  light: {
    id: 'light',
    colors: {
      // Cores principais
      primary: designTokens.colors.primary[500],
      primaryHover: designTokens.colors.primary[600],
      primaryActive: designTokens.colors.primary[700],
      primaryLight: designTokens.colors.primary[100],
      primaryDark: designTokens.colors.primary[800],
      
      // Cores secundárias
      secondary: designTokens.colors.secondary[500],
      secondaryHover: designTokens.colors.secondary[600],
      secondaryLight: designTokens.colors.secondary[100],
      
      // Backgrounds
      background: designTokens.colors.neutral[50],
      backgroundSecondary: designTokens.colors.neutral[100],
      surface: '#ffffff',
      surfaceSecondary: designTokens.colors.neutral[50],
      surfaceHover: designTokens.colors.neutral[100],
      
      // Textos
      text: designTokens.colors.neutral[900],
      textSecondary: designTokens.colors.neutral[600],
      textMuted: designTokens.colors.neutral[500],
      textLight: designTokens.colors.neutral[400],
      textOnPrimary: '#ffffff',
      textOnSecondary: '#ffffff',
      
      // Bordas
      border: designTokens.colors.neutral[200],
      borderLight: designTokens.colors.neutral[100],
      borderDark: designTokens.colors.neutral[300],
      borderFocus: designTokens.colors.primary[500],
      
      // Estados
      success: designTokens.colors.success[500],
      successLight: designTokens.colors.success[100],
      successDark: designTokens.colors.success[700],
      
      warning: designTokens.colors.warning[500],
      warningLight: designTokens.colors.warning[100],
      warningDark: designTokens.colors.warning[700],
      
      error: designTokens.colors.error[500],
      errorLight: designTokens.colors.error[100],
      errorDark: designTokens.colors.error[700],
      
      // Específicos para componentes
      chatbot: {
        background: '#ffffff',
        header: designTokens.colors.primary[500],
        userMessage: designTokens.colors.primary[500],
        botMessage: designTokens.colors.neutral[100],
        inputBackground: '#ffffff',
        inputBorder: designTokens.colors.neutral[200],
      },
      
      button: {
        primary: designTokens.colors.primary[500],
        primaryHover: designTokens.colors.primary[600],
        secondary: designTokens.colors.neutral[100],
        secondaryHover: designTokens.colors.neutral[200],
        danger: designTokens.colors.error[500],
        dangerHover: designTokens.colors.error[600],
      },
    },
    
    // Tipografia
    fonts: {
      body: designTokens.typography.fontFamilies.sans.join(', '),
      heading: designTokens.typography.fontFamilies.sans.join(', '),
      mono: designTokens.typography.fontFamilies.mono.join(', '),
    },
    
    fontSizes: designTokens.typography.fontSizes,
    fontWeights: designTokens.typography.fontWeights,
    lineHeights: designTokens.typography.lineHeights,
    
    // Espaçamentos
    space: designTokens.spacing,
    
    // Bordas
    radii: designTokens.borderRadius,
    
    // Sombras
    shadows: designTokens.shadows,
    
    // Transições
    transitions: designTokens.transitions,
  },
  
  dark: {
    id: 'dark',
    colors: {
      // Cores principais
      primary: designTokens.colors.primary[400],
      primaryHover: designTokens.colors.primary[300],
      primaryActive: designTokens.colors.primary[500],
      primaryLight: designTokens.colors.primary[900],
      primaryDark: designTokens.colors.primary[200],
      
      // Cores secundárias
      secondary: designTokens.colors.secondary[400],
      secondaryHover: designTokens.colors.secondary[300],
      secondaryLight: designTokens.colors.secondary[800],
      
      // Backgrounds
      background: designTokens.colors.neutral[950],
      backgroundSecondary: designTokens.colors.neutral[900],
      surface: designTokens.colors.neutral[900],
      surfaceSecondary: designTokens.colors.neutral[800],
      surfaceHover: designTokens.colors.neutral[800],
      
      // Textos
      text: designTokens.colors.neutral[50],
      textSecondary: designTokens.colors.neutral[300],
      textMuted: designTokens.colors.neutral[400],
      textLight: designTokens.colors.neutral[500],
      textOnPrimary: designTokens.colors.neutral[900],
      textOnSecondary: designTokens.colors.neutral[900],
      
      // Bordas
      border: designTokens.colors.neutral[700],
      borderLight: designTokens.colors.neutral[800],
      borderDark: designTokens.colors.neutral[600],
      borderFocus: designTokens.colors.primary[400],
      
      // Estados
      success: designTokens.colors.success[400],
      successLight: designTokens.colors.success[900],
      successDark: designTokens.colors.success[300],
      
      warning: designTokens.colors.warning[400],
      warningLight: designTokens.colors.warning[900],
      warningDark: designTokens.colors.warning[300],
      
      error: designTokens.colors.error[400],
      errorLight: designTokens.colors.error[900],
      errorDark: designTokens.colors.error[300],
      
      // Específicos para componentes
      chatbot: {
        background: designTokens.colors.neutral[900],
        header: designTokens.colors.primary[600],
        userMessage: designTokens.colors.primary[500],
        botMessage: designTokens.colors.neutral[800],
        inputBackground: designTokens.colors.neutral[800],
        inputBorder: designTokens.colors.neutral[700],
      },
      
      button: {
        primary: designTokens.colors.primary[500],
        primaryHover: designTokens.colors.primary[400],
        secondary: designTokens.colors.neutral[700],
        secondaryHover: designTokens.colors.neutral[600],
        danger: designTokens.colors.error[500],
        dangerHover: designTokens.colors.error[400],
      },
    },
    
    // Tipografia
    fonts: {
      body: designTokens.typography.fontFamilies.sans.join(', '),
      heading: designTokens.typography.fontFamilies.sans.join(', '),
      mono: designTokens.typography.fontFamilies.mono.join(', '),
    },
    
    fontSizes: designTokens.typography.fontSizes,
    fontWeights: designTokens.typography.fontWeights,
    lineHeights: designTokens.typography.lineHeights,
    
    // Espaçamentos
    space: designTokens.spacing,
    
    // Bordas
    radii: designTokens.borderRadius,
    
    // Sombras (adaptadas para dark mode)
    shadows: {
      xs: '0 1px 2px 0 rgb(0 0 0 / 0.3)',
      sm: '0 1px 3px 0 rgb(0 0 0 / 0.4), 0 1px 2px -1px rgb(0 0 0 / 0.4)',
      base: '0 4px 6px -1px rgb(0 0 0 / 0.4), 0 2px 4px -2px rgb(0 0 0 / 0.4)',
      md: '0 10px 15px -3px rgb(0 0 0 / 0.4), 0 4px 6px -4px rgb(0 0 0 / 0.4)',
      lg: '0 20px 25px -5px rgb(0 0 0 / 0.4), 0 8px 10px -6px rgb(0 0 0 / 0.4)',
      xl: '0 25px 50px -12px rgb(0 0 0 / 0.5)',
      '2xl': '0 50px 100px -20px rgb(0 0 0 / 0.5)',
      inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.3)',
    },
    
    // Transições
    transitions: designTokens.transitions,
  },
};

// Utilitário para obter o tema atual
export const getTheme = (themeName = 'light') => {
  return themes[themeName] || themes.light;
};

// Utilitário para gerar CSS custom properties
export const generateCSSVariables = (theme) => {
  const variables = {};
  
  // Converter cores para CSS custom properties
  Object.entries(theme.colors).forEach(([key, value]) => {
    if (typeof value === 'object') {
      Object.entries(value).forEach(([subKey, subValue]) => {
        variables[`--color-${key}-${subKey}`] = subValue;
      });
    } else {
      variables[`--color-${key}`] = value;
    }
  });
  
  // Converter espaçamentos
  Object.entries(theme.space).forEach(([key, value]) => {
    variables[`--space-${key}`] = value;
  });
  
  // Converter font sizes
  Object.entries(theme.fontSizes).forEach(([key, value]) => {
    variables[`--font-size-${key}`] = value;
  });
  
  // Converter border radius
  Object.entries(theme.radii).forEach(([key, value]) => {
    variables[`--radius-${key}`] = value;
  });
  
  // Converter shadows
  Object.entries(theme.shadows).forEach(([key, value]) => {
    variables[`--shadow-${key}`] = value;
  });
  
  return variables;
};
