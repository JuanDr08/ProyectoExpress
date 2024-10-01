const { validationResult } = require('express-validator');
const ChatService = require('../services/ChatService.cjs');

class ChatController {
    constructor() {
        this.chatService = new ChatService();
    }

    async handleMessage(userId, texto) {
        try {

            const chat = await this.chatService.LogMessage(userId, texto);
            res.status(200).json(chat);
        } catch (error) {
            const errorObj = JSON.parse(error.message);
            res.status(errorObj.status || 500).json({ message: errorObj.message || 'Internal Server Error' });
        }
    }
}

module.exports = ChatController;