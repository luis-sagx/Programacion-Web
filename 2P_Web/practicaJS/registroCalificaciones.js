class Estudiante {
    constructor(nombre, calificaciones = []) {
        this.nombre = nombre;
        this.calificaciones = calificaciones;
    }
}

let estudiante1 = new Estudiante("Pepe", [20,19,12]);
let estudiante2 = new Estudiante("Maria", [10,18,10]);
let estudiante3 = new Estudiante("Jose", [12,15,12]);
let estudiante4 = new Estudiante("Mario", [0,19,2]);
let estudiante5 = new Estudiante("Guadalupe", [19,19,19]);
let estudiante6 = new Estudiante("Jordan", [2,9,12]);
let estudiante7 = new Estudiante("Mauro", [18,19,17]);
let estudiante8 = new Estudiante("Alex", [10,11,12]);
let estudiante9 = new Estudiante("Carlos", [0,1,2]);
let estudiante10 = new Estudiante("Bryan", [20,19,18]);

let curso = [
        estudiante1,
        estudiante2,
        estudiante3,
        estudiante4,
        estudiante5,
        estudiante6,
        estudiante7,
        estudiante8,
        estudiante9,            
        estudiante10
];

const agregarCalifcaciones = (nombre, nota) => {
    for (const estudiante of curso) {
        if (nombre === estudiante.nombre) {
            estudiante.calificaciones.push(nota);
            return; 
        }
    }
}

console.log(curso);
agregarCalifcaciones("Pepe", 18);
console.log(curso);

const clasificar = (promedio) => {
    if (promedio >= 16) {
        return "Excelente";
    } else if (promedio >= 12) {
        return "Bueno";
    } else if (promedio >= 8) {
        return "Aprobado";
    } else {
        return "Reprobado";
    }
};

const calcularPromedio = (notas) => {
    let sumaNotas = notas.reduce((acumular, nota) => acumular + nota, 0);
    return sumaNotas/notas.length;
}

const encontrarNotaMaxima = (notas) => {
    let notaMaxima = notas.reduce((notaAlta, nota) => (notaAlta > nota)? notaAlta: nota, (0,notas[0]));
    return notaMaxima;
}

const encontrarNotaMinima = (notas) => {
    let notaMinima = notas.reduce((notaBaja, nota) => (notaBaja < nota)? notaBaja: nota, (20,notas[0]));
    return notaMinima;
}

const procesarEstudiantes = () => {
    let mejorPromedio = 0;
    let peorPromedio = 20;
    let estudianteMejorPromedio = "";
    let estudiantePeorPromedio = "";

    console.log("Resultados del curso:");
    for (let i = 0; i < curso.length; i++) {
        const estudiante = curso[i];
        const promedio = calcularPromedio(estudiante.calificaciones);
        const clasificacion = clasificar(promedio);
        const notaMaxima = encontrarNotaMaxima(estudiante.calificaciones);
        const notaMinima = encontrarNotaMinima(estudiante.calificaciones);

        console.log(`Estudiante: ${estudiante.nombre}`);
        console.log(`Calificaciones: ${estudiante.calificaciones}`);
        console.log(`Promedio: ${promedio}`);
        console.log(`Clasificación: ${clasificacion}`);
        console.log(`Nota Máxima: ${notaMaxima}`);
        console.log(`Nota Mínima: ${notaMinima}`);
        console.log("-----------------------------");

        if (promedio > mejorPromedio) {
            mejorPromedio = promedio;
            estudianteMejorPromedio = estudiante.nombre;
        }

        if (promedio < peorPromedio) {
            peorPromedio = promedio;
            estudiantePeorPromedio = estudiante.nombre;
        }
    }

    console.log(`El estudiante con el mejor promedio es ${estudianteMejorPromedio} (${mejorPromedio})`);
    console.log(`El estudiante con el peor promedio es ${estudiantePeorPromedio} (${peorPromedio})`);
};

procesarEstudiantes(); 
