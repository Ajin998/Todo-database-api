const express = require("express");
const router = express.Router();
const Task = require("../models/taskSchema");
const getTaskById = require("../routes/getTaskById.js");
const CreateTask = require("../routes/CreateTask.js");
const UpdateTask = require("../routes/updateTaskById.js");
const DeleteTask = require("../routes/deleteTaskById.js")



//Get all task
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json({ tasks });
  } catch (err) {
    res.json({ message: "Some error occured to fetch all the user" });
  }
});

//Get all the properties of the task based on query parameters
router.get("/query", async (req, res) => {
  try {
    if (req.query.taskName && req.query.status) {
      let result = await Task.find({
        taskName: req.query.taskName,
        status: req.query.status,
      });
      res.json(result);
    } else if (req.query.taskName) {
      let result = await Task.find({ taskName: req.query.taskName });
      res.json(result);
    } else if (req.query.status) {
      let result = await Task.find({ status: req.query.status });
      res.json(result);
    } else {
      res.json({ message: "Query Improper" });
    }
  } catch (err) {
    res.status(400).json({ status: err, message: "Check the query!!" });
  }
});

module.exports = router;
