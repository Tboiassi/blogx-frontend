import { Link } from "react-router-dom";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="mx-auto max-w-7xl px-5 py-10">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <Link
              to="/"
              className="text-2xl font-bold text-[var(--color-text)]"
            >
              Blog<span className="text-[var(--color-primary)]">X.</span>
            </Link>

            <p className="mt-3 max-w-xs text-sm leading-6 text-[var(--color-muted)]">
              A place for ideas, stories and knowledge.
              Discover articles and share your perspective.
            </p>
          </div>

          <div>
            <h3 className="mb-3 font-semibold text-[var(--color-text)]">
              Explore
            </h3>

            <div className="flex flex-col gap-3 text-sm text-[var(--color-muted)]">
              <Link to="/articles">All articles</Link>
              <Link to="/categories">Categories</Link>
            </div>
          </div>

          <div>
            <h3 className="mb-3 font-semibold text-[var(--color-text)]">
              Account
            </h3>

            <div className="flex flex-col gap-3 text-sm text-[var(--color-muted)]">
              <Link to="/login">Sign in</Link>
              <Link to="/register">Create account</Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-[var(--color-border)] pt-6">
          <p className="text-center text-sm text-[var(--color-muted)]">
            © {CURRENT_YEAR} BlogX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
