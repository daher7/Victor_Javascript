"use strict"

// Comprobamos que existe LocalStorage:
if (typeof localStorage != undefined) {
    console.log("LocalStorage está disponible");
} else {
    console.log("LocalStorage no está disponible");
}

//Guardar datos
localStorage.setItem("titulo", "Curso de Javascript");

//Recuperar datos
console.log(localStorage.getItem("titulo"));
document.querySelector("#storage").innerHTML = localStorage.getItem("titulo");

// Guardar objetos
var usuario = {
    nombre: "David",
    curso: "Javascript",
    email: "daher7@mail.com"
}

usuario = JSON.stringify(usuario); // Lo serializamos (convertimos en string)
localStorage.setItem("usuario", usuario); // Ya está guardado.

// Recuperar Objeto:
var usuario_json = localStorage.getItem("usuario");
usuario_json = JSON.parse(usuario_json);

console.log(usuario_json);
document.querySelector("#usuario").append(usuario_json.nombre + " - " + usuario_json.curso + " - " + usuario_json.email);

// Borrar datos
localStorage.removeItem("usuario");

// Para borrar todo
localStorage.clear();