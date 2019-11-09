const express = require("express");
const Todo = require("../models/Post");
const router = express.Router();

// Gets all todo
router.get("/", async (req, res) => {
  try {
    const todo = await Todo.find();
    res.json(todo);
  } catch (err) {
    res.json({ messagge: err });
  }
});

//Submits a todo

router.post("/", async (req, res) => {
  const todo = new Todo({
    text: req.body.text
  });

  try {
    const saveData = await todo.save();
    res.json(saveData);
  } catch (err) {
    res.json({ messagge: err });
  }
});

//Spesific todo

router.get("/:postId", async (req, res) => {
  try {
    todo = await Todo.findById(req.params.postId);
    res.send(todo);
  } catch (err) {
    res.json({ message: err });
  }
});

// Delete todo

router.delete("/:postId", async (req, res) => {
  try {
    removeTodo = await Todo.remove({ _id: req.params.postId });
    res.json(removeTodo);
  } catch (err) {
    res.json({ message: err });
  }
});

// Update a Todo

router.patch("/:postId", async (req, res) => {
  try {
    if (req.body.text) {
      console.log(req.body.text)
      const update = await Todo.updateOne(
        {_id: req.params.postId},
        { $set: { text: req.body.text } }
      );
        res.json({ update });

    } else {
      const updated = await Todo.updateOne(
        {_id: req.params.postId},
        { $set: { completed: req.body.completed } }
      );
      res.json({ updated });
    }
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
