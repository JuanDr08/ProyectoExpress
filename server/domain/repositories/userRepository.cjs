const User = require('../models/userModel.cjs')

module.exports = class UserRepository {

    constructor() {
        this.userModel = new User()
    }

    async getUserById(id) {

        try {
            return this.userModel.getById(id)
        } catch {
            throw new Error(JSON.stringify({status: 500, message: 'Error during the user fetching'}))
        }

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

    async updateUserCustomField(userId, field, values) {

        try {
            return await this.userModel.updateCustomField(userId, field, values)
        } catch {
            throw new Error(JSON.stringify({status: 500, message: 'Error during the user insertion'}))
        }

    }

    async removeElements(userId, field, values) {

        try {
            return await this.userModel.removeElements(userId, field, values)
        } catch {
            throw new Error(JSON.stringify({status: 500, message: 'Error during the user extraction'}))
        }

    }

    async getAllFromFIeld(userId, field) {

        try {
            return await this.userModel.getAllFromField(userId, field)
        } catch {
            throw new Error(JSON.stringify({status: 500, message: 'Error during the user cart fetching'}))
        }

    }

}