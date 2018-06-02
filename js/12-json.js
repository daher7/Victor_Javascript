"use strict"

// Creamos el objeto pelicula.
var pelicula = {
    titulo: "Alien",
    year: 1981,
    pais: "Estados Unidos"
};

// Creamos una colección de objetos.
var peliculas = [{
        titulo: "Rescate en Nueva York",
        year: 1977,
        pais: "Estados Unidos"
    },
    {
        titulo: "Troya",
        year: 1997,
        pais: "Francia"
    },
    pelicula // El objeto pelicula.
];

// Mostramos la informacion en pantalla.
for(let indice in peliculas){
    document.write(peliculas[indice].titulo + " - " + peliculas[indice].year + " - " + peliculas[indice].pais + "<br/>");
}