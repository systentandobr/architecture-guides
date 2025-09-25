import React from 'react';

// Utility function to merge classes
function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

type CardVariant = 
  | 'systentando'
  | 'bronze'
  | 'gamer'
  | 'health'
  | 'sleep'
  | 'personal'
  | 'work'
  | 'finance'
  | 'default';

type CardSize = 'sm' | 'md' | 'lg';

// Card variant styles
const getVariantClasses = (variant: CardVariant): string => {
  const variants = {
    systentando: "ds-card ds-card-systentando",
    bronze: "ds-card ds-card-bronze",
    gamer: "ds-card ds-card-gamer",
    health: "ds-card ds-card-health",
    sleep: "ds-card ds-card-sleep",
    personal: "ds-card ds-card-personal",
    work: "ds-card ds-card-work",
    finance: "ds-card ds-card-finance",
    default: "ds-card",
  };
  return variants[variant] || variants.default;
};

// Card size styles
const getSizeClasses = (size: CardSize): string => {
  const sizes = {
    sm: "ds-p-6", // Using p-6 for all sizes
    md: "ds-p-6",
    lg: "ds-p-6",
  };
  return sizes[size] || sizes.md;
};

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  size?: CardSize;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    const baseClasses = "";
    const variantClasses = getVariantClasses(variant);
    const sizeClasses = getSizeClasses(size);
    
    return (
      <div
        className={cn(baseClasses, variantClasses, sizeClasses, className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("ds-card-header", className)}
      {...props}
    />
  )
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("ds-card-title", className)}
      {...props}
    />
  )
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("ds-card-description", className)}
      {...props}
    />
  )
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("ds-card-content", className)} {...props} />
  )
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("ds-card-footer", className)}
      {...props}
    />
  )
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
