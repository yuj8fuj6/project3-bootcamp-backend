class BaseController {
  constructor(model) {
    this.model = model;
  }

  /* All controllers that extend this BASE controller will have access to the below function **/

  // very underused functions in this project. We don't need a BaseController if we don't use it to have a generic function that we can use across all controller.

  // try to think more generic and don't repeat yourselves as much!
  async getAll(req, res) {
    try {
      const output = await this.model.findAll();
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = BaseController;
