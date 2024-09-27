const ChatService = require('../services/ChatService')

class ChatController {
    static handleMessage(message) {
        ChatService.saveMessage(message);
    }
}

module.exports = ChatController;
