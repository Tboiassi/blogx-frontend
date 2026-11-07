interface PlaceholderPageProps {
  title: string;
  description: string;
}

export function PlaceholderPage({
  title,
  description,
}: PlaceholderPageProps) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16">
      <h1 className="text-3xl font-bold text-[var(--color-text)]">
        {title}
      </h1>

      <p className="mt-3 max-w-2xl text-[var(--color-muted)]">
        {description}
      </p>
    </section>
  );
}