import { IRRF_TABLE } from "@/constants/irrfTable";
import { calculateINSS } from "./calculateINSS";

// Retorna apenas o valor do desconto do IRRF
export function calculateIRRF(grossSalary) {
  const inss = calculateINSS(grossSalary);
  const taxableBase = grossSalary - inss;

  const bracket = IRRF_TABLE.find((b) => taxableBase <= b.limit);

  if (!bracket || bracket.rate === 0) return 0;

  const irrf = taxableBase * bracket.rate - bracket.deduction;

  return parseFloat(Math.max(irrf, 0).toFixed(2));
}
