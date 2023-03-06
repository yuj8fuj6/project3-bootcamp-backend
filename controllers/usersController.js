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
    // what if email is a number or not in email format? I think we should validate this. Either use a library for it or use RegEx to check if the string format looks like an email
    try {
      const user = await this.model.findOne({
        where: { email_address: email },
        include: [
          { model: this.studentModel },
          { model: this.professorModel },
          { model: this.adminModel },
        ],
      });
      // this is very dangerous. You are returning the whole DB record. Means email, password, phone number. This should be enough for social engineering attacks. Only return non-sensitive data about users.
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
      // here even more so a security concern, as we retrieve all users at once. I am not sure if that should even be allowed. No user should be able to retrieve a list of all users. Here you would definitely implement a pagination as well via Sequelize, as you could query for millions of records at once.
      return res.json(allUsers);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Update profile photo URL
  async updatePhotoURL(req, res) {
    const { photoURL, user_id } = req.body;
    // we should validate these parameters
    try {
      const currentUser = await this.model.findOne({
        where: { id: user_id },
      });
      // what if no user can be found with that user_id? I think we could return/response early here.

      // why so complicated?
      // currentUser.profile_pic_url = photoURL;
      // await currentUser.save({ fields: ["profile_pic_url"] });
      await currentUser.save({ profile_pic_url: photoURL }) // shouldn't this work?
      return res.json(currentUser);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Update profile photo URL
  async updateProfile(req, res) {
    const { phone_number, user_id } = req.body;
    // again we should validate user input here
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
