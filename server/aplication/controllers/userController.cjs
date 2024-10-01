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
        if (isUserResgistered.length) res.status(409).json({status: 409, message: 'El usuario ya existe'})

        let data = {
            
        }

        console.log(isUserResgistered.length)
        console.log(req.body)

    }

}