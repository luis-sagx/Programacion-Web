let estudiantes = [
    ["Maria", [20, 11, 16]], 
    ["Juan", [10, 15, 18]], 
    ["Pepe", [19, 14, 18]], 
    ["Pedro", [16, 17, 18]], 
    ["Jorge", [20, 18, 19]], 
    ["Juana", [14, 17, 14]], 
    ["Carlos", [11, 16, 17]], 
    ["David", [18, 11, 19]], 
    ["Edgar", [8, 19, 18]], 
    ["Josefina", [5, 10, 15]]
];

let mejorEstudiante = estudiantes[0];
let peorEstudiante = estudiantes[0];
let maxPromedio = 0;
let minPromedio = 20;

for (let i = 0; i < estudiantes.length; i++) {
    let nombre = estudiantes[i][0];
    let calificaciones = estudiantes[i][1];
    
    let promedio = 0;
    for (let i = 0; i < calificaciones.length; i++) {
        promedio += calificaciones[i];
    }
    promedio /= calificaciones.length;
    
    let clasificacion = "";
    if (promedio >= 16) {
        clasificacion = "Excelente";
    } else if (promedio >= 12) {
        clasificacion = "Bueno";
    } else if (promedio >= 8) {
        clasificacion = "Aprobado";
    } else {
        clasificacion = "Reprobado";
    }

    let maxCalificacion = calificaciones[0];
    let minCalificacion = calificaciones[0];
    for (let i = 1; i < calificaciones.length; i++) {
        if (calificaciones[i] > maxCalificacion) {
            maxCalificacion = calificaciones[i];
        }
        if (calificaciones[i] < minCalificacion) {
            minCalificacion = calificaciones[i];
        }
    }

    console.log("Estudiante: " +nombre);
    console.log("Calificaciones: " +calificaciones);
    console.log("Promedio: " +promedio);
    console.log("Clasificación: " +clasificacion);
    console.log("Máxima calificación: " +maxCalificacion);
    console.log("Mínima calificación: " +minCalificacion);
    console.log("---------------------------");

    if (promedio > maxPromedio) {
        mejorEstudiante = estudiantes[i];
        maxPromedio = promedio;
    }
    if (promedio < minPromedio) {
        peorEstudiante = estudiantes[i];
        minPromedio = promedio;
    }

}

console.log("Estudiante con el mejor promedio: " +mejorEstudiante[0] +" con promedio de: " +maxPromedio);
console.log("Estudiante con el peor promedio: " +peorEstudiante[0] +" con promedio de: " + minPromedio);
