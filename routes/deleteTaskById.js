const express = require("express");
const router = express.Router();
const Task = require("../models/taskSchema");

//Delete task by ID
router.delete("/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndRemove(req.params.id);
    console.log(task);
    res.status(200).json({task});
  } catch (err) {
    res.json({ message: "Please Check the ID" });
  }
});
module.exports = router;
