/*
    FUNCIONES
*/

function myFunction(a, b) {
    console.log('La suma es: ' +(a+b))
}

myFunction(20, 3);

// Funciones con retorno
function myReturn(a, b){
    return a + b;
}

let resultado = myFunction(22, 2);

let sumar = function (a, b) {return a * b};

resultado = sumar(2,4);
console.log(resultado);
console.log(typeof sumar);


// Funciones de tipo self-invoking
// Son sunciones que se llaman a si mismas, tambien conocidas como funciones anonimas
// No son muy conocidas pero pueden ser utiles en algunos casos

(function (a,b){
    console.log('ejecutando la funcion -> suma: ' + (a + b));
})(3,4);


// Funciones anonimas ya establecidas
setTimeout(function () {
    console.log('Hola desde una funcion anonima 1');
}, 100);

const persona = {
    nombre : "Luis",
    apellido : 'Sagnay',
    saludar(){
        return `Hola, soy ${this.nombre}`; // interpolacion
    }
}

console.log(persona.saludar())

// Funciones tipo flecha (arrow function)
// Forma consisa de declarar funciones y es ampliamente usado 
// usar let para declarar funciones no es correcta.

const sumarValores = (a, b) => (a+b)
console.log(sumarValores(2,3));

const operaciones = {
    sumar: (a,b) => a + b,
    restar: (a,b) => a - b,
    multiplicar: (a,b) => a * b,
    dividir: (a,b) => a / b,
};
console.log(operaciones.sumar(2,3));
console.log(operaciones.restar(2,3));
console.log(operaciones.multiplicar(2,3));
console.log(operaciones.dividir(2,3));
