const ConnectToDatabase = require("../../infrastructure/database/database.cjs");

module.exports = class Chat{
    async uploadChatToDb(userId, message) {
        try {
            const obj = ConnectToDatabase.instanceConnect;
            const chatcollection = obj.db.collection("chatLogs");
    
            const chat = await chatcollection.findOne({ userId });
    
            if (chat) {
                await chatcollection.updateOne(
                    { userId },
                    { $push: { messages: { sender: message.transmitter, text: message.texto, timestamp: new Date() } } }
                );
            } else {
                await chatcollection.insertOne({
                    userId,
                    messages: [{ sender: message.transmitter, text: message.texto, timestamp: new Date() }],
                    createdAt: new Date(),
                });
                console.log("Mensaje guardado");
            }
        } catch (error) {
            console.log("Error al guardar el chat en la db: ", error.message);
            throw error;
        }
    }
    
}