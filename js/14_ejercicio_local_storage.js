"use strict"
// Declaramos las variables
var formulario = document.querySelector("#formpeliculas");
var formularioBorrar = document.querySelector("#borraPelicula");

// Declaramos las funciones.
function guardarPelicula() {

    var titulo = document.querySelector("#addpelicula").value;
    if (titulo.length >= 1) {
        localStorage.setItem(titulo, titulo);
    }
}

function borrarPelicula(){
    var titulo = document.querySelector("#deletePelicula").value;
    localStorage.removeItem(titulo);
}

// Agregamos el evento al boton.
formulario.addEventListener('submit', guardarPelicula);
formularioBorrar.addEventListener('submit', borrarPelicula);

// Mostramos el contenido de Local Storage
var ul = document.querySelector("#peliculas_list");
for (let i in localStorage) {
    console.log(localStorage[i]);
    if (typeof localStorage[i] == "string") { // Para mostrar solo los string
        var li = document.createElement("li");
        li.append(localStorage[i]);
        ul.append(li);
    }
}