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

  async addOne(req, res) {
    const { title, description, course_id } = req.body;
    try {
      const newForum = await this.model.create({
        title: title,
        description: description,
        course_id: course_id,
      });
      console.log("created new forum");
      const allForums = await this.model.findAll({
        include: [{ model: this.courseModel }, { model: this.postModel }],
      });
      return res.json(allForums);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

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

  async addOnePost(req, res) {
    const { student_id, content, forum_id } = req.body;
    try {
      const newPost = await this.postModel.create({
        student_id: student_id,
        content: content,
        forum_id: forum_id,
      });
      console.log("created new post");
      const allForums = await this.model.findAll({
        include: [{ model: this.courseModel }, { model: this.postModel }],
      });
      return res.json(allForums);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async deleteOnePost(req, res) {
    const { postID } = req.body;
    try {
      const deletedPost = await this.postModel.findByPk(postID);
      await deletedPost.destroy();
      console.log("deleted post");
      const allForums = await this.model.findAll({
        include: [{ model: this.courseModel }, { model: this.postModel }],
      });
      return res.json(allForums);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = ForumsController;
