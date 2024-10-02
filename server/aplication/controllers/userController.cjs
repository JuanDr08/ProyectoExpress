const { validationResult } = require('express-validator')
const UserService = require('../services/userService.cjs')


module.exports = class UserController {

    async registerUser(req, res) {

        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
        const userService = new UserService()
        delete req.body.password
        let { nick, passwordHash, email, phone } = req.body
        let query = [
            {
                $match: {
                    $or: [
                        phone ? { phone: phone } : { email: email },
                    ],
                    provider: 'ruraqmaki'
                }
            }
        ]
        let isUserResgistered = await userService.agregate(query)
        
        if (isUserResgistered.length) return res.status(409).json({status: 409, message: 'El usuario ya existe'})

        let data = {
            cedula: 'Not assigned',
            names: 'Not assigned',
            surnames:'Not assigned',
            email: email ? email : 'Not assigned',
            photo: 'https://unavatar.io/microlink/microlink.io',
            provider: 'ruraqmaki',
            nick: nick,
            phone: phone ? phone : 'Not assigned',
            role: 'Usuario Estandar',
            password: passwordHash
        }

        await userService.createUser(data)

        return res.status(201).json({code:201, message: 'Usuario creado satisfactoriamente'})

    }

}