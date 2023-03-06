const BaseController = require("./baseController");
const { Op } = require("sequelize");

class ChatroomController extends BaseController {
  constructor(model, userModel, messageModel, chatroomModel) {
    super(model);
    this.userModel = userModel;
    this.messageModel = messageModel;
    this.chatroomModel = chatroomModel;
  }

  // I feel it should be easier to query all Conversations.
  // shouldn' we just be able to query the chatroom_user table and include the associated models?
  async getAllConversations(req, res) {
    const { email } = req.params;
    const joinedUser = await this.userModel.findOne({
      where: {
        email_address: email,
      },
    });
    try {
      const allChatRoomsUserIsIn = await this.model.findAll({
        where: {
          user_id: joinedUser.id,
        },
        attributes: ["chatroom_id"],
        raw: true,
      });
      const allChatRoomIdsUserIsIn = allChatRoomsUserIsIn.map(
        (id) => id.chatroom_id
      );

      const allUserIdsInChatRooms = await this.model.findAll({
        where: {
          chatroom_id: { [Op.in]: allChatRoomIdsUserIsIn },
          user_id: { [Op.ne]: joinedUser.id },
        },
        include: [
          {
            model: this.userModel,
            attributes: [
              "first_name",
              "last_name",
              "profile_pic_url",
              "email_address",
            ],
          },
          {
            model: this.chatroomModel,
            attributes: ["room"],
          },
        ],
      });
      return res.json(allUserIdsInChatRooms);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
  async getMessages(req, res) {
    const { chatroomId } = req.params;
    try {
      const chatroomMessages = await this.messageModel.findAll({
        where: {
          chatroom_id: chatroomId,
        },
        include: [
          {
            model: this.userModel,
            as: "authorUser",
            attributes: [
              "first_name",
              "last_name",
              "profile_pic_url",
              // email address can be sensitive data, please apply proper authentication for this route/function
              "email_address",
            ],
          },
        ],
        order: ["created_at"],
      });
      return res.json(chatroomMessages);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
  // if you say One, then do One, not all :)!
  async deleteOneConversation(req, res) {
    const { chatroomId } = req.body;
    try {
      // findAll returns plural
      const conversations = await this.model.findAll({
        where: {
          chatroom_id: chatroomId,
        },
        include: [
          {
            model: this.messageModel,
          },
          {
            model: this.chatroomModel,
          },
        ],
      });
      // you effectively destroy all conversations if it is possible with .destroy on a collection of records
      // what if conversations is empty or null? How to destroy?
      await conversations.destroy();
      // how can we return conversations that have been destroyed?
      return res.json(conversations);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = ChatroomController;
