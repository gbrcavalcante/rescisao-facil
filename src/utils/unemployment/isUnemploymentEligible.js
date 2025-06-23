export function isUnemploymentEligible({
  terminationReason,
  receivedBefore,
  monthsSinceLast,
  monthsWorked,
}) {
  if (terminationReason !== "dismissal_without_cause") {
    return false;
  }

  if (receivedBefore === "primeira solicitação") {
    // Primeira solicitação: precisa ter trabalhado pelo menos 12 meses
    return monthsWorked >= 12;
  }

  if (receivedBefore === "segunda solicitação" && monthsSinceLast >= 12) {
    // Segunda solicitação: precisa ter trabalhado pelo menos 9 meses
    return monthsWorked >= 9;
  }

  if (receivedBefore === "terceira ou mais" && monthsSinceLast >= 6) {
    // Terceira ou mais solicitação: precisa ter trabalhado pelo menos 6 meses
    return monthsWorked >= 6;
  }

  // Se nenhuma das condições acima for satisfeita, não é elegível
  return false;
}
