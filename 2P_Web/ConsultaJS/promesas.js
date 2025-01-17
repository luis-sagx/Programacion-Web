let promesaDeOperacion = new Promise(function(resolve, reject) {
    let exito = true;
  
    if (exito) {
      resolve("Operación exitosa");
    } else {
      reject("Error en la operación");
    }
  });
  
  promesaDeOperacion
    .then(function(result) {
      console.log(result);  // Se ejecuta si la promesa es resuelta
    })
    .catch(function(error) {
      console.log(error);  // Se ejecuta si la promesa es rechazada
    });

    
let promesa1 = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("Primer valor"), 1000);
});

let promesa2 = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("Segundo valor"), 2000);
});

Promise.all([promesa1, promesa2])
  .then(function(resultados) {
    console.log(resultados);  
  })
  .catch(function(error) {
    console.log(error);
  });


let promesa3 = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("Primer valor"), 1000);
});

let promesa4 = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("Segundo valor"), 500);
});

Promise.race([promesa3, promesa4])
  .then(function(resultado) {
    console.log(resultado); 
  });


function procesarPago(monto) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (monto >= 0) {
          resolve(`Pago de $${monto} procesado exitosamente`);
        } else {
          reject("Error: Monto no válido");
        }
      }, 3000);  // Simulamos un retraso de 3 segundos
    });
}
  
procesarPago(100)
    .then(mensaje => {
      console.log(mensaje);  
    })
    .catch(error => {
      console.error(error);  
});
  