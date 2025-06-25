function Stat({ children }) {
  return <section className="flex flex-col gap-2">{children}</section>;
}

function StatLabel({ children }) {
  return <p className="text-muted-foreground text-sm">{children}</p>;
}

function StatValue({ children }) {
  return (
    <p className="text-2xl text-primary font-semibold tabular-nums @[250px]/card:text-3xl">
      <strong>{children}</strong>
    </p>
  );
}

export { Stat, StatLabel, StatValue };
