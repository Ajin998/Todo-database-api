const express = require("express");
const router = express.Router();
const Task = require("../models/taskSchema");

//Update task by id
router.put("/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    task.taskName = req.body.taskName ? req.body.taskName : task.taskName;
    task.status = req.body.status ? req.body.status : task.status;
    const val_to_update = await task.save();
    res.status(200).json({ val_to_update });
    console.log("Successfully acknowledged!");
  } catch (err) {
    res.status(400).json({ status: "Cannot process further",Due_to: "Either ID is invalid or status is not specified as  ['Completed','Pending']"});
  }
});
module.exports = router;
