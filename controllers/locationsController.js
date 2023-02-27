const BaseController = require("./baseController");

class LocationsController extends BaseController {
  constructor(model) {
    super(model);
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
      const allLocations = await this.model.findAll();
      return res.json(allLocations);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = LocationsController;
