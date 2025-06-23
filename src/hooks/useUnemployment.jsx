import { useFormData } from "@/store/formDataStore";
import { useTerminationReason } from "@/store/terminationReasonStore";
import parseNumberFromString from "@/utils/parseNumberFromString";
import {
  calculateInstallmentCount,
  calculateUnemploymentBenefit,
  calculateMonthsWorked,
} from "@/utils/unemployment";

import { isUnemploymentEligible } from "@/utils/unemployment/isUnemploymentEligible";

export function useUnemployment() {
  const { terminationReason } = useTerminationReason();
  const { getCurrentData } = useFormData();

  const data = getCurrentData();

  const parsedSalary = parseNumberFromString(data.salary.value);
  const receivedBefore = data.receivedUnemploymentBefore?.value;
  const monthsSinceLast = Number(data.monthsSinceLastUnemployment?.value) || 0;

  const monthsWorked = calculateMonthsWorked(data.admission.value, data.removal.value);
  const installmentCount = calculateInstallmentCount(monthsWorked);

  const eligible = isUnemploymentEligible({
    terminationReason: terminationReason.value,
    receivedBefore,
    monthsSinceLast,
    monthsWorked,
  });

  const unemploymentBenefit = calculateUnemploymentBenefit(parsedSalary);

  return { eligible, installmentCount, unemploymentBenefit };
}
