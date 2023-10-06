// Função que gera uma saudação com base na hora do dia
function greetingsMessage(hours) {
    let message;
  
    // Verifica o intervalo de horas e atribui uma saudação correspondente
    if (hours >= 5 && hours < 12) {
      message = "Bom dia!"; // Se for de manhã
    } else if (hours >= 12 && hours < 18) {
      message = "Boa tarde!"; // Se for à tarde
    } else if ((hours >= 18 && hours < 24) || (hours >= 0 && hours < 5)) {
      message = "Boa noite!"; // Se for à noite
    } else {
      message = "Visitante"; // Se a hora não estiver dentro dos intervalos conhecidos
    }
  
    return message; // Retorna a saudação gerada
  }