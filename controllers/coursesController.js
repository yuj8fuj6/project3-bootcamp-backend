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
  }

  async getAll(req, res) {
    try {
      const allCourses = await this.course.findAll({
        include: [
          { model: this.indexModel },
          { model: this.prerequisiteModel },
        ],
      });
      return res.json(allCourses);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Retrieve specific sighting
  async getCourses(req, res) {
    const { course_code } = req.params;
    let course_codes = course_code.split("+");
    // you could use query params with an array here as well instead of concatenating with +'s
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
    // I would suggest to make the FE send the objects over to the BE instead of having to run a map here. FE prepares the payload and should send over the finalized payload to the BE. BE accepts, validates, and then just stores it, since we don't deal with real business logic in this function.
    const { studentID, indexes } = req.body;
    const data = indexes.map((index, i) => {
      // You guys should really stop overusing console.logs so much and always remove them when done with a certain feature. It must be a pain in the ass to debug with all this spam everywhere
      return {
        student_id: studentID,
        course_indice_id: index,
      };
    });
    try {
      const registerCourse = await this.courseRegModel.bulkCreate(data);
      //query and send back the updated data
      return res.json(registerCourse);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async getRegisteredCourses(req, res) {
    const { student_id } = req.params;
    try {
      // const registeredCourses = await this.courseRegModel.findAll({
      //   where: { student_id: student_id },
      // });
      // const registeredCoursesID = registeredCourses.map(
      //   (course) => course.course_indice_id
      // );
      const registered = await this.indexModel.findAll({
        where: { id: registeredCoursesID },
        include: [
          { model: this.course }, 
          { model: this.courseRegModel, where: { student_id }}, // would this solve the problem above here with registeredCourses and the map?
        ],
      });
      // this is quite confusing. The function is named getRegisteredCourses, but you return indices?
      return res.json(registered);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = CoursesController;
