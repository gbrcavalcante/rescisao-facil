import parseNumberFromString from "@/utils/parseNumberFromString";

import {
  calculateAccruedVacation,
  calculateProportionalVacation,
} from "./calculateVacation";
import { calculateFineTermination } from "./calculateFineTermination";
import { calculateProportionalSalary } from "./calculateSalary";
import { calculateThirteenthSalary } from "./calculateThirteenthSalary";
import { calculateIndemnifiedNoticeValue } from "./calculateIndemnifiedNotice";
import { calculateINSS } from "@/utils/taxes/calculateINSS";
import { calculateIRRF } from "@/utils/taxes/calculateIRRF";
import { calculateMutualAgreement } from "../cases/calculateMutualAgreement";
import { calculateIndirectTermination } from "../cases/calculateIndirectTermination";
import { calculateFixedTermEnd } from "../cases/calculateFixedTermEnd";
import { calculateDaysBetween } from "./calculateDaysBetween";


export function calculateAll(inputs) {
  const termination = inputs.terminationReason?.value;

  switch (termination) {
    case "mutual_agreement":
      return calculateMutualAgreement(inputs);
    case "indirect_termination":
      return calculateIndirectTermination(inputs);
    case "fixed_term_end":
      return calculateFixedTermEnd(inputs);
    default:
      return calculateDefault(inputs);
  }
}

function calculateDefault(inputs) {
  const {
    salary,
    fgts,
    withdrawalModality,
    admission,
    removal,
    priorNotice,
    proportionalVacation,
    proportionalVacationMonths,
    accruedVacation,
    terminationReason,
    experienceTermination,
  } = inputs;

  const parsedSalary = parseNumberFromString(salary.value);
  const parsedFgts = parseNumberFromString(fgts.value);
  const termination = terminationReason.value;
  const daysWorked = calculateDaysBetween(admission.value, removal.value);

  const result = {
    proportionalSalary: {
      title: "Salário proporcional",
      value: 0,
      inss: 0,
      irrf: 0,
    },
    priorNotice: {
      title: "Aviso prévio",
      value: 0,
      inss: 0,
      irrf: 0,
    },
    fgts: {
      title: "FGTS",
      value: 0,
    },
    fineTermination: {
      title: "Multa rescisória",
      value: 0,
    },
    accruedVacation: {
      title: "Férias vencidas",
      value: 0,
      inss: 0,
      irrf: 0,
    },
    proportionalVacation: {
      title: "Férias proporcionais",
      value: 0,
      inss: 0,
      irrf: 0,
    },
    thirteenthSalary: {
      title: "13º salário",
      value: 0,
      inss: 0,
      irrf: 0,
    },
  };

  const proportionalSalary = calculateProportionalSalary(parsedSalary);
  result.proportionalSalary.value = proportionalSalary;
  result.proportionalSalary.inss = calculateINSS(proportionalSalary);
  result.proportionalSalary.irrf = calculateIRRF(proportionalSalary);

  if (
    termination === "dismissal_without_cause" &&
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

    result.fineTermination.value = calculateFineTermination(parsedFgts);
  }

  const isEarlyResignation = termination === "resignation" && daysWorked < 90;

  const isTrialPeriodDismissed =
    termination === "trial_period_end" &&
    experienceTermination?.value === "dispensa sem justa causa";

  const isTrialPeriodResignation =
    termination === "trial_period_end" &&
    experienceTermination?.value === "pedido de demissão";

  const hasRightToFGTS =
    withdrawalModality.value === "rescisão" &&
    (termination === "dismissal_without_cause" || isTrialPeriodDismissed) &&
    !isEarlyResignation &&
    !isTrialPeriodResignation;

  if (hasRightToFGTS) {
    result.fgts.value = parsedFgts;
  }

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
