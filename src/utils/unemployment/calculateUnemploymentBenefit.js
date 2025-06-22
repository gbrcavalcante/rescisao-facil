import { LOWER_LIMIT, MAX_BENEFIT, MID_LIMIT } from "@/constants/unemployment";

export function calculateUnemploymentBenefit(monthlySalary) {
  if (monthlySalary <= LOWER_LIMIT) return monthlySalary * 0.8;
  if (monthlySalary <= MID_LIMIT)
    return 1526.22 + (monthlySalary - LOWER_LIMIT) * 0.5;
  if (monthlySalary > MID_LIMIT) return MAX_BENEFIT;
}
