const express = require("express");
const router = express.Router();

class LocationsRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    // we will insert routes into here later on
    router.get("/", this.controller.getAll.bind(this.controller));
    // how can a location have an email?
    router.get("/:email", this.controller.getOne.bind(this.controller));
    return router;
  }
}

module.exports = LocationsRouter;
