const { validationResult } = require('express-validator');
const ChatService = require('../services/ChatService.cjs');

class ChatController {
    constructor() {
        this.chatService = new ChatService();
    }

    async handleMessage(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

            const userId = req.userId; // tinanis el userID para poder subirlo a la db
            const message = req.body; // tomamos el mensaje que se ubica en el body 

            const chat = await this.chatService.LogMessage(userId, message);
            res.status(200).json(chat);
        } catch (error) {
            const errorObj = JSON.parse(error.message);
            res.status(errorObj.status || 500).json({ message: errorObj.message || 'Internal Server Error' });
        }
    }
}

module.exports = ChatController;