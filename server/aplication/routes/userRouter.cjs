// Dependencias
const express = require('express');
const router = express.Router({ mergeParams: true }); // merge params me permite acceder a los parametros de rutas padres
const cookieParser = require('cookie-parser');

// Middlewares para verificacion
const { auth, authCookie } = require('../middlewares/authenticationToken.cjs');
const sessionAuth = require('../middlewares/sessionLogin.cjs');
const { versionMiddleware } = require('../middlewares/version.cjs');

// Controladores
const UserController = require('../controllers/userController.cjs');
const userController = new UserController();

// Validadores
const UserValidator = require('../validator/userValidator.cjs');
const userValidator = new UserValidator();

// Get all
router.get('/favorite/check/:id', userController.checkForAnIdOnFavoriteUserList)
router.get('/cart', (req, res) => userController.getAllItemsFromAField(req, res, 'carrito'))
router.get('/coupons', (req, res) => userController.getAllItemsFromAField(req, res, 'cupones'))
router.get('/purchases', (req, res) => userController.getAllItemsFromAField(req, res, 'compras'))
router.get('/favorites/workshops', (req, res) => userController.getAllItemsFromAField(req, res, 'talleres_favoritos'))
router.get('/subscribed/workshops', (req, res) => userController.getAllItemsFromAField(req, res, 'talleres_inscritos'))
// Agregates
router.get('/favorites/products/details', (req, res) => userController.getAllProductDetailseFromField(req, res, 'productos', 'favoritos'))
router.get('/cart/details', (req, res) => userController.getAllProductDetailseFromField(req, res, 'productos', 'carrito'))
router.get('/purchases/details', (req, res) => userController.getAllProductDetailseFromField(req, res, 'productos', 'compras'))
router.get('/favorites/workshops/details', (req, res) => userController.getAllProductDetailseFromField(req, res, 'taller', 'talleres_favoritos'))
router.get('/subscribed/workshops/details', (req, res) => userController.getAllProductDetailseFromField(req, res, 'taller', 'talleres_inscritos'))
router.get('/coupons/details', (req, res) => userController.getAllProductDetailseFromField(req, res, 'cupon', 'cupones'))

router.post('/favorites/products/:id', express.json(), userValidator.validateFavoriteProductParam(), (req, res) => userController.createFieldOfArraysAndPushObjectIdItems(req, res, 'favoritos'))
router.post('/cart/:id', express.json(), userValidator.validateFavoriteProductParam(), (req, res) => userController.createFieldOfArraysAndPushObjectIdItems(req, res, 'carrito'))
router.post('/purchases/:id', express.json(), userValidator.validateFavoriteProductParam(), (req, res) => userController.createFieldOfArraysAndPushObjectIdItems(req, res, 'compras'))
router.post('/favorites/workshops/:id', express.json(), userValidator.validateFavoriteProductParam(), (req, res) => userController.createFieldOfArraysAndPushObjectIdItems(req, res, 'talleres_favoritos'))
router.post('/subscribed/workshops/:id', express.json(), userValidator.validateFavoriteProductParam(), (req, res) => userController.createFieldOfArraysAndPushObjectIdItems(req, res, 'talleres_inscritos'))
router.post('/coupons/:id', express.json(), userValidator.validateFavoriteProductParam(), (req, res) => userController.createFieldOfArraysAndPushObjectIdItems(req, res, 'cupones'))

router.delete('/favorites/products/:id', express.json(), userValidator.validateFavoriteProductParam(), (req, res) => userController.removeProductsFromFieldsList(req, res, 'favoritos'))
router.delete('/cart/:id', express.json(), userValidator.validateFavoriteProductParam(), (req, res) => userController.removeProductsFromFieldsList(req, res, 'carrito'))
router.delete('/favorites/workshops/:id', express.json(), userValidator.validateFavoriteProductParam(), (req, res) => userController.removeProductsFromFieldsList(req, res, 'talleres_favoritos'))
router.delete('/subscribed/workshops/:id', express.json(), userValidator.validateFavoriteProductParam(), (req, res) => userController.removeProductsFromFieldsList(req, res, 'talleres_inscritos'))
router.delete('/coupons/:id', express.json(), userValidator.validateFavoriteProductParam(), (req, res) => userController.removeProductsFromFieldsList(req, res, 'cupones'))

// router.get('/:id', auth, userValidator.validateUserId(), (req, res) => userController.getUser(req, res));
// router.get('/search', auth, (req, res) => userController.searchUsers(req, res));

// router.post('/', userValidator.validateUserData(), express.json(), (req, res) => userController.createUser(req, res));
// router.post('/login', versionMiddleware("1.1.0"), express.json(), sessionAuth,  userValidator.validateUserLogin(), (req, res) => userController.verifyUser(req, res))
// router.post('/login', versionMiddleware("1.0.0"), express.json(), cookieParser(), userValidator.validateUserLogin(), (req, res) => userController.verifyUserCookies(req, res))

// router.put('/:id', auth, userValidator.validateUserUpdateDataById(), express.json(), (req, res) => userController.updateUser(req, res));

// router.delete('/:id', auth, userValidator.validateUserId(), (req, res) => userController.deleteUser(req, res));



module.exports = router;