// Função que calcula as férias proporcionais com base na opção e no salário
function calcProportionalLeave(proportionalLeaveOption, pay) {
    // Utiliza um switch-case para determinar o cálculo com base na opção selecionada
    switch (proportionalLeaveOption) {
      case "one":
        return (pay / 12) * 1 + ((pay / 12) * 1) / 3; // Calcula 1/12 do salário + 1/3 do 1/12
      case "two":
        return (pay / 12) * 2 + ((pay / 12) * 2) / 3; // Calcula 2/12 do salário + 1/3 do 2/12
      case "three":
        return (pay / 12) * 3 + ((pay / 12) * 3) / 3; // Calcula 3/12 do salário + 1/3 do 3/12
      case "four":
        return (pay / 12) * 4 + ((pay / 12) * 4) / 3; // Calcula 4/12 do salário + 1/3 do 4/12
      case "five":
        return (pay / 12) * 5 + ((pay / 12) * 5) / 3; // Calcula 5/12 do salário + 1/3 do 5/12
      case "six":
        return (pay / 12) * 6 + ((pay / 12) * 6) / 3; // Calcula 6/12 do salário + 1/3 do 6/12
      case "seven":
        return (pay / 12) * 7 + ((pay / 12) * 7) / 3; // Calcula 7/12 do salário + 1/3 do 7/12
      case "eight":
        return (pay / 12) * 8 + ((pay / 12) * 8) / 3; // Calcula 8/12 do salário + 1/3 do 8/12
      case "nine":
        return (pay / 12) * 9 + ((pay / 12) * 9) / 3; // Calcula 9/12 do salário + 1/3 do 9/12
      case "ten":
        return (pay / 12) * 10 + ((pay / 12) * 10) / 3; // Calcula 10/12 do salário + 1/3 do 10/12
      case "eleven":
        return (pay / 12) * 11 + ((pay / 12) * 11) / 3; // Calcula 11/12 do salário + 1/3 do 11/12
      default:
        break; // Retorna indefinido para opções inválidas
    }
  }