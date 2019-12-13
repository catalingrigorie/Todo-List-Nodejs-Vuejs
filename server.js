const express = require('express');
const dotenv = require('dotenv');
const todos = require('./routes/todos');
const PORT = process.env.PORT || 5000;
const connectDB = require('./config/db');
const cors = require('cors');
dotenv.config({ path: './config/config.env'});

const app = express();
app.use(express.json());
app.use(cors());

connectDB();
app.use('/v1/todos', todos);

const server = app.listen(
    PORT,
    console.log(`Server running on port ${PORT}`)
);

process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    server.close(() => process.exit(1));
});
