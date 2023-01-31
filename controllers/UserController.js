const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const User = require('../models/userModel')
const userService = require('../services/UserService');
const authenticationService = require('../services/AuthenticationService');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

const getAllUsers = (req, res) => {
    userService.findAllUsers()
    .then((result) => {
        res.status(200).send(result);
    });
};

const findUserByUsername = (req, res) => {
    userService.findUserByUsername(req.params.id)
    .then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(404).send("No user found for id " + req.params.id);
    });
};

const createUser = (req, res, next) => {
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
        if (err.name === 'MongoServerError' && err.code === 11000) {
            // Duplicate username
            return res.status(422).send({ succes: false, message: 'User already exist!' });
        }else{
            // Some other error
            return res.status(422).send(err);
        }
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

const createAccessToken = (req, res) => {
    const token = authenticationService.createAccessToken(req.body.email, req.body.password)
    res.status(200).send(token);
};

const authenticateToken = (req, res, next) => {
    authenticationService.authenticateToken(req, res, next);
    const email = req.user.email;
    console.log('email', email);
    userService.findUserByUsername(email)
    .then((result) => {
        const found = result[0].email === req.body.email;
        if(found){
            res.status(200).json({ succes: true, message: 'User Authenticated' });
        }else{
            res.status(401).json({ succes: false, message: 'User Not authenticated' });
        }
    }).catch((err) => {
        console.log(err.name, err.code);
        if (err.name === 'NotFoundError') {
            // Duplicate username
            return res.status(404).send({ succes: false, message: 'User not found' });
        }else{
            // Some other error
            return res.status(422).send(err);
        }
    });
}

module.exports = {
    getAllUsers,
    findUserByUsername, 
    createUser,
    updateUser,
    deleteUser,
    createAccessToken,
    authenticateToken
};