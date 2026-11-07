import { Link } from "react-router-dom";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";

export function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <h1 className="text-2xl font-bold text-[var(--color-text)]">
        Welcome back
      </h1>

      <p className="mt-2 text-sm text-[var(--color-muted)]">
        Sign in to continue reading and sharing stories.
      </p>

      <form
        className="mt-7 space-y-5"
        onSubmit={(event) => event.preventDefault()}
      >
        <Input
          label="Email address"
          name="email"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
          required
        />

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="text-sm font-medium text-[var(--color-text)]"
            >
              Password
            </label>
          </div>

          <div className="relative">
            <Input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              autoComplete="current-password"
              required
              className="pr-12"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-muted)]"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        <Button type="submit" block className="w-full">
          Sign In
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-[var(--color-muted)]">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="font-semibold text-[var(--color-primary)]"
        >
          Get started
        </Link>
      </p>
    </div>
  );
}