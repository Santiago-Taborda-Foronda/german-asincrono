// URL de las APIs
const apiOpenMeteo = "https://api.open-meteo.com/v1/forecast?latitude=6.25184&longitude=-75.56359&current_weather=true";
const apiWttrIn = "https://wttr.in/Medellín?format=j1";
const apiMetNo = "https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=6.25184&lon=-75.56359";

// Función para obtener datos de las APIs
async function obtenerClima() {
  try {
    const climaPromise1 = fetch(apiOpenMeteo).then(res => res.json());
    const climaPromise2 = fetch(apiWttrIn).then(res => res.json());
    const climaPromise3 = fetch(apiMetNo, { headers: { 'User-Agent': 'ClimaApp' } }).then(res => res.json());

    // Usamos Promise.race para obtener el clima de la API más rápida
    const clima = await Promise.race([climaPromise1, climaPromise2, climaPromise3]);

    console.log("Respuesta de la API seleccionada:", clima);

    // Mostrar el resultado de la API más rápida
    console.log("Clima actual en Medellín:");

    // Revisamos la estructura de las respuestas y mostramos un valor común
    if (clima.current_weather) {
      // Si la respuesta contiene 'current_weather', mostramos ese dato
      console.log(`Temperatura: ${clima.current_weather.temperature}°C`);
      console.log(`Condición: ${clima.current_weather.weathercode}`);
    } else if (clima.weather) {
      // Si la respuesta contiene 'weather', mostramos ese dato
      console.log(`Temperatura: ${clima.weather.current.temperature}°C`);
      console.log(`Condición: ${clima.weather.current.weather.description}`);
    } else if (clima.current_condition) {
      // Si la respuesta de 'wttr.in' tiene el campo 'current_condition'
      console.log(`Temperatura: ${clima.current_condition.temp}°C`);
      console.log(`Condición: ${clima.current_condition.weather_desc}`);
    } else if (clima.properties && clima.properties.timeseries && clima.properties.timeseries.length > 0) {
      // Si la respuesta de 'met.no' tiene el campo 'timeseries'
      const dataMetNo = clima.properties.timeseries[0].data;
      console.log(`Temperatura: ${dataMetNo.instant.details.air_temperature}°C`);
      console.log(`Condición: Desconocida (Met.no no proporciona descripción de condiciones de clima)`);
    } else {
      console.log("No se pudo obtener el clima.");
    }
  } catch (error) {
    console.error("Error al obtener el clima:", error);
  }
}

// Llamar a la función para obtener el clima
obtenerClima();