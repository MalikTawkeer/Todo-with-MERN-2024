const express = require( 'express')
const mongoose = require('mongoose');
const todoRoutes = require('./routes/todoRoutes')
const dbUrl = `mongodb+srv://admin-malik:${import.meta.env.mongoAtlasPassword}@todo.xyk3ejy.mongodb.net/?retryWrites=true&w=majority`

const app = express()
app.use(express.json())

// 'mongodb://127.0.0.1/todo'
mongoose.connect(dbUrl);
mongoose.connection.on("error", (error) => {
    console.log("error while connecting to mongo-BD");
})

app.use(todoRoutes);

app.listen(3000, () => {
    console.log("server is running on port3000");
})