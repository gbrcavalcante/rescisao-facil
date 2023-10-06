// Seleciona os elementos HTML relevantes
const btnTheme = document.querySelector("#btn-theme");
const dropdown = document.querySelector("#dropdown");
const darkMode = document.querySelector("#dark-mode");
const lightMode = document.querySelector("#light-mode");
const element = document.querySelector("html");
const iconLight = document.querySelector("#icon-light");
const iconDark = document.querySelector("#icon-dark");

// Event listener para o botão de tema
btnTheme.addEventListener("click", () => {
  if (dropdown.style.display === "none" || dropdown.style.display === "") {
    dropdown.style.display = "flex"; // Exibe o dropdown de seleção de tema
  } else if (dropdown.style.display === "flex") {
    dropdown.style.display = "none"; // Oculta o dropdown de seleção de tema
  }
});

// Função para alternar para o tema escuro
function toggleThemeDark() {
  if (darkMode.checked) {
    lightMode.checked = false; // Desmarca a opção "modo claro"
    iconDark.style.display = "block"; // Exibe o ícone do tema escuro
    iconLight.style.display = "none"; // Oculta o ícone do tema claro
    element.classList.add("dark-mode"); // Adiciona a classe CSS "dark-mode" ao elemento HTML raiz
    dropdown.style.display = "none"; // Oculta o dropdown de seleção de tema
  } else {
    element.classList.remove("dark-mode"); // Remove a classe CSS "dark-mode" do elemento HTML raiz
  }
}

// Função para alternar para o tema claro
function toggleThemeLight() {
  if (lightMode.checked) {
    darkMode.checked = false; // Desmarca a opção "modo escuro"
    iconLight.style.display = "block"; // Exibe o ícone do tema claro
    iconDark.style.display = "none"; // Oculta o ícone do tema escuro
    element.classList.remove("dark-mode"); // Remove a classe CSS "dark-mode" do elemento HTML raiz
    dropdown.style.display = "none"; // Oculta o dropdown de seleção de tema
  } else {
    element.classList.add("dark-mode"); // Adiciona a classe CSS "dark-mode" ao elemento HTML raiz
  }
}

// Adiciona event listeners para detectar mudanças nas opções de tema
darkMode.addEventListener("change", toggleThemeDark);
lightMode.addEventListener("change", toggleThemeLight);
