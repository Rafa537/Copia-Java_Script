// ejercicio1.js
"use strict";

console.log("Hola Mundo");

let nombre = "2DAW";
console.log("Hola " + nombre);

// ejercicio2.js
let num1 = prompt("Introduce el primer número:");
let num2 = prompt("Introduce el segundo número:");
alert("La suma es: " + (parseInt(num1) + parseInt(num2)));

// ejercicio3.js
let np = prompt("Introduce un número: ");
if (np % 2 == 0) {
    alert("El número es par");
} else {
    alert("El número es impar");
}

// ejercicio4.js
let edad = prompt("Introduce tu fecha de nacimiento: ");
let anio = 2025;
alert("Tu edad es: " + (anio - parseInt(edad)) + " años");

// ejercicio5.js
let colores = ["rojo", "verde", "azul", "amarillo", "naranja"];
console.log(colores);
colores.push("morado");
console.log(colores);

// ejercicio6.js
let i = 0;
let cant = prompt("Introduce el máximo para multiplicar:");
for (i = 1; i <= cant; i++) {
    let m = i * i;
    console.log(i + "por " + i + " es igual a " + m);
}

// ejercicio7.js
let numeros = [5, 7, 2, 19, 3];
let max = Math.max(...numeros);
console.log("El número máximo es : " +max);


let array2 = [];
let numero = prompt("Introduce números (escribe 'stop' para terminar): ");
while (numero !== "stop") {
    array2.push(Number(numero));
    numero = prompt("Introduce números (escribe 'stop' para terminar): ");
}
if (array2.length > 0) {
    let max2 = Math.max(...array2);
    console.log("El numero máximo del array es : " + max2);
} else {
    console.log("No se introdujeron números.");
}

// ejercicio8.js
let k = 0;
let name = prompt("Introduce una cadena: ");
for (k = name.length - 1; k >= 0; k--) {
    console.log(name.charAt(k));
}

// ejercicio9.js
let m = 1;
for (m = 1; m <= 50; m++) {
    if (m % 3===0)
    {
        console.log("El número " + m + " es FIZZ");
    }
    else if (m % 5===0)
    {
        console.log("El número " + m + " es BUZZ");
    }
    else if (m % 3===0 && m % 5===0)
    {
        console.log("El número " + m + " es FIZZBUZZ");
    }
}

// ejercicio10.js
let numero1 = prompt("Introduce un número: ");
let numero2 = prompt("Introduce otro número: ");
let operacion = prompt("Introduce la operación a realizar (suma, resta, multiplicación, división): ");
if (operacion === "suma") {
    alert("La suma es: " + parseInt(numero1) + parseInt(numero2));
}
else if (operacion === "resta") {
    alert("La resta es: " + (parseInt(numero1) - parseInt(numero2)));
}
else if (operacion === "multiplicación") {
    alert("La multiplicación es: " + (parseInt(numero1) * parseInt(numero2)));
}
else if (operacion === "división") {
    alert("La división es: " + (parseInt(numero1) / parseInt(numero2)));
}