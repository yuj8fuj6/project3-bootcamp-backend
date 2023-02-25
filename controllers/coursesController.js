const BaseController = require("./baseController");

const { Op } = require("sequelize");

class CoursesController extends BaseController {
  constructor(model, studentModel, professorModel, adminModel) {
    super(model);
    this.studentModel = studentModel;
    this.professorModel = professorModel;
    this.adminModel = adminModel;
  }

  // Retrieve specific sighting
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
}

module.exports = CoursesController;
