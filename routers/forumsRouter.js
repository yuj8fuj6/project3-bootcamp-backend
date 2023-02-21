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
    return router;
  }
}

module.exports = ForumsRouter;
