const Todo = require("../models/Todos");

/**
 * @description Create a new to-do.
 * @route POST /v1/todos
 */
exports.createTodo = async (req, res, next) => {
    try {
        const todo = await Todo.create(req.body);

        res.status(201).json({
            success: true,
            data: todo
        });
    } catch (err) {
        res.status(400).json({ success: false });
    }
};

/**
 * @description Get all todo tasks.
 * @route /v1/todos
 */
exports.getTodos = async (req, res, next) => {
    try {
        const todos = await Todo.find({}).sort({ _id: -1 });

        res.status(200).json({
            success: true,
            count: todos.length,
            todos
        });
    } catch (err) {
        res.status(400).json({
            success: false
        });
    }
};

/**
 * @description search todos.
 * @route /v1/todos
 */
exports.search = async (req, res, next) => {
    try {
        let todos = null;
        let query = new RegExp(req.query.name);

        if (query) {
            todos = await Todo.find({
                name: { $regex: query }
            }).sort({ _id: -1 });
        } else {
            todos = await Todo.find({}).sort({ _id: -1 });
        }

        res.status(200).json({
            success: true,
            count: todos.length,
            todos
        });
    } catch (err) {
        res.status(400).json({
            success: false
        });
    }
};

/**
 * @description Get a single todo task.
 * @route /v1/todos
 */
exports.getTodo = async (req, res, next) => {
    try {
        const todo = await Todo.findById(req.params.id);

        if (!todo) {
            return res.status(400).json({ success: false });
        }

        res.status(200).json({
            success: true,
            data: todo
        });
    } catch (err) {
        res.status(400).json({
            success: false
        });
    }
};

/**
 * @description Detele a todo task
 * @route /v1/todos/:id
 */
exports.deleteTodo = async (req, res, next) => {
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id);

        if (!todo) {
            return res.status(400).json({ success: false });
        }

        res.status(200).json({
            success: true,
            data: {}
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            msg: err.message
        });
    }
};

/**
 * @description Update a todo task
 * @route /v1/todos/:id
 */
exports.updateTodo = async (req, res, next) => {
    try {
        const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });

        if (!todo) {
            return res.status(400).json({ success: false });
        }

        res.status(200).json({
            success: true,
            data: todo
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            msg: err.message
        });
    }
};
