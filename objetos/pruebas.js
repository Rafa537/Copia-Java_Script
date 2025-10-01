// ejercicio 1
let persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
}

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.ciudad);

// ejercicio 2
let coche = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020
}

console.log(coche.marca);
coche.año = 2024;
coche.color = "Rojo"
console.log(coche.modelo);
console.log(coche.año);
console.log(coche.color);

// ejercicio 3
let animal = {
    tipo: "Felino",
    nombre: "Gato",
    edad: 7
}
delete animal.edad;
console.log(animal);

// ejercicio 4
let empresa = {
    direccion : {
        calle : "El Romero",
        numero: 56,
        ciudad : "Badajoz"
    }
}

console.log(empresa.direccion.calle);
console.log(empresa.direccion.numero);
console.log(empresa.direccion.ciudad);