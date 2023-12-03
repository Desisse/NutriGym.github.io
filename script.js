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

//Inicio de sesion usuario
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

// Lista de productos
const products = [
    {
        nombre: 'C4 Extreme',
        precio: 350,
        modelo: 'Pre-Entreno',
        imagen: 'imagenes/c4extreme.jpg',
        descripcion: 'Creado para desbloquear energía y resultados de siguiente nivel, C4 Extreme fue formulado con fórmulas limpias, claras y evolucionadas para un pre-entreno de rendimiento explosivo200mg de cafeína que brindan energía explosiva ideal para usuarios de nivel intermedio a avanzado en pre-entrenoFormulado para apoyar con energía, bombeos y resistencia.'
    },
    {
        nombre: 'Nitro Tech 100',
        precio: 998,
        modelo: 'Proteinas',
        imagen: 'imagenes/muscletech-nitro-tech-100_-whey-gold-5lb_2.jpg',
        descripcion: 'Esta fórmula de proteína de suero de leche de acción rápida está fortificada con 5.5g de BCAA y 4g de glutamina, alimenta tus músculos rápidamente, para que puedas seguir desempeñándote en un alto nivel.'
    },
    {
        nombre: 'Sujetador Deportivo Fraction',
        precio: 500,
        modelo: 'Accesorios',
        imagen: 'imagenes/37377b667a3a6e875c35d5e351bc438f.jpg',
        descripcion: 'Confeccionado con un tejido sin costuras que capilariza el sudor y se moverá contigo incluso durante el entrenamiento más duro. La silueta que se adapta al cuerpo, el corte y el logotipo llamativo te brindan una pieza base perfecta para crear tu propio estilo.'
    },
    {
        nombre: 'Set de 5 bandas Elasticas',
        precio: 310,
        modelo: 'Accesorios',
        imagen: 'imagenes/huracansport-set-5-bandas-elasticas.png',
        descripcion: 'Cada color de las gomas elasticas de musculacion representa diferentes niveles de resistencia: ligero, medio y pesado. Las diferentes fortalezas le proporcionarán más flexibilidad y más opciones para su rutina de ejercicios. Personalice fácilmente su entrenamiento en función de su fuerza, habilidad y comodidad.'
    },
    {
        nombre: 'Cinturon Neopreno',
        precio: 250,
        modelo: 'Accesorios',
        imagen: 'imagenes/musclefit-cinturon-neopreno_1.jpg',
        descripcion: 'Creado para desbloquear energía y resultados de siguiente nivel, C4 Extreme fue formulado con fórmulas limpias, claras y evolucionadas para un pre-entreno de rendimiento explosivo200mg de cafeína que brindan energía explosiva ideal para usuarios de nivel intermedio a avanzado en pre-entrenoFormulado para apoyar con energía, bombeos y resistencia.'
    },
    {
        nombre: 'Hydrotein',
        precio: 573,
        modelo: 'Proteinas',
        imagen: 'imagenes/advancenutrition-hydrotein-5lb.jpg',
        descripcion: 'Hydrotein cuenta con enzimas digestivas para mejorar la asimilación 5 Gr BCAAs micronizados y 5 Gr Glutamina.Además de rápida, Hydrotein es una Proteína de una pureza inigualable. Está hecha de 100% Hidrolizado de Proteína de Suero Aislada. Con lo cual no hay exceso de grasa,colesterol o lactosa que puedan frenar tu crecimiento muscular.'
    },
    {
        nombre: 'Nitraflex Black Green Apple',
        precio: 509,
        modelo: 'Pre-Entreno',
        imagen: 'imagenes/gat-nitraflex-black-452gr.jpg',
        descripcion: 'NITRAFLEX BLACK es nuestro pre-entreno más poderoso y explosivo hasta el momento. Esta fórmula de alto impacto amplifica la energía y el enfoque con niveles de ingredientes clínicamente validados que mejoran el rendimiento y una mezcla de nootrópicos para mantenerte concentrado mientras obtienes bombeos rompe camisas con una resistencia duradera y una fuerza discordante. Está diseñado para atletas, culturistas y entusiastas del fitness, ¡llevando tu rendimiento al límite! NUEVO NITRAFLEX BLACK alimenta tu entrenamiento con lo último en pre-entrenamiento.'
    },
    {
        nombre: 'Psychotic Black',
        precio: 303,
        modelo: 'Pre-Entreno',
        imagen: 'imagenes/insanelabz-psychotic-black-220gr.jpg',
        descripcion: 'Presentamos la última adición a la familia Psychotic de pre entreno, Psychotic BLACK. Al igual que nuestro OG Psychotic, BLACK te dará mayor concentración, energía insana y potenciará tu producción de fuerza en el gym. Con menos cafeína, Psychotic BLACK es ideal para aquellos que necesitan ese empujón extra pero quieren un estímulo más bajo en el pre.'
    },
    {
        nombre: 'Wake The Dead Smelling Salts',
        precio: 162,
        modelo: 'Pre-Entreno',
        imagen: 'imagenes/insanelabz-wake-the-dead-smelling-salts.jpg',
        descripcion: 'Las sales aromáticas Wake the Dead son una sal aromática POTENTE (mejorada con menta verde), desarrollada por Mad Chemist para ayudarte a conseguir tu mejor efecto. Nuestras sales aromáticas, cuando se hidratan de acuerdo con la etiqueta, liberan gas amoniaco, lo que provoca un fuerte reflejo de inhalación. Este reflejo hace que los músculos que controlan la respiración trabajen más rápido, mientras que también activa el sistema nervioso simpático, lo que aumenta la frecuencia cardíaca, la presión arterial y la actividad cerebral.'
    },
    {
        nombre: 'Creatina Sabor Frambuesa',
        precio: 890,
        modelo: 'Creatina',
        imagen: 'imagenes/muscletech-cell-tech-6lb.jpg',
        descripcion: 'El combustible adecuado. La cantidad correcta. La fórmula correcta. Cell-Tech ofrece una matriz de aminoácidos + BCAA para ayudarte a pasar menos tiempo recuperándote y más tiempo construyendo músculo.'
    },
];


