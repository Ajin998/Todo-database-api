const express = require("express");
const router = express.Router();
const Task = require("../models/taskSchema");

//Get task by id

router.get("/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    res.json({ task });
  } catch (err) {
    res.json({ message: "Please Check the ID" });
  }
});
module.exports = router;
