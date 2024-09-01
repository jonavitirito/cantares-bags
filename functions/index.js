/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const functions = require('firebase-functions');
const cors = require('cors')({ origin: true });
const nodemailer = require('nodemailer');

const { google } = require('googleapis');

const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
    '82964783162-2jlhu8sgssvj8tqq44btgpvmp4gs03ba.apps.googleusercontent.com', // Reemplaza con tu Client ID
    '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', // Reemplaza con tu Client Secret
    'https://developers.google.com/oauthplayground' // Redireccionamiento autorizado
);

oauth2Client.setCredentials({
    refresh_token: '1//04kERf8W6nk6-CgYIARAAGAQSNwF-L9Ir6ORlJ8S8eGUzMYg7OaAm2R8Y__UOCtJZ3nrLyH4AuJ3IcI2KhtsyI0QfIVNevS1YTeE' // Reemplaza con tu Refresh Token
});

const accessToken = oauth2Client.getAccessToken();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: 'your-email@gmail.com', // Tu correo electrónico de Gmail
        clientId: '82964783162-2jlhu8sgssvj8tqq44btgpvmp4gs03ba.apps.googleusercontent.com',
        clientSecret: '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',
        refreshToken: '1//04kERf8W6nk6-CgYIARAAGAQSNwF-L9Ir6ORlJ8S8eGUzMYg7OaAm2R8Y__UOCtJZ3nrLyH4AuJ3IcI2KhtsyI0QfIVNevS1YTeE',
        accessToken: accessToken
    }
});

const mailOptions = {
    from: 'Cantaresbags@gmail.com',
    to: 'jona.vitiritti@gmail.com',
    subject: 'Test Email with OAuth2',
    text: 'Hello, this is a test email sent using OAuth2!'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Error sending email:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});

exports.sendOrderConfirmation = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        try {
            console.log('Request Headers:', req.headers);
            console.log('Request Body:', req.body);

            const { customerEmail, orderDetails } = req.body;

            if (!customerEmail || !orderDetails) {
                console.error('Missing required fields:', { customerEmail, orderDetails });
                return res.status(400).send('Missing required fields');
            }

            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'Cantaresbags@gmail.com',
                    pass: 'ntzh sixn yclq akih'
                }
            });

            const mailOptions = {
                from: 'Cantaresbags@gmail.com',
                to: customerEmail,
                subject: 'Order Confirmation',
                text: `Order Details: ${JSON.stringify(orderDetails)}`
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error('Error sending email:', error);
                    return res.status(500).send('Error sending email');
                }
                console.log('Email sent:', info.response);
                res.status(200).send('Order confirmation sent');
            });
        } catch (error) {
            console.error('Error processing request:', error);
            res.status(500).send('Internal Server Error');
        }
    });
});


















// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
