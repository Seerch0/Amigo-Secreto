/*let listaNombres = [];

function agregarNombre() {
    let nombreAmigo = document.getElementById("amigo");
    let nombre = nombreAmigo.value.trim();
    if (nombre !== "") {
        if (listaNombres.includes(nombre)) {
            alert("El nombre ya está en la lista.");
            return;
        }
        listaNombres.push(nombre);
        nombreAmigo.value = ""; // Limpia el input
        mostrarLista();
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }
}

function mostrarLista() {
     let listaAmigos = document.getElementById("listaAmigos");

    listaAmigos.innerHTML = ''; // Limpia la lista antes de mostrar los nuevos nombres

    //Recorremos y añadimos el listado
    for (let i = 0; i < listaNombres.length; i++) {
        let listaCompleta = document.createElement("li");
        listaCompleta.textContent = listaNombres[i];
        listaAmigos.appendChild(listaCompleta);
        document.getElementById('amigo').value = "";
    }
}

function sortearAmigos() {
    if (listaNombres.length < 2) {
        alert("Necesitas al menos dos nombres para realizar el sorteo.");
        return;
    }

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ''; // Limpia el resultado anterior

    // Sorteo aleatorio
    let indiceGanador = Math.floor(Math.random() * listaNombres.length);
    let nombreGanador = listaNombres[indiceGanador];

    resultado.textContent = `El amigo secreto es: ${nombreGanador}`;
}*/

let listaNombres = [];

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

function mostrarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = listaNombres.map(n => `<li>${n}</li>`).join('');
}

function sortearAmigos() {
    if (listaNombres.length < 2) {
        alert("Necesitas al menos dos nombres para realizar el sorteo.");
        return;
    }
    let resultado = document.getElementById("resultado");
    let indiceGanador = Math.floor(Math.random() * listaNombres.length);
    let nombreGanador = listaNombres[indiceGanador];
    resultado.textContent = `El amigo secreto es: ${nombreGanador}`;
}