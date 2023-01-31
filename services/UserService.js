const User = require('../models/userModel');

async function saveUser(user){
    return await User.create(user);
}

async function findUserByUsername(userId){
    return await User.find({email: userId});
}

function findUserByUsernameSync(userId){
    return User.find({email: userId});
}

async function findAllUsers(){
    return await User.find();
}

async function updateUser(id, user){
    return await User.findOneAndUpdate(id,user,{returnOriginal: true});
}

module.exports.saveUser = saveUser;
module.exports.findUserByUsername = findUserByUsername;
module.exports.findAllUsers = findAllUsers;
module.exports.updateUser = updateUser;
module.exports.findUserByUsernameSync = findUserByUsernameSync;