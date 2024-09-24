// Define las rutas de la aplicación y mapea las URLs a los controladores.
const express = require('express');
const UserController = require('../controllers/userController.cjs');
const UserValidator = require('../validator/userValidator.cjs');
const { auth, authCookie } = require('../middlewares/authenticationToken.cjs');
const sessionAuth = require('../middlewares/sessionLogin.cjs');
const { versionMiddleware } = require('../middlewares/version.cjs');
const cookieParser = require('cookie-parser');

const router = express.Router({ mergeParams: true });
const userController = new UserController();
const userValidator = new UserValidator();

// router.get('/:id', auth, userValidator.validateUserId(), (req, res) => userController.getUser(req, res));
// router.get('/search', auth, (req, res) => userController.searchUsers(req, res));

// router.post('/', userValidator.validateUserData(), express.json(), (req, res) => userController.createUser(req, res));
// router.post('/login', versionMiddleware("1.1.0"), express.json(), sessionAuth,  userValidator.validateUserLogin(), (req, res) => userController.verifyUser(req, res))
// router.post('/login', versionMiddleware("1.0.0"), express.json(), cookieParser(), userValidator.validateUserLogin(), (req, res) => userController.verifyUserCookies(req, res))

// router.put('/:id', auth, userValidator.validateUserUpdateDataById(), express.json(), (req, res) => userController.updateUser(req, res));

// router.delete('/:id', auth, userValidator.validateUserId(), (req, res) => userController.deleteUser(req, res));



module.exports = router;