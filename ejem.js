"use strict";
function mostrarTodos() {
    for(let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
    }
}

mostrarTodos("uno","dos","tres");

function saludar(nombre = "Invitado") {
console.log("¡Hola, " + nombre + "!");
}

saludar("María"); // Muestra: ¡Hola, María!
saludar(); // Muestra: ¡Hola, Invitado!


// Creamos una función
function sumar(a, b) {
return a + b;
}

// La asignamos a una variable
let operacion = sumar;
// Usamos la variable como una función
console.log(operacion(5, 3)); // 8

// ejemplo
let a = 5;
let b = 5;
const suma = (a, b) => a + b;
console.log("La suma es: " + suma(a,b));

// ejemplos de funciones flecha
