import { Link } from "react-router-dom";
import { ArrowLeft, UserCircle, LogOut } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";

interface DashboardHeaderProps {
  title: string;
  description?: string;
  userName?: string;
}

export function DashboardHeader({
  title,
  description,
  userName,
}: DashboardHeaderProps) {
  const { user, logout } = useAuth();
  const displayName = userName ?? user?.fullName ?? "User";

  return (
    <header className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-4 lg:px-8">
      <div>
        <h1 className="text-xl font-semibold text-[var(--color-text)]">
          {title}
        </h1>

        {description && (
          <p className="mt-1 text-sm text-[var(--color-muted)]">
            {description}
          </p>
        )}
      </div>

      <div className="flex items-center gap-4">
        <span className="hidden text-sm font-medium text-[var(--color-text)] sm:block">
          {displayName}
        </span>

        <UserCircle
          size={28}
          className="text-[var(--color-muted)]"
        />

        <button
          type="button"
          onClick={logout}
          aria-label="Sign out"
          title="Sign out"
          className="flex items-center gap-1 text-sm text-[var(--color-muted)] hover:text-red-600 transition-colors cursor-pointer"
        >
          <LogOut size={16} />
          <span className="hidden sm:inline">Sign out</span>
        </button>

        <Link
          to="/"
          className="flex items-center gap-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)]"
        >
          <ArrowLeft size={16} />
          <span className="hidden sm:inline">Visit website</span>
        </Link>
      </div>
    </header>
  );
}
