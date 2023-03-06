const BaseController = require("./baseController");
// this file seems to be not completed but just a copy paste? Please correct me if I am wrong.
class LocationsController extends BaseController {
  constructor(model) {
    super(model);
  }

  // Retrieve specific user
  async getOne(req, res) {
    const { email } = req.params;
    try {
      // how can you retrieve a user when querying the location model?
      const user = await this.model.findOne({
        where: { email_address: email },
        include: [
          // where are these models defined in this class?
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

  // can just use the BaseController getAll here
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
