const Router = require("express");
const todoController = require('../controllers/todoController')

const router = Router()

router.get('/getTodos', todoController.getTodos)

router.post('/addTodo', todoController.addTodo)

router.delete('/deleteTodo/:id', todoController.deleteTodo)

router.patch('/updateTodo/:id', todoController.updateTodo)

module.exports = router;