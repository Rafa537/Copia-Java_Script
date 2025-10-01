// Ejemplo de código JavaScript
/* 
    El use script lo que hace es que el código 
    se ejecute en modo estricto y evita errores comunes
    "use strict";
*/

"use strict";
console.log("Hola Mundo");

let nombre = "Juan", edad = 30;
console.log("Mi nombre es " + nombre + " y tengo " + edad + " años");

const x = 10; // Constante
const a = 5;

function suma(x, a) { // Función que suma dos números
    return x + a;
}

console.log(suma(a, x));

const colores = ["rojo", "verde", "azul"]; // Array de colores
colores.push("morado");
colores.push("amarillo");
colores.push("naranja");
colores.push("rosa"); // Añade elementos al final del array
colores.pop(); // Elimina el último elemento del array
colores.splice(1, 2); // Elimina el elemento en el índice 1 (el color "verde")
console.log(colores);

const CONFIGURACION = { 
    version: "1.0", 
    api: "https://api.ejemplo.com" 
}

console.log(CONFIGURACION); // Muestra el objeto de configuración


let sign = prompt("Como te llamas?");

if (sign.toLowerCase() == "pedro") {
    console.log("Hola Pedro, yo soy Rafael");
}

// there are many ways to use the prompt feature
sign = window.prompt(); // open the blank prompt window
sign = prompt(); //  open the blank prompt window
sign = window.prompt("Are you feeling lucky"); // open the window with Text "Are you feeling lucky"
sign = window.prompt("Are you feeling lucky", "sure"); // open the window with Text "Are you feeling lucky" and default value "sure"