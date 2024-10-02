const { validationResult } = require('express-validator');
const ChatService = require('../services/ChatService.cjs');

class ChatController {
    constructor() {
        this.chatService = new ChatService();
    }

    async handleMessage(userId, message) {
        try {

            const chat = await this.chatService.LogMessage(userId, message);
            return chat
            // res.status(200).json(chat);
        } catch (error) {
            console.log("Error en envio del mensaje")
        }
    }
}

module.exports = ChatController;