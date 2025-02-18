require("dotenv").config();
const axios = require("axios");

const API_KEY = process.env.GEMINI_API_KEY;
const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateText";

/**
 * Función para generar un resumen con la API de Gemini
 * @param {string} texto - El texto a resumir
 */
const generarResumen = async (texto) => {
    try {
        const response = await axios.post(`${API_URL}?key=${API_KEY}`, {
            prompt: { text: `Resumir el siguiente texto en pocas palabras:\n\n${texto}` },
            temperature: 0.7
        });

        const resumen = response.data?.candidates?.[0]?.output || "No se pudo generar el resumen.";
        console.log("Resumen:", resumen);
    } catch (error) {
        console.error("Error al generar el resumen:", error.response?.data || error.message);
    }
};

// Prueba con un texto de ejemplo
const textoEjemplo = "La inteligencia artificial está revolucionando la manera en que interactuamos con la tecnología, permitiendo automatizar tareas y mejorar la eficiencia en diversos sectores.";
generarResumen(textoEjemplo);
