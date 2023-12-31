const express = require('express');
const Joi = require("joi");

const todos = express.Router();
const func = require('../database/todos_db')
//get all todos by user id
todos.get('/:id',validationId, async (req, res) => {
    try {
        const data = await func.getAllTodos(req.params.id);
        if(data){
            res.json(data);
            return;
        }
        res.status(404).send();
    }
    catch (error) {
        res.status(500).send();
    };
   
})
//get all todos if the todos is done
todos.get('/:id/sort_true',validationId, async (req, res) => {
    try {
        const data = await func.showCompleteDone(req.params.id);
        if(data){
            res.json(data);
            return;
        }
        res.status(404).send();
    }
    catch (error) {
        res.status(500).send();
    };
   
})
//get all todos if the todos is not done
todos.get('/:id/sort_false',validationId, async (req, res) => {
    try {
        const data = await func.showCompleteNotDone(req.params.id);
        if(data){
            res.json(data);
            return;
        }
        res.status(404).send();
    }
    catch (error) {
        res.status(500).send();
    };
   
})
//creat a new todo
todos.post('/:id', async (req, res) => {
    try {
        const data = await func.createTodo(
            req.params.id,req.body.title,req.body.completed );
        if(data){
            res.json(data);
            return;
        }
        res.status(404).send();
    }
    catch (error) {
        res.status(500).send();
    };
   
})
//update title by id
todos.put('/:id/setTodo', async (req, res) => {
    try {
        const data = await func.setTitleTodo(req.body.title,req.params.id);
        if(data){
            res.json(data);
            return;
        }
        res.status(404).send();
    }
    catch (error) {
        res.status(500).send();
    };
   
})
//update completed successfully
todos.put('/:id/setCompleted', async (req, res) => {
    try {
        const data = await func.setComleetedTodo(
            req.params.id,req.body.completed);
        if(data){
            res.json(data);
            return;
        }
        res.status(404).send();
    }
    catch (error) {
        res.status(500).send();
    };
   
})
//delete todo
todos.delete('/:id', async (req, res) => {
    try {
        const data = await func.deleteTodo(req.params.id);
        if(data){
            res.json(data);
            return;
        }
        res.status(404).send();
    }
    catch (error) {
        res.status(500).send();
    };
   
})
//check if the id isn't number 
function validationId(req, res, next) {
    const idSchema = Joi.number().min(1);
    const { error } = idSchema.validate(req.params.id);
    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    }
    next();
}
module.exports = todos;

