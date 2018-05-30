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

//3- Ordenamos el array

document.write("<h1>Ordenamos el array</h1>");
numeros.sort(function(a,b){return a-b}); // Para ordenar el array numéricamente.
console.log(typeof numeros);

numeros.forEach((elemento)=>{
    document.write(elemento + "<br/>");
})
console.log(numeros);

//4


//5
document.write("<h2>El array de números tiene " + numeros.length + " números</h2>");