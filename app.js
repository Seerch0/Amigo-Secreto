//Practica 1
let nombres = [];

function agregarNombre() {
    let nombre = document.getElementById("nombreInput").value;
    if (nombre) {
        nombres.push(nombre);
        document.getElementById("nombreInput").value = "";
        mostrarNombres();
    }
}