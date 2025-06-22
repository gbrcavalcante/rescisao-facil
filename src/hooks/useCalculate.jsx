import { useFormData } from "@/store/formDataStore";
import { useTerminationReason } from "@/store/terminationReasonStore";
import { calculateAll } from "@/utils/calculations";
import { calculatePriorNoticeDiscount } from "@/utils/taxes/calculatePriorNoticeDiscount";
import parseNumberFromString from "@/utils/parseNumberFromString";

export function useCalculate() {
  const { terminationReason } = useTerminationReason();
  const { getCurrentData } = useFormData();

  const currentData = getCurrentData();

  const terminationReasonValue = terminationReason?.value;
  const salaryValue = currentData?.salary?.value;
  const priorNoticeValue = currentData?.priorNotice?.value;

  const parsedSalary = parseNumberFromString(salaryValue);

  const inputs = {
    ...currentData,
    terminationReason,
  };

  const result = calculateAll(inputs);

  const priorNoticeDiscount =
    calculatePriorNoticeDiscount(
      terminationReasonValue,
      priorNoticeValue,
      parsedSalary
    ) || 0;

  const values = Object.values(result);

  const totalEarnings = values.reduce((acc, item) => acc + (item.value || 0), 0);
  const totalINSS = values.reduce((acc, item) => acc + (item.inss || 0), 0);
  const totalIRRF = values.reduce((acc, item) => acc + (item.irrf || 0), 0);

  const totalDiscounts = totalINSS + totalIRRF + priorNoticeDiscount;
  const totalLiquid = totalEarnings - totalDiscounts;

  return {
    result,
    totalEarnings,
    totalINSS,
    totalIRRF,
    priorNoticeDiscount,
    totalDiscounts,
    totalLiquid,
  };
}
