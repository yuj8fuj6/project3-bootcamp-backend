const BaseController = require("./baseController");

const { Op } = require("sequelize");

class ForumsController extends BaseController {
  constructor(model, courseModel, postModel, adminForumModel, postUpvoteModel) {
    super(model);
    this.courseModel = courseModel;
    this.postModel = postModel;
    this.adminForumModel = adminForumModel;
    this.postUpvoteModel = postUpvoteModel;
  }

  async getAll(req, res) {
    try {
      // instead of specifying all includes here, we could also retrieve includes from the FE depending on the useCase.
      // that way the FE controls what data it wants, and the BE just acts as the data provider
      // This can be applied to many of your controller functions across your application
      // const { include } = req.query; // this would be an array as query parameter, include=["course", "post"]
      // const models = include.map((model) => { return { model } })
      const allForums = await this.model.findAll({
        // include: [{ model: this.courseModel }, { model: this.postModel }],
        include: models
      });
      return res.json(allForums);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async getAllForumAdmins(req, res) {
    try {
      // use basecontroller func
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
      const allForums = await this.model.findAll({
        include: [{ model: this.courseModel }, { model: this.postModel }],
      });
      // a POST route to create one record, should return only the created record
      return res.json(allForums);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // since we are not using any request body or parameters here, I would not call this a filter necessarily.
  // This function is not filtering, it is returning all courses without specific course codes
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

  // what's the difference between this and addOne? Can't we make our function more generic? See below
  // async addOnePost(req, res) {
  //   const { student_id, content, forum_id } = req.body;
  //   try {
  //     const newPost = await this.postModel.create({
  //       student_id: student_id,
  //       content: content,
  //       forum_id: forum_id,
  //     });
  //     console.log("created new post");
  //     const allForums = await this.model.findAll({
  //       include: [{ model: this.courseModel }, { model: this.postModel }],
  //     });
  //     return res.json(allForums);
  //   } catch (err) {
  //     return res.status(400).json({ error: true, msg: err });
  //   }
  // }

  async addOne(req, res) {
    const { targetModel } = req.params;
    try {
      const newPost = await this[targetModel].create(req.body);
      const allForums = await this.model.findAll({
        include: [{ model: this.courseModel }, { model: this.postModel }],
      });
      // same as above, only return the created record
      return res.json(allForums);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async deleteOnePost(req, res) {
    const { postID } = req.body;
    try {
      // not deleted yet.
      const post = await this.postModel.findByPk(postID);
      // what if there is no post found?
      await post.destroy();
      const allForums = await this.model.findAll({
        include: [{ model: this.courseModel }, { model: this.postModel }],
      });
      // why always return all forums? What if there are 1 million forums? Seems inefficient to me
      return res.json(allForums);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async addOneVote(req, res) {
    const { upvote, post_id, student_id, forum_id } = req.body;
    try {
      const [newPostVote, created] = await this.postUpvoteModel.findOrCreate({
        where: {
          upvote: upvote,
          post_id: post_id,
          student_id: student_id,
          forum_id: forum_id,
        },
      });

      if (!created) {
        // why destroy a vote if it wasn't newly created?
        await newPostVote.destroy();
      }
      const count = await this.postUpvoteModel.count({
        where: { post_id: post_id },
        include: [{ model: this.postModel }],
      });

      const currentPost = await this.postModel.findOne({
        where: { id: post_id },
      });

      await currentPost.save({ upvote: count });

      const allForums = await this.model.findAll({
        include: [{ model: this.courseModel }, { model: this.postModel }],
      });
      // gnaaahhhhhhhhhh
      return res.json(allForums);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async getUpvoteCount(req, res) {
    const { forumID } = req.params;
    try {
      const postUpvotes = await this.postUpvoteModel.count({
        where: { forum_id: forumID },
      });
      return res.json(postUpvotes);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = ForumsController;
