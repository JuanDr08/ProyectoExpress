// Define las rutas de la aplicación y mapea las URLs a los controladores.
const UserController = require('../controllers/userController.cjs');
const UserValidator = require('../validator/userValidator.cjs');

const userController = new UserController();
const userValidator = new UserValidator();

const express = require('express');
const path = require('path');
const router = express.Router();

const currentDirectory = process.cwd();
let EXPRESS_STATIC = currentDirectory + '/src'

router.get("/", (req, res) => {
    res.sendFile(path.join( EXPRESS_STATIC, '/modules/pages/'))
})
router.post('/', express.urlencoded({ extended: true }), userValidator.validateUserData(), (req, res) => userController.createUser(req, res));



module.exports = router;