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

function iniciarSesion() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = storedUsers.some(user => user.username === username && user.password === password);

    if (userExists) {
        alert("Inicio de sesión exitoso");
        window.location.href = "index.html";
    } else {
        alert("Nombre de usuario o contraseña incorrectos");
    }
}

function registrarUsuario() {
    const registroUsername = document.getElementById("registroUsername").value;
    const email = document.getElementById("email").value;
    const registroPassword = document.getElementById("registroPassword").value;

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = storedUsers.some(user => user.username === registroUsername);

    if (userExists) {
        alert("Este nombre de usuario ya está en uso. Por favor, elige otro.");
    } else {
        const newUser = { username: registroUsername, email: email, password: registroPassword };
        storedUsers.push(newUser);

        localStorage.setItem("users", JSON.stringify(storedUsers));

        alert("Usuario registrado exitosamente");
        window.location.href = "index.html";
    }
}