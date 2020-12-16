const express = require("express");
const router = express.Router();
const Task = require("../models/taskSchema");

//Create task
router.post("/", async (req, res) => {
  let newTasks = new Task({
    taskName: req.body.taskName,
  });
  try {
    const data = await newTasks.save();
    res.json(data);
  } catch (err) {
    res.json({ message: "Error cannot create task" });
  }
});
module.exports = router;
