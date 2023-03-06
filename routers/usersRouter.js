const express = require("express");
const router = express.Router();

class UsersRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    // don't think a getAll route for users should exist, seems to be a very big security risk to me. What is the usecase in your app?
    router.get("/", this.controller.getAll.bind(this.controller));
    router.get("/:email", this.controller.getOne.bind(this.controller));
    // should definitely use auth here. No auth, anyone can tamper with the data
    router.put(
      "/photoURL",
      this.controller.updatePhotoURL.bind(this.controller),
    );
    // should definitely use auth here. No auth, anyone can tamper with the data
    router.put(
      "/profile",
      this.controller.updateProfile.bind(this.controller),
    );
    return router;
  }
}

module.exports = UsersRouter;
