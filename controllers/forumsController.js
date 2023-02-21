const BaseController = require("./baseController");

const { Op } = require("sequelize");

class ForumsController extends BaseController {
  constructor(model, courseModel, postModel, adminForumModel) {
    super(model);
    this.courseModel = courseModel;
    this.postModel = postModel;
    this.adminForumModel = adminForumModel;
  }

  async getAll(req, res) {
    try {
      const allForums = await this.model.findAll({
        include: [{ model: this.courseModel }, { model: this.postModel }],
      });
      return res.json(allForums);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async getAllForumAdmins(req, res) {
    try {
      const allForumAdmins = await this.adminForumModel.findAll();
      return res.json(allForumAdmins);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // async addOne (req, res){
  //   try {
  //     // const newForum = await this.model
  //   } catch (err) {
  //     return res.status(400).json({ error: true, msg: err });
  //   }
  // }

  async filterCourses(req, res) {
    try {
      const allForums = await this.model.findAll({
        include: [{ model: this.courseModel }],
      });
      const forumCourseCode = [];
      allForums.forEach((forum) => {
        forumCourseCode.push(forum.course.course_code);
      });
      const filteredCourses = await this.courseModel.findAll({
        where: { course_code: { [Op.notIn]: forumCourseCode } },
      });
      return res.json(filteredCourses);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = ForumsController;
