const cors = require("cors");
const express = require('express');
require("dotenv").config();

// importing Routers
const UsersRouter = require("./routers/usersRouter");
const CourseRouter = require("./routers/coursesRouter")
const ForumsRouter = require("./routers/forumsRouter")

// importing Controllers
const UsersController = require("./controllers/usersController");
const CoursesController = require("./controllers/coursesController")
const ForumsController = require("./controllers/forumsController")

// importing DB
const db = require("./db/models/index");
const {
  forum,
  prerequisite,
  post,
  adminForum,
  postUpvote,
  user,
  student,
  professor,
  admin,
  course,
  course_indice,
  course_registration,
  student_course,
} = db;

// initializing Controllers
const usersController = new UsersController(user, student, professor, admin);

const forumsController = new ForumsController(
  forum,
  course,
  post,
  adminForum,
  postUpvote,
);
const courseController = new CoursesController(
  student,
  course,
  course_indice,
  course_registration,
  student_course
);

// initializing Routers
const userRouter = new UsersRouter(usersController).routes();
const courseRouter = new CourseRouter(courseController).routes();
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
