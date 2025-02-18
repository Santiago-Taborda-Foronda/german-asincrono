//DEFINICION DE UNA PROMESA



// Escribir una promesa que resuelva después de 2 segundos con el mensaje "Promesa cumplida". Luego, consumirla usando .then() para imprimir el mensaje en consola. 

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

const esperar = (milisegundos) => {
    return new Promise((resolve) => 
        {setTimeout(() => {
        resolve("Promesa Cumplida");
    }, milisegundos);
    });
    };
    esperar(2000).then((mensaje) => {
    console.log(mensaje); 
    })
    .catch((error) => {
    console.error(error);
    });

