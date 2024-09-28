const passport = require('passport');
const express = require('express');
const router = express.Router();

// Manejadores de la autenticacion con google
const configPassportGoogleOAuth = require('../middlewares/googleOAuth.cjs');
const configPassportFacebookOAuth = require('../middlewares/facebookOAuthStrategy.cjs')
const configPassportDiscordOAuth = require('../middlewares/discordOAuthStrategy.cjs')
const { googleAuthCallback, facebookAuthCallback, discordAuthCallback } = require('../controllers/loginController.cjs')


configPassportGoogleOAuth(passport) // Configuramos la estrategia de autenticacion de google
configPassportFacebookOAuth(passport)
configPassportDiscordOAuth(passport)

// req.isAuthenticated() -- Metodo habilitado por passport para verificar si hay un logIn activo


// router.post('/auth/user', express.urlencoded({ extended: true }), (req, res) => userController.verifyUser(req, res))

router.get('/', (req,res) => res.status(400).json({msg: 'Intento de acceso a ruta protegida sin autenticacion, debe iniciar sesion'}))

router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }))
router.get('/auth/google/callback', googleAuthCallback )

router.get('/auth/facebook', passport.authenticate('facebook', {scope: ['email']}))
router.get('/auth/facebook/callback', facebookAuthCallback)

router.get('/auth/discord', passport.authenticate('discord'))
router.get('/auth/discord/callback', discordAuthCallback)

module.exports = router;