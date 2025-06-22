export function calculateAccruedVacation(salary) {
  return (salary / 3) + salary;
}

export function calculateProportionalVacation(months, salary) {
  const monthly = salary / 12;
  const oneThird = (monthly * months) / 3;
  return monthly * months + oneThird;
}
