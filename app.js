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
        let listaCompleta = document.createElement("listaCompleta");
        listaCompleta.textContent = amigo;
        listaNombres.appendChild(listaCompleta);
    });
}

/*function mostrarLista() {
    let listaNombres = document.getElementById("lista");
    listaNombres.innerHTML = listaAmigos.map(amigo => `<li>${amigo}</li>`).join('');
}*/