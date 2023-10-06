// Event listener para o botão com o id "btn-initial"
getElement("#btn-initial").addEventListener("click", () => {
  hiddenContent();
  showForm();
});

// Seleciona o elemento com o id "form-proportional-leave-option"
const formProportionalLeaveOption = document.querySelector(
  "#form-proportional-leave-option"
);

// Event listener para quando o radio "proportionalLeaveTrue" muda
proportionalLeaveTrue.addEventListener("change", () => {
  if (proportionalLeaveTrue.checked) {
    formProportionalLeaveOption.style.display = "flex";
  } else {
    formProportionalLeaveOption.style.display = "none";
  }
});

// Event listener para quando o radio "proportionalLeaveFalse" muda
proportionalLeaveFalse.addEventListener("change", () => {
  if (proportionalLeaveFalse.checked) {
    formProportionalLeaveOption.style.display = "none";
  } else {
    formProportionalLeaveOption.style.display = "flex";
  }
});

// Avançar para a próxima seção
setupNextButton("option", "pay");
setupNextButton("pay", "early-warning");
setupNextButton("early-warning", "fgts");
setupNextButton("fgts", "withdrawal-option");
setupNextButton("withdrawal-option", "date");
setupNextButton("date", "leave");
setupNextButton("leave", "proportional-leave");

// Voltar para a seção anterior
setupBackButton("pay", "option");
setupBackButton("early-warning", "pay");
setupBackButton("fgts", "early-warning");
setupBackButton("withdrawal-option", "fgts");
setupBackButton("date", "withdrawal-option");
setupBackButton("leave", "date");
setupBackButton("proportional-leave", "leave");

// Função para avançar para a próxima seção
function setupNextButton(currentForm, nextForm) {
  getElement(`#btn-next-${currentForm}`).addEventListener("click", () => {
    next(`#form-${currentForm}`, `#form-${nextForm}`);
  });
}

// Função para voltar para a seção anterior
function setupBackButton(currentForm, previousForm) {
  getElement(`#btn-back-${currentForm}`).addEventListener("click", () => {
    back(`#form-${currentForm}`, `#form-${previousForm}`);
  });
}

// Função que retorna um elemento com base no seletor fornecido
function getElement(element) {
  let x = document.querySelector(element);
  return x;
}

// Função para avançar para a próxima etapa do formulário
function next(currentForm, nextForm) {
  let current = document.querySelector(currentForm);
  let next = document.querySelector(nextForm);
  if (current && next) {
    current.style.display = "none";
    next.style.display = "flex";
  }
}

// Função para voltar para a etapa anterior do formulário
function back(currentForm, previousForm) {
  let current = document.querySelector(currentForm);
  let previous = document.querySelector(previousForm);
  if (current && previous) {
    current.style.display = "none";
    previous.style.display = "flex";
  }
}

// Função que oculta um elemento HTML com o id "container"
function hiddenContent() {
  // Seleciona o elemento HTML com o id "container"
  let hidden = document.querySelector("#container");

  // Define o estilo de exibição do elemento como "none" para ocultá-lo
  hidden.style.display = "none";
}

// Função para exibir um formulário e uma opção na interface do usuário
function showForm() {
  // Seleciona o elemento HTML com o id "form-group"
  let form = document.querySelector("#form-group");

  // Seleciona o elemento HTML com o id "form-option"
  let option = document.querySelector("#form-option");

  // Define o estilo de exibição dos elementos como "flex" para torná-los visíveis
  form.style.display = "flex";
  option.style.display = "flex";
}
