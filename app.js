// Lista donde se guardan los nombres de los amigos
let listaNombres = [];

// Agrega un nombre a la lista si es válido y no está repetido
function agregarNombre() {
    let nombreAmigo = document.getElementById("amigo");
    let nombre = nombreAmigo.value.trim();
    if (nombre !== "") {
        if (listaNombres.includes(nombre)) {
            alert("El nombre ya está en la lista.");
            return;
        }
        listaNombres.push(nombre);
        mostrarLista();
        nombreAmigo.value = ""; // Limpia el input solo una vez
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }
}

// Muestra la lista de nombres en pantalla
function mostrarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = listaNombres.map(n => `<li>${n}</li>`).join('');
}

// Sortea y muestra un ganador aleatorio
function sortearAmigos() {
    if (listaNombres.length < 2) {
        alert("Necesitas al menos dos nombres para realizar el sorteo.");
        return;
    }
    let resultado = document.getElementById("resultado");
    // Selecciona un nombre aleatorio de la lista
    let indiceGanador = Math.floor(Math.random() * listaNombres.length);
    let nombreGanador = listaNombres[indiceGanador];
    resultado.textContent = `El amigo secreto es: ${nombreGanador}`;
}