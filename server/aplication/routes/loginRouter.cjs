const passport = require('passport');
// const configPassportGoogleOAuth = require('../middlewares/googleOAuth');
const authController = require('../controllers/loginController.cjs');
const express = require('express');
const path = require('path');
const router = express.Router();
const UserController = require('../controllers/userController.cjs');
const userController = new UserController();

// configPassportGoogleOAuth(passport)




// router.post('/auth/user', express.urlencoded({ extended: true }), (req, res) => userController.verifyUser(req, res))

// router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }))
// router.get('/auth/google/callback',  authController.googleAuthCallback)


module.exports = router;