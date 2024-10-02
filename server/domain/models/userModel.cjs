const ConnectToDatabase = require("../../infrastructure/database/database.cjs");
const { ObjectId } = require('mongodb')
const bcrypt = require('bcryptjs')

module.exports = class User {

    async validatePassword(pass, passwordHash) {

        return await bcrypt.compare(pass, passwordHash)

    }

    
    async getById(id) {
        let db = ConnectToDatabase.instanceConnect;
        const collection = db.db.collection('usuario');
        let query = await collection.findOne({_id : ObjectId.createFromHexString(id)})
        return query
    }

    async userAggregate(data) {
        
        let db = ConnectToDatabase.instanceConnect
        const collection = db.db.collection('usuario')
        let query = await collection.aggregate([...data]).toArray()
        return query

    }

    async createUser(userData) {

        let db = ConnectToDatabase.instanceConnect;
        const collection = db.db.collection('usuario');
        let res = await collection.insertOne(userData)
        return res

    }

}