const TodoModel = require('../models/todoModel')

module.exports.getTodos = async (req, res) => {
    TodoModel.find({})
        .then((todos) => {
            return res.json(todos)
        })  
        .catch(err => {
            return res.json(err);
        })
};

module.exports.addTodo = async(req, res) => {
    TodoModel.create({
        title: req.body.title,
        status: req.body.status,
        deadline: req.body.deadline
    })
    .then((todo)=>{
        res.json(todo)
    })
    .catch( err=>{
        res.json(err)
    })
};

module.exports.updateTodo = async (req, res) => {
    const id = req.params.id;
    const updateData = {
        title: req.body.title,
        status: req.body.status,
        deadline: req.body.deadline
    }
    TodoModel.findByIdAndUpdate(id, updateData)
        .then((todo)=>{
            res.status(200).json(todo)
        })
        .catch(err => {
            res.status().json(err)
        })
};

module.exports.deleteTodo = async (req, res) => {
    const id = req.params.id;
    TodoModel.findByIdAndDelete({ _id: id })
        .then((todo) => {
            res.json(todo)
        })
        .catch(err => {
            res.json(err)
        })
};

