import { Link } from "react-router-dom";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";

export function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div>
      <h1 className="text-2xl font-bold text-[var(--color-text)]">
        Create your account
      </h1>

      <p className="mt-2 text-sm text-[var(--color-muted)]">
        Join BlogX and discover ideas worth sharing.
      </p>

      <form
        className="mt-7 space-y-5"
        onSubmit={(event) => event.preventDefault()}
      >
        <Input
          label="Full name"
          name="fullName"
          placeholder="John Doe"
          autoComplete="name"
          required
        />

        <Input
          label="Email address"
          name="email"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
          required
        />

        <div className="space-y-2">
          <label
            htmlFor="register-password"
            className="text-sm font-medium text-[var(--color-text)]"
          >
            Password
          </label>

          <div className="relative">
            <Input
              id="register-password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Create a password"
              autoComplete="new-password"
              required
              className="pr-12"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-muted)]"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="confirm-password"
            className="text-sm font-medium text-[var(--color-text)]"
          >
            Confirm password
          </label>

          <div className="relative">
            <Input
              id="confirm-password"
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm your password"
              autoComplete="new-password"
              required
              className="pr-12"
            />

            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
              aria-label={
                showConfirmPassword ? "Hide password" : "Show password"
              }
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-muted)]"
            >
              {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        <Button type="submit" block className="w-full">
          Create Account
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-[var(--color-muted)]">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-semibold text-[var(--color-primary)]"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
}