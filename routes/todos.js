const express = require('express');
const router = express.Router();
const { deteleTodo, getTodos, getTodo, createTodo, updateTodo } = require('../controllers/todos');

router.route('/').get(getTodos).post(createTodo);
router.route('/:id').get(getTodo).delete(deteleTodo).put(updateTodo);

module.exports = router;
