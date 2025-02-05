let listaAmigos = []; // Lista para almacenar los nombres

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
    }

// Función para sortear un amigo de manera aleatoria
function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert("Debes ingresar al menos 2 nombres antes de iniciar el sorteo.");
        return;
    }

    // Sorteo aleatorio
    let indiceDeAmigoGanador = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo secreto es: ${indiceDeAmigoGanador}`
}
