var firtName = "Luis";
var lastName = "Sagnay"
age = 20;

console.log("Mi nobre es " + firtName + " " + lastName);
console.log("Mi edad es " +age)

let x = 10;
let y = 20;
let z = x + y;
console.log(z);

// var declara una variable global
// let declara variable local o de bloque
// contsdclara variables constantes que no cambian 
// if 
// switch
// for
// while
// funtion marca un bloque de instrucciones
// try se ejecuta cuando no se produce ningun error 
// catch se ejecuta cuando se produce algun error
// return se ejecuta cuando una condicion se cumple, retorna un valor 

//var -> esta quedando deprecado

/*
Tipos de datos string
*/

let name1 = "Pepe";
console.log(name1);

let name2;
name2 = "Maria";
console.log(name2);

/*
Tipos de datos numerico
*/

let number = 1000;
console.log(number);

/*
Tipos de datos Objet
*/

let person = {
    firstName:"Pedro",
    lastName:"Rodriguez",
    edad: 44
}

console.log(person)

let let1 = "palabra";
console.log(typeof let1);

let let2 = 444;
console.log(typeof let2);

let let3 = true;
console.log(typeof let3);

let let4 = BigInt(444);
console.log(typeof let4);

let let5 = [1,2,3,4,5,6,7,8,9];     //LOS ARRAY JS LO TOMA COMO TIPO DE DATO OBJECT
console.log(typeof let5);

function saludar(){}
console.log(typeof saludar);

let simbolo = Symbol("Mi simbolo");     //Puede ser utilizado como un identificador unico 
console.log(typeof simbolo);

/*
Tipos de datos Clase
*/

class Person {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}

console.log(typeof Person)

/*
Tipos de datos undefined -> se puede usar como un valor
*/

let variable;
console.log(variable);
console.log(typeof variable);

/*
Tipos de datos null -> no tiene valor 
*/

let variable1 = null;
console.log(variable1);
console.log(typeof variable1);

/*
Tipos de datos de Arreglos
*/

let autos = ["BMW", "Mercedes", "Audi"];
console.log(autos);
console.log(typeof autos);

let cadenaVacia = "";
console.log(cadenaVacia);
console.log(typeof cadenaVacia);


/*
Reglas de los nombres de las variables

    - No iniciar con numeros
    - No iniciar con mayusculas
*/

//Formas correctas
let fullName = "Luis Sagnay";
let full_name = "Luis Sagnay";
let _fullName = "Luis Sagnay";
let fullName_ = "Luis Sagnay";
let full1Name = "Luis Sagnay";

//Formas incorrectas
//let 1fullName = "Luis Sagnay";
//let #full_name = "Luis Sagnay";


/*
OPERACIONES ARITMETICAS
*/

let num1 = 2;
let num2 = 5;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(num1 ** num2);

//OPERADORES DE INCREMENTO 
let num3 = 3;
let num4 = 5;

let num5 = ++num3;
let num6 = ++num4;

console.log(num5);
console.log(num6);

let num7 = num3++;
let num8 = num4++;

console.log(num7);
console.log(num8);

console.log(num3);
console.log(num4);

//OPERADORES DE DECREMENTO

num5 = --num3;
num6 = --num4;

console.log(num5);
console.log(num6);

num7 = num3--;
num8 = num4--;

console.log(num7);
console.log(num8);

console.log(num3);
console.log(num2);


/*
PRECEDENCIA 
    Se ejecutan de izquierda a derecha o de derecha a izquierda, segun sea el caso 
*/

let pre1 = 2, pre2 = 3, pre3 = 4, pre4 = 5;

let pre5 = (pre1 + pre2) * pre3;
console.log(pre5);

let pre6 = pre3 * (pre1 + pre2);
console.log(pre6);

let pre7 = pre1 + pre2 * pre3;
console.log(pre7);

let pre8 = (pre1 * pre3) + pre2 * pre4 / (pre1 + pre2);
console.log(pre8);


/*
El == compara pero no es estricto
El === compara y es estricto con el tipo de dato
*/

let operador1 = 10, operador2 = "10";
let comparador = operador1 == operador2;
console.log(comparador);

comparador = operador1 === operador2;
console.log(comparador);

if(operador1 == operador2){
    console.log("It is same");
} else {
    console.log("It is not same");
}

// Par o impar

let numer1 = 5;

if(numer1 % 2 === 0 ){
    console.log("Es primo");
} else {
    console.log("No es primo");
}

//Mayor o menor de edad

let edad = 16;

if(edad >= 18){
    console.log("Es mayor de edad");
} else {
    console.log("Es menor de edad");
}

//De un conjunto de 10 valores, determinar cuantos son pares y cuantos impares 

let valores = [1,2,3,4,5,6,7,8,9,10];
let contadorPares = 0;
let contadorImpares = 0;

for(let i = 0; i<= valores.length; i++){
    if(valores[i] % 2 == 0){
        contadorPares++;
    } else{
        contadorImpares++;
    }
}

console.log(contadorPares);
console.log(contadorImpares);

/*
OPERADORES LOGICOS

    - AND -> &&
    - OR -> ||
    - AND -> !
*/

// Operador terceario
a = 10;
min = 5;
max = 12;
let resultado = (a > min && a < max) ? "El valor esta en el rango" : "No esta en el rango"
console.log(resultado);


let myNumber = "20";
let myNumber1 = Number(myNumber);
console.log(myNumber1);

let myNumber2 = parseInt(myNumber); 
console.log(myNumber2);

//parseInt convierte de string a entero
//Number combierte un valor a un numero (entero o flotante)


