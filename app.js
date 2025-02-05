let listaAmigos = []; // Lista para almacenar los nombres

// Función para habilitar o deshabilitar el botón de "Añadir"
function manejarBoton() {
    let input = document.getElementById("amigo");
    let boton = document.querySelector(".button-add");
    boton.disabled = input.value.trim() === ""; // Deshabilitar si el campo está vacío o tiene solo espacios
}

// Función para agregar amigos a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    let lista = document.getElementById("listaAmigos");

    if (nombre === "") {
        // Mostrar una alerta si el nombre es vacío o tiene solo espacios
        alert("Por favor, ingresa un nombre válido.");
        return; // No agregar el nombre a la lista si es inválido
    }

    listaAmigos.push(nombre);

    // Agregar el nombre a la lista en pantalla
    let li = document.createElement("li");
    li.textContent = nombre;
    lista.appendChild(li);

    input.value = ""; // Limpiar el campo de entrada
    manejarBoton(); // Deshabilitar el botón hasta que se ingrese un nuevo nombre
}

// Función para sortear un amigo de manera aleatoria
function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert("Debes ingresar al menos 2 nombres antes de iniciar el sorteo.");
        return;
    }

    // Sorteo aleatorio
    let ganador = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];

    asignarTextoElemento("#resultado", `El ganador es: ${ganador}`);
}
