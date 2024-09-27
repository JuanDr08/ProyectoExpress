const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const indexRouter = require('../../aplication/routes/indexRouter.cjs');
const { jsonParseErrorHandler } = require('../middlewares/errorHandling.cjs');
const { limiTotal } = require('../middlewares/rateLimit.cjs');

const createServer = () => {
    const app = express();
    const server = http.createServer(app);

    // Configurar Socket.io con CORS ( Que hijuemadre dolor de cabeza )
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

        socket.on("sendMessage", (message) => {
            console.log("Mensaje recibido:", message);
            io.emit("recievedMessage", message); // Mostrar a todos los usuarios
        });

        socket.on("disconnect", () => {
            console.log("Usuario desconectado");
        });
    });

    return { app, server };
};

module.exports = createServer;
