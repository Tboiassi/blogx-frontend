import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Search, Menu, X, PenLine, LayoutDashboard, LogOut } from "lucide-react";
import { Button } from "../ui/Button";
import { useAuth } from "../../hooks/useAuth";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();

  const dashboardPath =
    user?.role === "ADMIN"
      ? "/admin"
      : user?.role === "AUTHOR"
        ? "/author"
        : "/profile";

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-[var(--color-surface)]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight text-[var(--color-text)]"
        >
          Blog<span className="text-[var(--color-primary)]">X.</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm transition-colors ${
                isActive
                  ? "font-semibold text-[var(--color-primary)]"
                  : "text-[var(--color-text)] hover:text-[var(--color-primary)]"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/articles"
            className={({ isActive }) =>
              `text-sm transition-colors ${
                isActive
                  ? "font-semibold text-[var(--color-primary)]"
                  : "text-[var(--color-text)] hover:text-[var(--color-primary)]"
              }`
            }
          >
            Explore
          </NavLink>

          <NavLink
            to="/categories"
            className={({ isActive }) =>
              `text-sm transition-colors ${
                isActive
                  ? "font-semibold text-[var(--color-primary)]"
                  : "text-[var(--color-text)] hover:text-[var(--color-primary)]"
              }`
            }
          >
            Categories
          </NavLink>
        </div>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/articles"
            aria-label="Explore articles"
            className="rounded-lg p-2 text-[var(--color-muted)] hover:bg-[var(--color-surface-muted)]"
          >
            <Search size={19} />
          </Link>

          {isAuthenticated ? (
            <div className="flex items-center gap-3">
              <Link to={dashboardPath}>
                <Button variant="outline" size="sm">
                  <LayoutDashboard size={15} />
                  Dashboard
                </Button>
              </Link>
              <Button variant="ghost" size="sm" onClick={logout} title="Sign out">
                <LogOut size={16} />
              </Button>
            </div>
          ) : (
            <>
              <Link to="/login">
                <Button variant="outline" size="sm">
                  Sign in
                </Button>
              </Link>

              <Link to="/register">
                <Button size="sm">
                  <PenLine size={15} />
                  Get started
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-lg p-2 text-[var(--color-text)] hover:bg-[var(--color-surface-muted)] md:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {isOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="border-t border-[var(--color-border)] px-5 py-4 md:hidden bg-[var(--color-surface)]">
          <div className="flex flex-col gap-3">
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className="py-2 text-sm text-[var(--color-text)] hover:text-[var(--color-primary)]"
            >
              Home
            </NavLink>
            <NavLink
              to="/articles"
              onClick={() => setIsOpen(false)}
              className="py-2 text-sm text-[var(--color-text)] hover:text-[var(--color-primary)]"
            >
              Explore
            </NavLink>
            <NavLink
              to="/categories"
              onClick={() => setIsOpen(false)}
              className="py-2 text-sm text-[var(--color-text)] hover:text-[var(--color-primary)]"
            >
              Categories
            </NavLink>

            <div className="pt-3 border-t border-[var(--color-border)] flex flex-col gap-2">
              {isAuthenticated ? (
                <>
                  <Link to={dashboardPath} onClick={() => setIsOpen(false)}>
                    <Button variant="outline" size="sm" className="w-full">
                      <LayoutDashboard size={15} />
                      Dashboard
                    </Button>
                  </Link>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start text-red-600"
                    onClick={() => {
                      logout();
                      setIsOpen(false);
                    }}
                  >
                    <LogOut size={16} />
                    Sign out
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/login" onClick={() => setIsOpen(false)}>
                    <Button variant="outline" size="sm" className="w-full">
                      Sign in
                    </Button>
                  </Link>
                  <Link to="/register" onClick={() => setIsOpen(false)}>
                    <Button size="sm" className="w-full">
                      <PenLine size={15} />
                      Get started
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
