const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const indexRouter = require('../../aplication/routes/indexRouter.cjs');
const { jsonParseErrorHandler } = require('../middlewares/errorHandling.cjs');
const { limiTotal } = require('../middlewares/rateLimit.cjs');

const createServer = () => {
    const app = express();
    const server = http.createServer(app);

    // Configurar Socket.io con CORS ( que hijuemadre dolorsito de cabeshita )
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
            // Emitir el mensaje a todos los usuarios
            // io.emit("recievedMessage", { texto: message, transmitter: 'cliente' }); -- esta parte de acá es la que estaba causando el reflejo de los mensajes duplicados en la pagina para el cliente
        });

        socket.on("disconnect", () => {
            console.log("Usuario desconectado");
        });
    });

    return { app, server, io }; // podemos regresar el objeto io en caso de que sea necesario usarlo más tarde
};

module.exports = createServer;
