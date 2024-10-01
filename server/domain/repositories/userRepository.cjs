const User = require('../models/userModel.cjs')

module.exports = class UserRepository {

    async insertUser(userData) {

        try {
            const user = new User()
            return await user.createUser(userData)
        } catch (err) {
            throw new Error(JSON.stringify({status: 500, message: 'Error during the user insertion'}))
        }

    }

}