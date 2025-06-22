import { useFormData } from "@/store/formDataStore";
import { useTerminationReason } from "@/store/terminationReasonStore";
import parseNumberFromString from "@/utils/parseNumberFromString";

import {
  calculateInstallmentCount,
  calculateUnemploymentBenefit,
} from "@/utils/unemployment";

export function useUnemployment() {
  const { terminationReason } = useTerminationReason();
  const { getCurrentData } = useFormData();

  const data = getCurrentData();
  const parsedSalary = parseNumberFromString(data.salary.value);

  const installmentCount = calculateInstallmentCount(
    data.admission.value,
    data.removal.value
  );
  const eligible =
    terminationReason.value === "dismissal_without_cause" &&
    installmentCount > 3;
  const unemploymentBenefit = calculateUnemploymentBenefit(parsedSalary);

  return { eligible, installmentCount, unemploymentBenefit };
}
