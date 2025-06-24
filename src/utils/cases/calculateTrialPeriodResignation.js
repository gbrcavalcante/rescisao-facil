
import { calculateProportionalSalary } from "../calculations/calculateSalary";
import { calculateThirteenthSalary } from "../calculations/calculateThirteenthSalary";
import {
  calculateAccruedVacation,
  calculateProportionalVacation,
} from "../calculations/calculateVacation";
import parseNumberFromString from "../parseNumberFromString";
import { calculateINSS, calculateIRRF } from "../taxes";
export function calculateTrialPeriodResignation(inputs) {
  const {
    salary,
    fgts,
    proportionalVacation,
    proportionalVacationMonths,
    accruedVacation,
  } = inputs;

  const parsedSalary = parseNumberFromString(salary.value);
  const parsedFgts = parseNumberFromString(fgts.value);

  const result = {
    proportionalSalary: {
      title: "Salário proporcional",
      value: 0,
      inss: 0,
      irrf: 0,
    },
    fgts: { title: "FGTS", value: 0 },
    accruedVacation: { title: "Férias vencidas", value: 0, inss: 0, irrf: 0 },
    proportionalVacation: {
      title: "Férias proporcionais",
      value: 0,
      inss: 0,
      irrf: 0,
    },
    thirteenthSalary: { title: "13º salário", value: 0, inss: 0, irrf: 0 },
  };

  // Salário proporcional
  const proportionalSalary = calculateProportionalSalary(parsedSalary);
  result.proportionalSalary.value = proportionalSalary;
  result.proportionalSalary.inss = calculateINSS(proportionalSalary);
  result.proportionalSalary.irrf = calculateIRRF(proportionalSalary);

  // FGTS (saldo disponível, sem multa)
  result.fgts.value = parsedFgts;

  // Férias vencidas (se houver)
  if (accruedVacation.value === "sim") {
    const accrued = calculateAccruedVacation(parsedSalary);
    result.accruedVacation.value = accrued;
    result.accruedVacation.inss = calculateINSS(accrued);
    result.accruedVacation.irrf = calculateIRRF(accrued);
  }

  // Férias proporcionais
  if (proportionalVacation.value === "sim") {
    const proportional = calculateProportionalVacation(
      proportionalVacationMonths,
      parsedSalary
    );
    result.proportionalVacation.value = proportional;
    result.proportionalVacation.inss = calculateINSS(proportional);
    result.proportionalVacation.irrf = calculateIRRF(proportional);
  }

  // 13º salário proporcional
  const thirteenth = calculateThirteenthSalary(parsedSalary);
  result.thirteenthSalary.value = thirteenth;
  result.thirteenthSalary.inss = calculateINSS(thirteenth);
  result.thirteenthSalary.irrf = calculateIRRF(thirteenth);

  return result;
}
