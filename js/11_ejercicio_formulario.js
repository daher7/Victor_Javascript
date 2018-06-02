"use strict"

var formulario;
var box_dashed;
var nombre;
var apellidos;
var edad;

function cargarDom() {

    console.log("DOM cargado"); // Comprobamos que el DOM se ha cargado.
    formulario = document.querySelector("#formulario");
    box_dashed = document.querySelector(".dashed");
    formulario.addEventListener('submit', recogerDatos);
    box_dashed.style.visibility = "hidden";  // Al cargar la pagina, este div está oculto.
    //box_dashed.style.display = "none";
}

function recogerDatos() {

    console.log("Evento enviar capturado");
    // Recogemos los datos del formulario.
    nombre = document.querySelector("#nombre").value;
    apellidos = document.querySelector("#apellidos").value;
    edad = document.querySelector("#edad").value;
    console.log(nombre, apellidos, edad);
    imprimirDatos();
}

function imprimirDatos() {

    //box_dashed.style.display = "block";
    box_dashed.style.visibility = "visible";    // Ahora sí mostramos el div oculto previamente.
    var datos_usuario = [nombre, apellidos, edad];  // Arary para meter los datos.
    for (let indice in datos_usuario) {
        var parrafo = document.createElement("p");
        parrafo.append(datos_usuario[indice]);
        box_dashed.append(parrafo);
    }
}

// Cargamos el DOM al cargar la página para poder trabajar con el script en el head y no en el body.
window.addEventListener('load', cargarDom);