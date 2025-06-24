import { calculateDaysBetween } from "../calculations/calculateDaysBetween";
import { calculateFineTermination } from "../calculations/calculateFineTermination";
import { calculateIndemnifiedNoticeValue } from "../calculations/calculateIndemnifiedNotice";
import { calculateProportionalSalary } from "../calculations/calculateSalary";
import { calculateThirteenthSalary } from "../calculations/calculateThirteenthSalary";
import { calculateAccruedVacation, calculateProportionalVacation } from "../calculations/calculateVacation";
import parseNumberFromString from "../parseNumberFromString";
import { calculateINSS, calculateIRRF } from "../taxes";


export function calculateTrialPeriodDismissed(inputs) {
  const {
    salary,
    fgts,
    priorNotice,
    proportionalVacation,
    proportionalVacationMonths,
    accruedVacation,
    admission,
    removal,
    terminationReason,
  } = inputs;

  const parsedSalary = parseNumberFromString(salary.value);
  const parsedFgts = parseNumberFromString(fgts.value);
  const daysWorked = calculateDaysBetween(admission.value, removal.value);

  const result = {
    proportionalSalary: {
      title: "Salário proporcional",
      value: 0,
      inss: 0,
      irrf: 0,
    },
    priorNotice: { title: "Aviso prévio", value: 0, inss: 0, irrf: 0 },
    fgts: { title: "FGTS", value: 0 },
    fineTermination: { title: "Multa rescisória (40% do FGTS)", value: 0 },
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

  // Aviso prévio indenizado, se não cumprido e for demissão sem justa causa
  if (
    terminationReason.value === "dismissal_without_cause" &&
    priorNotice.value === "não"
  ) {
    const noticeValue = calculateIndemnifiedNoticeValue(
      admission.value,
      removal.value,
      parsedSalary
    );
    result.priorNotice.value = noticeValue;
    result.priorNotice.inss = calculateINSS(noticeValue);
    result.priorNotice.irrf = calculateIRRF(noticeValue);
  }

  // FGTS disponível
  result.fgts.value = parsedFgts;

  // Multa de 40% sobre o saldo do FGTS somente se demissão sem justa causa e dentro do período de experiência (até 90 dias)
  if (
    terminationReason.value === "dismissal_without_cause" &&
    daysWorked <= 90
  ) {
    result.fineTermination.value = calculateFineTermination(parsedFgts);
  }

  // Férias vencidas (se aplicável)
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
