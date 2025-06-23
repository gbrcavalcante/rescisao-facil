export function calculateInstallmentCount(totalMonthsApart) {
  if (totalMonthsApart >= 6 && totalMonthsApart < 12) return 3;
  if (totalMonthsApart >= 12 && totalMonthsApart < 24) return 4;
  if (totalMonthsApart >= 24) return 5;
}
