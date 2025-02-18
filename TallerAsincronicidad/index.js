
// 1. Escribir una promesa que resuelva después de 2 segundos con el mensaje "Promesa cumplida". Luego, consumirla usando .then() para imprimir el mensaje en consola. 

// setTimeout(() =>{
//     const miPromesa = new Promise((resolve, reject) => {
//         const exito = true;
//         if (exito) {
//             resolve("¡Promesa cumplida!");
//         } else {
//             reject(new Error="Hay un error");
//         }
//     });
    
//     // Usando la promesa
//     miPromesa.then((valor) => {
//         console.log(valor);
//     }).catch((error) => {
//         console.error(error);
//     });
    
//     console.log("Hola Vank");

// })

// 2. Manejo de errores
// const esperar = (milisegundos) => {
//     return new Promise((resolve) => {
//         setTimeout(() => { 
//             resolve("Promesa Cumplida");
//     }, milisegundos);
//     });
//     };
//     esperar(2000).then((mensaje) => {
//     console.log(mensaje); 
//     })
//     .catch((error) => {
//     console.error(error);
// });

// 3. Simular un flujo de pasos donde cada paso tarda 1 segundo en completarse. Usar tres promesas y encadenarlas con .then() para que se ejecuten en orden.

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

// 4. Crear tres promesas que se resuelvan en diferentes tiempos (por ejemplo, 1s, 2s, 3s). Usar Promise.all() para esperar a que todas se resuelvan e imprimir los resultados en un arreglo.
// const promesa1 = new Promise((resolve)=> setTimeout(resolve, 1000, 5));
// const promesa2 = new Promise((resolve)=> setTimeout(resolve, 2000, 10));
// const promesa3 = new Promise((resolve)=> setTimeout(resolve, 3000, 20));
// Promise.all([promesa1, promesa2,promesa3]).then((resultados) => {
//     console.log(resultados); // [5, 10,15]
//    });

// 5. Crear dos promesas: una se resuelve en 2 segundos y otra en 5 segundos. Usar Promise.race() para determinar cuál se resuelve primero y mostrar el resultado.

// const promesaLenta  = new Promise((resolve) => {
//     setTimeout(() => resolve("Promesa Lenta en 5 segundos"),5000)
// })

// const promesaRapida  = new Promise((resolve) => {
//     setTimeout(() => resolve("Promesa rapida en 2 segundo"),2000)
// })

// Promise.race([promesaRapida, promesaLenta]).then((resultado) =>
//     console.log(resultado))
// .catch((error) =>{
//     console.error((error))
// })

// 6. Crear una Función Asíncrona Simple
// Escribir una función asíncrona que devuelva un mensaje "Hola, Mundo" y consumirla con .then() o await.

// async function obtenerMensaje(){
//     return("Hola Mundo")
// }
    
// obtenerMensaje().then((mensaje) => {
//     console.log(mensaje)
// })

// 7. Uso de await con una Promesa
// Crea una función asíncrona que utilice await para esperar una promesa que resuelve en 3 segundos y luego imprime "Proceso terminado".

// function simularTarea(){
//     return new Promise((resolve, reject) => {
//     function pendiente() {
//     resolve("Proceso terminado");
//     }
//     setTimeout(pendiente, 3000)
//     })
//     }
//     async function tareaAsincrona() {
//     console.log("Esperando promesa");
//     const entrega = await simularTarea();
//     console.log(entrega, " Despues de 3 segundos");
//     }
//     tareaAsincrona();

// 8. Procesar Datos en Serie con await
// Crear una función que procese una lista de nombres (en un arreglo) uno por uno. Usa await para simular un retraso de 1 segundo entre cada nombre procesado. Implementar la función delay y el arreglo de nombres.

// function delay(milisegundos) {
//     return new Promise(resolve => setTimeout(resolve, milisegundos));
//   }
  
//   async function procesarNombres(nombres) {
//     for (const nombre of nombres) {
//       await delay(1000); 
//       console.log(`Procesado: ${nombre}`);
//     }
//   }
  
//   const nombres = ["Ana", "Carlos", "Luis", "Marta"];
//   procesarNombres(nombres);
  
// 9. Promise.all en una Función Asíncrona
// Escribir una función asíncrona que use Promise.all para esperar varias promesas. Por ejemplo, realizar tres búsquedas simuladas (con un retraso aleatorio) y mostrar los resultados juntos.

// Función que simula un retraso aleatorio entre 1 y 3 segundos
// function buscarSimulada(id) {
//     const retraso = Math.floor(Math.random() * 3000) + 1000; 
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve(`Resultado de la búsqueda ${id}`);
//       }, retraso);
//     });
//   }
  
//   async function realizarBúsquedas() {
//     try {
//       const resultados = await Promise.all([
//         buscarSimulada(1),
//         buscarSimulada(2),
//         buscarSimulada(3)
//       ]);
      
//       console.log('Resultados de las búsquedas:');
//       resultados.forEach((resultado, index) => {
//         console.log(`${index + 1}: ${resultado}`);
//       });
//     } catch (error) {
//       console.error('Hubo un error al realizar las búsquedas:', error);
//     }
//   }
//   realizarBúsquedas();
  