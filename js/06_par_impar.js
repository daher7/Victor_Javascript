"use strict"

/**
 * Programa que nos pide un número y nos dice si es par o impar, pero hay que validar si el número introducido por el usuario
 * es un número correcto.
 */

// Mientras no sea un número correcto, lo pediremos.
do {
    // Declaramos las variables:
    var num = prompt("Introduce un número correcto: ", 0);
    num = parseInt(num);
} while (isNaN(num) || num == 0);

if (num % 2 == 0) {
    alert("El número es par");
} else {
    alert("El número es impar");
}