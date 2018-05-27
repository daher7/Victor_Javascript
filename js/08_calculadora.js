"use strict"

do {
    // Pedimos los números y comprobamos que son correctos:
    var num1 = prompt("Introduce el primer número: ", 1);
    var num2 = prompt("Introduce el segundo numero: ", 1);
    num1 = parseInt(num1);
    num2 = parseInt(num2);

} while (isNaN(num1) || isNaN(num2) || num1 <= 0 || num2 <= 0);

var suma = num1 + num2;
var resta = num1 - num2;
var division = num1 / num2;
var multiplicacion = num1 * num2;

// Mostramos los resultados por pantalla y por consola.

alert("Suma = " +suma+ ", Resta= "+resta+ ", División= "+division+ ", Multipliación= "+multiplicacion);
console.log("Suma = " +suma);
console.log("Resta= "+resta);
console.log("Division= "+division);
console.log("Multipliación= "+multiplicacion);