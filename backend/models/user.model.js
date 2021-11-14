const mongoose = require('mongoose');

const user_schema = new mongoose.Schema ({
    name: {
        type: String,
        required: true,
        min: 1
    },
    rol: {
        type: Boolean,
        required: true
    },
    state:{
        type: Boolean,
        required: true
    } 
});

module.exports = mongoose.model('users', user_schema);