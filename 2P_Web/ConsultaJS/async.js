function obtenerDatos() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Datos obtenidos");
      }, 2000);
    });
}
  
// Función asincrónica que usa await para esperar la promesa.
async function mostrarDatos() {
    console.log("Esperando datos...");
    
    let datos = await obtenerDatos();  // espera a que se resuelva la promesa antes de continuar.
    
    console.log(datos);  // Despues de 2 segundos imprimir.
}
  
mostrarDatos();

function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  
async function tareasParalelas() {
    console.log("Iniciando tareas paralelas...");
    
    // Ejecutamos las promesas de manera paralela
    let resultados = await Promise.all([
      esperar(1000).then(() => "Tarea 1 completada"),
      esperar(2000).then(() => "Tarea 2 completada"),
      esperar(1500).then(() => "Tarea 3 completada")
    ]);
  
    console.log(resultados);  
}
  
tareasParalelas();
  
  