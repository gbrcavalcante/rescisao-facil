// Data de início e término
const inputDateStart = document.querySelector("#start");
const inputDateFinish = document.querySelector("#finish");

// Esta função recebe duas datas como entrada e calcula o número de meses entre elas, determinando quantas parcelas uma pessoa receberá com base nessa diferença e qual será o valor de cada parcela.
function calcDate() {
  // Obtém os valores dos campos de entrada de data e converte para objetos Date
  let dateStart = new Date(inputDateStart.value);
  let dateFinish = new Date(inputDateFinish.value);

  // Obtém os meses e anos de início e término
  let startMonth = dateStart.getMonth();
  let startYear = dateStart.getFullYear();
  let finishMonth = dateFinish.getMonth();
  let finishYear = dateFinish.getFullYear();

  // Calcula o número total de meses entre as duas datas.
  let monthsApart = (finishYear - startYear) * 12 + (finishMonth - startMonth);

  let result = 0;

  // Com base na diferença em meses, determina o número de parcelas e cria a mensagem correspondente.
  if (monthsApart >= 6 && monthsApart < 12) {
    result = 3;
  } else if (monthsApart >= 12 && monthsApart < 24) {
    result = 4;
  } else if (monthsApart >= 24) {
    result = 5;
  }

  return result;
}

// Esta função recebe duas datas como entrada e calcula o número de meses entre elas, determinando quantas parcelas uma pessoa receberá com base nessa diferença e qual será o valor de cada parcela.
function calcMonth() {
  // Obtém os valores dos campos de entrada de data e converte para objetos Date
  let dateStart = new Date(inputDateStart.value);
  let dateFinish = new Date(inputDateFinish.value);

  // Obtém os meses e anos de início e término
  let startMonth = dateStart.getMonth();
  let startYear = dateStart.getFullYear();
  let finishMonth = dateFinish.getMonth();
  let finishYear = dateFinish.getFullYear();

  // Calcula o número total de meses entre as duas datas.
  const monthsApart =
    (finishYear - startYear) * 12 + (finishMonth - startMonth);

  return monthsApart;
}
