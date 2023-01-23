// var express = require('express');
// const mongoose = require('mongoose');
const User = require('../models/userModel');

async function saveUser(user){
    return await User.create(user);
}

module.exports.saveUser = saveUser;
