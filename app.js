const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Task = require("./models/taskSchema");
dotenv.config({ path: "./config.env" });
const PORT = process.env.PORT || 3000;
const express = require("express");
const app = express();
const Router = require('./routes/getAllTask');
const TaskById = require('./routes/getTaskById');
const CreateTask = require('./routes/CreateTask');
const UpdateTask = require('./routes/updateTaskById');
const DeleteTask = require('./routes/deleteTaskById');
const url = require('url');
const querystring = require('querystring');


app.use(express.json());

mongoose.set("useUnifiedTopology", true);
mongoose
  .connect(
    process.env.DATABASE_URL,
    {
      useNewUrlParser: true,
    },
    { useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Connection To MongoDb Server is OK");
    }).catch(err=>console.error(err));



  app.use('/Tasks',Router,CreateTask,TaskById,UpdateTask,DeleteTask);

app.listen(PORT, console.log("Server up and running..."));
