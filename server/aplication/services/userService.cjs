const UserRepository = require('../../domain/repositories/userRepository.cjs')

module.exports = class UserService {

    constructor () {

        this.UserRepository = new UserRepository()

    }

    async createUser(userData) {

        return await this.UserRepository.insertUser(userData)

    }

    

}