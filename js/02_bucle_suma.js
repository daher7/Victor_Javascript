"use strict"
/**
 * Usando un bucle, calcular la suma y la media de los datos introducidos, hasta que se introduca un numero negativo.
 * 
 */

var suma = 0;
var contador = 0;

do {
    var numero = prompt("Introduce un número: ", 0);
    numero = parseInt(numero);

    // Hay que hacerlo sólo con los números positivos.
    if (numero >= 0) {
        suma += numero;
        contador++;
    }

} while (numero >= 0); // Cuando introducimos un número negativo, el programa termina.

//Mostramos los resultados por pantalla.
alert("La suma total es = " + suma);
alert("El promedio es = " + suma / (contador));