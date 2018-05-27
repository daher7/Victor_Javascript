"use strict"
/**
 * Calcular los divisores de un número.
 */

var num = prompt("Introduzca un número: ", 1);

num = parseInt(num);

document.write("los divisores del " + num + " son: <br>");

for (var i = 1; i <= num; i++) {
    if (num % i == 0) {
        document.write(i + "<br>");
    }
}