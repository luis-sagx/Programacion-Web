//Modificar denominado STATIC
//Se usa para acceder directamente a traves de la clase

//Los metodos a propiedades estaticas (static) no requieren que se cree una instancia de la clase para ser utilizada

class Calculadora {
    static sumar(a,b) {
        return a+b;
    }
}

//El acceso al metodo estatico de la clase es de la siguiente forma

console.log(Calculadora.sumar(2,4));

//No se puede acceder desde una instancia
const calc = new Calculadora();
console.log(calc.sumar(2,4));

//El modificador static en JS es na herramienta clave para definir funciones y propiedades
//compartidas sin necesidad de crear algun ti´p de instancia de una clase