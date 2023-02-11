const cors = require("cors");
const express = require("express");
require("dotenv").config();

// importing Routers
const UsersRouter = require("./routers/usersRouter");

// importing Controllers
const UsersController = require("./controllers/usersController");

// importing DB
const db = require("./db/models/index");
const { user, student } = db;

// initializing Controllers
const usersController = new UsersController(user, student);

// initializing Routers
const userRouter = new UsersRouter(usersController).routes();

const PORT = process.env.PORT;
const app = express();

// enable CORS access to this server
app.use(cors());

app.use(express.json());

// routers
app.use("/", userRouter);

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
