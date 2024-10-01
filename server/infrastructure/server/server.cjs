// Configuración y puesta en marcha del servidor Express.
const express = require('express');
const passport = require('passport');
const http = require('http');
const path = require('path');
const cors = require('cors');

//const sessionGoogleOAuth = require('../middlewares/sessionOAuth.cjs');
const sessionConfigPassport = require('../middlewares/sessionOAuthConf.cjs'); // Importamos la configuracion de la sesion que usara passport

const productRoutes = require('../../aplication/routes/productRouter.cjs');
const cuponRoutes = require('../../aplication/routes/cuponRouter.cjs');
const indexRouter = require('../../aplication/routes/indexRouter.cjs'); // Rutas
const registerRouter = require('../../aplication/routes/registerRouter.cjs')
const loginRouter = require('../../aplication/routes/loginRouter.cjs'); // Rutas
const workshopRoutes = require("../../aplication/routes/workshopRouter.cjs")

const { logOutController } = require('../../aplication/controllers/OAuthsController.cjs')

const { jsonParseErrorHandler } = require('../middlewares/errorHandling.cjs');
const { limiTotal } = require('../middlewares/rateLimit.cjs');
const { Server } = require('socket.io');
const readline = require('readline'); // Importar readline

const ChatController = require("../../aplication/controllers/chatController.cjs")

const createServer = () => {
    const app = express();
    app.use(cors({
        origin: 'http://localhost:5173',
        credentials: true
    }));
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

    
    /*
    Las configuraciones para las sesiones de passport las pongo en la ruta raiz, ya que de ella trascende todo el resto de rutas que va despues del puerto, por lo que cada
    una de ellas estará usando y tendra habilitadas todas las opciones que ofrece passport session
    sessionConfigPassport -- Se configura el como passport guardará las sessiones que vaya creando
        passport.initialize() & passport.session() - Permiten a passport crear una session 'vacia', la cual se logra ver una cookie en el navegador web
        en la cual, posteriormente almacenará la informacion del usuario una vez es autenticado
    */

    app.use('/', sessionConfigPassport, passport.initialize(), passport.session(), (req, res, next) => {
        let validRoutesUnProtected = ['/login', '/register', '/auth', '/prueba'];
        let isProtectedRoute = validRoutesUnProtected.some(route => req.originalUrl.startsWith(route));
        
        if (!req.isAuthenticated() && !isProtectedRoute) {
            return res.status(401).json({ authenticated: false, user: null, details: 'No hay usuario logueado', redirect: '/' });
        }
        
        next();
    }, indexRouter);

    app.use('/register', (req, res, next) => {
        if (req.isAuthenticated()) return res.status(400).json({authenticated: true, user: req.user, details: 'Hay un usuario logueado, cierre sesion para registrarse'})
        next()
    }, registerRouter);
    app.use('/login', (req, res, next) => {
        if (req.isAuthenticated()) return res.status(400).json({authenticated: true, user: req.user, details: 'Hay un usuario logueado, cierre sesion para loguearse de nuevo'})
        next()
    }, loginRouter);
    app.use('/logout', logOutController)

    app.use('/workshops', workshopRoutes);
    app.use('/product', productRoutes);
    app.use('/cupon', cuponRoutes);
    
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
