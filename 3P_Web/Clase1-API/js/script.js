// /******** FETCH API **********/

// // Fect Api: en js permite hacer solicitudes http de manera sencilla, usando promesas
// // Se usa para obtener datos y enviar datos de un servidor de BD

// fetch('https://jsonplaceholder.typicode.com/posts/3') //URL de la api a consumir
//     .then(response => response.json())  //convertir la respuesta de la api en fomrato JSON
//     .then(data => console.log(data))    //Mostrar los datos obtenidos
//     .catch(error => console.error('Error:', error));    //Captura de posible error


// // Metodo POST
// fetch('https://jsonplaceholder.typicode.com/posts', { 
//     method: 'POST',
//     headers: { 
//         'Content-Type': 'application/json' 
//     },
//     body: JSON.stringify({ 
//         title: 'NuevoPost',
//         body: 'Contenido del post',
//         userId: 1
//     })
// })
// .then(response => response.json())
// .then(data => console.log(data))    
// .catch(error => console.error('Error:', error));


// async function obtenerDatos() { // Corrige 'ontenerDatos' → 'obtenerDatos'
//     try {
//         let response = await fetch('https://jsonplaceholder.typicode.com/posts/3'); // Corrige el salto de línea después de 'await'
//         let data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error(error);
//     }
// }

// console.log('Datos obtenidos : ', obtenerDatos())

// // Utilizamos fetch api cuando necesitamos realizar solicitudes o peticiones http al navegador
// // Para interactiar cons apis resp(JSON placeholder, firebas, etc)

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(users => {
    const lista = document.getElementById('users');
    users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = 'Usuario: ' +user.name;
        lista.appendChild(li);
    });

})
.catch(error => console.error('Error:', error));
