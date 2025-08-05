//Practica 1
let listaAmigos = [];

// ...existing code...
function agregarNombre() {
    const input = document.getElementById("amigo"); // Obtiene el input por su ID, es el input donde la persona escribe el nombre del amigo.
    const nombre = input.value.trim();
    if (nombre) {
        listaAmigos.push(nombre);
        mostrarLista();
        input.value = ""; // Limpia el input
    }
}

function mostrarLista() {
    const ul = document.getElementById("lista");
    ul.innerHTML = "";
    listaAmigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        ul.appendChild(li);
    });
}
// ...existing code...