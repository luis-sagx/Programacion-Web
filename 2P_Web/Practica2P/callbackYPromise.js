const operationCallback = (num1, num2, callback) => {
    const resultado = num1 + num2;
    return setTimeout(() => {
        callback(resultado)
    }, 500)
}

operationCallback(1, 6, (resultado) => {
    console.log(resultado);
}); 


const operationPromesa = (num1, num2) => {
    const resultado = num1 + num2;
    return new Promise(resolve =>{
        setTimeout(() => {
            resolve(resultado)
        }, 500)
    });
}

operationPromesa(2,6)
    .then(resultado => console.log(resultado));
 
