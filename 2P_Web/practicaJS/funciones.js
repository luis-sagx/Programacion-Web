function calcularPromedio(a, b, c) {
    if (typeof(a,b,c) == "number"){
        return (a+b+c)/arguments.length;
    } else {
        console.error("Los datos ingresados no son numeros");
    }
}

const determinarMayor = function(a, b){
    if (typeof(a,b) == "number"){
        return (a > b)? a : b;
    } else {
        console.error("Los datos ingresados no son numeros");
    }
}

const esPar = (num) => {
    if (typeof(num) == "number"){
        return num%2 === 0;
    } else {
        console.error("Los datos ingresados no son numeros");
    }
} 

(function(){
    let a = 10, b = 12, c = 5;
    promedio = calcularPromedio(a,b,c);
    numeroMayor = determinarMayor(a,b);
    console.log(`El promedio de ${a}, ${b}, ${c} ese ${promedio}`);
    console.log(`El mayor entre ${a} y ${b} es ${numeroMayor}`);
    console.log(`El numero ${a} es par?: ${esPar(a)}`);
    console.log(`El numero ${c} es par?: ${esPar(c)}`);

})();