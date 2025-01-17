let contador = 0;
const intervalo = setInterval(function() {
  contador++;
  console.log(`Han pasado ${contador} segundos`);
  if (contador === 5) {
    clearInterval(intervalo);  // Detiene el intervalo después de 5 segundos
  }
}, 1000);
