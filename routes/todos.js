const express = require("express");
const router = express.Router();
const {
    deleteTodo,
    getTodos,
    getTodo,
    createTodo,
    updateTodo,
    search
} = require("../controllers/todos");

router
    .route("/")
    .get(getTodos)
    .post(createTodo);
router.route("/search").get(search);
router
    .route("/:id")
    .get(getTodo)
    .delete(deleteTodo)
    .put(updateTodo);

module.exports = router;
