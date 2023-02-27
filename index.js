const cors = require("cors");
const express = require("express");
require("dotenv").config();
const http = require("http");
const { Server } = require("socket.io");

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

// importing DB
const db = require("./db/models/index");
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
} = db;

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
  chatroom,
);
const coursesController = new CoursesController(
  student,
  course,
  course_indice,
  course_registration,
  student_course,
  prerequisite, 
);
const locationsController = new LocationsController(location);

// initializing Routers
const userRouter = new UsersRouter(usersController, checkJwt).routes();
const courseRouter = new CoursesRouter(coursesController, checkJwt).routes();
const forumRouter = new ForumsRouter(forumsController, checkJwt).routes();
const locationRouter = new LocationsRouter(
  locationsController,
  checkJwt,
).routes();
const conversationRouter = new ConversationRouter(
  conversationController,
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

let users = [];
const chatroomClients = new Map();

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("add_user", (userId) => {
    users[userId] = socket;
    console.log(`User ${userId} with ${socket.id} added`);
  });

  // to allow user to join chatroom when they click on conversation
  // this is specifically for socket connection between 2 users in a room
  socket.on("join_chatroom", (chatroomId) => {
    socket.join(chatroomId);
    console.log(`${socket.id} joined chatroom ${chatroomId}`);

    if (!chatroomClients.has(chatroomId)) {
      chatroomClients.set(chatroomId, new Set());
    }
    chatroomClients.get(chatroomId).add(socket.id);
  });

  socket.on("create_room", async (data) => {
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

    const existingRoom = await chatroom.findOne({
      include: [
        {
          model: user,
          where: {
            id: creatorUser.id,
          },
        },
        {
          model: user,
          where: {
            id: recipientUser.id,
          },
        },
      ],
    });
    if (existingRoom) {
      console.log("CHATROOM ALREADY EXISTS", existingRoom);
      return existingRoom;
    }

    const newRoom = await chatroom.findOrCreate({
      where: {
        room,
      },
    });
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
      data.email_address,
    );
    socket.emit("chatroom_name", room);
    console.log("NEW ROOM HERE", room, newRoom);
  });

  socket.on("send_message", async (data) => {
    const authorUser = await user.findOne({
      where: {
        email_address: data.sender,
      },
    });
    console.log("AUTHOR", authorUser);
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
    io.in(data.room).emit("receive_message", data);
    console.log(
      `${data.sender} sent ${data.message} in room ${data.room}, ${data}`,
    );
    console.log(`${data.sender} sent ${data.message} in room ${roomId}`);
  });

  socket.on("disconnect", () => {
    const userId = Object.keys(users).find((key) => users[key] === socket);
    delete users[userId];
    for (const [chatroomId, clients] of chatroomClients.entries()) {
      if (clients.has(socket.id)) {
        clients.delete(socket.id);
        console.log(`${socket.id} left chatroom ${chatroomId}`);
        if (clients.size === 0) {
          chatroomClients.delete(chatroomId);
        }
      }
    }
    console.log("User Disconnected", socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
