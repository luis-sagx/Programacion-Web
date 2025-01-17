function sumar(a, b, callback) {
    let resultado = a + b;  
    callback(resultado);  // Llama a la función callback
}
function mostrarResultado(resultado) {
    console.log(`El resultado de la suma es: ${resultado}`);
}
  
// Usamos la función callback
sumar(5, 3, mostrarResultado); 
  