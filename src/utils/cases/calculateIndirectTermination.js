import { calculateProportionalSalary } from "../calculations/calculateSalary";
import { calculateThirteenthSalary } from "../calculations/calculateThirteenthSalary";
import {
  calculateAccruedVacation,
  calculateProportionalVacation,
} from "../calculations/calculateVacation";
import parseNumberFromString from "../parseNumberFromString";
import { calculateINSS, calculateIRRF } from "../taxes";

export function calculateIndirectTermination(inputs) {
  const {
    salary,
    fgts,
    proportionalVacation,
    proportionalVacationMonths,
    accruedVacation,
    terminationReason,
  } = inputs;

  const parsedSalary = parseNumberFromString(salary.value);
  const parsedFgts = parseNumberFromString(fgts.value);
  const termination = terminationReason.value;

  const result = {
    proportionalSalary: {
      title: "Salário proporcional",
      value: 0,
      inss: 0,
      irrf: 0,
    },
    priorNotice: { title: "Aviso prévio", value: 0, inss: 0, irrf: 0 },
    fgts: { title: "FGTS", value: 0 },
    fineTermination: { title: "Multa rescisória", value: 0 },
    accruedVacation: { title: "Férias vencidas", value: 0, inss: 0, irrf: 0 },
    proportionalVacation: {
      title: "Férias proporcionais",
      value: 0,
      inss: 0,
      irrf: 0,
    },
    thirteenthSalary: { title: "13º salário", value: 0, inss: 0, irrf: 0 },
  };

  // Cálculos específicos para demissão indireta - ajuste conforme regras

  const proportionalSalary = calculateProportionalSalary(parsedSalary);
  result.proportionalSalary.value = proportionalSalary;
  result.proportionalSalary.inss = calculateINSS(proportionalSalary);
  result.proportionalSalary.irrf = calculateIRRF(proportionalSalary);

  // FGTS: geralmente igual a demissão sem justa causa
  result.fgts.value = parsedFgts;

  if (termination !== "trial_period_end" && accruedVacation.value === "sim") {
    const accrued = calculateAccruedVacation(parsedSalary);
    result.accruedVacation.value = accrued;
    result.accruedVacation.inss = calculateINSS(accrued);
    result.accruedVacation.irrf = calculateIRRF(accrued);
  }

  if (
    termination !== "dismissal_with_cause" &&
    proportionalVacation.value === "sim"
  ) {
    const proportional = calculateProportionalVacation(
      proportionalVacationMonths,
      parsedSalary
    );
    result.proportionalVacation.value = proportional;
    result.proportionalVacation.inss = calculateINSS(proportional);
    result.proportionalVacation.irrf = calculateIRRF(proportional);
  }

  if (termination !== "dismissal_with_cause") {
    const thirteenth = calculateThirteenthSalary(parsedSalary);
    result.thirteenthSalary.value = thirteenth;
    result.thirteenthSalary.inss = calculateINSS(thirteenth);
    result.thirteenthSalary.irrf = calculateIRRF(thirteenth);
  }

  return result;
}
