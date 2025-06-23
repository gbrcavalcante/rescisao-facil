export function calculateDaysBetween(admission, removal) {
  const start = new Date(admission);
  const end = new Date(removal);
  const diffMs = end - start;
  return Math.ceil(diffMs / (1000 * 60 * 60 * 24)); // dias corridos
}
