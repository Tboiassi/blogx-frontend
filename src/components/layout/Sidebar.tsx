import { NavLink } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import { cn } from "../../lib/utils";

export interface SidebarItem {
  label: string;
  path: string;
  icon: LucideIcon;
}

interface SidebarProps {
  title: string;
  items: SidebarItem[];
}

export function Sidebar({ title, items }: SidebarProps) {
  return (
    <aside className="hidden min-h-screen w-64 shrink-0 border-r border-[var(--color-border)] bg-[var(--color-surface)] p-5 lg:block">
      <div className="mb-10">
        <NavLink
          to="/"
          className="text-2xl font-bold text-[var(--color-text)]"
        >
          Blog<span className="text-[var(--color-primary)]">X.</span>
        </NavLink>

        <p className="mt-2 text-xs font-medium uppercase tracking-wider text-[var(--color-muted)]">
          {title}
        </p>
      </div>

      <nav className="space-y-2" aria-label={`${title} navigation`}>
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              end
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-[var(--color-primary-soft)] text-[var(--color-primary)]"
                    : "text-[var(--color-muted)] hover:bg-[var(--color-surface-muted)] hover:text-[var(--color-text)]",
                )
              }
            >
              <Icon size={18} />
              {item.label}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}