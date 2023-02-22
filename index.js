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
  chatroom,
  chatroom_user,
  message,
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
app.use(cors("*"));

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

// NOT WORKING
// let usersInRoom = [];
// const addUser = (userId, socketId) => {
//   !usersInRoom.some((user) => user.userId === userId) &&
//     usersInRoom.push({ userId, socketId });
// };

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", async (data) => {
    const { room, email_address } = data;
    socket.join(room);
    const userJoined = await user.findOne({
      where: {
        email_address,
      },
    });
    const newRoom = await chatroom.findOrCreate({
      where: {
        room,
        user_id: userJoined.id,
      },
    });
    // To get the id of the room in chatroom.
    // Without this, I can only get the name of the room
    const roomId = await chatroom.findOne({
      where: {
        room,
      },
    });
    const chatroomUsers = await chatroom_user.findOrCreate({
      where: {
        userId: userJoined.id,
        chatroomId: roomId.id,
      },
    });
    console.log("ROOM", newRoom, "JUNCTION TABLE", chatroomUsers);

    let allMessages = await message.findAll({
      where: {
        chatroom_id: roomId.id,
      },
      include: [
        {
          model: user,
          as: "authorUser",
          attributes: ["first_name", "last_name", "profile_pic_url"],
        },
      ],
      order: ["created_at"],
    });
    socket.emit("send_chatData", allMessages);
    console.log("ALL MESSAGES", allMessages);

    // NOT WORKING
    // socket.on("add_user", (userId) => {
    //   addUser(userId, socket.id);
    //   io.emit("get_users", usersInRoom);
    //   console.log("USERS IN ROOM", usersInRoom);
    // });
  });

  socket.on("send_message", async (data) => {
    const authorUser = await user.findOne({
      where: {
        email_address: data.sender,
      },
    });
    const roomId = await chatroom.findOne({
      where: {
        room: data.room,
      },
    });
    try {
      let newMessage = await message.create({
        message: data.message,
        author_user_id: authorUser.id,
        chatroom_id: roomId.id,
      });
      console.log("NEW MESSAGE", newMessage);
    } catch (error) {
      console.log("ERROR", error);
    }
    socket.to(data.room).emit("receive_message", data);
    console.log(data);
    console.log(`${data.sender} sent ${data.message} in room ${data.room}`);
    console.log(`${authorUser.id} sent ${roomId.id} in room ${data.room}`);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
