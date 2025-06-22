export default function formatDateOrReturnString(value) {
  if (typeof value === "string") return value;

  const date = new Date(value);

  return date.toLocaleDateString("pt-BR");
}
