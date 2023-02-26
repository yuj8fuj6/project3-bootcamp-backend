const BaseController = require("./baseController");

const { Op } = require("sequelize");

class CoursesController extends BaseController {
  constructor(model, course, indexModel, courseRegModel, student_course) {
    super(model);
    this.course = course;
    this.indexModel = indexModel;
    this.courseRegModel = courseRegModel;
    this.studentCourse = student_course;
    console.log(this.courseRegModel)
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
    console.log(index)
    let indexes = index.split("+");
    let course_codes = course_code.split("+")
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

  async registerCourse(req,res){
    //change to body and test
    const { studentID, indexes } = req.body;
    console.log("irun")
    let arr = indexes.map((index, i) => {
      console.log(index)
      console.log(i)
      let data = {
        student_id: studentID,
        course_indice_id: index,

      };
      return data
    })
    try{
      const registerCourse = await this.courseRegModel.bulkCreate(arr);
      console.log("course registered");
      //query and send back the updated data
      return res.json(registerCourse);
    } catch (err){
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = CoursesController;
