const express = require("express");
const router = express.Router();

class ChatroomRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    // we will insert routes into here later on
    router.get(
      "/:email",
      this.controller.getAllConversations.bind(this.controller)
    );
    return router;
  }
}

module.exports = ChatroomRouter;
