/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

// Configuración de Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: functions.config().email.user, // Correo electrónico
        pass: functions.config().email.pass  // Contraseña de aplicación o contraseña de cuenta
    }
});

exports.sendOrderEmails = functions.https.onCall((data, context) => {
  const { customerEmail, adminEmail, orderDetails } = data;

  // Validaciones básicas
  if (!customerEmail || !adminEmail || !orderDetails) {
    return { success: false, error: 'Datos incompletos' };
  }

  const { name, address, email, phone, city, items, total, receipt, deliveryOption } = orderDetails;
  if (!name || !address || !email || !phone || !city || !items || !total || !receipt) {
    return { success: false, error: 'Datos del pedido incompletos' };
  }

  // Correo para el cliente
  const mailOptionsClient = {
    from: functions.config().email.user,
    to: customerEmail,
    subject: 'Gracias por tu compra en Cantares Bags',
    text: 'Muchas gracias por confiar en Cantares Bags, en breves le van a estar brindando la información sobre su pedido, saludos. - Staff de Cantares Bags',
  };

  // Correo para la tienda
  const mailOptionsAdmin = {
    from: functions.config().email.user,
    to: adminEmail,
    subject: 'Nuevo pedido en Cantares Bags',
    html: `
      <h3>Datos del Cliente:</h3>
      <p>Nombre y Apellido: ${name}</p>
      <p>Dirección: ${address}</p>
      <p>Correo Electrónico: ${email}</p>
      <p>Teléfono: ${phone}</p>
      <p>Localidad: ${city}</p>
      <p>Opción de Entrega: ${deliveryOption === 'pickup' ? 'Retiro por depósito' : 'Envío con vía cargo'}</p>
      <h3>Pedido Detallado:</h3>
      <ul>
        ${items.map(item => `
          <li>
            <img src="${item.img}" alt="${item.title}" width="50" />
            <p>${item.title} - ${item.qty} x $${item.price} = $${item.subtotal}</p>
          </li>`).join('')}
      </ul>
      <h3>Total a Pagar: $${total}</h3>
      <h3>Comprobante de Pago:</h3>
      <img src="${receipt}" alt="Comprobante de Pago" />
    `,
  };

  // Enviar ambos correos
  return Promise.all([
    transporter.sendMail(mailOptionsClient),
    transporter.sendMail(mailOptionsAdmin),
  ])
  .then(() => {
    return { success: true };
  })
  .catch(error => {
    console.error('Error enviando los correos:', error);
    return { success: false, error: error.message };
  });
});





















// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
