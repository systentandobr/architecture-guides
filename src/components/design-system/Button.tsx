import React from 'react';

// Utility function to merge classes
function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

// Button variant types
type ButtonVariant = 
  | 'systentando'
  | 'accent'
  | 'health'
  | 'sleep'
  | 'personal'
  | 'work'
  | 'finance'
  | 'bronze'
  | 'copper'
  | 'gold'
  | 'neon'
  | 'gamer'
  | 'default'
  | 'destructive'
  | 'outline'
  | 'secondary'
  | 'ghost'
  | 'link';

type ButtonSize = 'default' | 'sm' | 'lg' | 'icon';

// Button variant styles
const getVariantClasses = (variant: ButtonVariant): string => {
  const variants = {
    systentando: "ds-button-systentando",
    accent: "ds-button-accent",
    health: "ds-button-health",
    sleep: "ds-button-sleep",
    personal: "ds-button-personal",
    work: "ds-button-work",
    finance: "ds-button-finance",
    bronze: "ds-button-bronze",
    copper: "ds-button-bronze", // Using bronze for copper
    gold: "ds-button-bronze", // Using bronze for gold
    neon: "ds-button-neon",
    gamer: "ds-button-gamer",
    default: "ds-button-systentando", // Default to systentando
    destructive: "ds-button-accent", // Using accent for destructive
    outline: "ds-button-systentando", // Using systentando for outline
    secondary: "ds-button-accent", // Using accent for secondary
    ghost: "ds-button-systentando", // Using systentando for ghost
    link: "ds-button-systentando", // Using systentando for link
  };
  return variants[variant] || variants.default;
};

// Button size styles
const getSizeClasses = (size: ButtonSize): string => {
  const sizes = {
    default: "",
    sm: "ds-button-sm",
    lg: "ds-button-lg",
    icon: "ds-button-icon",
  };
  return sizes[size] || sizes.default;
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', asChild = false, ...props }, ref) => {
    const baseClasses = "ds-button";
    const variantClasses = getVariantClasses(variant);
    const sizeClasses = getSizeClasses(size);
    
    return (
      <button
        className={cn(baseClasses, variantClasses, sizeClasses, className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
