import * as React from 'react';
import { Check, AlertCircle, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface FormGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  error?: string;
  success?: string;
}

export function FormGroup({ className, children, error, success, ...props }: FormGroupProps) {
  return (
    <div className={cn('w-full space-y-1.5', className)} {...props}>
      {children}
      {error && <FormMessage variant="error">{error}</FormMessage>}
      {success && <FormMessage variant="success">{success}</FormMessage>}
    </div>
  );
}

export interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  requiredIndicator?: boolean;
}

export const FormLabel = React.forwardRef<HTMLLabelElement, FormLabelProps>(
  ({ className, children, requiredIndicator, ...props }, ref) => (
    <label
      ref={ref}
      className={cn(
        'block text-xs font-semibold uppercase tracking-wider text-text-secondary select-none',
        className
      )}
      {...props}
    >
      {children}
      {requiredIndicator && <span className="text-error ml-1" aria-hidden="true">*</span>}
    </label>
  )
);
FormLabel.displayName = 'FormLabel';

export interface FormMessageProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: 'error' | 'success' | 'helper';
}

export function FormMessage({
  className,
  variant = 'error',
  children,
  ...props
}: FormMessageProps) {
  if (!children) return null;

  const variantStyles = {
    error: 'text-error flex items-center gap-1.5',
    success: 'text-success flex items-center gap-1.5',
    helper: 'text-text-secondary',
  };

  const Icon = variant === 'error' ? AlertCircle : variant === 'success' ? CheckCircle2 : null;

  return (
    <p
      className={cn('text-xs font-medium leading-normal mt-1.5', variantStyles[variant], className)}
      role={variant === 'error' ? 'alert' : 'status'}
      {...props}
    >
      {Icon && <Icon className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />}
      <span>{children}</span>
    </p>
  );
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean | string;
  success?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, success, type = 'text', ...props }, ref) => (
    <div className="relative w-full">
      <input
        ref={ref}
        type={type}
        className={cn(
          'w-full h-11 px-4 text-sm rounded-lg bg-surface border border-border text-text-primary placeholder:text-text-tertiary transition-all duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:border-transparent disabled:opacity-50 disabled:bg-surface-muted disabled:pointer-events-none min-h-[44px]',
          error && 'border-error focus-visible:ring-error',
          success && 'border-success focus-visible:ring-success',
          className
        )}
        aria-invalid={!!error}
        {...props}
      />
    </div>
  )
);
Input.displayName = 'Input';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean | string;
  success?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, success, rows = 4, ...props }, ref) => (
    <textarea
      ref={ref}
      rows={rows}
      className={cn(
        'w-full p-4 text-sm rounded-lg bg-surface border border-border text-text-primary placeholder:text-text-tertiary transition-all duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:border-transparent disabled:opacity-50 disabled:bg-surface-muted disabled:pointer-events-none resize-y min-h-[100px]',
        error && 'border-error focus-visible:ring-error',
        success && 'border-success focus-visible:ring-success',
        className
      )}
      aria-invalid={!!error}
      {...props}
    />
  )
);
Textarea.displayName = 'Textarea';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean | string;
  success?: boolean;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, error, success, children, ...props }, ref) => (
    <div className="relative w-full">
      <select
        ref={ref}
        className={cn(
          'w-full h-11 px-4 pr-8 text-sm rounded-lg bg-surface border border-border text-text-primary transition-all duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:border-transparent disabled:opacity-50 disabled:bg-surface-muted disabled:pointer-events-none appearance-none cursor-pointer min-h-[44px]',
          error && 'border-error focus-visible:ring-error',
          success && 'border-success focus-visible:ring-success',
          className
        )}
        aria-invalid={!!error}
        {...props}
      >
        {children}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-text-tertiary" aria-hidden="true">
        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
        </svg>
      </div>
    </div>
  )
);
Select.displayName = 'Select';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: React.ReactNode;
  description?: React.ReactNode;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, description, id, disabled, ...props }, ref) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;

    return (
      <label
        htmlFor={inputId}
        className={cn(
          'flex items-start gap-3 select-none cursor-pointer group min-h-[44px] py-1',
          disabled && 'opacity-50 pointer-events-none cursor-not-allowed',
          className
        )}
      >
        <div className="relative flex items-center justify-center w-5 h-5 mt-0.5 rounded border border-border group-hover:border-border-strong bg-surface transition-colors focus-within:ring-2 focus-within:ring-accent">
          <input
            ref={ref}
            id={inputId}
            type="checkbox"
            disabled={disabled}
            className="peer sr-only"
            {...props}
          />
          <div className="w-full h-full rounded flex items-center justify-center bg-transparent peer-checked:bg-accent transition-colors">
            <Check className="w-3.5 h-3.5 text-accent-foreground opacity-0 peer-checked:opacity-100 transition-opacity" />
          </div>
        </div>
        <div className="text-xs space-y-0.5">
          <span className="font-medium text-text-primary block">{label}</span>
          {description && <span className="text-text-secondary block">{description}</span>}
        </div>
      </label>
    );
  }
);
Checkbox.displayName = 'Checkbox';

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: React.ReactNode;
  description?: React.ReactNode;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className, label, description, id, disabled, ...props }, ref) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;

    return (
      <label
        htmlFor={inputId}
        className={cn(
          'flex items-start gap-3 select-none cursor-pointer group min-h-[44px] py-1',
          disabled && 'opacity-50 pointer-events-none cursor-not-allowed',
          className
        )}
      >
        <div className="relative flex items-center justify-center w-5 h-5 mt-0.5 rounded-full border border-border group-hover:border-border-strong bg-surface transition-colors focus-within:ring-2 focus-within:ring-accent">
          <input
            ref={ref}
            id={inputId}
            type="radio"
            disabled={disabled}
            className="peer sr-only"
            {...props}
          />
          <div className="w-2.5 h-2.5 rounded-full bg-accent scale-0 peer-checked:scale-100 transition-transform" />
        </div>
        <div className="text-xs space-y-0.5">
          <span className="font-medium text-text-primary block">{label}</span>
          {description && <span className="text-text-secondary block">{description}</span>}
        </div>
      </label>
    );
  }
);
Radio.displayName = 'Radio';

// Backward compatibility aliases
export const Label = FormLabel;
