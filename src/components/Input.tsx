import React, { forwardRef } from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  variant?: 'default' | 'filled' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  error,
  helperText,
  leftIcon,
  rightIcon,
  variant = 'default',
  size = 'md',
  fullWidth = false,
  className = '',
  id,
  ...props
}, ref) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
  
  const baseStyles = `
    w-full border transition-all duration-150
    focus:outline-none focus:ring-2 focus:ring-offset-1
    disabled:opacity-50 disabled:cursor-not-allowed
    placeholder:text-[var(--color-text-light)]
  `;

  const variantStyles = {
    default: `
      bg-[var(--color-surface)] border-[var(--color-border)]
      focus:border-[var(--color-border-focus)] focus:ring-[var(--color-primary)]
      text-[var(--color-text)]
    `,
    filled: `
      bg-[var(--color-surface-secondary)] border-transparent
      focus:bg-[var(--color-surface)] focus:border-[var(--color-border-focus)]
      focus:ring-[var(--color-primary)] text-[var(--color-text)]
    `,
    outline: `
      bg-transparent border-[var(--color-border-dark)]
      focus:border-[var(--color-border-focus)] focus:ring-[var(--color-primary)]
      text-[var(--color-text)]
    `,
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm rounded-md min-h-[2rem]',
    md: 'px-4 py-2 text-base rounded-md min-h-[2.5rem]',
    lg: 'px-4 py-3 text-lg rounded-lg min-h-[3rem]',
  };

  const errorStyles = error ? 'border-[var(--color-error)] focus:ring-[var(--color-error)]' : '';
  const widthStyles = fullWidth ? 'w-full' : '';

  const inputStyles = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${errorStyles}
    ${leftIcon ? 'pl-10' : ''}
    ${rightIcon ? 'pr-10' : ''}
    ${className}
  `.replace(/\s+/g, ' ').trim();

  return (
    <div className={`${widthStyles}`}>
      {label && (
        <label 
          htmlFor={inputId}
          className="block text-sm font-medium text-[var(--color-text)] mb-1"
        >
          {label}
        </label>
      )}
      
      <div className="relative">
        {leftIcon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <span className="text-[var(--color-text-muted)]">{leftIcon}</span>
          </div>
        )}
        
        <input
          ref={ref}
          id={inputId}
          className={inputStyles}
          {...props}
        />
        
        {rightIcon && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <span className="text-[var(--color-text-muted)]">{rightIcon}</span>
          </div>
        )}
      </div>
      
      {(error || helperText) && (
        <div className="mt-1 text-sm">
          {error ? (
            <span className="text-[var(--color-error)]">{error}</span>
          ) : (
            <span className="text-[var(--color-text-muted)]">{helperText}</span>
          )}
        </div>
      )}
    </div>
  );
});

Input.displayName = 'Input';

// CSS-in-JS alternative for projects without Tailwind
export const InputStyles = `
  .input-wrapper {
    position: relative;
    width: 100%;
  }

  .input-wrapper.full-width {
    width: 100%;
  }

  .input-label {
    display: block;
    font-size: var(--font-size-sm);
    font-weight: 500;
    color: var(--color-text);
    margin-bottom: var(--space-1);
  }

  .input {
    width: 100%;
    font-family: var(--font-family-sans);
    background-color: var(--color-surface);
    color: var(--color-text);
    border: 1px solid var(--color-border);
    transition: var(--transition-default);
  }

  .input:focus {
    outline: none;
    border-color: var(--color-border-focus);
    box-shadow: 0 0 0 2px rgb(14 165 233 / 0.1);
  }

  .input:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input::placeholder {
    color: var(--color-text-light);
  }

  /* Variants */
  .input-default {
    background-color: var(--color-surface);
    border-color: var(--color-border);
  }

  .input-filled {
    background-color: var(--color-surface-secondary);
    border-color: transparent;
  }

  .input-filled:focus {
    background-color: var(--color-surface);
    border-color: var(--color-border-focus);
  }

  .input-outline {
    background-color: transparent;
    border-color: var(--color-border-dark);
  }

  /* Sizes */
  .input-sm {
    padding: var(--space-1.5) var(--space-3);
    font-size: var(--font-size-sm);
    border-radius: var(--radius-md);
    min-height: 2rem;
  }

  .input-md {
    padding: var(--space-2) var(--space-4);
    font-size: var(--font-size-base);
    border-radius: var(--radius-md);
    min-height: 2.5rem;
  }

  .input-lg {
    padding: var(--space-3) var(--space-4);
    font-size: var(--font-size-lg);
    border-radius: var(--radius-lg);
    min-height: 3rem;
  }

  /* Icons */
  .input-icon-left {
    position: absolute;
    top: 50%;
    left: var(--space-3);
    transform: translateY(-50%);
    color: var(--color-text-muted);
    pointer-events: none;
  }

  .input-icon-right {
    position: absolute;
    top: 50%;
    right: var(--space-3);
    transform: translateY(-50%);
    color: var(--color-text-muted);
    pointer-events: none;
  }

  .input-with-left-icon {
    padding-left: 2.5rem;
  }

  .input-with-right-icon {
    padding-right: 2.5rem;
  }

  /* Error state */
  .input-error {
    border-color: var(--color-error) !important;
  }

  .input-error:focus {
    box-shadow: 0 0 0 2px rgb(239 68 68 / 0.1);
  }

  /* Helper text */
  .input-helper {
    margin-top: var(--space-1);
    font-size: var(--font-size-sm);
    color: var(--color-text-muted);
  }

  .input-error-text {
    margin-top: var(--space-1);
    font-size: var(--font-size-sm);
    color: var(--color-error);
  }
`;

export default Input;