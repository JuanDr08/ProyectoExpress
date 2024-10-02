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

    async updateFieldsWithSet(userId, field, value) {

        let db = ConnectToDatabase.instanceConnect;
        console.log('En modelo', userId, field, value)
        const collection = db.db.collection('usuario');
        let res = await collection.updateOne({_id: ObjectId.createFromHexString(userId), [field]: {$exists: true}}, {$set: {[field] : value}})
        return res

    }

    async updateCustomField(userId, field, values) {

        let db = ConnectToDatabase.instanceConnect;
        const collection = db.db.collection('usuario');
        let res = await collection.updateOne({_id: ObjectId.createFromHexString(userId)}, {$addToSet: {[field] : { $each: values }}})
        return res

    }

    async removeElements(userId, field, values) {

        let db = ConnectToDatabase.instanceConnect;
        const collection = db.db.collection('usuario');
        let res = await collection.updateOne({_id: ObjectId.createFromHexString(userId)}, {$pull: {[field] : { $in : values }}})
        return res

    }

    async getAllFromField(userId, field) {

        let db = ConnectToDatabase.instanceConnect;
        const collection = db.db.collection('usuario');
        console.log(userId, field)
        let res = await collection.findOne({_id: ObjectId.createFromHexString(userId)}, {projection: {[field]: 1, _id: 0}})
        return res

    }

}