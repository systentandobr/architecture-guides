import React from 'react';
import PropTypes from 'prop-types';
import { themes } from '../../styles/themes';

/**
 * ProgressBar component inspirado no design gamer do systentando.com
 * Apresenta barras de progresso com efeitos neon e animações
 */
export const ProgressBar = ({
  value = 0,
  max = 100,
  variant = 'primary',
  size = 'md',
  showValue = false,
  showMarkers = false,
  animated = false,
  glow = false,
  label,
  className = '',
  theme = 'dark',
  ...props
}) => {
  const currentTheme = themes[theme];
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return {
          height: '4px',
          borderRadius: currentTheme.radii.sm,
        };
      case 'lg':
        return {
          height: '12px',
          borderRadius: currentTheme.radii.md,
        };
      case 'xl':
        return {
          height: '16px',
          borderRadius: currentTheme.radii.lg,
        };
      default: // md
        return {
          height: '8px',
          borderRadius: currentTheme.radii.sm,
        };
    }
  };

  const getVariantStyles = () => {
    const baseStyles = {
      background: `${currentTheme.colors.primary}44`,
      border: `1px solid ${currentTheme.colors.primary}22`,
      boxShadow: glow ? `0 0 15px ${currentTheme.colors.glow}` : 'none',
    };

    switch (variant) {
      case 'success':
        return {
          background: `linear-gradient(90deg, ${currentTheme.colors.success}, ${currentTheme.colors.primary})`,
          boxShadow: glow ? `0 0 20px ${currentTheme.colors.glowSuccess || currentTheme.colors.success + '66'}` : 'none',
        };
      
      case 'error':
        return {
          background: `linear-gradient(90deg, ${currentTheme.colors.error}, #FF8A80)`,
          boxShadow: glow ? `0 0 20px ${currentTheme.colors.glowError || currentTheme.colors.error + '66'}` : 'none',
        };
      
      case 'warning':
        return {
          background: `linear-gradient(90deg, ${currentTheme.colors.warning}, #FFCC02)`,
          boxShadow: glow ? `0 0 20px ${currentTheme.colors.warning}66` : 'none',
        };
      
      case 'neon':
        return {
          background: currentTheme.colors.gradientSecondary || `linear-gradient(90deg, ${currentTheme.colors.success}, ${currentTheme.colors.primary})`,
          boxShadow: `0 0 25px ${currentTheme.colors.glow}`,
        };
      
      case 'arena':
        return {
          background: currentTheme.colors.gradientPrimary || `linear-gradient(90deg, ${currentTheme.colors.primary}, ${currentTheme.colors.secondary})`,
          boxShadow: glow ? `0 0 20px ${currentTheme.colors.glow}` : 'none',
        };
      
      default: // primary
        return {
          background: currentTheme.colors.gradientPrimary || `linear-gradient(90deg, ${currentTheme.colors.primary}, ${currentTheme.colors.secondary})`,
          boxShadow: glow ? `0 0 20px ${currentTheme.colors.glow}` : 'none',
        };
    }
  };

  const containerStyles = {
    width: '100%',
    backgroundColor: `${currentTheme.colors.primary}22`,
    border: `1px solid ${currentTheme.colors.border}`,
    borderRadius: currentTheme.radii.sm,
    overflow: 'hidden',
    position: 'relative',
    ...getSizeStyles(),
  };

  const fillStyles = {
    height: '100%',
    width: `${percentage}%`,
    transition: animated ? 'width 0.5s ease, box-shadow 0.3s ease' : 'none',
    animation: animated ? 'progressGlow 2s ease-in-out infinite alternate' : 'none',
    borderRadius: currentTheme.radii.sm,
    ...getVariantStyles(),
  };

  const labelStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: currentTheme.space[2],
    fontSize: currentTheme.fontSizes.sm,
    fontWeight: '600',
    color: currentTheme.colors.text,
  };

  const valueStyles = {
    fontSize: currentTheme.fontSizes.sm,
    fontWeight: 'bold',
    color: currentTheme.colors.primary,
    textShadow: glow ? `0 0 8px ${currentTheme.colors.glow}` : 'none',
  };

  const markerStyles = {
    position: 'absolute',
    top: '-2px',
    width: '2px',
    height: size === 'sm' ? '8px' : size === 'lg' ? '16px' : size === 'xl' ? '20px' : '12px',
    background: 'rgba(255, 255, 255, 0.3)',
    borderRadius: '1px',
    transition: 'background 0.3s ease',
  };

  const getMarkerActive = (markerPosition) => {
    return percentage >= markerPosition ? {
      background: 'rgba(255, 255, 255, 0.8)',
      boxShadow: `0 0 4px ${currentTheme.colors.glow}`,
    } : {};
  };

  const classes = [
    'progress-bar',
    `progress-${variant}`,
    `progress-${size}`,
    animated && 'progress-animated',
    glow && 'progress-glow',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      {(label || showValue) && (
        <div style={labelStyles}>
          {label && <span>{label}</span>}
          {showValue && (
            <span style={valueStyles}>
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      )}
      
      <div style={containerStyles}>
        <div style={fillStyles} />
        
        {showMarkers && (
          <>
            <div 
              style={{
                ...markerStyles,
                left: '20%',
                ...getMarkerActive(20),
              }} 
            />
            <div 
              style={{
                ...markerStyles,
                left: '40%',
                ...getMarkerActive(40),
              }} 
            />
            <div 
              style={{
                ...markerStyles,
                left: '60%',
                ...getMarkerActive(60),
              }} 
            />
            <div 
              style={{
                ...markerStyles,
                left: '80%',
                ...getMarkerActive(80),
              }} 
            />
          </>
        )}
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  /**
   * Valor atual do progresso
   */
  value: PropTypes.number,
  
  /**
   * Valor máximo do progresso
   */
  max: PropTypes.number,
  
  /**
   * Variante visual da barra
   */
  variant: PropTypes.oneOf([
    'primary',
    'success',
    'error',
    'warning',
    'neon',
    'arena'
  ]),
  
  /**
   * Tamanho da barra
   */
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  
  /**
   * Mostrar o valor em porcentagem
   */
  showValue: PropTypes.bool,
  
  /**
   * Mostrar marcadores de progresso
   */
  showMarkers: PropTypes.bool,
  
  /**
   * Ativar animações
   */
  animated: PropTypes.bool,
  
  /**
   * Adicionar efeito de glow
   */
  glow: PropTypes.bool,
  
  /**
   * Label da barra de progresso
   */
  label: PropTypes.string,
  
  /**
   * Classes CSS adicionais
   */
  className: PropTypes.string,
  
  /**
   * Tema a ser usado
   */
  theme: PropTypes.oneOf(['light', 'dark']),
};

ProgressBar.defaultProps = {
  value: 0,
  max: 100,
  variant: 'primary',
  size: 'md',
  showValue: false,
  showMarkers: false,
  animated: false,
  glow: false,
  label: undefined,
  className: '',
  theme: 'dark',
};