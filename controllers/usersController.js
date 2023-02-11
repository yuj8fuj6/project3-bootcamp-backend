const BaseController = require("./baseController");

class UsersController extends BaseController {
  constructor(model, studentModel) {
    super(model);
    this.studentModel = studentModel;
  }

  // Retrieve specific sighting
  async getOne(req, res) {
    const { userId } = req.params;
    try {
      const user = await this.model.findByPk(userId, {
        include: this.studentModel,
      });
      return res.json(user);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = UsersController;
