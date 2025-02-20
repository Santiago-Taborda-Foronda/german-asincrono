// es un modulo que carga variables ,y evita poner informacion sensible
require('dotenv').config();

// es una libreria permite conectarse a un servidor y enviar correos
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // Cambia esto según tu proveedor SMTP
    port: 587, // 465 para SSL, 587 para TLS
    secure: false, // true para 465, false para otros puertos
    auth: {
        user: '1porcientoprogramming@gmail.com', // Tu correo SMTP
        pass: 'dybm ijcb qnez knix' // Tu contraseña o API Key
    }
});

const enviarCorreosMasivos = async (destinatarios, asunto, mensaje) => {
    // recorre la lista de destinatarios enviando a cada uno
    for (const destinatario of destinatarios) {
        try {
            await transporter.sendMail({
                from:`"Mi App" <1porcientoprogramming@gmail.com>`,
                to: destinatario,
                subject: asunto,
                text: mensaje,
                html:` <p>${mensaje}</p>`
      });
        console.log(' Correo enviado a: ${ destinatario} ');
    } catch (error) {
        console.error('❌ Error al enviar a ${ destinatario }', error);
    }
}
};

// Lista de correos de prueba
const emails = [ '1porcientoprogramming@gmail.com', 'nathyrodriguez018@gmail.com', 'osorioesteban762@gmail.com'];


enviarCorreosMasivos(emails, 'Prueba de Envío', 'Este es un mensaje de prueba.');