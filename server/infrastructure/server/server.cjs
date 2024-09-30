const express = require('express');
const passport = require('passport');
const sessionConfigPassport = require('../middlewares/sessionOAuthConf.cjs'); // Importamos la configuracion de la sesion que usara passport
const cors = require('cors');

const indexRouter = require('../../aplication/routes/indexRouter.cjs'); // Rutas
const registerRouter = require('../../aplication/routes/registerRouter.cjs')
const loginRouter = require('../../aplication/routes/loginRouter.cjs'); // Rutas

const { logOutController } = require('../../aplication/controllers/OAuthsController.cjs')

const { jsonParseErrorHandler } = require('../middlewares/errorHandling.cjs');
const { limiTotal } = require('../middlewares/rateLimit.cjs');


const createServer = () => {
    const app = express(); 
    app.use(cors({
        origin: 'http://localhost:5173',
        credentials: true
    }));
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
            let validRoutesUnProtected = ['/login', '/register', '/auth/check'];
            let isProtectedRoute = validRoutesUnProtected.some(route => req.originalUrl.startsWith(route));
            
            if (!req.isAuthenticated() && !isProtectedRoute) {
                console.log('Usuario no autenticado, redirigiendo.');
                return res.status(401).json({ authenticated: false, user: null, details: 'No hay usuario logueado' });
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

    return app;
};

module.exports = createServer;