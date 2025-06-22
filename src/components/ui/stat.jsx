function Stat({ children }) {
  return (
    <section className="flex flex-col gap-2" role="region">
      {children}
    </section>
  );
}

function StatLabel({ children, id }) {
  return (
    <p id={id} className="text-muted-foreground text-sm">
      {children}
    </p>
  );
}

function StatValue({ children }) {
  return (
    <p className="text-3xl text-primary font-semibold" aria-live="polite">
      <strong>{children}</strong>
    </p>
  );
}

export { Stat, StatLabel, StatValue };
