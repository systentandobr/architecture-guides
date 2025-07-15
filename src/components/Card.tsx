import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outlined' | 'elevated' | 'filled';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  interactive?: boolean;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  variant = 'default',
  padding = 'md',
  radius = 'md',
  shadow = 'sm',
  interactive = false,
  children,
  className = '',
  ...props
}) => {
  const baseStyles = `
    transition-all duration-150
    ${interactive ? 'cursor-pointer hover:scale-[1.02] active:scale-[0.98]' : ''}
  `;

  const variantStyles = {
    default: `
      bg-[var(--color-surface)] 
      border border-[var(--color-border)]
    `,
    outlined: `
      bg-[var(--color-surface)] 
      border-2 border-[var(--color-border-dark)]
    `,
    elevated: `
      bg-[var(--color-surface)]
      border border-[var(--color-border-light)]
    `,
    filled: `
      bg-[var(--color-surface-secondary)]
      border border-transparent
    `,
  };

  const paddingStyles = {
    none: 'p-0',
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6',
    xl: 'p-8',
  };

  const radiusStyles = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
  };

  const shadowStyles = {
    none: 'shadow-none',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
  };

  const interactiveStyles = interactive ? `
    hover:shadow-md focus:outline-none focus:ring-2 
    focus:ring-[var(--color-primary)] focus:ring-offset-2
  ` : '';

  const cardStyles = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${paddingStyles[padding]}
    ${radiusStyles[radius]}
    ${shadowStyles[shadow]}
    ${interactiveStyles}
    ${className}
  `.replace(/\s+/g, ' ').trim();

  return (
    <div className={cardStyles} {...props}>
      {children}
    </div>
  );
};

// Subcomponentes para facilitar a composição
export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  action?: React.ReactNode;
  children?: React.ReactNode;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  subtitle,
  action,
  children,
  className = '',
  ...props
}) => {
  const headerStyles = `
    flex items-start justify-between
    pb-4 mb-4 border-b border-[var(--color-border)]
    ${className}
  `.replace(/\s+/g, ' ').trim();

  return (
    <div className={headerStyles} {...props}>
      <div className="flex-1 min-w-0">
        {title && (
          <h3 className="text-lg font-semibold text-[var(--color-text)] truncate">
            {title}
          </h3>
        )}
        {subtitle && (
          <p className="mt-1 text-sm text-[var(--color-text-secondary)] truncate">
            {subtitle}
          </p>
        )}
        {children}
      </div>
      {action && (
        <div className="ml-4 flex-shrink-0">
          {action}
        </div>
      )}
    </div>
  );
};

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardContent: React.FC<CardContentProps> = ({
  children,
  className = '',
  ...props
}) => {
  const contentStyles = `
    text-[var(--color-text-secondary)] leading-relaxed
    ${className}
  `.replace(/\s+/g, ' ').trim();

  return (
    <div className={contentStyles} {...props}>
      {children}
    </div>
  );
};

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  align?: 'left' | 'center' | 'right' | 'between';
}

export const CardFooter: React.FC<CardFooterProps> = ({
  children,
  align = 'right',
  className = '',
  ...props
}) => {
  const alignStyles = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
    between: 'justify-between',
  };

  const footerStyles = `
    flex items-center pt-4 mt-4 
    border-t border-[var(--color-border)]
    ${alignStyles[align]}
    ${className}
  `.replace(/\s+/g, ' ').trim();

  return (
    <div className={footerStyles} {...props}>
      {children}
    </div>
  );
};

// CSS-in-JS alternative for projects without Tailwind
export const CardStyles = `
  .card {
    background-color: var(--color-surface);
    border: 1px solid var(--color-border);
    transition: var(--transition-default);
  }

  /* Variants */
  .card-default {
    background-color: var(--color-surface);
    border: 1px solid var(--color-border);
  }

  .card-outlined {
    background-color: var(--color-surface);
    border: 2px solid var(--color-border-dark);
  }

  .card-elevated {
    background-color: var(--color-surface);
    border: 1px solid var(--color-border-light);
  }

  .card-filled {
    background-color: var(--color-surface-secondary);
    border: 1px solid transparent;
  }

  /* Padding */
  .card-padding-none { padding: 0; }
  .card-padding-sm { padding: var(--space-3); }
  .card-padding-md { padding: var(--space-4); }
  .card-padding-lg { padding: var(--space-6); }
  .card-padding-xl { padding: var(--space-8); }

  /* Border radius */
  .card-radius-none { border-radius: 0; }
  .card-radius-sm { border-radius: var(--radius-sm); }
  .card-radius-md { border-radius: var(--radius-md); }
  .card-radius-lg { border-radius: var(--radius-lg); }
  .card-radius-xl { border-radius: var(--radius-xl); }

  /* Shadows */
  .card-shadow-none { box-shadow: none; }
  .card-shadow-sm { box-shadow: var(--shadow-sm); }
  .card-shadow-md { box-shadow: var(--shadow-md); }
  .card-shadow-lg { box-shadow: var(--shadow-lg); }
  .card-shadow-xl { box-shadow: var(--shadow-xl); }

  /* Interactive */
  .card-interactive {
    cursor: pointer;
    transition: transform 150ms ease-in-out, box-shadow 150ms ease-in-out;
  }

  .card-interactive:hover {
    transform: scale(1.02);
    box-shadow: var(--shadow-md);
  }

  .card-interactive:active {
    transform: scale(0.98);
  }

  .card-interactive:focus {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }

  /* Header */
  .card-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding-bottom: var(--space-4);
    margin-bottom: var(--space-4);
    border-bottom: 1px solid var(--color-border);
  }

  .card-header-content {
    flex: 1;
    min-width: 0;
  }

  .card-header-title {
    font-size: var(--font-size-lg);
    font-weight: 600;
    color: var(--color-text);
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .card-header-subtitle {
    font-size: var(--font-size-sm);
    color: var(--color-text-secondary);
    margin: var(--space-1) 0 0 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .card-header-action {
    margin-left: var(--space-4);
    flex-shrink: 0;
  }

  /* Content */
  .card-content {
    color: var(--color-text-secondary);
    line-height: 1.6;
  }

  /* Footer */
  .card-footer {
    display: flex;
    align-items: center;
    padding-top: var(--space-4);
    margin-top: var(--space-4);
    border-top: 1px solid var(--color-border);
    gap: var(--space-2);
  }

  .card-footer-left { justify-content: flex-start; }
  .card-footer-center { justify-content: center; }
  .card-footer-right { justify-content: flex-end; }
  .card-footer-between { justify-content: space-between; }
`;

export default Card;