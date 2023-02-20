const BaseController = require("./baseController");

class CoursesController extends BaseController {
  constructor(model, course, indexModel, courseRegModel, student_course) {
    super(model);
    this.course = course;
    this.indexModel = indexModel;
    this.courseRegModel = courseRegModel;
    this.studentCourse = student_course;
    console.log(student_course);
  }

  // Retrieve specific sighting
  async getCourses(req, res) {
    const { course_code } = req.params;
    try {
      const courses = await this.course.findOne({
        where: { course_code: course_code },
        include: [{ model: this.indexModel }],
      });
      return res.json(courses);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async getStudentCourse(req, res) {
    try {
      const { id } = req.params;
      const student = await this.model.findAll({
        where: { user_id: id },
      });
      const studentID = student[0].dataValues.id;
      const studentCourses = await this.studentCourse.findAll({
        where: {student_id: studentID}
      })
      return res.json(studentCourses);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = CoursesController;
