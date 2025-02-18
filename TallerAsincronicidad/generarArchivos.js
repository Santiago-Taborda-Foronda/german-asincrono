const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");
const prompt = require("prompt-sync")();

// Función para generar un archivo de manera asíncrona
const generarArchivo = async (nombre, contenido) => {
    const ruta = path.join(__dirname, "archivos", nombre);
    await fsPromises.writeFile(ruta, contenido, "utf8");
};

// Función principal para generar múltiples archivos
const generarArchivos = async () => {
    const numArchivos = parseInt(prompt("Ingrese la cantidad de archivos a generar: "), 10);
    const contenido = prompt("Ingrese el contenido de los archivos: ");
    
    if (!fs.existsSync("archivos")) {
        fs.mkdirSync("archivos");
    }
    
    const promesas = [];
    for (let i = 1; i <= numArchivos; i++) {
        const nombreArchivo = `archivo_${i}.txt`;
        promesas.push(generarArchivo(nombreArchivo, contenido));
    }
    
    await Promise.all(promesas);
    console.log(`${numArchivos} archivos generados exitosamente en la carpeta 'archivos'.`);
};

generarArchivos().catch(console.error);