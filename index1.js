// const esperar = (milisegundos) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Promesa Cumplida");
//         }, milisegundos);
//     });
// };
//     esperar(5000).then((mensaje) => {
//     console.log(mensaje); 
//     }).catch((error) => {
//     console.error(error);
//     });

//     // Crear una promesa que se rechace si un número es menor a 0.5. Manejar el error con .catch() e imprimir el mensaje "Promesa rechazada" en ese caso. 

//     // Simular un flujo de pasos donde cada paso tarda 1 segundo en completarse. Usar tres promesas y encadenarlas con .then() para que se ejecuten en orden.

//     const sumar = (a, b) => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve( a + b);
//             }, 1000)
        
//         });
//     };

// sumar(3, 5).then((resultado) => {
// console.log(`El resultado es:${resultado}`); // El resultado es: 8
// return sumar(resultado, 10); //Nueva promesa
// })
// .then((nuevoResultado) => {
// console.log(`El nuevo resultado es:
// ${nuevoResultado}`); // El nuevoresultado es: 18
// })
// .then((ultimoResultado) => {
//     con
// })
// .catch((error) => {
// console.error(error);
// });

// 4. Usar Promise.all()
// Crear tres promesas que se resuelvan en diferentes tiempos (por ejemplo, 1s, 2s, 3s). Usar Promise.all() para esperar a que todas se resuelvan e imprimir los resultados en un arreglo.

// const promesa1 = new Promise((resolve)=> setTimeout(resolve, 1000, 5));
// const promesa2 = new Promise((resolve)=> setTimeout(resolve, 2000, 10));
// const promesa3 = new Promise((resolve)=> setTimeout(resolve, 3000, 20));
// Promise.all([promesa1, promesa2,promesa3]).then((resultados) => {
//     console.log(resultados); // [5, 10,15]
//     });

//     // Usar Promise.race() Crear dos promesas: una se resuelve en 2 segundos y otra en 5 segundos. Usar Promise.race() para determinar cuál se resuelve primero y mostrar el resultado.
   
//     const promesaLenta = new Promise((resolve) => {
//     setTimeout(() => resolve("Promesa lenta resuelta en 3 segundos"), 2000);
//     });

//     const promesaMuyLenta = new Promise((resolve) => {

//     setTimeout(() => resolve("Promesa muy lenta resuelta en 5 segundos"), 5000);
//     });
//     Promise.race([promesaLenta, promesaMuyLenta]).then((resultado) => {
//     console.log(resultado); // "Promesa rápida resuelta en 1 segundo"
//     })
//     .catch((error) => {
//     console.error(error);
//     });    

//  Crear una Función Asíncrona Simple
// Escribir una función asíncrona que devuelva un mensaje "Hola, Mundo" y consumirla con .then() o await.
// async function obtenerMensaje(){
//     return("Hola Mundo")
// }

// obtenerMensaje().then((mensaje) => {
//     console.log(mensaje)
// })

// Uso de await con una Promesa
// Crea una función asíncrona que utilice await para esperar una promesa que resuelve en 3 segundos y luego imprime "Proceso terminado".

// async function promesaEntregar() {
//     return new Promise ((resolve, reject) => {
//         function esperar () {
//             resolve("Mensaje Entregado")
//             setTimeout(esperar, 3000)
//         }
//     }) 
// }

// async function recibirPromesa() {
//     console.log("Iniciando entrega")
//     const entrega = await promesaEntregar()
//     console.log("La Promesa se a entregado despues de 3 segundo", entrega)    
// }
// recibirPromesa()

// Practica promesas .all 

// const promesa1 = Promise.resolve(5);
// const promesa2 = new Promise ((resolve) => setTimeout(resolve, 5000, 10));
// const promesa3 = Promise.resolve(15)
// Promise.all([promesa1, promesa2, promesa3]).then((mensaje) => 
//     console.log(mensaje));


// const esperar = (milisegundos) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(`Se debio esperar ${milisegundos} ms`)
//         },milisegundos)
//     })
// }
// esperar(5000).then((mensaje) => {
//     console.log(mensaje)
// }).catch((Error) => {
//     console.error(Error)
// })

const promesaLenta  = new Promise((resolve) => {
    setTimeout(() => resolve("Promesa Lenta en 3 segundos"),3000)
})

const promesaRapida  = new Promise((resolve) => {
    setTimeout(() => resolve("Promesa rapida en 1 segundo"),1000)
})

const promesaMuyLenta  = new Promise((resolve) => {
    setTimeout(() => resolve("Promesa Muy lenta en 5 segundo"),5000)
})
Promise.race([promesaRapida, promesaLenta, promesaMuyLenta]).then((resultado) =>
    console.log(resultado))
.catch((error) =>{
    console.error((error))
})