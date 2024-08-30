/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

// Configura tu servicio de correo
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'Cantaresbags@gmail.com', // Reemplaza con tu correo electrónico
        pass: 'Cantaresbags.Cb', // Reemplaza con tu contraseña de correo electrónico
    },
});

// Función para enviar el correo al cliente
exports.sendOrderConfirmation = functions.https.onCall((data, context) => {
    const { customerEmail, customerName, orderDetails, deliveryOption, address, totalAmount } = data;

    // Correo al cliente
    const mailOptionsToCustomer = {
        from: 'Cantares Bags Cantaresbags@gmail.com',
        to: customerEmail,
        subject: 'Gracias por tu compra en Cantares Bags',
        text: `Muchas Gracias por Confiar en Cantares Bags, en breves nos estaremos comunicando con vos para informarte sobre el estado de tu pedido.\n\n- Personal de Cantares Bags`,
    };

    // Correo al equipo de trabajo
    const mailOptionsToWork = {
        from: 'Cantares Bags <tu-email@gmail.com>',
        to: 'Cantaresbagspedidos@gmail.com',
        subject: `Nuevo pedido de ${customerName}`,
        text: `
            Detalles del pedido:
            ---------------------
            Nombre: ${customerName}
            Email: ${customerEmail}
            Teléfono: ${data.phone}
            Dirección: ${address}
            Localidad: ${data.locality}
            Opción de entrega: ${deliveryOption}

            Productos:
            ${orderDetails.map(product => `
            - ${product.img} ${product.title}: ${product.qty} x $${product.price}`).join('\n')}

            Total a pagar: $${totalAmount}
        `,
    };

    // Enviar ambos correos
    return Promise.all([
        transporter.sendMail(mailOptionsToCustomer),
        transporter.sendMail(mailOptionsToWork),
    ])
    .then(() => {
        return { success: true };
    })
    .catch(error => {
        console.error('Error al enviar correos:', error);
        return { success: false, error: error.message };
    });
});

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
