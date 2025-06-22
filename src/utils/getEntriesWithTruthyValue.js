export default function getEntriesWithTruthyValue(data) {
  if (typeof data !== "object" || data === null) return [];

  return Object.entries(data).filter(
    ([key, { value }]) => Boolean(value)
  );
}
