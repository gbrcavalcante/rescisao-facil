// Função que calcula o décimo terceiro salário com base no mês e no salário
function calcThirteenFirstSalary(month, pay) {
    // Utiliza um switch-case para determinar o cálculo com base no mês
    switch (month) {
      case 0: // Janeiro
        return pay / 12; // Divide o salário por 12
      case 1: // Fevereiro
        return (pay / 12) * 2; // Divide o salário por 12 e multiplica por 2
      case 2: // Março
        return (pay / 12) * 3; // Divide o salário por 12 e multiplica por 3
      case 3: // Abril
        return (pay / 12) * 4; // Divide o salário por 12 e multiplica por 4
      case 4: // Maio
        return (pay / 12) * 5; // Divide o salário por 12 e multiplica por 5
      case 5: // Junho
        return (pay / 12) * 6; // Divide o salário por 12 e multiplica por 6
      case 6: // Julho
        return (pay / 12) * 7; // Divide o salário por 12 e multiplica por 7
      case 7: // Agosto
        return (pay / 12) * 8; // Divide o salário por 12 e multiplica por 8
      case 8: // Setembro
        return (pay / 12) * 9; // Divide o salário por 12 e multiplica por 9
      case 9: // Outubro
        return (pay / 12) * 10; // Divide o salário por 12 e multiplica por 10
      case 10: // Novembro
        return (pay / 12) * 11; // Divide o salário por 12 e multiplica por 11
      case 11: // Dezembro
        return pay; // O salário é mantido inalterado
      default:
        return undefined; // Retorna indefinido para entradas inválidas de mês
    }
  }