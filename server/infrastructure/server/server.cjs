// Configuración y puesta en marcha del servidor Express.
const passport = require('passport');
const sessionGoogleOAuth = require('../middlewares/sessionOAuth.cjs');
const path = require('path');
const indexRouter = require('../../aplication/routes/indexRouter.cjs');
// const loginRouter = require('../../application/routes/loginRouter');
// const createAccountRouter = require('../../application/routes/createAccountRouter');
// const userRoutes = require('../../application/routes/userRoutes');
const productRoutes = require('../../aplication/routes/productRouter.cjs');
const cuponRoutes = require('../../aplication/routes/cuponRouter.cjs');
const { jsonParseErrorHandler } = require('../middlewares/errorHandling.cjs');
const { limiTotal } = require('../middlewares/rateLimit.cjs');
const express = require('express');
const workshopRoutes = require("../../aplication/routes/workshopRouter.cjs")
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const readline = require('readline'); // Importar readline

const ChatController = require("../../aplication/controllers/chatController.cjs")

const createServer = () => {
    const app = express();
    const server = http.createServer(app);

    // Configurar Socket.io con CORS
    const io = new Server(server, {
        cors: {
            origin: 'http://localhost:5173',
            methods: ['GET', 'POST'],
            credentials: true
        }
    });

    app.use(jsonParseErrorHandler);
    app.use(limiTotal);

    app.use('/', workshopRoutes);
    // app.use('/login', sessionGoogleOAuth, passport.initialize(), passport.session(), loginRouter);
    // app.use('/createAccount', createAccountRouter);
    // app.use('/users', userRoutes);
    app.use('/product', productRoutes);
    app.use('/cupon', cuponRoutes);
    app.use('/', indexRouter);

    // Configuración de Socket.io
    io.on("connection", (socket) => {
        console.log("Un usuario se ha conectado");

        // Escuchar mensajes del cliente
        socket.on("sendMessage", async(message) => {
            console.log("Mensaje recibido:", message);

            const userId = socket.id;

            await ChatController.handleMessage(userId, message);

            io.emit("recievedMessage", {texto: message.texto, transmitter: "server"})
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
