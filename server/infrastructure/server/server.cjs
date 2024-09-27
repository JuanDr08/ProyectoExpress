const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const indexRouter = require('../../aplication/routes/indexRouter.cjs');
const { jsonParseErrorHandler } = require('../middlewares/errorHandling.cjs');
const { limiTotal } = require('../middlewares/rateLimit.cjs');
const readline = require('readline'); // Importar readline

const createServer = () => {
    const app = express();
    const server = http.createServer(app);

    // Configurar Socket.io con CORS -- q dolorcito de cabeza
    const io = new Server(server, {
        cors: {
            origin: 'http://localhost:5173',
            methods: ['GET', 'POST'],
            credentials: true
        }
    });

    app.use(jsonParseErrorHandler);
    app.use(limiTotal);
    app.use('/', indexRouter);

    // Configuración de Socket.io
    io.on("connection", (socket) => {
        console.log("Un usuario se ha conectado");

        // Escuchar mensajes del cliente
        socket.on("sendMessage", (message) => {
            console.log("Mensaje recibido:", message);
        });

        socket.on("disconnect", () => {
            console.log("Usuario desconectado");
        });
    });

    // Configuración de readline para enviar mensajes desde la terminal
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.on('line', (input) => {
        // Emitir el mensaje a todos los usuarios conectados
        io.emit("recievedMessage", { texto: input, transmitter: 'server' });
        console.log(`Mensaje enviado desde la terminal: ${input}`);
    });

    return { app, server, io }; // Regresamos el objeto io
};

module.exports = createServer;
