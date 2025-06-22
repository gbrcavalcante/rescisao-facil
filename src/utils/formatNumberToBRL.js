export default function formatNumberToBRL(input) {
  if (typeof input !== "number" || isNaN(input)) return "R$ 0,00";

  return input.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
