/*
    ARRAY
*/

const arr = new Array(10);
const arr1 = [];
console.log(arr);
console.log(arr1);

const numero = [1,2,3,4,5];
let colores = ["Rojo", "Azul", "Verde"];

//Ejercicio

let videojuegos = ["Mario 3", "Megaman", "Soccer"];
console.log({videojuegos});

let arregloCosas = [
    true, 123, "Fernando", 1+2, function(){}, ()=>{}, ["S", "Peliculas"] 
];

console.log({arregloCosas});

console.log(arregloCosas[3]);
console.log(arregloCosas[4]);
console.log(arregloCosas[5]);

/*
Metodos
    map(), filter(), reduce()
*/

// map() transforma los elementos de un arreglo

const numerosMap = [1,2,3,4,5,6];
let cuadrados = numerosMap.map(num => num*num);
console.log(cuadrados);

// filter() filtra los elementos que cuimplen algun tipo de condicion

let numerosFilter = [1,2,3,4,5,6];
let pares = numerosFilter.filter(num => num % 2 == 0);
console.log(pares);

// reduce() reduce todos los elementos a un solo valor

let numerosReduce = [1,2,3,4,5,6,7,8,9,10];
let maximo = numerosReduce.reduce((acumular, num) => (num > acumular ? num : acumular), numerosReduce[0]);
console.log(maximo);

/*
Ventajas
    Son ideales para trabajar con transformaciones y manipulaciones omplejas de datos dentro de un array
    permiten un estilo de programacion funcional mas limpio y legible
*/