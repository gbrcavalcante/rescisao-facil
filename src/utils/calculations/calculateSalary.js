export function calculateProportionalSalary(salary) {
  const currentDay = new Date().getDate();
  const daily = salary / 30;
  return daily * currentDay;
}
