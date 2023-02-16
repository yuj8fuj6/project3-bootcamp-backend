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
}

module.exports = UsersController;
