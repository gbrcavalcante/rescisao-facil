// Seleção de botões "Saiba mais" para Saque Rescisão, Férias e Férias Proporcionais
const helpWithdrawalOption = document.querySelector("#help-withdrawal-option");
const helpLeave = document.querySelector("#help-leave");
const helpProportionalLeave = document.querySelector(
  "#help-proportional-leave"
);

// Seleção de botões "Fechar" para Saque Rescisão, Férias e Férias Proporcionais
const closeWithdrawalOption = document.querySelector(
  "#btn-close-withdrawal-option"
);
const closeLeave = document.querySelector("#btn-close-leave");
const closeProportionalLeave = document.querySelector(
  "#btn-close-proportional-leave"
);

// Seleção de conteúdos "Saiba mais" para Saque Rescisão, Férias e Férias Proporcionais
const lmWithdrawalOption = document.querySelector("#lm-withdrawal-option");
const lmLeave = document.querySelector("#lm-leave");
const lmProportionalLeave = document.querySelector("#lm-proportional-leave");

// Evento de clique para exibir informações sobre Saque Rescisão
helpWithdrawalOption.addEventListener("click", () => {
  // Oculta o formulário atual
  let formCurrent = document.querySelector("#form-withdrawal-option");
  formCurrent.style.display = "none";

  // Oculta o formulário geral (se aplicável)
  form.style.display = "none";

  // Exibe o conteúdo "Saiba mais" sobre Saque Rescisão
  lmWithdrawalOption.style.display = "flex";
});

// Evento de clique para fechar as informações sobre Saque Rescisão
closeWithdrawalOption.addEventListener("click", () => {
  // Exibe o formulário atual
  let formCurrent = document.querySelector("#form-withdrawal-option");
  formCurrent.style.display = "flex";

  // Exibe o formulário geral (se aplicável)
  form.style.display = "flex";

  // Oculta o conteúdo "Saiba mais" sobre Saque Rescisão
  lmWithdrawalOption.style.display = "none";
});

// Evento de clique para exibir informações sobre Férias
helpLeave.addEventListener("click", () => {
  // Oculta o formulário atual
  let formCurrent = document.querySelector("#form-leave");
  formCurrent.style.display = "none";

  // Oculta o formulário geral (se aplicável)
  form.style.display = "none";

  // Exibe o conteúdo "Saiba mais" sobre Férias
  lmLeave.style.display = "flex";
});

// Evento de clique para fechar as informações sobre Férias
closeLeave.addEventListener("click", () => {
  // Exibe o formulário atual
  let formCurrent = document.querySelector("#form-leave");
  formCurrent.style.display = "flex";

  // Exibe o formulário geral (se aplicável)
  form.style.display = "flex";

  // Oculta o conteúdo "Saiba mais" sobre Férias
  lmLeave.style.display = "none";
});

// Evento de clique para exibir informações sobre Férias Proporcionais
helpProportionalLeave.addEventListener("click", () => {
  // Oculta o formulário atual
  let formCurrent = document.querySelector("#form-proportional-leave");
  formCurrent.style.display = "none";

  // Oculta o formulário geral (se aplicável)
  form.style.display = "none";

  // Exibe o conteúdo "Saiba mais" sobre Férias Proporcionais
  lmProportionalLeave.style.display = "flex";
});

// Evento de clique para fechar as informações sobre Férias Proporcionais
closeProportionalLeave.addEventListener("click", () => {
  // Exibe o formulário atual
  let formCurrent = document.querySelector("#form-proportional-leave");
  formCurrent.style.display = "flex";

  // Exibe o formulário geral (se aplicável)
  form.style.display = "flex";

  // Oculta o conteúdo "Saiba mais" sobre Férias Proporcionais
  lmProportionalLeave.style.display = "none";
});
