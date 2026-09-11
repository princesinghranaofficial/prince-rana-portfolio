import * as React from 'react';
import { AlertTriangle, AlertCircle, RefreshCw } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export interface InlineErrorProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export function InlineError({ className, children, ...props }: InlineErrorProps) {
  if (!children) return null;
  return (
    <span
      className={cn('inline-flex items-center gap-1.5 text-xs text-error font-medium', className)}
      role="alert"
      {...props}
    >
      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
      <span>{children}</span>
    </span>
  );
}

export interface FormErrorProps extends React.HTMLAttributes<HTMLDivElement> {
  message: string;
}

export function FormError({ className, message, ...props }: FormErrorProps) {
  if (!message) return null;
  return (
    <div
      className={cn(
        'p-3.5 rounded-lg bg-error-muted border border-error/25 text-error text-xs font-mono flex items-start gap-2.5 leading-normal',
        className
      )}
      role="alert"
      {...props}
    >
      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
      <span>{message}</span>
    </div>
  );
}

export interface ErrorPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description: string;
  onRetry?: () => void;
  retryLabel?: string;
}

export function ErrorPanel({
  title = 'Something went wrong',
  description,
  onRetry,
  retryLabel = 'Try again',
  className,
  ...props
}: ErrorPanelProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-error/25 bg-error-muted/30 p-8 text-center space-y-4 max-w-md mx-auto',
        className
      )}
      role="alert"
      {...props}
    >
      <div className="w-10 h-10 rounded-xl bg-error-muted text-error flex items-center justify-center mx-auto border border-error/30">
        <AlertTriangle className="w-5 h-5" aria-hidden="true" />
      </div>

      <div className="space-y-1">
        <h3 className="type-h4 text-text-primary">{title}</h3>
        <p className="type-body-small text-text-secondary">{description}</p>
      </div>

      {onRetry && (
        <div className="pt-2">
          <Button
            variant="outline"
            size="sm"
            onClick={onRetry}
            leftIcon={<RefreshCw className="w-3.5 h-3.5" />}
          >
            {retryLabel}
          </Button>
        </div>
      )}
    </div>
  );
}
