export function calculateInstallmentCount(admission, removal) {
  const startDate = new Date(admission);
  const endDate = new Date(removal);

  const startMonth = startDate.getMonth();
  const startYear = startDate.getFullYear();
  const endMonth = endDate.getMonth();
  const endYear = endDate.getFullYear();

  const totalMonthsApart = (endYear - startYear) * 12 + (endMonth - startMonth);

  if (totalMonthsApart >= 6 && totalMonthsApart < 12) return 3;
  if (totalMonthsApart >= 12 && totalMonthsApart < 24) return 4;
  if (totalMonthsApart >= 24) return 5;
}
