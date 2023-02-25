const express = require("express");
const router = express.Router();

class UsersRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    // we will insert routes into here later on
    router.get("/", this.controller.getAll.bind(this.controller));
    router.get("/:email", this.controller.getOne.bind(this.controller));
    router.put(
      "/photoURL",
      this.controller.updatePhotoURL.bind(this.controller),
    );
    router.put(
      "/profile",
      this.controller.updateProfile.bind(this.controller),
    );
    return router;
  }
}

module.exports = UsersRouter;
