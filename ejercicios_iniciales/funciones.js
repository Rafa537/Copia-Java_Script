//ejercicio 1
function menorv() {
    let array = [1, 4, 0];
    let menor = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < menor) {
            menor = array[i]; 
        }
    }
    console.log(menor); 
}
menorv();

//ejercicio 2
function mostrar()
{
    let array = [1,2,3,4,5];
    for (let i=0; i<array.length; i++)
    {
        console.log(`Números: ${array[i]}`);
    }
}
mostrar();

//ejercicio 3
function mayorv() {
    let array = [1, 4, 0];
    let mayor = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > mayor) {
            mayor = array[i]; 
        }
    }
    console.log(mayor); 
}
mayorv();

//ejercicio 4
let a = 4;
let lado = 5;
const per = (a, lado) => a*lado;
console.log(per(a,lado));

//ejercicio 5
let num = parseInt(prompt("Introduce un número para contar sus dígitos: "));
const contar = (num) => String(num).length;
console.log(`El número tiene ${contar(num)} dígitos`);

//ejercicio 6
let num1 = parseInt(prompt("Introduce un número: "))
let num2 = parseInt(prompt("Introduce otro número: "))
let num3 = parseInt(prompt("Introduce otro número más: "))
const media = (num1, num2, num3) => (num1 + num2 + num3) /3;
console.log("La media es : " + media(num1, num2, num3));

// ejercicio 7
