import React from 'react';
import PropTypes from 'prop-types';
import { themes } from '../../styles/themes';

/**
 * Button component inspirado no design do systentando.com
 * Apresenta gradientes, efeitos neon e design gamer moderno
 */
export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  glow = false,
  className = '',
  theme = 'dark',
  onClick,
  ...props
}) => {
  const currentTheme = themes[theme];

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return {
          padding: `${currentTheme.space[2]} ${currentTheme.space[4]}`,
          fontSize: currentTheme.fontSizes.sm,
          borderRadius: currentTheme.radii.xl,
        };
      case 'lg':
        return {
          padding: `${currentTheme.space[4]} ${currentTheme.space[8]}`,
          fontSize: currentTheme.fontSizes.lg,
          borderRadius: currentTheme.radii.full,
        };
      case 'xl':
        return {
          padding: `${currentTheme.space[6]} ${currentTheme.space[12]}`,
          fontSize: currentTheme.fontSizes.xl,
          borderRadius: currentTheme.radii.full,
        };
      default: // md
        return {
          padding: `${currentTheme.space[3]} ${currentTheme.space[6]}`,
          fontSize: currentTheme.fontSizes.md,
          borderRadius: currentTheme.radii.full,
        };
    }
  };

  const getVariantStyles = () => {
    const baseStyles = {
      border: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: currentTheme.fonts.body,
      ...getSizeStyles(),
    };

    if (disabled) {
      return {
        ...baseStyles,
        opacity: 0.5,
        background: currentTheme.colors.textSecondary,
        color: currentTheme.colors.background,
      };
    }

    switch (variant) {
      case 'primary':
        return {
          ...baseStyles,
          background: currentTheme.colors.gradientPrimary || `linear-gradient(45deg, ${currentTheme.colors.primary}, ${currentTheme.colors.secondary})`,
          color: theme === 'dark' ? '#000000' : '#ffffff',
          boxShadow: glow ? currentTheme.shadows?.buttonGlow || `0 0 30px ${currentTheme.colors.glow}` : 'none',
        };
      
      case 'secondary':
        return {
          ...baseStyles,
          background: 'transparent',
          color: currentTheme.colors.text,
          border: `2px solid ${currentTheme.colors.primary}33`,
          boxShadow: glow ? `0 0 20px ${currentTheme.colors.glow}` : 'none',
        };
      
      case 'neon':
        return {
          ...baseStyles,
          background: currentTheme.colors.surface,
          color: currentTheme.colors.primary,
          border: `1px solid ${currentTheme.colors.primary}`,
          boxShadow: `0 0 15px ${currentTheme.colors.glow}`,
        };
      
      case 'arena':
        return {
          ...baseStyles,
          background: 'rgba(0, 255, 200, 0.1)',
          color: currentTheme.colors.primary,
          border: `1px solid ${currentTheme.colors.primary}`,
          boxShadow: `0 0 10px ${currentTheme.colors.glow}`,
        };
      
      case 'gaming':
        return {
          ...baseStyles,
          background: currentTheme.colors.gradientSecondary || `linear-gradient(135deg, ${currentTheme.colors.success}, ${currentTheme.colors.primary})`,
          color: '#000000',
          boxShadow: glow ? `0 0 25px ${currentTheme.colors.glowSecondary}` : 'none',
        };
      
      case 'ghost':
        return {
          ...baseStyles,
          background: 'transparent',
          color: currentTheme.colors.text,
          border: `2px solid transparent`,
        };
      
      default:
        return baseStyles;
    }
  };

  const getHoverStyles = () => {
    if (disabled) return {};
    
    switch (variant) {
      case 'primary':
        return {
          transform: 'translateY(-2px)',
          boxShadow: `0 0 40px ${currentTheme.colors.glow}`,
        };
      case 'secondary':
        return {
          borderColor: currentTheme.colors.primary,
          boxShadow: `0 0 20px ${currentTheme.colors.glow}`,
        };
      case 'ghost':
        return {
          borderColor: currentTheme.colors.primary,
          color: currentTheme.colors.primary,
        };
      default:
        return {
          transform: 'translateY(-1px)',
          filter: 'brightness(1.1)',
        };
    }
  };

  const buttonStyles = getVariantStyles();
  
  const classes = [
    'btn',
    `btn-${variant}`,
    `btn-${size}`,
    glow && 'btn-glow',
    loading && 'btn-loading',
    disabled && 'btn-disabled',
    className,
  ].filter(Boolean).join(' ');

  const handleClick = (e) => {
    if (disabled || loading) return;
    if (onClick) onClick(e);
  };

  return (
    <button
      className={classes}
      style={buttonStyles}
      onClick={handleClick}
      disabled={disabled}
      onMouseEnter={(e) => {
        if (!disabled) {
          Object.assign(e.target.style, getHoverStyles());
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          Object.assign(e.target.style, buttonStyles);
        }
      }}
      {...props}
    >
      {loading && (
        <span 
          style={{
            marginRight: currentTheme.space[2],
            display: 'inline-block',
            animation: 'spin 1s linear infinite',
          }}
        >
          ⚡
        </span>
      )}
      <span style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </span>
      
      {/* Ripple effect background */}
      <span
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '0',
          height: '0',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.1)',
          transform: 'translate(-50%, -50%)',
          transition: 'all 0.3s ease',
          pointerEvents: 'none',
        }}
      />
    </button>
  );
};

Button.propTypes = {
  /**
   * Conteúdo do botão
   */
  children: PropTypes.node.isRequired,
  
  /**
   * Variante visual do botão
   */
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'neon',
    'arena',
    'gaming',
    'ghost'
  ]),
  
  /**
   * Tamanho do botão
   */
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  
  /**
   * Estado desabilitado
   */
  disabled: PropTypes.bool,
  
  /**
   * Estado de carregamento
   */
  loading: PropTypes.bool,
  
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
  
  /**
   * Função chamada ao clicar
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
  glow: false,
  className: '',
  theme: 'dark',
  onClick: undefined,
};