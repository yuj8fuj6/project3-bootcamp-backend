const BaseController = require("./baseController");

class CoursesController extends BaseController {
  constructor(model, indexModel, courseRegModel) {
    super(model);
    this.indexModel = indexModel;
    this.courseRegModel = courseRegModel;
  }

  // Retrieve specific sighting
  async getCourses(req, res) {
    const { course_code } = req.params;
    try {
      const courses = await this.model.findOne({
        where: { course_code: course_code },
        include: [{ model: this.indexModel }],
      });
      return res.json(courses);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async getAll(req, res) {
    try {
      const allUsers = await this.model.findAll({
        include: [
          { model: this.indexModel },
        ],
      });
      return res.json(allUsers);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = CoursesController;
