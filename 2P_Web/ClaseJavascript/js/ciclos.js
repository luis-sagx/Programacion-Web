/*
    CICLOS
*/

//FOR

const heroes = ["Batman", "Superman", "Mujer Maravilla", "Acuaman"];

console.warn("********** For tradicional **********");

for (let i = 0; i < heroes.length; i++) {
    console.warn(heroes[i]);
}

console.warn("********** For in **********");

for (let i in heroes) {
    console.warn(heroes[i]);    
}

console.warn("********** For of **********");

for (let heroe of heroes) {
    console.warn(heroe);
}

/*
Usos de la declaracion for
    Se usa el -- for tradicional -- cuando se necesita el control total de los indices del array
    Se usa el -- for in -- para el manejo de objetos, es decir, para iterar un objeto o los indices del array
    Se usa -- for of -- para iterar los valores directamentes de un iterable, tales como array, cadenas de texto
        en map, set, nodelist.
*/

/*
Usos del continue y break dentro del for 
*/

for (let contador = 0; contador < 10; contador++) {
    if (contador % 2 == 0){
        continue;       // Ir a la siguiente iteracion
    }
    console.log(contador);
}

const carros = ["Audi", "Ford", "BMW", "Honda"];

for (let contador = 0; contador < carros.length; contador++) {
    if (contador == 2){
        break;       // Rompe el ciclo cuando se cumple la condicion
    }
    console.log(carros[contador]);
}

let i = 0;

while (carros[i]) {
    if (i == 1){
        i++;
        continue;
    }
    console.log(carros[i]);
    i++;
}