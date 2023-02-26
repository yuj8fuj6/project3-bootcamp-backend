const BaseController = require("./baseController");
const { Op } = require("sequelize");

class ChatroomController extends BaseController {
  constructor(model, userModel, messageModel, chatroomModel) {
    super(model);
    this.userModel = userModel;
    this.messageModel = messageModel;
    this.chatroomModel = chatroomModel;
  }

  async getAllConversations(req, res) {
    const { email } = req.params;
    const joinedUser = await this.userModel.findOne({
      where: {
        email_address: email,
      },
    });
    try {
      /* query all chatrooms current user is in

                query all chatrooms containing same chatroom_id

      } */
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

    //     const allConversations = await this.model.findAll({
    //       where: {
    //         user_id: {
    //           // !== joinedUser.id
    //           [Op.ne]: joinedUser.id,
    //         },
    //       },
    //       include: [
    //         {
    //           model: this.userModel,
    //           attributes: [
    //             "first_name",
    //             "last_name",
    //             "profile_pic_url",
    //             "email_address",
    //           ],
    //         },
    //         {
    //           model: this.chatroomModel,
    //           attributes: ["room"],
    //         },
    //         {
    //           model: this.messageModel,
    //           attributes: ["message"],
    //         },
    //       ],
    //     });
    //     return res.json(allConversations);
    //   } catch (err) {
    //     return res.status(400).json({ error: true, msg: err });
    //   }
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
}

module.exports = ChatroomController;
