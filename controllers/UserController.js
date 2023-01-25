const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const User = require('../models/userModel')
const userService = require('../services/UserService');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

const getAllUsers = (req, res) => {
    userService.findAllUsers()
    .then((result) => {
        res.status(200).send(result);
    });
};

const getUserById = (req, res) => {
    userService.findUserById(req.params.id)
    .then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(404).send("No user found for id " + req.params.id);
    });
};

const createUser = (req, res) => {
    userService.saveUser(new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        handle: req.body.handle,
        phoneNumber: req.body.phoneNumber,
        password: req.body.password
    })).then((result) => {
        res.status(201).send(result);
    }).catch((err) => {
        res.status(400);
    });
};

const updateUser = (req, res) => {
    console.log({"id": req.params.id});
    userService.updateUser({"_id": req.params.id}, {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber
    }).then((result) => {
        res.status(201).send(result);
    }).catch((err) => {
        res.status(400);
    });
    res.send('Updating an existing user');
};

const deleteUser = (req, res) => {
    res.send('Deleting a user');
};

module.exports = {
    getAllUsers,
    getUserById, 
    createUser,
    updateUser,
    deleteUser
};