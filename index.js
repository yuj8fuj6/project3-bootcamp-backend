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
const LocationsRouter = require("./routers/locationsRouter");

// importing Controllers
const UsersController = require("./controllers/usersController");
const CoursesController = require("./controllers/coursesController");
const ForumsController = require("./controllers/forumsController");
const LocationsController = require("./controllers/locationsController");

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
  location,
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
const coursesController = new CoursesController(
  student,
  course,
  course_indice,
  course_registration,
  student_course,
);
const locationsController = new LocationsController(location);

// initializing Routers
const userRouter = new UsersRouter(usersController, checkJwt).routes();
const courseRouter = new CoursesRouter(coursesController, checkJwt).routes();
const forumRouter = new ForumsRouter(forumsController, checkJwt).routes();
const locationRouter = new LocationsRouter(locationsController, checkJwt).routes();

const PORT = process.env.PORT;
const app = express();

// enable CORS access to this server
app.use(cors());

app.use(express.json());

// routers
app.use("/users", userRouter);
app.use("/courses", courseRouter);
app.use("/forums", forumRouter);
app.use("/locations", locationRouter);

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
