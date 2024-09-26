const express = require('express');
const passport = require('passport');
const sessionGoogleOAuth = require('../middlewares/sessionOAuth.cjs');
const indexRouter = require('../../aplication/routes/indexRouter.cjs');
const loginRouter = require('../../aplication/routes/loginRouter.cjs');
const { jsonParseErrorHandler } = require('../middlewares/errorHandling.cjs');
const { limiTotal } = require('../middlewares/rateLimit.cjs');


const createServer = () => {
    const app = express();
    
    app.use(jsonParseErrorHandler);
    app.use(limiTotal);
  
    app.use('/',  sessionGoogleOAuth, passport.initialize(), passport.session(),(req, res, next) => {
        console.log(req.session, 'login') 
        next()
    } , indexRouter);
    app.use('/login', sessionGoogleOAuth, passport.initialize(), passport.session(), loginRouter);
    app.use('/si', (req, res, next) => {
        console.log(req, req.session)
        next()
    })
    return app;
};

module.exports = createServer;