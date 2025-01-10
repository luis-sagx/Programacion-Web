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
    // Permite modificar propiedades existentes pero no agregar ni eliminar
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

// Metodo get en objetos JS
// metodos que se usan a manera de buenas practicas, que permiten acceder y modificar dichos objetos
// Acceder a los valores del las propiedades

const personaGet = {
    nombre: "Marco",
    apellido: "Perez",
    email: "pepe@gmail.com",
    edad: 33,
    get nombreCompleto() {
        return this.nombre +" " + this.apellido;
    }
}

console.log(personaGet.nombreCompleto);

// Metodo Set en Objetos JS
// Set permite establecer o modificar los valores de los atributos de los objetos

// Validacion

const personaSet = {
    nombre: "Marco",
    apellido: "Perez",
    email: "pepe@gmail.com",
    edad: 33,
    idioma: "es",
    get lang(){
        return this.idioma.toUpperCase();
    },
    get nombreCompleto() {
        return this.nombre +" " + this.apellido;
    }
}

console.log(personaSet.lang);

// Set
let personaSet2 = {
    nombre: "Marco",
    apellido: "Perez",
    email: "pepe@gmail.com",
    edad: 23,
    idioma: "es",
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    get nombreCompleto() {
        return this.nombre +" " + this.apellido;
    }
}

console.log(personaSet2.lang);

personaSet2.lang = "en";
console.log(personaSet2.lang);


//Constructores en JS

//Si se desea crear varios objetos con las mismas propiedades y metodos, se puede usar un constructor
//Por ello se crean constructores
//Es una funcion especial que permite trabajar con objetos

//Funcion constructora de tipo persona
function PersonaFC(nombre,apellido,correo){
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo = correo;
}

let padreFC = new PersonaFC("Juan", "Sanchez", "juanito@mail.com");    //La variable ya no es variable, ahora es un metodo que permite crear un metodo de tipo persona
console.log(padreFC);

let madreFC = new PersonaFC("Laura", "Moya", "laura@mail.com");    //La variable ya no es variable, ahora es un metodo que permite crear un metodo de tipo persona
console.log(madreFC);

padreFC.telefono = "0987654321";
console.log(padreFC);
console.log(madreFC);

// Agregar un metodo a una funcion Constructora

function PersonaFCM(nombre,apellido,correo){
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo = correo;
    this.nombreCompleto = function () {
        return this.nombre +" " +this.apellido 
    }
}

let padreFCM = new PersonaFCM("Juan", "Sanchez", "juanito@mail.com");    //La variable ya no es variable, ahora es un metodo que permite crear un metodo de tipo persona
console.log(padreFCM);
console.log(padreFCM.nombreCompleto());

let madreFCM = new PersonaFCM("Laura", "Moya", "laura@mail.com");    //La variable ya no es variable, ahora es un metodo que permite crear un metodo de tipo persona
console.log(madreFCM.nombreCompleto());


// Uso de prototype
PersonaFCM.prototype.telefono = "123456789"; //Agrega una propiedad a todos los objeos de la clase
console.log(padreFCM);
console.log(madreFCM);

// Uso de call

let personaCall1 = {
    nombre: "Diego",
    apellido: "Salas",
    email: "pepe@gmail.com",
    edad: 23,
    nombreCompleto: function() {
        return this.nombre +" " + this.apellido;
    }
}

let personaCall2 = {
    nombre: "Andres",
    apellido: "Farias",
}

// Para usar el metodo nombreCompleto que pertenece al objetos personaCall1
// con los datos del objeto que pertenece a personaCall2

console.log(personaCall1.nombreCompleto());
console.log(personaCall1.nombreCompleto.call(personaCall2));

// Como pasar parametros a funciones con call
let personaCallP1 = {
    nombre: "Diego",
    apellido: "Salas",
    nombreCompleto: function (titulo, tel) {
      return titulo + ": " + this.nombre + " " + this.apellido + ", " + tel;
    },
};

let personaCallP2 = {
    nombre: "Andres",
    apellido: "Farias",
};

console.log(personaCallP1.nombreCompleto("Doctor", "987654321"));
console.log(personaCallP1.nombreCompleto.call(personaCallP2,"Ingeniero", "77777"));


// Uso del metodo apply

let personaApply1 = {
    nombre: "Diego",
    apellido: "Salas",
    nombreCompleto: function (titulo, tel) {
        return titulo + ": " + this.nombre + " " + this.apellido + ", " + tel;
    },
};

let personaApply2 = {
    nombre: "Andres",
    apellido: "Farias",
};

console.log(personaApply1.nombreCompleto());
console.log(personaApply1.nombreCompleto.apply(personaApply2));

//aplay recibo los parametros solo como arreglos
let arreglo = ["Ingeniero", "0987465123"];
console.log(personaApply1.nombreCompleto.apply(personaApply2, arreglo));
console.log(personaApply1.nombreCompleto.apply(personaApply2, ["Ingeniero", "0987465123"])); //mismo resultado


