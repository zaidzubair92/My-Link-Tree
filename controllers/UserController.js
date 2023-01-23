const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const User = require('../models/userModel')
const userService = require('../services/UserService');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

const getAllUsers = (req, res) => {
    res.send('Getting all users');
};

const getUserById = (req, res) => {
    res.send('Getting a user by id');
};

const createUser = (req, res) => {
    const newUser = userService.saveUser(new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        handle: req.body.handle,
        phoneNumber: req.body.phoneNumber,
        password: req.body.password
    })).then((result) => {
        res.status(201).send(result);
    });
};

const updateUser = (req, res) => {
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