const passport = require('passport');
const express = require('express');
const router = express.Router();

// Manejadores de la autenticacion con google
const configPassportGoogleOAuth = require('../middlewares/googleOAuth.cjs');
const { googleAuthCallback } = require('../controllers/loginController.cjs')


configPassportGoogleOAuth(passport) // Configuramos la estrategia de autenticacion de google

// req.isAuthenticated() -- Metodo habilitado por passport para verificar si hay un logIn activo


// router.post('/auth/user', express.urlencoded({ extended: true }), (req, res) => userController.verifyUser(req, res))

router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }))
router.get('/auth/google/callback', googleAuthCallback )

module.exports = router;