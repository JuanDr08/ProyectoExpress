const passport = require('passport');
const express = require('express');
const router = express.Router();

// Manejadores de la autenticacion con google
const configPassportGoogleOAuth = require('../middlewares/googleOAuth.cjs');
const { googleAuthCallback } = require('../controllers/loginController.cjs')


configPassportGoogleOAuth(passport) // Configuramos la estrategia de autenticacion de google


router.get('/', (req, res, next) => {
    console.log(req.session)
    res.send('HOLA')
})

// router.post('/auth/user', express.urlencoded({ extended: true }), (req, res) => userController.verifyUser(req, res))

router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }))
router.get('/auth/google/callback', googleAuthCallback )
router.get('/si', (req,res) => {
    console.log(req.user)
})

router.get('/logout', (req, res)=>{
    req.logOut((err) => {
        if (err) {
            console.error('error', err)
        }
        console.log(req.session)
    })
})

module.exports = router;