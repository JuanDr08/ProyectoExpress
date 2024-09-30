const passport = require('passport');
const express = require('express');
const router = express.Router();

// Manejadores de la autenticacion con google
const configPassportGoogleOAuth = require('../middlewares/GoogleOAuth.cjs');
const configPassportFacebookOAuth = require('../middlewares/FacebookOAuthStrategy.cjs')
const configPassportDiscordOAuth = require('../middlewares/DiscordOAuthStrategy.cjs')
const {loginGoogleAuthCallback, loginFacebookAuthCallback, loginDiscordAuthCallback } = require('../controllers/OAuthsController.cjs')



//configPassportGoogleOAuth(passport, 'register') // Configuramos la estrategia de autenticacion de google
//configPassportFacebookOAuth(passport, 'register') // Configuramos la estrategia de autenticacion de facebook
//configPassportDiscordOAuth(passport, 'register') // Configuramos la estrategia de autenticacion de discord

// req.isAuthenticated() -- Metodo habilitado por passport para verificar si hay un logIn activo


// router.post('/auth/user', express.urlencoded({ extended: true }), (req, res) => userController.verifyUser(req, res))

router.get('/', (req,res) => res.status(400).json({msg: 'Cree una cuenta'}))

router.get('/auth/google', (req, res, next) => {
    configPassportGoogleOAuth(passport, 'register') 
    next()
},passport.authenticate('google', { scope: ['profile', 'email'] }))
router.get('/auth/google/callback', loginGoogleAuthCallback )

router.get('/auth/facebook', (req, res, next) =>{
    configPassportFacebookOAuth(passport, 'register')
    next()
},passport.authenticate('facebook', {scope: ['email']}))
router.get('/auth/facebook/callback', loginFacebookAuthCallback)

router.get('/auth/discord', (req, res, next) => {
    configPassportDiscordOAuth(passport, 'register')
    next()
},passport.authenticate('discord'))
router.get('/auth/discord/callback', loginDiscordAuthCallback)

module.exports = router;