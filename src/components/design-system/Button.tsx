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
    systentando: "bg-systentando-primary hover:bg-systentando-primary-dark text-white shadow-systentando",
    accent: "bg-systentando-accent hover:bg-systentando-accent-dark text-white",
    health: "bg-health hover:bg-health-dark text-white",
    sleep: "bg-sleep hover:bg-sleep-dark text-white",
    personal: "bg-personal hover:bg-personal-dark text-white",
    work: "bg-work hover:bg-work-dark text-white",
    finance: "bg-finance hover:bg-finance-dark text-white",
    bronze: "bg-gradient-bronze text-white shadow-bronze hover:shadow-glow",
    copper: "bg-copper text-white",
    gold: "bg-gold text-black",
    neon: "bg-neon-blue text-black font-bold shadow-neon hover:animate-neon-pulse",
    gamer: "bg-gradient-gamer text-white border border-neon-purple/50",
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
  };
  return variants[variant] || variants.default;
};

// Button size styles
const getSizeClasses = (size: ButtonSize): string => {
  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10",
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
    const baseClasses = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0";
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
