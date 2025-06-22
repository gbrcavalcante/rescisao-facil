import { INSS_TABLE } from "@/constants/inssTable";

// Retorna apenas o valor do desconto do INSS
export function calculateINSS(grossSalary) {
  let total = 0;
  let previousLimit = 0;

  for (const band of INSS_TABLE) {
    const { limit, rate } = band;

    if (grossSalary > limit) {
      total += (limit - previousLimit) * rate;
    } else {
      total += (grossSalary - previousLimit) * rate;
      break;
    }

    previousLimit = limit;
  }

  return parseFloat(total.toFixed(2));
}
