import type { ReactNode } from "react";

interface EmptyStateProps {
  title: string;
  description: string;
  action?: ReactNode;
}

export function EmptyState({
  title,
  description,
  action,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-surface-muted)] text-2xl">
        ✦
      </div>

      <h3 className="mb-2 text-lg font-semibold text-[var(--color-text)]">
        {title}
      </h3>

      <p className="mb-5 max-w-sm text-sm text-[var(--color-muted)]">
        {description}
      </p>

      {action}
    </div>
  );
}