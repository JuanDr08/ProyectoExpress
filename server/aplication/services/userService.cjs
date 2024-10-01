const UserRepository = require('../../domain/repositories/userRepository.cjs')

module.exports = class UserService {

    constructor () {

        this.UserRepository = new UserRepository()

    }

    async agregate(aggData) {

        return await this.UserRepository.getUserByAgregate(aggData)

    }

    async createUser(userData) {

        return await this.UserRepository.insertUser(userData)

    }

    

}