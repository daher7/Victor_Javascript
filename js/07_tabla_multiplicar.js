"use strict"

/**
 * Programa que nos pide un número y hace su corespondiente tabla de multiplicar
 */

// Mientras no sea un número correcto, lo pediremos.
do {
    // Pedimos el número y lo validamos:
    var num = prompt("Introduce un número correcto: ", 1);
    num = parseInt(num);
} while (isNaN(num) || num <= 0);

// Escribimos el código.
var resultado = 0;
document.write("<h1>La tabla de multiplicar del " + num + "</h1>");

for (var i = 1; i <= 10; i++) {
    resultado = num * i;
    document.write(num + " x " + i + " = " + resultado + "<br/>");
}