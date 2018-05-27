"use strict"
// Escribir un programa que pida dos números y nos diga cúal es el mayor, el menor o si son iguales mediante un alert.

// Declaramos las variables necesarias:
var numero1 = prompt("Introduce el primer número:", 0);
var numero2 = prompt("Introduce el segundo numero:", 0);
var mensaje ="";

//Convertimos los text a numero
numero1 = parseInt(numero1);
numero2 = parseInt(numero2);

// Escribimos el codigo:

while(numero1<0 || numero2<0 ||isNaN(numero1) || isNaN(numero2) ){
    numero1 = prompt("Introduce el primer número:", 0);
    numero2 = prompt("Introduce el segundo numero:", 0);
} 

if(numero1>numero2){
    mensaje ="El número "+numero1+" es mayor que "+numero2;
} else if (numero1==numero2){
    mensaje = "Los dos números son iguales";
} else {
    mensaje ="El número "+numero2+" es mayor que "+numero1;
}

alert(mensaje);




