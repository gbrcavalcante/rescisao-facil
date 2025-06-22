export function calculatePriorNoticeDiscount(
  terminationReasonValue,
  priorNoticeValue,
  baseSalary
) {
  // Pedido de demissão + aviso prévio dispensado => NÃO desconta aviso prévio e multa
  if (terminationReasonValue === "resignation" && priorNoticeValue !== "não") {
    return baseSalary;
  }

  return 0;
}
