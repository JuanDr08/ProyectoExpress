const { ObjectId } = require("mongodb");
const ConnectToDatabase = require("../../infrastructure/database/database.cjs");

class Workshop {
    async findAll() {
        const obj = ConnectToDatabase.instanceConnect;
        const collection = obj.db.collection("taller");

        let lista = []
        
        lista = await collection.find({}).toArray(); 
        console.log(lista)
        return lista;
    }

    
}

module.exports = Workshop;
