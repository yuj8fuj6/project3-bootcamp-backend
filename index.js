const cors = require("cors");
const express = require("express");
require("dotenv").config();

// importing Routers
const UsersRouter = require("./routers/usersRouter");
const CourseRouter = require("./routers/coursesRouter")

// importing Controllers
const UsersController = require("./controllers/usersController");
const CoursesController = require("./controllers/coursesController")

// importing DB
const db = require("./db/models/index");
const CoursesController = require("./controllers/coursesController");
const { user, student, professor, admin, course, course_index, course_registration,  } = db;

// initializing Controllers
const usersController = new UsersController(user, student, professor, admin);
const courseCotnroller = new CoursesController(student, )

// initializing Routers
const userRouter = new UsersRouter(usersController).routes();
const courseRouter = new CoursesRouter(coursesController).routes();
const forumRouter = new ForumsRouter(forumsController).routes();

const PORT = process.env.PORT;
const app = express();

// enable CORS access to this server
app.use(cors());

app.use(express.json());

// routers
app.use("/users", userRouter);
app.use("/courses", courseRouter);
app.use("/forums", forumRouter);

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
