const { validationResult } = require('express-validator')
const UserService = require('../services/userService.cjs')


module.exports = class UserController {

    constructor () {
        this.userService = new UserService()
    }

    async registerUser(req, res) {

        const errors = validationResult(req);
        if(!errors.isEmpty()) return res.status(400).json({errors: errors.array()});
        
        console.log(req)

    }

}