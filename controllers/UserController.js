const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

const getAllUsers = (req, res) => {
    res.send('Getting all users');
};

const getUserById = (req, res) => {
    res.send('Getting a user by id');
};

const createUser = (req, res) => {
    res.send('Creating a new user');
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