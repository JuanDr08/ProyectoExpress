const express = require('express');
const passport = require('passport');
const sessionConfigPassport = require('../middlewares/sessionOAuthConf.cjs'); // Importamos la configuracion de la sesion que usara passport

const indexRouter = require('../../aplication/routes/indexRouter.cjs'); // Rutas
const loginRouter = require('../../aplication/routes/loginRouter.cjs'); // Rutas

const { logOutController } = require('../../aplication/controllers/loginController.cjs')

const { jsonParseErrorHandler } = require('../middlewares/errorHandling.cjs');
const { limiTotal } = require('../middlewares/rateLimit.cjs');


const createServer = () => {
    const app = express();
    
    app.use(jsonParseErrorHandler);
    app.use(limiTotal);

    /*
        Las configuraciones para las sesiones de passport las pongo en la ruta raiz, ya que de ella trascende todo el resto de rutas que va despues del puerto, por lo que cada
        una de ellas estará usando y tendra habilitadas todas las opciones que ofrece passport session
        sessionConfigPassport -- Se configura el como passport guardará las sessiones que vaya creando
        passport.initialize() & passport.session() - Permiten a passport crear una session 'vacia', la cual se logra ver una cookie en el navegador web
        en la cual, posteriormente almacenará la informacion del usuario una vez es autenticado
    */
    app.use('/', sessionConfigPassport, passport.initialize(), passport.session(), indexRouter);
    app.use('/login', loginRouter);
    app.use('/logout', logOutController)

    return app;
};

module.exports = createServer;