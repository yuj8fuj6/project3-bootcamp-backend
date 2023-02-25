const BaseController = require("./baseController");

class UsersController extends BaseController {
  constructor(model, studentModel, professorModel, adminModel) {
    super(model);
    this.studentModel = studentModel;
    this.professorModel = professorModel;
    this.adminModel = adminModel;
  }

  // Retrieve specific user
  async getOne(req, res) {
    const { email } = req.params;
    try {
      const user = await this.model.findOne({
        where: { email_address: email },
        include: [
          { model: this.studentModel },
          { model: this.professorModel },
          { model: this.adminModel },
        ],
      });
      return res.json(user);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Retrieve all users
  async getAll(req, res) {
    try {
      const allUsers = await this.model.findAll({
        include: [
          { model: this.studentModel },
          { model: this.professorModel },
          { model: this.adminModel },
        ],
      });
      return res.json(allUsers);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Update profile photo URL
  async updatePhotoURL(req, res) {
    const { photoURL, user_id } = req.body;
    try {
      const currentUser = await this.model.findOne({
        where: { id: user_id },
      });
      currentUser.profile_pic_url = photoURL;
      await currentUser.save({ fields: ["profile_pic_url"] });
      return res.json(currentUser);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Update profile photo URL
  async updateProfile(req, res) {
    const { phone_number, user_id } = req.body;
    try {
      const currentUser = await this.model.findOne({
        where: { id: user_id },
      });
      currentUser.phone_number = phone_number;
      await currentUser.save({ fields: ["phone_number"] });
      return res.json(currentUser);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = UsersController;
