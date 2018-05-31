"use strict"
/**
 * 1. Pida 6 números por pantalla y los meta en un array.
 * 2. Mostrar todos los elementos del array, tanto en el body como en la consola.
 * 3. Ordenar el array y mostrarlo.
 * 4. Invertir el orden y mostrarlo.
 * 5. Mostar cuántos elementos tiene el array.
 * 6. Búsqueda de un valor introducido por el usuario, y si lo lo encuentra, que diga su índice.
 */
var numeros = new Array();
var numero;

// 1-

do {
    numero = parseInt(prompt("Introduce un número: ", 0));
    numeros.push(numero);
} while (numeros.length <= 5);

// 2- Con un for
document.write("<h1>Con un for</h1>")
for (var i = 0; i < numeros.length; i++) {
    document.write(numeros[i] + "<br/>");
}

// Con un forEach
document.write("<h1>Con un forEach</h1>")
numeros.forEach((elemento, indice) => {
    document.write(indice + "-" + elemento + "<br/>");
});

// Con un for in
document.write("<h1>Con un for in</h1>");
for (let numero in numeros) {
    document.write(numero + " - " + numeros[numero] + "<br/>");
}

console.log(numeros);

//3- Ordenamos el array*****************************************************************

document.write("<h1>Ordenamos el array</h1>");
var numeros_ascendentes = numeros.sort(function (a, b) {
    return a - b
}); // Para ordenar el array numéricamente.

numeros_ascendentes.forEach((elemento) => {
    document.write(elemento + "<br/>");
})


//4 Lo ordenamos en orden descendente:******************************************************

document.write("<h1>Ordenado en orden descendente</h1>");
var numeros_descendentes = numeros.sort(function (a, b) {
    return b - a
});
for (let numero in numeros_descendentes) {
    document.write(numeros_descendentes[numero] + "<br/>");
}

// 5 Busqueda de un número introducido por el usuario.
console.log(numeros);

var numero_buscar = prompt("Introduce un número para comprobar: ");
numero_buscar = parseInt(numero_buscar);
var posicion =  numeros.findIndex(indice => indice == numero_buscar);;

if (posicion && posicion != -1) {
   document.write("El número "+numero_buscar+"se encuentra en la posicion "+posicion);
} else {
    document.write("El número "+numero_buscar+"no está");
}

//6 ******************************************************************************************
document.write("<h2>El array de números tiene " + numeros.length + " números</h2>");