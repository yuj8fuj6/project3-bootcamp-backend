const express = require("express");
const router = express.Router();

class ForumsRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    // we will insert routes into here later on
    router.get("/", this.controller.getAll.bind(this.controller));
    // I think this should have auth or anyone can get any admin data
    router.get(
      "/all_admins",
      this.controller.getAllForumAdmins.bind(this.controller),
    );
    router.get(
      "/filteredCourses",
      this.controller.filterCourses.bind(this.controller),
    );
    router.get("/:forumID", this.controller.getForumVote.bind(this.controller));
    // auth?
    router.post("/newForum", this.controller.addOne.bind(this.controller));
    // auth?
    router.post("/newPost", this.controller.addOnePost.bind(this.controller));
    // auth???
    router.post(
      "/deletePost",
      this.controller.deleteOnePost.bind(this.controller),
    );
    // auth?????
    router.post(
      "/newPostVote",
      this.controller.addOneVote.bind(this.controller),
    );
    return router;
  }
}

module.exports = ForumsRouter;
