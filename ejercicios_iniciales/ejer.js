// ejercicio 13
let sueldo = parseFloat(prompt("Introduce el sueldo del operario:"));
let antiguedad = parseInt(prompt("Introduce los años de antigüedad:"));

if (sueldo < 500 && antiguedad >= 10) {
    sueldo = sueldo * 1.20;
    alert("Sueldo con aumento del 20%: " + sueldo.toFixed(2));
} else if (sueldo < 500 && antiguedad < 10) {
    sueldo = sueldo * 1.05;
    alert("Sueldo con aumento del 5%: " + sueldo.toFixed(2));
} else {
    alert("Sueldo sin cambios: " + sueldo.toFixed(2));
}

// ejercicio 15
// Traducción de palabras
let palabra = prompt("Introduce una palabra (casa, mesa, perro, gato):");
let traduccion;

switch (palabra.toLowerCase()) {
    case "casa":
        traduccion = "house";
        break;
    case "mesa":
        traduccion = "table";
        break;
    case "perro":
        traduccion = "dog";
        break;
    case "gato":
        traduccion = "cat";
        break;
    default:
        traduccion = "Palabra no reconocida";
}

alert("La traducción es: " + traduccion);


// ejercicio 17
let nota = parseFloat(prompt("Introduce la nota (0-10):"));
let calificacion;

if (nota >= 0 && nota < 3) {
    calificacion = "Muy deficiente";
} else if (nota >= 3 && nota < 5) {
    calificacion = "Insuficiente";
} else if (nota >= 5 && nota < 6) {
    calificacion = "Suficiente";
} else if (nota >= 6 && nota < 7) {
    calificacion = "Bien";
} else if (nota >= 7 && nota < 9) {
    calificacion = "Notable";
} else if (nota >= 9 && nota <= 10) {
    calificacion = "Sobresaliente";
} else {
    calificacion = "Nota fuera de rango";
}

alert("Calificación: " + calificacion);