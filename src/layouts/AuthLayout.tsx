import { Link, Outlet } from "react-router-dom";

const CURRENT_YEAR = new Date().getFullYear();

export function AuthLayout() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--color-background)] px-5 py-10">
      <div className="w-full max-w-md">
        <Link
          to="/"
          className="mb-8 block text-center text-3xl font-bold text-[var(--color-text)]"
        >
          Blog<span className="text-[var(--color-primary)]">X.</span>
        </Link>

        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm sm:p-8">
          <Outlet />
        </div>

        <p className="mt-6 text-center text-xs text-[var(--color-muted)]">
          © {CURRENT_YEAR} BlogX. All rights reserved.
        </p>
      </div>
    </main>
  );
}
