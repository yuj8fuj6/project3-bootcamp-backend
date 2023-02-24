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
let usersInRoom = [];
// const addUser = (userId, socketId) => {
//   !usersInRoom.some((user) => user.userId === userId) &&
//     usersInRoom.push({ userId, socketId });
// };

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("add_user", async (userId) => {
    usersInRoom[userId] = socket;
    console.log(`User ${userId} with ${socket.id} added`);

    // const joinedUser = await user.findOne({
    //   where: {
    //     email_address: userId,
    //   },
    // });
    // try {
    //   let allConversations = await chatroom_user.findAll({
    //     where: {
    //       user_id: joinedUser.id,
    //     },
    //   });
    //   socket.emit("show_conversation", allConversations);
    //   console.log("ALL CONVERSATIONS", allConversations, joinedUser.id);
    // } catch (error) {
    //   console.log("ERROR", error);
    // }
  });

  socket.on("join_room", async (data) => {
    const { room } = data;
    socket.join(room);
    console.log("EMAILS", data.email, data.email_address);
    // Query for creator's and recipient's email
    const creatorUser = await user.findOne({
      where: {
        email_address: data.email,
      },
    });
    const recipientUser = await user.findOne({
      where: {
        email_address: data.email_address,
      },
    });

    const newRoom = await chatroom.findOrCreate({
      where: {
        room,
      },
    });
    console.log("NEW ROOM", newRoom);
    // To get the id of the room in chatroom.
    // Without this, I can only get the name of the room
    const roomId = await chatroom.findOne({
      where: {
        room,
      },
    });
    console.log("ROOM ID", roomId);
    // Create 2 entries in the chatroom_user table
    const chatroomUsersCreator = await chatroom_user.findOrCreate({
      where: {
        userId: creatorUser.id,
        chatroomId: roomId.id,
      },
    });
    const chatroomUsersRecipient = await chatroom_user.findOrCreate({
      where: {
        userId: recipientUser.id,
        chatroomId: roomId.id,
      },
    });
    console.log(
      "ROOM",
      newRoom,
      "JUNCTION TABLE CREATOR",
      chatroomUsersCreator,
      "JUNCTION TABLE RECIPIENT",
      chatroomUsersRecipient,
      "CREATOR USER",
      data.email,
      "RECIPIENT USER",
      data.email_address
    );

    let allMessages = await message.findAll({
      where: {
        chatroom_id: roomId.id,
      },
      include: [
        {
          model: user,
          as: "authorUser",
          attributes: [
            "first_name",
            "last_name",
            "profile_pic_url",
            "email_address",
          ],
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
        time: data.time,
      });
      console.log("NEW MESSAGE", newMessage);
    } catch (error) {
      console.log("ERROR", error);
    }
    socket.to(data.room).emit("receive_message", data);
    console.log(`${data.sender} sent ${data.message} in room ${data.room}`);
    console.log(`${data.sender} sent ${data.message} in room ${roomId}`);
  });

  socket.on("disconnect", () => {
    const userId = Object.keys(usersInRoom).find(
      (key) => usersInRoom[key] === socket
    );
    delete usersInRoom[userId];
    console.log("User Disconnected", socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
