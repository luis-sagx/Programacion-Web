/*
OBJETOS
*/

// Caracteristicas principales de los objetos en JS
// Claves y valores:

// Las claves son cadenas o simbolos unicos 
// los valores puedesn ser de cualquier tipo: number, string, function or objet

/*
Dinamismo:
    los objeos puedes modificarse en timpo de ejecucion (agregar, modificar o eliminar propiedades de los objetos)

    Nota: 
        Los objetos pieden incluir metodos

*/

let persona = {
    nombre: "Juan",
    apellido: "Perez",
    email: "p@gmail.com",
    edad: 33
}

console.log(persona);

// Incluir metodos

let people = {
    name: "Andy",
    lastname: "Cooks",
    age: 27,
    fullName: function () {
        return this.name +" " +this.lastname
    }
}

console.log(people.fullName());

let people2 = {
    name: "Mary",
    lastname: "Dalas",
    age: 22,
    saludo: function () {
        console.log(`hello, my name is ${this.name}`);
    }
}

console.log(people2);
people2.saludo();

// Usando el constructor Object
// Es otra forma de crear un objeto vacio y agregarle posteriores posteriormente

const persona1 = new Object();
persona1.nombre = "Maria";
persona1.apellido = "Velez";
persona1.edad = 44;
persona1.saludar = function () {
    console.log(`Hola, mi nombre es ${this.nombre}`);
}

console.log(persona1);
persona1.saludar();


// Usando la clase Object.create

// Permite crear un objeto asado en un prototipo

const prototipoPersona = {
    saludar: function () {
        console.log(`Hola desde prototipo, soy ${this.nombre}`);
    }
}  

const persona2 = Object.create(prototipoPersona);
persona2.nombre = "Luis";
persona2.saludar();

// Usando clases, introducido desde 2016 hasta la actualidad
// Proporcioan una sintaxis mas estructuradas para crear objetos

class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }

    saludar(){
        console.log(`Hola desde la clase Persona, soy ${this.nombre} ${this.apellido}`);
    }
}

const persona3 = new Persona("Ana", "Gonzalez")
persona3.saludar();

// Usando funciones constructoras
// Forma clasica, no se utiliz frecuentemente

function Persona1(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;

    this.saludar = function(){
        console.log(`Hola desde funciones, soy ${this.nombre}, tendo ${this.edad} años`);
    }
}

const persona4 = new Persona1("Luis", 55);
persona4.saludar();


// Manipulacion de los datos 

    // 1. Agregar o modificar propiedades
const persona5 = {nombre: "Pedro"};
persona5.edad = 77;
persona5.nombre = "Pepe Matinez"
persona5.altura = 170;
console.log(persona5);

    // 2. Eliminar propiedades
delete persona5.altura;
console.log(persona5);

    // 3. Iterar sobre las propiedades
for(nombrePropiedad in persona5){
    console.log(nombrePropiedad);
    console.log(persona5[nombrePropiedad]);
}

for (let key in persona5) {
    console.log(`${key}: ${persona5[key]}`)
}

    // 4. Verificar propiedades
console.log("name" in persona5);
console.log("nombre" in persona5);
console.log(persona5.hasOwnProperty("age"));
console.log(persona5.hasOwnProperty("edad"));


// Metodos utiles para trabajar con objetos
    // 1. Object.keys()
    // Devuelve un array con las claves del objeto
console.log(Object.keys(persona5));
    
    // 2. Object.values()
    // Devuelve un array con las valores del objeto
console.log(Object.values(persona5));
    
    // 3. Object.entries()
    // Devuelve un array de pares [claves, valores]
console.log(Object.entries(persona5));
    
    // 4. Object.assign()
    // Copia las propiedades de un  objeto a otro
const copia = Object.assign({},persona5);
console.log(copia);

    // 5. Object.frezze();
    // Congelar un objeto para evitar modificaciones
Object.freeze(persona5);

    //6. Object.seal();
    // Permite modificar propiedades existentes pero no agregar ni modificar
Object.seal(persona5);

persona5.direccion = "Quito"; //No se agrega la direccion por el seal
delete persona5.edad; //No se borra la edad por el seal
console.log(persona5);

let personaArray = Object.values(persona5);
console.log(personaArray)

let personaString = JSON.stringify(persona5);
// JSON es una notacion, es un objeto
//stringify convierte a cadena o string cada propiedad
console.log(personaString);