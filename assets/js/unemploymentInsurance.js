function unemploymentInsurance(pay) {
  // Verifica se o salário (pay) é menor ou igual a 1907.77.
  if (pay <= 1907.77) {
    // Se for menor ou igual a 1907.77, retorna 80% do salário.
    return pay * 0.8;
  } else if (pay <= 3179.45) {
    // Se o salário estiver entre 1907.77 e 3179.45, retorna um valor fixo de 1526.22
    // mais 50% do valor que excede 1907.77.
    return 1526.22 + (pay - 1907.77) * 0.5;
  } else {
    // Se o salário for maior que 3179.45, retorna um valor fixo de 1911.7.
    return 1911.7;
  }
}
