const ChatService = require('../services/ChatService.cjs')

class ChatController {
    static async handleMessage(userId, message) {
        await ChatService.saveMessage(userId, message);
    }
}

module.exports = ChatController;