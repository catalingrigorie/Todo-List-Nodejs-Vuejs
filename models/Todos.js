const mongoose = require('mongoose');

const Todo = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        maxlength: 500
    },
    priority: {
        type: String,
        default: 'low'
    },
    createdAT: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Todo', Todo);
