function llamarGemini(prompt) {
    const API_KEY = 'AIzaSyCJdWwQvUCOLZw_0Gpz9wfe_SBKmoUDEQc';
    const URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;
  
    return fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contents: [{
          parts: [
            { text: prompt }
          ]
        }]
      })
    })
    .then(respuesta => {
      if (!respuesta.ok) {
        throw new Error(`Error HTTP: ${respuesta.status}`);
      }
      return respuesta.json();
    })
    .then(datos => {
      const textoGenerado = datos.candidates[0].content.parts[0].text;
      
      console.log(textoGenerado);
      return textoGenerado;
    })
    .catch(error => {
      console.error('Error al llamar a la API de Gemini:', error);
    });
  }
  
  llamarGemini(`hablame de la segunda guerra mundial`)
    .then(respuesta => {
      if (respuesta) {
      }
    });