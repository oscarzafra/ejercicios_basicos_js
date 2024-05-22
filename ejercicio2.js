// Ejercicio 2.1
const jedi = {nombre: "Luke Skywalker", edad: 19};

console.log(jedi.edad);

jedi.edad = 25;

console.log(jedi.edad);



// Ejercicio 2.2
let nombre = "Leia";
let apellido = "Organa"
let edad = 20;

let mensaje = "Soy "+ nombre +" "+ apellido +", tengo "+ edad +" años y soy una princesa de Alderaan.";

console.log (mensaje);



// Ejercicio 2.3
const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};

let suma = sable1.precio + sable2.precio;

console.log(suma);



// Ejercicio 2.4
let precioBaseGlobal = 25000;

const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 60000};
const nave2 = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000};

nave1.precioFinal = nave1.precioBaseGlobal + nave1.precioBase;
nave2.precioFinal = nave2.precioBaseGlobal + nave2.precioBase;

console.log(nave1.precioFinal);
console.log(nave2.precioFinal);


