export function calculateMonthsWorked(admission, removal) {
  if (!admission || !removal) return 0;

  const startDate = new Date(admission);
  const endDate = new Date(removal);

  return (
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth())
  );
}
