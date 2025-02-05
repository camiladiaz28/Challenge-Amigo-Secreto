//declaracion de lista
let amigos =[];
//agregar amigos a una lista
function agregarAmigos() {
    const nombreNuevo = document.getElementById("amigo");
    //permite eliminar espacios en blanco para evitar confuciones al leer la lista
    nombre = nombreNuevo.value.trim();
    let lista = document.getElementById("listaAmigos");

    //validar que los nombres ingresados sean correctos
    if (nombre === ''){
        alert('Por favor, ingrese un nombre válido');
        return;//Detiene la ejecucion si el campo esta vacio.
    }

    //Armado de la lista
    amigos.push(nombre);

    //mostrar el nombre en la pantalla
    let li = document.createAttribute(li);
    li.textContent = nombre;
    lista.appenChild(li);// agrega el nombre a la lista

    nombre.value = ""; //limpia el campo de entrada despues de agregar el nombre
}
//sortear aleatoriamente los nombres en la lista
function sortearAmigos() {
    if (amigos.length < 2) {
        alert('Agrega al menos dos nombres para hacer el sorteo');
        return
    }
    let indiceDeAmigoGanador = Math.floor(Math.random()*amigos.length);
    let amigoGanador = amigos[indiceDeAmigoGanador];//obtiene el nombre ganador
   
}
//muestra el resultado
function mostrarResultado(ganador) {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "<li>🎉 El amigo secreto es: <strong>" + ganador + "</strong> 🎉</li>"
}
//Funcion principal
