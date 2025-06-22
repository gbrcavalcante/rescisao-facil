export default function calculateWorkPeriod(admission, removal) {
  const startDate = new Date(admission);
  const endDate = new Date(removal);

  const startMonth = startDate.getMonth();
  const startYear = startDate.getFullYear();
  const endMonth = endDate.getMonth();
  const endYear = endDate.getFullYear();

  return (endYear - startYear) * 12 + (endMonth - startMonth);
}
