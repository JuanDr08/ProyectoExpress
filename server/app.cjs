const express = require('express');
const cors = require('cors');
const app = express();
// const https = require('https');
// const fs = require('fs');
const ConnectToDatabase = require('../server/infrastructure/database/database.cjs');
const createServer = require('./infrastructure/server/server.cjs');

const startApp = async () => {
    // Conectar a la base de datos si es necesario
    // let connectToDatabase = new ConnectToDatabase();
    // await connectToDatabase.connectOpen();

    const { app: expressApp, server } = createServer();

    expressApp.use((req, res, next) => {

        res.status(404).json({ message: "No tiene autorización" });
        next();
    });

    const PORT = process.env.EXPRESS_PORT || 3000;

    server.listen(PORT, () => console.log(`Servidor escuchando en http://${process.env.EXPRESS_HOST}:${PORT}`));
};

startApp();
