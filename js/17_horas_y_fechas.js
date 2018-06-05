var fecha = new Date();

var year = fecha.getFullYear();
var mes = fecha.getMonth(); // Enero empieza en el 0
var dia = fecha.getDate();
var hora = fecha.getHours();
var minutos = fecha.getMinutes();
var segundos = fecha.getSeconds();

console.log(dia + " de " + mes + " del " + year);
console.log(hora + ":" + minutos + ":" + segundos);