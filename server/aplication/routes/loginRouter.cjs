const passport = require('passport');
const express = require('express');
const router = express.Router();

// Manejadores de la autenticacion con google
const configPassportGoogleOAuth = require('../middlewares/GoogleOAuth.cjs');
const configPassportFacebookOAuth = require('../middlewares/FacebookOAuthStrategy.cjs')
const configPassportDiscordOAuth = require('../middlewares/DiscordOAuthStrategy.cjs')
const configPassportLocalOAuth = require('../middlewares/LocalOAuthStrategy.cjs')
const {loginGoogleAuthCallback, loginFacebookAuthCallback, loginDiscordAuthCallback, loginLocalAuthCallback } = require('../controllers/OAuthsController.cjs')


//configPassportGoogleOAuth(passport, 'login'); // Configuramos la estrategia de autenticacion de google
//configPassportFacebookOAuth(passport, 'login') // Configuramos la estrategia de autenticacion de facebook
//configPassportDiscordOAuth(passport, 'login') // Configuramos la estrategia de autenticacion de discord

// req.isAuthenticated() -- Metodo habilitado por passport para verificar si hay un logIn activo


// router.post('/auth/user', express.urlencoded({ extended: true }), (req, res) => userController.verifyUser(req, res))

router.get('/', (req,res) => res.status(400).json({msg: 'iniciar sesion'}))

router.get('/auth/google', (req,res,next) =>{
    configPassportGoogleOAuth(passport, 'login');
    next()
},passport.authenticate('google', { scope: ['profile', 'email'] }))
router.get('/auth/google/callback', loginGoogleAuthCallback )

router.get('/auth/facebook', (req, res, next) => {
    configPassportFacebookOAuth(passport, 'login')
    next()
},passport.authenticate('facebook', {scope: ['email']}))
router.get('/auth/facebook/callback', loginFacebookAuthCallback)

router.get('/auth/discord', (req, res, next) => {
    configPassportDiscordOAuth(passport, 'login')
    next()
},passport.authenticate('discord'))
router.get('/auth/discord/callback', loginDiscordAuthCallback)

router.post('/auth/ruraqmaki', express.json(), (req, res, next) => {
    configPassportLocalOAuth(passport);
    next();
}, passport.authenticate('local'), loginLocalAuthCallback);

module.exports = router;