"use strict"

var usuarios = new Array();
var usuario;
var div_usuarios = document.querySelector("#usuarios");
var div_usuario = document.querySelector("#usuario");

/**
 *  1- Capturamos los datos y los convertimos en formato json.
 *  2- Una vez capturados los guardamos en el array usuarios.
 *  3- Recorremos el array y los mostramos.
 */

// Declaramos las funciones necesarias.

// Para todos los usuarios
function getUsuarios() {
    return fetch("https://reqres.in/api/users");
}

// Para un solo usuario
function getUsuario() {
    return fetch("https://reqres.in/api/users/2");
}

function listarUsuarios() {
    for (let indice in usuarios) {

        console.log(usuarios[indice]);

        var h3 = document.createElement("h3");
        h3.innerHTML = indice + " - " + usuarios[indice].first_name + " " + usuarios[indice].last_name;
        div_usuarios.appendChild(h3);

        document.querySelector(".loading").style.display = "none"; // Quitamos el texto de loading cuando se pinten los datos.
    }
}

function listarUsuario() {

    console.log(usuario);

    var nombre = document.createElement("h3");
    var avatar = document.createElement("img");

    nombre.innerHTML = usuario.first_name + " " + usuario.last_name;
    avatar.src = usuario.avatar;
    avatar.width ="100";

    div_usuario.appendChild(nombre);
    div_usuario.appendChild(avatar);

    document.querySelector("#usuario .loading").style.display = "none"; // Quitamos el texto de loading cuando se pinten los datos.

}

getUsuarios()
    .then(data => data.json())
    .then(users => { // Solo nos interesan los usuarios.
        usuarios = users.data;
        listarUsuarios();
        return getUsuario();
    })
    .then(data => data.json())
    .then(user => {
        usuario = user.data;
        listarUsuario();
    });