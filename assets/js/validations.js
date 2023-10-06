// Selecionando elementos da página
const feedbackPay = document.querySelector("#feedback-pay");
const feedbackFgts = document.querySelector("#feedback-fgts");
const spanPay = document.querySelector("#span-pay");
const spanFgts = document.querySelector("#span-fgts");

// Mensagem de erro para valores inválidos
const messageError = `<p class="message-error">Por favor, insira somente valores numéricos e utilize apenas um único ponto (.) ou uma vírgula (,) para representar os centavos.</p>`;

// Adicionando event listeners para validação de entrada no campo de pagamento
inputPay.addEventListener("input", () => {
  validInput(inputPay, feedbackPay, spanPay, "#btn-next-pay");
});

// Adicionando event listeners para validação de entrada no campo de FGTS
inputFgts.addEventListener("input", () => {
  validInput(inputFgts, feedbackFgts, spanFgts, "#btn-next-fgts");
});

// Adicionando event listener para validação quando o campo perde o foco
inputPay.addEventListener("blur", () => {
  validNumber(inputPay, spanPay);
});

inputFgts.addEventListener("blur", () => {
  validNumber(inputFgts, spanFgts);
});

// Função para validar entrada de valores
function validInput(input, feedback, span, button) {
  let value = input.value.replace(",", ".");
  let btn = document.querySelector(button);
  const regex = /[.,]\d{3,}/;

  if (
    isNaN(value) ||
    value.indexOf(".") !== value.lastIndexOf(".") ||
    value.indexOf(",") !== value.lastIndexOf(",") ||
    regex.test(value)
  ) {
    input.classList.add("input-invalid");
    feedback.innerHTML = messageError;
    span.classList.remove("input-valid");
    btn.disabled = true;
  } else if (value === "") {
    input.classList.remove("input-invalid");
    feedback.innerHTML = "";
    span.classList.remove("input-valid");
    btn.disabled = true;
  } else {
    input.classList.remove("input-invalid");
    feedback.innerHTML = "";
    span.classList.remove("input-valid");
    btn.disabled = false;
  }
}

// Função para validar se um número é válido
function validNumber(input, span) {
  let value = input.value.replace(",", ".");

  if (value != isNaN(value)) {
    span.classList.add("input-valid");
  } else if (value === "") {
    span.classList.remove("input-valid");
  }
}

// Selecionando elementos de data
const inputDates = document.querySelectorAll('input[type="date"]');

// Função para validar datas
function validDate() {
  let start = document.querySelector("#start").value;
  let finish = document.querySelector("#finish").value;
  let button = document.querySelector("#btn-next-date");

  if (start !== "" && finish !== "") {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}

// Adicionando event listeners para validação de datas
inputDates.forEach(function (e) {
  e.addEventListener("change", () => {
    validDate();
  });
});

// Função para validar grupos de botões de rádio e habilitar ou desabilitar um botão
function validRadio(radioName, idButton) {
  let radios = document.getElementsByName(radioName);
  let button = document.querySelector(idButton);

  // Função para verificar se pelo menos um botão de rádio foi selecionado
  function validRadioCheked() {
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        return true;
      }
    }
    return false;
  }

  // Adicionando event listeners para os botões de rádio
  for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener("change", () => {
      button.disabled = !validRadioCheked();
    });
  }

  // Inicialmente, desabilita o botão se nenhum botão de rádio estiver selecionado
  button.disabled = !validRadioCheked();
}

// Chamando a função para diferentes grupos de botões de rádio e botões associados
validRadio("option", "#btn-next-option");
validRadio("early-warning", "#btn-next-early-warning");
validRadio("withdrawal-option", "#btn-next-withdrawal-option");
validRadio("leave", "#btn-next-leave");
validRadio("proportional-leave", "#btn-calc");
