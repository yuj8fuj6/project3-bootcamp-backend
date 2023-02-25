const cors = require("cors");
const express = require("express");
require("dotenv").config();

const { auth } = require("express-oauth2-jwt-bearer");

const domain = process.env.AUTH0_DOMAIN;
const audience = process.env.AUTH0_AUDIENCE;

//Authorization middleware
const checkJwt = auth({
  audience: `${audience}`,
  issuerBaseURL: `${domain}`,
});

// importing Routers
const UsersRouter = require("./routers/usersRouter");
const CoursesRouter = require("./routers/coursesRouter");
const ForumsRouter = require("./routers/forumsRouter");

// importing Controllers
const UsersController = require("./controllers/usersController");
const CoursesController = require("./controllers/coursesController");
const ForumsController = require("./controllers/forumsController");

// importing DB
const db = require("./db/models/index");
const {
  user,
  student,
  professor,
  admin,
  course,
  forum,
  courseIndex,
  prerequisite,
  post,
  adminForum,
  postUpvote,
} = db;

// initializing Controllers
const usersController = new UsersController(user, student, professor, admin);
const coursesController = new CoursesController(
  course,
  courseIndex,
  prerequisite,
);
const forumsController = new ForumsController(
  forum,
  course,
  post,
  adminForum,
  postUpvote,
);

// initializing Routers
const userRouter = new UsersRouter(usersController, checkJwt).routes();
const courseRouter = new CoursesRouter(coursesController, checkJwt).routes();
const forumRouter = new ForumsRouter(forumsController, checkJwt).routes();

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
