const { ConnectToDatabase } = require('../../infrastructure/database/database.cjs'); 

class ChatService {
    static async saveMessage(userId, message) {
        try {
            const db = ConnectToDatabase.db('chatLogs'); 
            const chatsCollection = db.collection('chats');

            const chat = await chatsCollection.findOne({ userId });

            if (chat) {
                await chatsCollection.updateOne(
                    { userId },
                    { $push: { messages: { sender: message.transmitter, text: message.texto, timestamp: new Date() } } }
                );
            } else {
                await chatsCollection.insertOne({
                    userId,
                    messages: [{ sender: message.transmitter, text: message.texto, timestamp: new Date() }],
                    createdAt: new Date(),
                });
            }
        } catch (error) {
            console.error("Error guardando el mensaje:", error);
        }
    }
}

module.exports = ChatService;