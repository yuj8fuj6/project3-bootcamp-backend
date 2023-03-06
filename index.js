const cors = require("cors");
const express = require("express");
require("dotenv").config();
const http = require("http");
const { Server } = require("socket.io");
const initSocket = require("./socket.js")

const { auth } = require("express-oauth2-jwt-bearer");
// all imports on top of file, "importing DB" is redundant as a comment
const {
  forum,
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
  chatroom,
  chatroom_user,
  message,
  prerequisite,
} = require("./db/models/index");

const domain = process.env.AUTH0_DOMAIN;
const audience = process.env.AUTH0_AUDIENCE;

//Authorization middleware
// I think auth should be handled in another file. Maybe in some common folder auth.js or whatever you prefer.
const checkJwt = auth({
  audience: `${audience}`,
  issuerBaseURL: `${domain}`,
});

// importing Routers
const UsersRouter = require("./routers/usersRouter");
const LocationsRouter = require("./routers/locationsRouter");
const CoursesRouter = require("./routers/coursesRouter");
const ForumsRouter = require("./routers/forumsRouter");
const ConversationRouter = require("./routers/conversationRouter");

// importing Controllers
const UsersController = require("./controllers/usersController");
const CoursesController = require("./controllers/coursesController");
const ForumsController = require("./controllers/forumsController");
const LocationsController = require("./controllers/locationsController");
const ConversationController = require("./controllers/conversationController");

// initializing Controllers
const usersController = new UsersController(user, student, professor, admin);
const forumsController = new ForumsController(
  forum,
  course,
  post,
  adminForum,
  postUpvote
);
const conversationController = new ConversationController(
  chatroom_user,
  user,
  message,
  chatroom
);
const coursesController = new CoursesController(
  student,
  course,
  course_indice,
  course_registration,
  student_course,
  prerequisite
);
const locationsController = new LocationsController(location);

// initializing Routers
const userRouter = new UsersRouter(usersController, checkJwt).routes();
const courseRouter = new CoursesRouter(coursesController, checkJwt).routes();
const forumRouter = new ForumsRouter(forumsController, checkJwt).routes();
const locationRouter = new LocationsRouter(
  locationsController,
  checkJwt
).routes();
const conversationRouter = new ConversationRouter(
  conversationController,
  checkJwt
).routes();

const PORT = process.env.PORT;
const app = express();

// enable CORS access to this server
app.use(cors("*"));

app.use(express.json());

// routers
app.use("/users", userRouter);
app.use("/courses", courseRouter);
app.use("/forums", forumRouter);
app.use("/locations", locationRouter);
app.use("/conversations", conversationRouter);

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3001",
  },
});
// we don't want to spam the index file. Use another file and export/import to make sockets happen in a single line.
// Index.js does not need to know how exactly sockets work, a sockets file or folder will be responsible for that.
// See socket.js
initSocket(user, chatroom, message, chatroom_user)

server.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
