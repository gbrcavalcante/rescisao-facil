import calculateWorkPeriod from "./calculateWorkPeriod";

export function calculateIndemnifiedNoticeValue(
  admissionDate,
  removalDate,
  monthlySalary
) {
  const monthsWorked = calculateWorkPeriod(admissionDate, removalDate);
  const yearsWorked = Math.floor(monthsWorked / 12);

  const noticeDays = Math.min(30 + yearsWorked * 3, 90);
  const dailySalary = monthlySalary / 30;

  const noticeValue = dailySalary * noticeDays;
  return parseFloat(noticeValue.toFixed(2));
}
