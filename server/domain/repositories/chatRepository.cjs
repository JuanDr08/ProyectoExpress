const chatModel = require("../models/chatModel.cjs")

class chatRepository{

    async save(userId, message) {
        try {
            const ChatModel = new chatModel();
            const result = await ChatModel.uploadChatToDb(userId, message);
            return result;
        } catch (error) {
            throw new Error(JSON.stringify({status: 500, message: 'Error saving Chat'}));
        }
    }

}

module.exports = chatRepository