import * as React from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent' | 'text';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      type = 'button',
      ...props
    },
    ref
  ) => {
    // 1-2px subtle translation, fast 150ms transition, tactile focus-visible
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-all duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-45 disabled:pointer-events-none disabled:shadow-none select-none rounded-lg active:translate-y-[1px] active:scale-[0.99] group';

    const variantStyles = {
      primary:
        'bg-foreground text-background hover:opacity-90 shadow-sm hover:shadow-md active:opacity-95',
      secondary:
        'bg-surface-100 text-foreground hover:bg-surface-200 border border-border/80 active:bg-surface-300',
      outline:
        'border border-border-strong text-foreground hover:bg-surface-100 hover:border-foreground/30 active:bg-surface-200',
      ghost:
        'text-text-secondary hover:text-foreground hover:bg-surface-100 active:bg-surface-200',
      accent:
        'bg-accent text-accent-foreground hover:bg-accent-hover shadow-sm hover:shadow-accent/25 active:opacity-95',
      text:
        'text-text-secondary hover:text-foreground underline-offset-4 hover:underline p-0 h-auto font-normal',
    };

    const sizeStyles = {
      sm: 'text-xs h-8 px-3 gap-1.5 min-h-[32px]',
      md: 'text-sm h-10 px-4 py-2 gap-2 min-h-[40px]',
      lg: 'text-base h-12 px-6 py-3 gap-2.5 min-h-[48px]',
    };

    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          baseStyles,
          variantStyles[variant],
          variant !== 'text' && sizeStyles[size],
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && <Loader2 className="w-4 h-4 animate-spin shrink-0" />}
        {!isLoading && leftIcon && (
          <span className="shrink-0 transition-transform duration-150 group-hover:-translate-x-0.5">
            {leftIcon}
          </span>
        )}
        <span>{children}</span>
        {!isLoading && rightIcon && (
          <span className="shrink-0 transition-transform duration-150 group-hover:translate-x-0.5">
            {rightIcon}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

// Specialized Convenience Variants
export const PrimaryButton = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => (
  <Button ref={ref} variant="primary" {...props} />
));
PrimaryButton.displayName = 'PrimaryButton';

export const SecondaryButton = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => (
  <Button ref={ref} variant="secondary" {...props} />
));
SecondaryButton.displayName = 'SecondaryButton';

export const GhostButton = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => (
  <Button ref={ref} variant="ghost" {...props} />
));
GhostButton.displayName = 'GhostButton';

export const TextButton = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => (
  <Button ref={ref} variant="text" {...props} />
));
TextButton.displayName = 'TextButton';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent';
  'aria-label': string;
  isLoading?: boolean;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, size = 'md', variant = 'ghost', isLoading, children, 'aria-label': ariaLabel, ...props }, ref) => {
    const sizeMap = {
      sm: 'w-8 h-8 p-1 text-xs',
      md: 'w-10 h-10 p-2 text-sm',
      lg: 'w-12 h-12 p-3 text-base',
    };

    return (
      <Button
        ref={ref}
        variant={variant}
        className={cn('rounded-lg flex items-center justify-center shrink-0 p-0', sizeMap[size], className)}
        aria-label={ariaLabel}
        isLoading={isLoading}
        {...props}
      >
        {children}
      </Button>
    );
  }
);
IconButton.displayName = 'IconButton';
