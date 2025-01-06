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


//Agregar elementos al arreglo

//push() agrega al final del array
let p = [1,2,3,4];
p.push(5);
console.log(p);

//unshift() agrega al inicio del array
let u = [1,2,3,4];
u.unshift(5);
console.log(u);

//splice() agrega o elimina elementos en cualquier posicion del array
let s = [1,2,3,4]
s.splice(1,0,5); //Agrega el numero 5 en la posicion 1 sin elimunar ningun elemento
console.log(s);

s = [1,2,3,4]
s.splice(2,1,5); //Reemplaza el numero de la posicion 2 por el numero 5 
console.log(s);

let i = ['a', 'b', 'c', 'd']; //modificar un array
i[2] = 'aa';
console.log(i);


// crear un nuevo arreglo de valores modificados con map
let arregloMap = [10,20,30,40,50];
let arregloMapNuevo = arregloMap.map(num => num < 24 ? 5 : num);
console.log(arregloMapNuevo);


//Eliminar elementos de un array

//pop() elemina el ultimo elemento del array
let arregloEliminadar = ['azul','rojo','negro','amarrillo'];
arregloEliminadar.pop();
console.log(arregloEliminadar);

//shift() elemina el primer elemento del array

arregloEliminadar = ['azul','rojo','negro','amarillo'];
arregloEliminadar.shift();
console.log(arregloEliminadar);

//splice() elemina un elemento del array

arregloEliminadar = ['azul','rojo','negro','amarillo','verde','morado','gris'];
arregloEliminadar.splice(1, 3); // (indice desde el cual se va a eliminar, numero de elementos para borrar)
console.log(arregloEliminadar);




