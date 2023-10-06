// Motivo da rescisão de contrato
const selfResignation = document.querySelector("#self-resignation");
const layOff = document.querySelector("#lay-off");
const firedForCause = document.querySelector("#fired-for-cause");
// Salário
const inputPay = document.querySelector("#pay");
// Aviso prévio
const earlyWarningTrue = document.querySelector("#early-warning-true");
const earlyWarningFalse = document.querySelector("#early-warning-false");
// FGTS
const inputFgts = document.querySelector("#fgts");
// Opção de saque do FGTS
const withdrawalTermination = document.querySelector("#termination");
const withdrawalBirthday = document.querySelector("#birthday");
// Férias
const leaveTrue = document.querySelector("#leave-true");
// Férias proporcionais
const proportionalLeaveTrue = document.querySelector(
  "#proportional-leave-true"
);
const proportionalLeaveFalse = document.querySelector(
  "#proportional-leave-false"
);
const proportionalLeaveOption = document.querySelector(
  "#proportional-leave-option"
);
// Data atual
const date = new Date();
// Botão de reset
const btnReset = document.querySelector("#btn-reset");
// Formulário
const form = document.querySelector("#form-group");

// Adiciona um evento de "submit" ao formulário
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Impede o envio padrão do formulário
  hiddenForm("#form-group"); // Oculta o formulário
  showHeader(); // Exibe um cabeçalho
  calc(); // Chama a função de cálculo
});

// Adiciona um evento de clique ao botão de reset
btnReset.addEventListener("click", () => {
  let result = document.querySelector("#result-container");
  let feedback = document.querySelector("#feedback");
  let form = document.querySelector("#form-group");
  let option = document.querySelector("#form-option");
  let proportionalLeave = document.querySelector("#form-proportional-leave");
  let proportionalLeaveOption = document.querySelector(
    "#form-proportional-leave-option"
  );
  let spanPay = document.querySelector("#span-pay");
  let spanFgts = document.querySelector("#span-fgts");

  if (result.style.display === "flex") {
    result.style.display = "none";
    resultContainer.innerHTML = "";
    resultHeader.innerHTML = "";
    resultContent.innerHTML = "";
    resultFooter.innerHTML = "";
    spanPay.classList.remove("input-valid");
    spanFgts.classList.remove("input-valid");
    resultFeedback.innerHTML = "";
  }

  if (form.style.display === "none" || form.style.display === "") {
    proportionalLeave.style.display = "none";
    proportionalLeaveOption.style.display = "none";
    form.style.display = "flex";
    option.style.display = "flex";
  }

  form.reset();
  disabledButtons();
});

// Captura o valor de todos os botões => "type=button"
const allButtons = document.querySelectorAll(".btn-next");
const btnSubimt = document.querySelector("#btn-calc");

// Função para desabilitar todos os botões após o reset form
function disabledButtons() {
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].disabled = true;
  }
  if (btnSubimt.disabled === false) {
    btnSubimt.disabled = true;
  }
}
