/* 
    Sentencias de control
*/

let numero = 2;
if(numero == 1){
    console.log("Numro 1");
} else if(numero == 2) {
    console.warn("Numero 2");
} else if(numero == 3) {
    console.warn("Numero 3");
} else {
    console.log("No es un numero");
}

/*
Ejercicio referente a las estacions del año
    Invierno, verano, otoño, primarvera.
*/

let mes = 12;
let estacion;

if(mes == 1 || mes == 2 || mes == 3){
    estacion = "Invierno";
} else if(mes == 4 || mes == 5 || mes == 6){
    estacion = "Otoño";
} else if(mes == 7 || mes == 8 || mes == 9){
    estacion = "Primavera";
} else if(mes == 10 || mes == 11 || mes == 12){
    estacion = "Verano";
} else {
    estacion = "No corresponde a una estacion";
}

console.warn(estacion);

/*
Ejercicio calcular la hora del dia

    6am - 11am -> Buenos dias
    12pm - 18pm -> Buenas tardes
    19pm - 23pm -> Buneas noches
    0am - 5am -> Durmiendo
*/

let horaDia = 8;
let mensaje;

// if (horaDia >=6 && horaDia <= 11){
//     mensaje = "Buenos Dias";
// } else if (horaDia >=12 && horaDia <= 18){
//     mensaje = "Buenas Tardes";
// } else if (horaDia >=19 && horaDia <= 23){
//     mensaje = "Buenas Noches";
// } else if (horaDia >=0 && horaDia <= 5){
//     mensaje = "Durmiendo";
// } else{
//     mensaje = "No es una hora correspondida";
// }

// console.warn(mensaje);

/*
Ejercicio estacions del año con swich
*/

let mesEstacion = 9;
let estacionIngresada = "Estacion desconocida";

switch(mesEstacion){
    case 1: case 2: case 3:
        estacionIngresada = "Invierno";
        break;
    case 4: case 5: case 6:
        estacionIngresada = "Otoño";
        break;
    case 7: case 8: case 9:
        estacionIngresada = "Primavera";
        break;
    case 10: case 11: case 12:
        estacionIngresada = "Verano";
        break;
    default:
        estacionIngresada;
}

console.log(estacionIngresada);

// Otra forma de usar if

if (horaDia >=6 && horaDia <= 11)
    mensaje = "Buenos Dias";
else if (horaDia >=12 && horaDia <= 18)
    mensaje = "Buenas Tardes";
else if (horaDia >=19 && horaDia <= 23)
    mensaje = "Buenas Noches";
else if (horaDia >=0 && horaDia <= 5)
    mensaje = "Durmiendo";
else mensaje = "No es una hora correspondida";

console.log(mensaje);
