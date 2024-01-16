
const mongoose = require('mongoose');

const employeeschema = new mongoose.Schema({

    name: {
        type: String,
        require: true,
        trim: true,
    },

    designation: {
        type: String,
        require: true,
        trim: true,
    },

    email: {
        type: String,
        require: true,
        trim: true,
    },

    phone: {
        type: String,
        require: true,
        trim: true,
    },

});

const Employee = mongoose.model('Employee',employeeschema);

module.exports = Employee;