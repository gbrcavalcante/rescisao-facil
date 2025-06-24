import parseNumberFromString from "../parseNumberFromString";

export function calculateFgtsWithdrawal(fgtsFormatted, terminationType) {
  const fgtsValue = parseNumberFromString(fgtsFormatted);

  if (isNaN(fgtsValue) || fgtsValue === 0) return "R$ 0,00";

  const valueToUse =
    terminationType === "mutual_agreement" ? fgtsValue * 0.8 : fgtsValue;

  return valueToUse.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
