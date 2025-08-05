let listaAmigos = [];

function agregarNombre() {
    let nombreAmigo = document.getElementById("amigo");
    if (nombreAmigo.value.trim() !== "") {
        listaAmigos.push(nombreAmigo.value.trim()); //.trim elimina espacios al inicio y al final
        nombreAmigo.value = ""; // Limpia el input
        mostrarLista();
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }
}

function mostrarLista() {
    let listaNombres = document.getElementById("lista");
    listaNombres.innerHTML = ""; // Limpia la lista antes de mostrar los nuevos nombres
    listaAmigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        listaNombres.appendChild(li);
    });
}