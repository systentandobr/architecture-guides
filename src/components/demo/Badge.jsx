import React from 'react';
import PropTypes from 'prop-types';
import { themes, designTokens } from '../../styles/themes';

/**
 * Badge component inspirado no design gamer do systentando.com
 * Apresenta diferentes tipos de badges com efeitos neon
 */
export const Badge = ({
  children,
  variant = 'default',
  size = 'md',
  icon,
  glow = false,
  className = '',
  theme = 'dark',
  ...props
}) => {
  const currentTheme = themes[theme];

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return {
          padding: `${currentTheme.space[1]} ${currentTheme.space[2]}`,
          fontSize: currentTheme.fontSizes.xs,
          borderRadius: currentTheme.radii.md,
        };
      case 'lg':
        return {
          padding: `${currentTheme.space[3]} ${currentTheme.space[6]}`,
          fontSize: currentTheme.fontSizes.lg,
          borderRadius: currentTheme.radii['2xl'],
        };
      default: // md
        return {
          padding: `${currentTheme.space[2]} ${currentTheme.space[4]}`,
          fontSize: currentTheme.fontSizes.sm,
          borderRadius: currentTheme.radii.xl,
        };
    }
  };

  const getVariantStyles = () => {
    const baseStyles = {
      display: 'inline-flex',
      alignItems: 'center',
      gap: currentTheme.space[2],
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      border: '1px solid',
      fontFamily: currentTheme.fonts.body,
      whiteSpace: 'nowrap',
      ...getSizeStyles(),
    };

    switch (variant) {
      case 'arena':
        return {
          ...baseStyles,
          background: designTokens.gamer.arena.background,
          borderColor: designTokens.gamer.arena.border,
          color: designTokens.gamer.arena.color,
          boxShadow: glow ? designTokens.gamer.arena.glow : 'none',
        };

      case 'level':
        return {
          ...baseStyles,
          background: designTokens.gamer.level.background,
          borderColor: designTokens.gamer.level.border,
          color: designTokens.gamer.level.color,
          boxShadow: glow ? '0 0 15px rgba(255, 215, 0, 0.3)' : 'none',
        };

      case 'early':
        return {
          ...baseStyles,
          background: designTokens.gamer.badge.early.background,
          borderColor: designTokens.gamer.badge.early.border,
          color: designTokens.gamer.badge.early.color,
          boxShadow: glow ? '0 0 10px rgba(57, 255, 20, 0.4)' : 'none',
        };

      case 'exclusive':
        return {
          ...baseStyles,
          background: designTokens.gamer.badge.exclusive.background,
          borderColor: designTokens.gamer.badge.exclusive.border,
          color: designTokens.gamer.badge.exclusive.color,
          boxShadow: glow ? '0 0 10px rgba(0, 255, 255, 0.4)' : 'none',
        };

      case 'pioneer':
        return {
          ...baseStyles,
          background: designTokens.gamer.badge.pioneer.background,
          borderColor: designTokens.gamer.badge.pioneer.border,
          color: designTokens.gamer.badge.pioneer.color,
          boxShadow: glow ? '0 0 10px rgba(255, 107, 107, 0.4)' : 'none',
        };

      case 'success':
        return {
          ...baseStyles,
          background: `${currentTheme.colors.success}22`,
          borderColor: `${currentTheme.colors.success}77`,
          color: currentTheme.colors.success,
          boxShadow: glow ? `0 0 10px ${currentTheme.colors.glowSuccess || currentTheme.colors.success + '66'}` : 'none',
        };

      case 'error':
        return {
          ...baseStyles,
          background: `${currentTheme.colors.error}22`,
          borderColor: `${currentTheme.colors.error}77`,
          color: currentTheme.colors.error,
          boxShadow: glow ? `0 0 10px ${currentTheme.colors.glowError || currentTheme.colors.error + '66'}` : 'none',
        };

      case 'warning':
        return {
          ...baseStyles,
          background: `${currentTheme.colors.warning}22`,
          borderColor: `${currentTheme.colors.warning}77`,
          color: currentTheme.colors.warning,
          boxShadow: glow ? `0 0 10px ${currentTheme.colors.warning}66` : 'none',
        };

      case 'neon':
        return {
          ...baseStyles,
          background: `${currentTheme.colors.primary}11`,
          borderColor: currentTheme.colors.primary,
          color: currentTheme.colors.primary,
          boxShadow: `0 0 15px ${currentTheme.colors.glow}`,
        };

      default:
        return {
          ...baseStyles,
          background: currentTheme.colors.surface,
          borderColor: currentTheme.colors.border,
          color: currentTheme.colors.text,
          boxShadow: glow ? currentTheme.shadows?.sm : 'none',
        };
    }
  };

  const getIconStyles = () => ({
    fontSize: size === 'sm' ? '0.75rem' : size === 'lg' ? '1.25rem' : '1rem',
    display: 'flex',
    alignItems: 'center',
  });

  const badgeStyles = getVariantStyles();
  
  const classes = [
    'badge',
    `badge-${variant}`,
    `badge-${size}`,
    glow && 'badge-glow',
    className,
  ].filter(Boolean).join(' ');

  return (
    <span
      className={classes}
      style={badgeStyles}
      {...props}
    >
      {icon && (
        <span style={getIconStyles()}>
          {icon}
        </span>
      )}
      {children}
    </span>
  );
};

Badge.propTypes = {
  /**
   * Conteúdo do badge
   */
  children: PropTypes.node.isRequired,
  
  /**
   * Variante visual do badge
   */
  variant: PropTypes.oneOf([
    'default',
    'arena',
    'level',
    'early',
    'exclusive',
    'pioneer',
    'success',
    'error',
    'warning',
    'neon'
  ]),
  
  /**
   * Tamanho do badge
   */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  
  /**
   * Ícone do badge (emoji ou elemento React)
   */
  icon: PropTypes.node,
  
  /**
   * Adiciona efeito de glow
   */
  glow: PropTypes.bool,
  
  /**
   * Classes CSS adicionais
   */
  className: PropTypes.string,
  
  /**
   * Tema a ser usado
   */
  theme: PropTypes.oneOf(['light', 'dark']),
};

Badge.defaultProps = {
  variant: 'default',
  size: 'md',
  icon: undefined,
  glow: false,
  className: '',
  theme: 'dark',
};