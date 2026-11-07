import type { ReactNode } from "react";

type ToastVariant = "success" | "error" | "info";

interface ToastProps {
  message: string;
  variant?: ToastVariant;
  onClose?: () => void;
  action?: ReactNode;
}

const styles: Record<ToastVariant, string> = {
  success: "border-green-500",
  error: "border-red-500",
  info: "border-blue-500",
};

export function Toast({
  message,
  variant = "success",
  onClose,
  action,
}: ToastProps) {
  return (
    <div
      role={variant === "error" ? "alert" : "status"}
      className={`flex items-center justify-between gap-4 rounded-lg border-l-4 bg-[var(--color-surface)] p-4 shadow-lg ${styles[variant]}`}
    >
      <p className="text-sm text-[var(--color-text)]">
        {message}
      </p>

      <div className="flex items-center gap-3">
        {action}

        {onClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Dismiss notification"
            className="text-[var(--color-muted)]"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
}