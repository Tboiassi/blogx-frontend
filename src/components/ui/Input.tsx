import type { InputHTMLAttributes } from "react";
import { cn } from "../../lib/utils";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export function Input({
  label,
  error,
  helperText,
  id,
  className,
  ...props
}: InputProps) {
  const inputId = id ?? props.name;

  return (
    <div className="w-full space-y-1.5">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-[var(--color-text)]"
        >
          {label}
        </label>
      )}

      <input
        id={inputId}
        aria-invalid={Boolean(error)}
        aria-describedby={
          error
            ? `${inputId}-error`
            : helperText
              ? `${inputId}-helper`
              : undefined
        }
        className={cn(
          "w-full rounded-lg border bg-[var(--color-surface)] px-4 py-3 text-sm",
          "text-[var(--color-text)] outline-none transition",
          "placeholder:text-[var(--color-muted)]",
          "focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10",
          error
            ? "border-red-500"
            : "border-[var(--color-border)]",
          className,
        )}
        {...props}
      />

      {error && (
        <p
          id={`${inputId}-error`}
          className="text-xs text-red-600"
          role="alert"
        >
          {error}
        </p>
      )}

      {!error && helperText && (
        <p
          id={`${inputId}-helper`}
          className="text-xs text-[var(--color-muted)]"
        >
          {helperText}
        </p>
      )}
    </div>
  );
}