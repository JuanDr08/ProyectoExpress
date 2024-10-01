const chatRepository = require("../../domain/repositories/chatRepository.cjs")

class ChatService {
    constructor() {
        this.chatRepo = new chatRepository()
    }
    
    async LogMessage(userId, message) {
        try {
            const chat = await this.chatRepo.save(userId, message);
            if (!chat) throw new Error(JSON.stringify({status: 404, message: "chat cant upload"}))
            return chat;
        } catch (error) {
            console.error("Error guardando el mensaje:", error);
            throw error
        }

    }
}


module.exports = ChatService;