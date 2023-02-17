const cors = require("cors");
const express = require("express");
require("dotenv").config();

const http = require("http");
const { Server } = require("socket.io");

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
  message,
  chatroom,
} = db;

// initializing Controllers
const usersController = new UsersController(user, student, professor, admin);
const coursesController = new CoursesController(
  course,
  courseIndex,
  prerequisite
);
const forumsController = new ForumsController(forum, course, post, adminForum);

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

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3001",
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", async (data) => {
    socket.join(data);
    console.log(data);
    const { room, email_address } = data;
    const joinUser = await user.findOne({
      where: {
        email_address,
      },
    });
    let newRoom = chatroom.create({ room, user_id: joinUser.id });
    console.log(`User ${socket.id}, ${joinUser.id} joined room: ${newRoom}`);
  });

  // to see how many users in the chatroom
  let users = [];

  const addUser = (userId, socketId) => {
    !users.some((user) => user.userId === userId) &&
      users.push({ userId, socketId });
  };

  socket.on("add_user", (userId) => {
    addUser(userId, socket.id);
    io.emit("get_users", users);
    console.log(users);
  });

  socket.on("send_message", async (data) => {
    console.log(data);
    // calling createNewMessage from messengerController to add data into database
    // let newMessage = await messengerController.createNewMessage(data);
    try {
      let newMessage = await message.create({
        message: "hello",
        chatroom_id: "31a7c42f-59f5-486f-814f-db862793123e",
        author_user_id: 3,
      });
      // emit message into specific chatroom
      socket.to(data.room).emit("receive_message", newMessage);
    } catch (error) {
      console.log("ERROR");
      console.log(error);
    }
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
