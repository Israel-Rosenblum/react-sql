const express = require('express');
const login = express.Router();
const functions = require('../database/login_db')

login.post('/', async (req, res) => {
    const name = await functions.getUserName(req.body.name);
    if (!name) {
        res.status(404).send("The user does not exist.");
        return;
    }
    const password = await functions.getUserPassword(req.body.password);
    if (!password) {
        res.status(404).send("The password is incorrect.");
        return;
    };
    
    const login = await functions.login(name.name, password.password);
    if (!login) {
    res.status(404).send("There is no match between the name and the password.");
    return;
    }
    res.send(login);
});

module.exports = login;