document.addEventListener("DOMContentLoaded", function() {
    // Verificar si se ha dado consentimiento previo para las cookies
    if (localStorage.getItem("cookieConsent") !== "true") {
        // Mostrar el cuadro de notificación de cookies después de que el DOM se haya cargado
        document.getElementById("cookie-notification").style.display = "block";
    }
});

function acceptCookies() {
    // Guardar el consentimiento del usuario en localStorage
    localStorage.setItem("cookieConsent", "true");

    // Ocultar el cuadro de notificación de cookies
    document.getElementById("cookie-notification").style.display = "none";
}
