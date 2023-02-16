const BaseController = require("./baseController");

class CoursesController extends BaseController {
  constructor(model, courseIndexModel, prerequisiteModel) {
    super(model);
    this.courseIndexModel = courseIndexModel;
    this.prerequisiteModel = prerequisiteModel;
  }

  async getAll(req, res) {
    try {
      const allCourses = await this.model.findAll({
        include: [
          { model: this.courseIndexModel },
          { model: this.prerequisiteModel },
        ],
      });
      return res.json(allCourses);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = CoursesController;
