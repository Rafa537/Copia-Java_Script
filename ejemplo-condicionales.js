// Ejemplo de uso del operador ternario
let edad = 18;
let mensaje = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje); // "Eres mayor de edad"

// Ejemplo de OR
let usuario = "";
let nombreUsuario = usuario || "Invitado";
console.log(nombreUsuario); // "Invitado"

//Ejemplo de AND
let x = 1 && 2 && null && 3;
console.log(x); // null

let y = 1 && 2 && 3;
console.log(y); // 3

// Ejemplo de Nullish Coalescing
let altura = 0;
let alturab = altura ?? 100; // 0
console.log(alturab);

// Otro ejemplo
function mostrarConteo(conteo) {
// 0 es un valor válido para conteo
console.log(conteo ?? "Sin datos");
}

mostrarConteo(0); // 0
mostrarConteo(null); // "Sin datos"

//Ejemplo de precedencia de operadores
// Sin paréntesis - confuso
let resultado = 2 + 3 * 4; // 14 (primero se evalúa 3*4)
console.log(resultado);
// Con paréntesis - claro
let resultadoClaro = (2 + 3) * 4; // 20
console.log(resultadoClaro);

//Ejemplo con while
let contador = 0;

while (contador < 5) {
console.log("Contador: " + contador);
contador++; // Incrementamos contador
}

// Ejemplo de for
let frutas = ["Manzana", "Pera", "Naranja", "Sandía"];

for (let i=0; i<frutas.length; i++)
{
    console.log(`Fruta ${i+1}: ${frutas[i]}`);
}