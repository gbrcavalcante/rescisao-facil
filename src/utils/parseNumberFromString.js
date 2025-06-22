
export default function parseNumberFromString(input) {
  if (!input) return 0;

  // Remove tudo que não é dígito ou vírgula, e troca vírgula por ponto decimal
  const clean = input.replace(/[^\d,]/g, "").replace(",", ".");

  return Number(clean);
}