// Función para aplicar filtros y mostrar productos
function applyFilters() {
    const priceOrder = document.getElementById('priceFilter').value;
    const alphaOrder = document.getElementById('alphaFilter').value;
    const modelFilter = document.getElementById('modelFilter').value;

    let filteredProducts = [...products];

    // Aplica filtro por modelo
    if (modelFilter !== 'Todos') {
        filteredProducts = filteredProducts.filter(product => product.modelo === modelFilter);
    }

    // Ordena por precio
    if (priceOrder === 'asc') {
        filteredProducts.sort((a, b) => a.precio - b.precio);
    } else if (priceOrder === 'desc') {
        filteredProducts.sort((a, b) => b.precio - a.precio);
    }

    // Ordena alfabéticamente
    if (alphaOrder === 'asc') {
        filteredProducts.sort((a, b) => a.nombre.localeCompare(b.nombre));
    } else if (alphaOrder === 'desc') {
        filteredProducts.sort((a, b) => b.nombre.localeCompare(a.nombre));
    }

    // Muestra los productos en el contenedor
    displayProducts(filteredProducts);
}


// Función para mostrar productos en el contenedor
function displayProducts(products) {
    const productsContainer = document.getElementById('productsContainer');

    // Limpia el contenedor antes de agregar nuevos productos
    productsContainer.innerHTML = '';

    // Recorre la lista de productos y crea elementos para cada uno
    products.forEach(product => {
        // Encuentra el índice original del producto antes de aplicar los filtros
        const index = products.indexOf(product);

        // Crea un contenedor para cada producto
        const productElement = document.createElement('div');
        productElement.className = 'card-product';

        // Agrega la imagen del producto como un enlace
        const imgLinkElement = document.createElement('a');
        imgLinkElement.href = `producto${index + 1}.html`; // Enlazar al archivo del producto
        const imgElement = document.createElement('img');
        imgElement.src = product.imagen;
        imgElement.alt = product.nombre;
        imgLinkElement.appendChild(imgElement);
        productElement.appendChild(imgLinkElement);

        // Otros detalles del producto como nombre y precio
        const contentElement = document.createElement('div');
        contentElement.className = 'content-card-product';

        // Agrega el nombre del producto como un enlace
        const nameLinkElement = document.createElement('a');
        nameLinkElement.href = `producto${index + 1}.html`; // Enlazar al archivo del producto
        const nameElement = document.createElement('h3');
        nameElement.textContent = product.nombre;
        nameLinkElement.appendChild(nameElement);
        contentElement.appendChild(nameLinkElement);

        // Agrega el precio del producto
        const priceElement = document.createElement('p');
        priceElement.textContent = `$${product.precio}`;
        contentElement.appendChild(priceElement);


        
        // Agrega el contenido al contenedor del producto
        productElement.appendChild(contentElement);

        // Agrega el producto al contenedor principal
        productsContainer.appendChild(productElement);
    });
}

// Inicialmente, muestra todos los productos sin filtros
displayProducts(products);
