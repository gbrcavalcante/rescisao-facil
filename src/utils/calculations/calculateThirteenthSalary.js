export function calculateThirteenthSalary(salary) {
  const currentMonth = new Date().getMonth() + 1;
  return (salary / 12) * currentMonth;
}
