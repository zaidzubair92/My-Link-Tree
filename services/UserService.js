const User = require('../models/userModel');

async function saveUser(user){
    return await User.create(user);
}

async function findUserById(userId){
    return await User.findById(userId);
}

async function findAllUsers(){
    return await User.find();
}

async function updateUser(id, user){
    return await User.findOneAndUpdate(id,user,{returnOriginal: true});
}


module.exports.saveUser = saveUser;
module.exports.findUserById = findUserById;
module.exports.findAllUsers = findAllUsers;
module.exports.updateUser = updateUser;
