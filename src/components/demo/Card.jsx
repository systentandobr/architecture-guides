import React from 'react';
import PropTypes from 'prop-types';
import { themes } from '../../styles/themes';

/**
 * Card component inspirado no design do systentando.com
 * Apresenta glassmorphism, efeitos neon e design moderno
 */
export const Card = ({
  children,
  variant = 'default',
  glow = false,
  interactive = false,
  className = '',
  theme = 'dark',
  ...props
}) => {
  const currentTheme = themes[theme];

  const getVariantStyles = () => {
    const baseStyles = {
      backgroundColor: currentTheme.colors.surface,
      border: `1px solid ${currentTheme.colors.border}`,
      borderRadius: currentTheme.radii['2xl'],
      padding: currentTheme.space[6],
      transition: 'all 0.3s ease',
    };

    switch (variant) {
      case 'glassmorphism':
        return {
          ...baseStyles,
          background: 'rgba(10, 10, 20, 0.8)',
          border: `1px solid ${currentTheme.colors.borderGlow || currentTheme.colors.primary + '33'}`,
          backdropFilter: 'blur(10px)',
          boxShadow: currentTheme.shadows?.cardGlow || `0 0 40px ${currentTheme.colors.glow}`,
        };
      
      case 'neon':
        return {
          ...baseStyles,
          background: currentTheme.colors.surface,
          border: `1px solid ${currentTheme.colors.primary}`,
          boxShadow: `0 0 20px ${currentTheme.colors.glow}`,
        };
      
      case 'arena':
        return {
          ...baseStyles,
          background: 'rgba(0, 255, 200, 0.1)',
          border: `1px solid ${currentTheme.colors.primary}`,
          boxShadow: `0 0 10px ${currentTheme.colors.glow}`,
        };
      
      case 'gaming':
        return {
          ...baseStyles,
          background: currentTheme.colors.gradientBackground || currentTheme.colors.surface,
          border: `1px solid ${currentTheme.colors.borderGlow || currentTheme.colors.border}`,
          boxShadow: glow ? currentTheme.shadows?.cardGlow : 'none',
        };
      
      default:
        return {
          ...baseStyles,
          boxShadow: glow ? currentTheme.shadows?.cardGlow : currentTheme.shadows?.md,
        };
    }
  };

  const getInteractiveStyles = () => {
    if (!interactive) return {};
    
    return {
      cursor: 'pointer',
      ':hover': {
        transform: 'translateY(-4px)',
        boxShadow: `0 0 60px ${currentTheme.colors.glow}`,
      },
    };
  };

  const cardStyles = {
    ...getVariantStyles(),
    ...getInteractiveStyles(),
  };

  const classes = [
    'card',
    variant === 'glassmorphism' && 'glassmorphism',
    glow && 'card-glow',
    interactive && 'card-interactive',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div
      className={classes}
      style={cardStyles}
      {...props}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  /**
   * Conteúdo do card
   */
  children: PropTypes.node.isRequired,
  
  /**
   * Variante visual do card
   */
  variant: PropTypes.oneOf([
    'default',
    'glassmorphism',
    'neon',
    'arena',
    'gaming'
  ]),
  
  /**
   * Adiciona efeito de glow
   */
  glow: PropTypes.bool,
  
  /**
   * Torna o card interativo com hover
   */
  interactive: PropTypes.bool,
  
  /**
   * Classes CSS adicionais
   */
  className: PropTypes.string,
  
  /**
   * Tema a ser usado
   */
  theme: PropTypes.oneOf(['light', 'dark']),
};

Card.defaultProps = {
  variant: 'default',
  glow: false,
  interactive: false,
  className: '',
  theme: 'dark',
};