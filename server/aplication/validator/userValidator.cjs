const {body, query, param} = require('express-validator')
const bcrypt = require('bcryptjs')

class UserValidator {

    validateUserRegistration = () => {
        return [
            body('nick').notEmpty().isString().isLength({min: 5, max: 12}).withMessage('Cadena de minimo 5 caracteres y maximo 12'),
            body('email').notEmpty().isEmail().withMessage('Formato de email invalido'),
            body('password').notEmpty().isString().withMessage('Contraseña invalida').custom( async(value, { req }) => {
                req.body.passwordHash = await bcrypt.hash(value, 10);
                return true;
            }),
            body('sex').optional().notEmpty().isString().custom(value => {
                if (value && !['Masculino', 'Femenino'].includes(value)) throw new Error('Solo existen dos sexos: Masculino, Femenino')
                return true
            }),
            body('birth_day').optional().isDate().withMessage('Formato de fecha invalido'),
            query().custom((value, { req }) => {
                if (Object.keys(req.query).length > 0) {
                    throw new Error(`Don't send anything in the url`);
                }
                return true;
            })
        ]
    }

}