function calcularPromedio(a, b, c) {
    if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
        throw new Error("Todos los parámetros deben ser números");
    }
    return (a + b + c) / arguments.length;
}

const determinarMayor = function(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("Ambos parámetros deben ser números");
    }
    return a > b ? a : b;
};

const esPar = (a) => {
    if (typeof a !== "number") {
        throw new Error("El parámetro debe ser un número");
    }
    return a % 2 === 0;
};

(function () {
    let a = 7, b = 12, c = 5;
    console.log("El promedio es: " + calcularPromedio(a, b, c));
    console.log("Mayor entre los numeros " +a + " y " +b + " es: " + determinarMayor(a, b));
    console.log("El numero: " + a + " es par?: " + esPar(a));
    console.log("El numero: " + b + " es par?: " + esPar(b));
    console.log("El numero: " + c + " es par?: " + esPar(c));
})();
