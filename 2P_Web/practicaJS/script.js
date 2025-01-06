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
    ["Josefina", [5, 10, 5]]
];

let mejorPromedio = 0;
let peorPromedio = 20;
let mejorEstudiante = estudiantes[0];
let peorEstudiante = estudiantes[0];

for (let i = 0; i < estudiantes.length; i++) {
    notas = estudiantes[i][1];
    let promedio = 0;

    sumaNotas = notas.reduce((acumular,nota) => (acumular += nota), 0)
    console.log(sumaNotas);

    promedio = sumaNotas/notas.length;

    console.log("ESTUDIANTE --> "+estudiantes[i][0])

    if(promedio >= 16){
        console.log("Promedio excelente");
    } else if(promedio >= 12){
        console.log("Promedio bueno");
    } else if (promedio >= 8){
        console.log("Promedio aprobado");
    } else {
        console.log("Estuduente reprobado");
    }

    console.log("Promedio: " + promedio);
    let notaMaxima = notas.reduce((nota, notaAlta) => (nota < notaAlta ? notaAlta : nota), notas[0]);
    console.log("Su nota mas alta es: " +notaMaxima);
    let notaMinima = notas.reduce((nota, notaBaja) => (nota > notaBaja ? notaBaja : nota), notas[0]);
    console.log("Su nota mas baja es: " +notaMinima);

    console.log("-------------------------------");

    
    if(promedio > mejorPromedio){
        mejorEstudiante = estudiantes[i][0];
        mejorPromedio = promedio;
    }

    if(promedio < peorPromedio){
        peorEstudiante = estudiantes[i][0];
        peorPromedio = promedio;
    }
}

console.log("El mejor promedio es: " +mejorPromedio +" del estudiante -> " +mejorEstudiante);
console.log("El peor promedio es: " +peorPromedio +" del estudiante -> " +peorEstudiante);

