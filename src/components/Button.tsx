import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  children,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = `
    inline-flex items-center justify-center gap-2 
    font-medium transition-all duration-150 
    focus:outline-none focus:ring-2 focus:ring-offset-2 
    disabled:opacity-50 disabled:cursor-not-allowed
    border border-transparent
  `;

  const variantStyles = {
    primary: `
      bg-[var(--color-primary)] text-[var(--color-text-on-primary)]
      hover:bg-[var(--color-primary-hover)] focus:ring-[var(--color-primary)]
      active:bg-[var(--color-primary-dark)]
    `,
    secondary: `
      bg-[var(--color-surface-secondary)] text-[var(--color-text)]
      border-[var(--color-border)] hover:bg-[var(--color-surface-hover)]
      focus:ring-[var(--color-border-focus)]
    `,
    outline: `
      border-[var(--color-border-dark)] text-[var(--color-text)]
      hover:bg-[var(--color-surface-hover)] focus:ring-[var(--color-primary)]
    `,
    ghost: `
      text-[var(--color-text)] hover:bg-[var(--color-surface-hover)]
      focus:ring-[var(--color-primary)]
    `,
    danger: `
      bg-[var(--color-error)] text-white
      hover:bg-[var(--color-error-dark)] focus:ring-[var(--color-error)]
    `,
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm rounded-md min-h-[2rem]',
    md: 'px-4 py-2 text-base rounded-md min-h-[2.5rem]',
    lg: 'px-6 py-3 text-lg rounded-lg min-h-[3rem]',
  };

  const widthStyles = fullWidth ? 'w-full' : '';

  const buttonStyles = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${widthStyles}
    ${className}
  `.replace(/\s+/g, ' ').trim();

  return (
    <button
      className={buttonStyles}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          Carregando...
        </>
      ) : (
        <>
          {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
          <span>{children}</span>
          {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
        </>
      )}
    </button>
  );
};

// CSS-in-JS alternative for projects without Tailwind
export const ButtonStyles = `
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-2);
    font-family: var(--font-family-sans);
    font-weight: 500;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    transition: var(--transition-default);
    cursor: pointer;
    text-decoration: none;
  }

  .btn:focus {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }

  .btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Variants */
  .btn-primary {
    color: var(--color-text-on-primary);
    background-color: var(--color-primary);
  }

  .btn-primary:hover:not(:disabled) {
    background-color: var(--color-primary-hover);
  }

  .btn-secondary {
    color: var(--color-text);
    background-color: var(--color-surface-secondary);
    border-color: var(--color-border);
  }

  .btn-secondary:hover:not(:disabled) {
    background-color: var(--color-surface-hover);
  }

  .btn-outline {
    color: var(--color-text);
    background-color: transparent;
    border-color: var(--color-border-dark);
  }

  .btn-outline:hover:not(:disabled) {
    background-color: var(--color-surface-hover);
  }

  .btn-ghost {
    color: var(--color-text);
    background-color: transparent;
  }

  .btn-ghost:hover:not(:disabled) {
    background-color: var(--color-surface-hover);
  }

  .btn-danger {
    color: white;
    background-color: var(--color-error);
  }

  .btn-danger:hover:not(:disabled) {
    background-color: var(--color-error-dark);
  }

  /* Sizes */
  .btn-sm {
    padding: var(--space-1.5) var(--space-3);
    font-size: var(--font-size-sm);
    border-radius: var(--radius-md);
    min-height: 2rem;
  }

  .btn-md {
    padding: var(--space-2) var(--space-4);
    font-size: var(--font-size-base);
    border-radius: var(--radius-md);
    min-height: 2.5rem;
  }

  .btn-lg {
    padding: var(--space-3) var(--space-6);
    font-size: var(--font-size-lg);
    border-radius: var(--radius-lg);
    min-height: 3rem;
  }

  /* Full width */
  .btn-full {
    width: 100%;
  }

  /* Loading state */
  .btn-loading {
    pointer-events: none;
  }

  /* Loading spinner */
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .btn-spinner {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border: 2px solid transparent;
    border-top: 2px solid currentColor;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
`;

export default Button;