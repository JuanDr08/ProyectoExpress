// Configuración y puesta en marcha del servidor Express.
const express = require('express');
const passport = require('passport');
const sessionGoogleOAuth = require('../middlewares/sessionOAuth.cjs');
const path = require('path');
const indexRouter = require('../../aplication/routes/indexRouter.cjs');
// const loginRouter = require('../../application/routes/loginRouter');
// const createAccountRouter = require('../../application/routes/createAccountRouter');
// const userRoutes = require('../../application/routes/userRoutes');
// const productRoutes = require('../../application/routes/productRoutes');
const { jsonParseErrorHandler } = require('../middlewares/errorHandling.cjs');
const { limiTotal } = require('../middlewares/rateLimit.cjs');

const currentDirectory = process.cwd();
let EXPRESS_STATIC = currentDirectory + '/src'

const createServer = () => {
    const app = express();
    
    app.use(jsonParseErrorHandler);    
    app.use(limiTotal);
    app.use('/css', express.static(path.join(EXPRESS_STATIC, 'css')));
    app.use('/js', express.static(path.join(EXPRESS_STATIC, 'js')));
    app.use('/storage', express.static(path.join(currentDirectory, 'public/img')));
  
    app.use('/', indexRouter);
    // app.use('/login', sessionGoogleOAuth, passport.initialize(), passport.session(), loginRouter);
    // app.use('/createAccount', createAccountRouter);
    // app.use('/users', userRoutes);
    // app.use('/home', productRoutes);
    return app;
};

module.exports = createServer;