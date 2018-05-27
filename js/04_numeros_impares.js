"use strict"

/**
 * Imprimir por pantalla los números impares entre dos números introducidos por el ususario
 * 
 */

var num1 = prompt("Introduzca un número: ", 0);
var num2 = prompt("Introduzca otro número: ", 0);

num1 = parseInt(num1);
num2 = parseInt(num2);

document.write("Los números impares comprendidos entre el " + num1 + " y el " + num2 + " son :" + "<br>");

for (num1; num1 < num2; num1++) {
    if (num1 % 2 != 0) {
        document.write(num1 + ", ");
    }

}