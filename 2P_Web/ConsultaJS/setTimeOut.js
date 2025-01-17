console.log("Antes de la espera");

setTimeout(function() {
  console.log("Esto se ejecuta después de 2 segundos");
}, 2000);

console.log("Después de la espera");


function saludos(nombre, ocupacion){
    console.log(`Hola, mi nombre es ${nombre}`);
    console.log(`Yo soy ${ocupacion}`);
}
  
setTimeout(saludos, 3000, "Luis", "Estudiante");