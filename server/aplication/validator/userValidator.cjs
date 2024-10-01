const {body, query, param} = require('express-validator')
const bcrypt = require('bcryptjs')

module.exports = class UserValidator {

    validateUserRegistration = () => {
        return [
            body().notEmpty().withMessage('No ha enviado ningun dato a guardar').custom((value, { req }) => {
                    if (!req.body.email && !req.body.phone) {
                        throw new Error('Debe proporcionar al menos un teléfono o un email.');
                    }
                    return true;
                }),

            body('nick')
                .notEmpty().withMessage('Campo vacio')
                .isString().withMessage('Tipo de dato invalido')
                .isLength({min: 5, max: 12}).withMessage('Cadena de minimo 5 caracteres y maximo 12'),

            body('password')
                .notEmpty().withMessage('Campo no puede estar vacio')
                .isString().withMessage('Tipo de dato invalido')
                .custom( async(value, { req }) => {
                    req.body.passwordHash = await bcrypt.hash(value, 10);
                    return true;
                }),

            body('email')
                .optional()
                .notEmpty().withMessage('Email vacio, ingrese un valor')
                .isEmail().withMessage('Formato de email invalido')
                .custom((value, { req }) => {
                    // Si el correo está presente, entonces el teléfono puede ser opcional
                    if (!req.body.phone && !value) {
                        throw new Error('Debe proporcionar al menos un teléfono o un email.');
                    }
                    return true;
                }),

            body('phone')
                .optional()
                .notEmpty().withMessage('No puede registrar el telefono vacio')
                .isString().withMessage('Tipo de dato invalido')
                .custom((value, { req }) => {
                    if (!req.body.email && !value) {
                        throw new Error('Debe proporcionar al menos un teléfono o un email.');
                    }
                    return true;
                }),

            body('sex')
                .optional()
                .notEmpty().withMessage('Campo no puede estar vacio')
                .isString().withMessage('Tipo de dato invalido')
                .custom(value => {
                    if (value && !['Masculino', 'Femenino'].includes(value)) throw new Error('Solo existen dos sexos: Masculino, Femenino')
                    return true
                }),

            body('birth_day')
                .optional()
                .isDate().withMessage('Formato de fecha invalido'),

            query()
                .custom((value, { req }) => {
                    if (Object.keys(req.query).length > 0) {
                        throw new Error(`Don't send anything in the url`);
                    }
                    return true;
                })
        ]
    }

}