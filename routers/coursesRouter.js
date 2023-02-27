const express = require("express");
const router = express.Router();

class CoursesRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    // we will insert routes into here later on
    router.get("/", this.controller.getAll.bind(this.controller));
    router.get("/:course_code", this.controller.getCourses.bind(this.controller));
    router.get("/:course_code/:index", this.controller.getTimeslot.bind(this.controller));
    router.post("/register/:id/:uuid", this.controller.registerCourse.bind(this.controller))
    return router;
  }
}

module.exports = CoursesRouter;
