const express = require("express");
const router = express.Router();

class ForumsRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    // we will insert routes into here later on
    router.get("/", this.controller.getAll.bind(this.controller));
    router.get(
      "/all_admins",
      this.controller.getAllForumAdmins.bind(this.controller),
    );
    router.get(
      "/filteredCourses",
      this.controller.filterCourses.bind(this.controller),
    );
    router.get("/:forumID", this.controller.getForumVote.bind(this.controller));
    router.post("/newForum", this.controller.addOne.bind(this.controller));
    router.post("/newPost", this.controller.addOnePost.bind(this.controller));
    router.post(
      "/deletePost",
      this.controller.deleteOnePost.bind(this.controller),
    );
    router.post(
      "/newPostVote",
      this.controller.addOneVote.bind(this.controller),
    );
    return router;
  }
}

module.exports = ForumsRouter;
