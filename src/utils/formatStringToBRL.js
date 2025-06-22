
export default function formatStringToBRL(value) {
  if (!value || typeof value !== "string") return "";

  const raw = value.replace(/\D/g, "");
  if (!raw) return "";

  const numeric = Number(raw) / 100;

  return numeric.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
