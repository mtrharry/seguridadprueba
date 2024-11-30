// Script para validación y feedback dinámico
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const errorMessage = document.getElementById("error-message");
    const loginButton = document.getElementById("loginButton");

    form.addEventListener("submit", function (event) {
        // Limpia mensajes previos
        errorMessage.textContent = "";
        usernameInput.style.border = "";
        passwordInput.style.border = "";

        // Validación básica
        if (usernameInput.value.trim() === "" || passwordInput.value.trim() === "") {
            event.preventDefault(); // Evita el envío del formulario
            errorMessage.textContent = "Por favor, complete todos los campos.";
            errorMessage.style.color = "red";
            if (usernameInput.value.trim() === "") {
                usernameInput.style.border = "2px solid red";
            }
            if (passwordInput.value.trim() === "") {
                passwordInput.style.border = "2px solid red";
            }
            return;
        }

        // Muestra un mensaje de carga
        loginButton.textContent = "Iniciando...";
        loginButton.disabled = true;
    });
});
