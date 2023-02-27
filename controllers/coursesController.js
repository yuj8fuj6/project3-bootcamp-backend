const BaseController = require("./baseController");

const { Op } = require("sequelize");

class CoursesController extends BaseController {
  constructor(
    model,
    course,
    indexModel,
    courseRegModel,
    student_course,
    prerequisiteModel
  ) {
    super(model);
    this.course = course;
    this.indexModel = indexModel;
    this.courseRegModel = courseRegModel;
    this.studentCourse = student_course;
    this.prerequisiteModel = prerequisiteModel;
    console.log(this.courseRegModel);
  }

  // Retrieve specific sighting
  async getCourses(req, res) {
    const { course_code } = req.params;
    let course_codes = course_code.split("+");
    try {
      const courses = await this.course.findAll({
        where: { course_code: course_codes },
        include: [{ model: this.indexModel }],
      });
      return res.json(courses);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async getTimeslot(req, res) {
    const { index, course_code } = req.params;
    console.log(index);
    let indexes = index.split("+");
    let course_codes = course_code.split("+");
    try {
      const timeslots = await this.course.findAll({
        where: { course_code: course_codes },
        include: { model: this.indexModel, where: { index_code: indexes } },
      });
      return res.json(timeslots);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async registerCourse(req, res) {
    const { studentID, indexes } = req.body;
    let arr = indexes.map((index, i) => {
      console.log(index);
      console.log(i);
      let data = {
        student_id: studentID,
        course_indice_id: index,
      };
      return data;
    });
    try {
      const registerCourse = await this.courseRegModel.bulkCreate(arr);
      console.log("course registered");
      //query and send back the updated data
      return res.json(registerCourse);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async getRegisteredCourses(req, res) {
    const { student_id } = req.params;
    console.log(student_id);
    try {
      const registeredCourses = await this.courseRegModel.findAll({
        where: { student_id: student_id },
      });
      const registeredCoursesID = registeredCourses.map(
        (x) => x.course_indice_id
      );
      const registered = await this.indexModel.findAll({
        where: { id: registeredCoursesID },
        include: { model: this.course },
      });
      console.log(registered);
      return res.json(registered);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = CoursesController;
