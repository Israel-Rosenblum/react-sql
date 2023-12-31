const express = require('express');
const joi = require('joi');
const posts = express.Router();
const functions = require('../database/post_db');
const funCom = require('../database/comments_db');

//check if the id is number
function validationId(req, res, next) {
    const schema = joi.number().min(1);
    const { error } = schema.validate(req.params.id);
    if (error) {
        res.status(400).send(error.details[0].message);
        return
    }
    next();
};
//get all the posts
posts.get('/', async (req, res) => {
    try {
        const data = await functions.getAllTitlesOfposts();
        res.json(data);
        return;
    } catch (err) {
        res.status(500).send();
    }
});
//get five posts
posts.get('/five', async (req, res) => {
    try {
        const data = await functions.getFIVETitlesOfposts();
        res.json(data);
        return;
    } catch (err) {
        res.status(500).send();
    }
});
//get a body of the post
posts.get('/:id',validationId , async (req, res) => {
    try {
        const data = await functions.getBodyOfPost(req.params.id);
        res.json(data);
        return;
    } catch (err) {
        res.status(500).send();
    }
});
//creat a new post
posts.post('/', async (req, res) => {
    try {
        const data = await functions.createPost(req.body.userId, req.body.title, req.body.body);
        if (data) {
            res.json(data);
            return;
        }
    } catch (err) {
        res.status(500).send();
    }
});
//update post
posts.put('/:id',validationId, async (req, res) => {
    try {
        const data = await functions.updateBodyPost(req.params.id, req.body.body);
        if (data) {
            res.json(data);
            return;
        }
    } catch (err) {
        res.status(500).send();
    }
});
//delete post
posts.delete('/:id',validationId, async (req, res) => {
    try {
        const data = await functions.deletePost(req.params.id);
        if (data) {
            res.json(data);
            return;
        }
    } catch (err) {
        res.status(500).send();
    }
});
//get comments
posts.get('/:postId/comments/', async (req, res) => {
    try {
        const data = await funCom.getComments(req.params.postId);
        res.json(data);
        return;
    } catch (err) {
        res.status(500).send();
    }
});
//add comment
posts.post('/:postId', validationId, async (req, res) => {
    try {
        const data = await funCom.addComment(req.params.postId, req.body.name, req.body.body);
        res.json(data);
        return;
    } catch (err) {
        res.status(500).send();
    }
});
//delete comment
posts.delete('/:id/comments/',validationId, async (req, res) => {
    try {
        const data = await funCom.deleteComment(req.params.id);
        res.json(data);
        return;
    } catch (err) {
        res.status(500).send();
    }
});

module.exports = posts;