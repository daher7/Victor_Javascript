"use strict"
// Eventos del ratón en el botón.

function pulsarBoton() {
    console.log("Me has pulsado");
}

function posarRaton() {
    console.log("Me esta tocando la flecha");
}

function sacarRaton() {
    console.log("Ya no me esta tocando la flecha");
}

function dentroDelInput() {
    console.log("Estas dentro del input");
}

function fueraDelInput() {
    console.log("Estas fuera del input");
}

function pulsarTecla() {
    console.log("Has pulsado una tecla");
}

function mantenerTecla() {
    console.log("Estoy pulsada");
}

function soltarTecla() {
    console.log("Me has soltado");
}


var boton = document.querySelector("#boton");
var input = document.querySelector("#nombre");
/*boton.addEventListener('click', function(){
    pulsarBoton();
});*/

// Onclick
boton.addEventListener('click', pulsarBoton);
// Mouse Over
boton.addEventListener('mouseover', posarRaton);
// Mouse Out
boton.addEventListener('mouseout', sacarRaton);
// Focus
input.addEventListener('focus', dentroDelInput);
// Blur
input.addEventListener('blur', fueraDelInput);
// Keydown
input.addEventListener('keydown', pulsarTecla);
// Keypress
input.addEventListener('keypress', mantenerTecla);
// keyup
input.addEventListener('keyup', soltarTecla);