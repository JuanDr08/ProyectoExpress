const User = require('../models/userModel.cjs')

module.exports = class UserRepository {

    constructor() {
        this.userModel = new User()
    }

    async getUserByAgregate(aggData) {
        try {
            return this.userModel.userAggregate(aggData)
        } catch {
            throw new Error(JSON.stringify({status: 500, message: 'Error during the user agregation'}))
        }
    }

    async insertUser(userData) {

        try {
            return await this.userModel.createUser(userData)
        } catch (err) {
            throw new Error(JSON.stringify({status: 500, message: 'Error during the user insertion'}))
        }

    }

}