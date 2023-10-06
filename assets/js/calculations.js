const resultInput = document.querySelector("#result-content");
const resultContainer = document.createElement("div");
const resultHeader = document.createElement("div");
const resultContent = document.createElement("ul");
const resultFooter = document.createElement("div");
const resultFeedback = document.createElement("div");

// Função para realizar cálculos relacionados a pagamentos e benefícios
function calc() {
  // Dados do usuário
  const data = {
    // Salário do usuário (substituindo vírgula por ponto, se necessário)
    pay: Number(inputPay.value.replace(",", ".")),
    // Saldo do FGTS do usuário (substituindo vírgula por ponto, se necessário)
    fgts: Number(inputFgts.value.replace(",", ".")),
    // Opção de férias proporcionais (a partir do elemento proportionalLeaveOption)
    proportionalLeaveOption: proportionalLeaveOption.value,
    // Mês atual
    month: date.getMonth(),
    // Horas atuais
    hours: date.getHours(),
  };

  // Saudação com base nas horas atuais
  const greetings = greetingsMessage(data.hours);

  // Valor das parcelas do seguro desemprego
  const installments = calcDate();

  // Calcula o valor total com base nos meses trabalhados.
  const month = calcMonth();

  // Cálculo do décimo terceiro salário
  const thirteenthSalary =
    month >= data.month
      ? calcThirteenFirstSalary(data.month, data.pay)
      : (data.pay / 12) * month;

  // Valores de pagamento e benefícios
  const payment = {
    // Desconto por aviso prévio não cumprido
    earlyWarningDiscount: data.pay,
    // Valor do aviso prévio
    earlyWarning: data.pay,
    // Valor das férias
    leave: data.pay / 3 + data.pay,
    // Valor das férias proporcionais
    proportionalLeave: calcProportionalLeave(
      data.proportionalLeaveOption,
      data.pay
    ),
    // Valor do décimo terceiro salário
    thirteenFirst: thirteenthSalary,
    // Valor da multa rescisória do FGTS (40% do FGTS)
    fineTermination: (data.fgts / 100) * 40,
    // Valor do seguro desemprego
    safe: unemploymentInsurance(data.pay),
  };

  // Textos informativos e de saída
  const text = {
    leave: `<li><strong>Férias:</strong> R$ ${payment.leave.toFixed(2)}</li>`,
    proportionalLeave: `<li><strong>Férias Proporcionais:</strong> R$ ${payment.proportionalLeave.toFixed(
      2
    )}</>`,
    thirteenFirstSalary: `<li><strong>13º Salário:</strong> R$ ${payment.thirteenFirst.toFixed(
      2
    )}</li>`,
    earlyWarning: `<li><strong>Aviso Prévio:</strong> R$ ${payment.earlyWarning.toFixed(
      2
    )}</li>`,
    fgts: `<li><strong>FGTS:</strong> R$ ${data.fgts.toFixed(2)}</li>`,
    terminationPayment: `<li><strong>Multa rescisória:</strong> R$ ${payment.fineTermination.toFixed(
      2
    )}</li>`,
    earlyWarningDiscount: `<p class="msg-danger">Você escolheu não cumprir o aviso prévio; como resultado, um valor de <strong>R$ ${payment.earlyWarningDiscount.toFixed(
      2
    )}</strong> será deduzido do seu valor total.</p>`,
    withdrawalBirthday: `<p class="msg-warning">Você escolheu a opção de <strong>Saque Aniversário</strong>, o que significa que não terá direito ao saque do <strong>FGTS</strong>.</p>`,

    greetings: `<h2>Olá, ${greetings}</h2>`,

    info: `<p>Aqui estão os cálculos com base nas informações fornecidas:</p>`,

    safe: `<p class="msg-info">Você receberá um total de <strong>${installments}</strong> parcelas do <strong>seguro-desemprego</strong>, no valor de <strong>R$ ${payment.safe.toFixed(
      2
    )}</strong> cada uma.</p>`,
    firedForCause: `<p class="msg-danger">Você optou pela demissão por <strong>justa causa</strong>, o que significa que não terá direito à <strong>multa de 40%</strong> sobre o seu <strong>FGTS</strong> e também não poderá sacar os valores do <strong>FGTS</strong>, nem receberá o <strong>seguro-desemprego</strong> ou o <strong>13º salário</strong>.</p>`,
  };

  // Valor total dos pagamentos e benefícios
  let total;

  // Cabeçalho resultado
  resultInput.appendChild(resultContainer);
  resultContainer.appendChild(resultHeader);
  resultHeader.classList.add("result-header");
  resultHeader.innerHTML = text.greetings;
  resultHeader.innerHTML += text.info;

  // Lista do resultado
  resultContainer.appendChild(resultContent);
  resultContent.classList.add("result-list");

  // Verifica se é um pedido de demissão
  if (selfResignation.checked) {
    total = 0;

    // Inclui o valor das férias se selecionado
    if (leaveTrue.checked && month > 11) {
      resultContent.innerHTML += text.leave;
      total += payment.leave;
    }

    // Inclui o valor das férias proporcionais se selecionado
    if (proportionalLeaveTrue.checked) {
      resultContent.innerHTML += text.proportionalLeave;
      total += payment.proportionalLeave;
    }

    // Inclui o valor do décimo terceiro salário
    resultContent.innerHTML += text.thirteenFirstSalary;
    total += payment.thirteenFirst;

    // Cria uma div para o valor do resultado total
    resultContainer.appendChild(resultFooter);
    resultFooter.classList.add("result-total");

    // Desconto do aviso prévio não cumprido
    if (earlyWarningFalse.checked) {
      total -= payment.earlyWarningDiscount;
      resultContainer.appendChild(resultFeedback);
      resultFeedback.classList.add("feedback-container");
      resultFeedback.innerHTML = text.earlyWarningDiscount;
    }

    // Resultado final com a soma total
    resultFooter.innerHTML = `<hr>`;
    resultFooter.innerHTML += `<p>TOTAL: R$ ${total.toFixed(2)}</p>`;
  }

  // Verifica se é um caso de demissão
  else if (layOff.checked) {
    total = 0;

    // Inclui o valor das férias se selecionado
    if (leaveTrue.checked && month > 11) {
      resultContent.innerHTML += text.leave;
      total += payment.leave;
    }

    // Inclui o valor das férias proporcionais se selecionado
    if (proportionalLeaveTrue.checked) {
      resultContent.innerHTML += text.proportionalLeave;
      total += payment.proportionalLeave;
    }

    // Inclui o valor do décimo terceiro salário
    resultContent.innerHTML += text.thirteenFirstSalary;
    total += payment.thirteenFirst;

    // Inclui o valor do aviso prévio se selecionado
    if (earlyWarningFalse.checked) {
      resultContent.innerHTML += text.earlyWarning;
      total += payment.earlyWarning;
    }

    // Cria uma div para o valor do resultado total
    resultContainer.appendChild(resultFooter);
    resultFooter.classList.add("result-total");

    // Cria uma div para o feedback
    resultContainer.appendChild(resultFeedback);
    resultFeedback.classList.add("feedback-container");

    // Verifica a opção de saque do FGTS
    if (withdrawalTermination.checked) {
      // Inclui o valor do FGTS
      resultContent.innerHTML += text.fgts;
      total += data.fgts;
      // Inclui o valor da multa rescisória
      resultContent.innerHTML += text.terminationPayment;
      total += payment.fineTermination;
    } else if (withdrawalBirthday.checked) {
      // Inclui apenas o valor da multa rescisória se a opção de Saque Aniversário for selecionada
      resultContent.innerHTML += text.terminationPayment;
      total += payment.fineTermination;

      // Fornece um aviso sobre a escolha do Saque Aniversário
      resultFeedback.innerHTML += text.withdrawalBirthday;
    }

    // Verifica se ambos os campos de data foram preenchidos
    if (
      inputDateFinish.value !== "" &&
      inputDateStart.value !== "" &&
      month > 5
    ) {
      resultFeedback.innerHTML += text.safe;
    }

    // Resultado final com a soma total
    resultFooter.innerHTML = `<hr>`;
    resultFooter.innerHTML += `<p>TOTAL: R$ ${total.toFixed(2)}</p>`;
  }

  // Verifica se a opção de demissão por justa causa está marcada.
  else if (firedForCause.checked) {
    total = 0;

    // Inclui o valor das férias se selecionado
    if (leaveTrue.checked && month > 11) {
      resultContent.innerHTML += text.leave;
      total += payment.leave;
    }

    // Resultado final com a soma total
    resultContainer.appendChild(resultFooter);
    resultFooter.classList.add("result-total");
    resultFooter.innerHTML = `<hr>`;
    resultFooter.innerHTML += `<p>TOTAL: R$ ${total.toFixed(2)}</p>`;

    // Informa o funcionário sobre as implicações da demissão por justa causa, incluindo a ausência da multa de 40% sobre o FGTS e a impossibilidade de sacar o FGTS e receber o seguro-desemprego e 13º salário.
    resultContainer.appendChild(resultFeedback);
    resultFeedback.classList.add("feedback-container");
    resultFeedback.innerHTML = text.firedForCause;
  }
  // Mostra o resultado na interface
  showResult();
}

// Função que calcula a multa rescisória de 40% sobre o saldo do FGTS
function fineTermination(fgts) {
  // Calcula a multa rescisória como 40% do saldo do FGTS
  return (fgts / 100) * 40;
}

// Função que oculta um elemento HTML com base no seletor fornecido
function hiddenForm(selector) {
  // Seleciona o elemento HTML com base no seletor fornecido
  const element = document.querySelector(selector);

  // Define o estilo de exibição do elemento como "none" para ocultá-lo
  element.style.display = "none";
}

// Função para exibir um elemento com a classe CSS "result-header" na interface do usuário
function showHeader() {
  // Seleciona o elemento HTML com a classe CSS "result-header"
  const element = document.querySelector(".result-success");

  // Define o estilo de exibição do elemento como "flex" para torná-lo visível
  element.style.display = "flex";
}

// Função para exibir um resultado na interface do usuário
function showResult() {
  // Seleciona o elemento HTML com o id "result-container"
  let container = document.querySelector("#result-container");

  // Define o estilo de exibição do elemento com o id "result-container" como "flex" para torná-lo visível
  container.style.display = "flex";
  return container;
}
