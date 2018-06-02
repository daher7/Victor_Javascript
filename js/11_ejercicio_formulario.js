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
    formulario.addEventListener('submit', recogerDatos); // Nada nas cargar la pagina, llamo a la funcion.
    box_dashed.style.visibility = "hidden"; // Al cargar la pagina, este div está oculto.
    //box_dashed.style.display = "none";
}

function recogerDatos() {

    console.log("Evento enviar capturado");
    // Recogemos los datos del formulario.
    nombre = document.querySelector("#nombre").value;
    apellidos = document.querySelector("#apellidos").value;
    edad = parseInt(document.querySelector("#edad").value);

    validarDatos();
}

function validarDatos() {

    if (nombre.trim() == null || nombre.trim().length == 0) {
        alert("El nombre no es correcto");
        return false;
    }
    if (apellidos.trim() == null || apellidos.trim().length == 0) {
        alert("Los apellidos no son correctos");
        return false;
    }
    if (edad == null || edad <= 0 || isNaN(edad)) {
        alert("La edad no es correcta");
        return false;
    }
    console.log(nombre, apellidos, edad);
    // Lo pintamos
    imprimirDatos();
}

function imprimirDatos() {
    /*
    //box_dashed.style.display = "block";
       var datos_usuario = [nombre, apellidos, edad]; // Arary para meter los datos.
    for (let indice in datos_usuario) {
        var parrafo = document.createElement("p");
        parrafo.append(datos_usuario[indice]);
        box_dashed.append(parrafo);
    }*/

    box_dashed.style.visibility = "visible"; // Ahora sí mostramos el div oculto previamente.

    var p_nombre = document.querySelector("#p_nombre span");
    var p_apellidos = document.querySelector("#p_apellidos span");
    var p_edad = document.querySelector("#p_edad span");

    p_nombre.innerHTML = nombre;
    p_apellidos.innerHTML = apellidos;
    p_edad.innerHTML = edad;
}


// Cargamos el DOM al cargar la página para poder trabajar con el script en el head y no en el body.
window.addEventListener('load', cargarDom);