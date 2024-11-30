// Script para interacción en la página principal
document.addEventListener("DOMContentLoaded", function () {
    const welcomeMessage = document.getElementById("welcomeMessage");
    const logoutButton = document.getElementById("logoutButton");

    // Cambia el color del mensaje al pasar el cursor
    welcomeMessage.addEventListener("mouseover", function () {
        welcomeMessage.style.color = "blue";
    });

    welcomeMessage.addEventListener("mouseout", function () {
        welcomeMessage.style.color = "black";
    });

    // Acción del botón de cierre de sesión
    logoutButton.addEventListener("click", function () {
        window.location.href = "/"; // Redirige a la página de inicio de sesión
    });
});
