const express = require('express');
const cors = require('cors');
const app = express();
const ConnectToDatabase = require('../server/infrastructure/database/database.cjs');
const createServer = require('./infrastructure/server/server.cjs');

const startApp = async () => {
    const { app: expressApp, server, io } = createServer();

    expressApp.use((req, res, next) => {
        res.status(404).json({ message: "No tiene autorización" });
        next();
    });

    const PORT = process.env.EXPRESS_PORT || 3000;

    server.listen(PORT, () => {
        console.log(`Servidor escuchando en http://${process.env.EXPRESS_HOST}:${PORT}`);

        // Ejemplo de enviar un mensaje desde el servidor cada 5 segundos
        // setInterval(() => {
        //     io.emit('recievedMessage', { texto: 'mensaje del servidor', transmitter: 'server' });
        // }, 5000);
    });
};

startApp();
