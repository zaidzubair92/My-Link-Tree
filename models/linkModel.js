const mongoose = require('mongoose');

const link = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Link", link);