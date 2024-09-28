const ConnectToDatabase = require("../../infrastructure/database/database.cjs");

module.exports = class User {

    async userAggregate(data) {
        console.log(...data)
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