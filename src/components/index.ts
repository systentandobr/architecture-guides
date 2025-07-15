// Design System Components - Systentando
// Exportação centralizada de todos os componentes padronizados

// Core Components
export { Button, ButtonStyles } from './Button';
export type { ButtonProps } from './Button';

export { Input, InputStyles } from './Input';
export type { InputProps } from './Input';

export { Card, CardHeader, CardContent, CardFooter, CardStyles } from './Card';
export type { CardProps, CardHeaderProps, CardContentProps, CardFooterProps } from './Card';

// Chatbot Components
export { ChatbotCollector } from './chatbot-collector/ChatbotCollector';
export { ChatbotMessage } from './chatbot-collector/ChatbotMessage';
export type { Message, MessageRole, DataSchema } from './chatbot-collector/types';

// Demo Components
export { AgentResponseDemo } from './demo/AgentResponseDemo';

// Design System Utilities
export { themes, getTheme, generateCSSVariables } from '../styles/themes';
export { designTokens, getColorToken, getSpacingToken, getFontSizeToken } from '../styles/design-tokens';

// Re-export common types
export interface ComponentBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ThemedProps {
  theme?: 'light' | 'dark';
}

// Design System Constants
export const DESIGN_SYSTEM_VERSION = '1.0.0';

export const COMPONENT_SIZES = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
} as const;

export const COMPONENT_VARIANTS = {
  primary: 'primary',
  secondary: 'secondary',
  outline: 'outline',
  ghost: 'ghost',
  danger: 'danger',
} as const;

export type ComponentSize = keyof typeof COMPONENT_SIZES;
export type ComponentVariant = keyof typeof COMPONENT_VARIANTS;