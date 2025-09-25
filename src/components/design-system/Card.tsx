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
    systentando: "bg-white dark:bg-gray-800 border-systentando-primary/20 shadow-systentando",
    bronze: "bg-gradient-card border-bronze/20 shadow-bronze",
    gamer: "bg-gradient-gamer border-neon-purple/50 text-white shadow-neon",
    health: "bg-health/10 border-health/30 text-health-dark",
    sleep: "bg-sleep/10 border-sleep/30 text-sleep-dark",
    personal: "bg-personal/10 border-personal/30 text-personal-dark",
    work: "bg-work/10 border-work/30 text-work-dark",
    finance: "bg-finance/10 border-finance/30 text-finance-dark",
    default: "bg-card text-card-foreground border-border",
  };
  return variants[variant] || variants.default;
};

// Card size styles
const getSizeClasses = (size: CardSize): string => {
  const sizes = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };
  return sizes[size] || sizes.md;
};

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  size?: CardSize;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    const baseClasses = "rounded-lg border shadow-sm transition-all duration-300 hover:shadow-md";
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
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    />
  )
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("text-2xl font-semibold leading-none tracking-tight", className)}
      {...props}
    />
  )
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  )
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center p-6 pt-0", className)}
      {...props}
    />
  )
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
