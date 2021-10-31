const mongoose = require("mongoose");
const {Schema} = require("mongoose");
require('mongoose-type-email');

const gradesSchema = mongoose.Schema({
    score: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

const StudentSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: mongoose.SchemaTypes.Email,
        required: true
    },
    faculty: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true,
        trim: true,
    },
    grades:[gradesSchema]

}, { versionKey: false, timestamps: true});

const Student = mongoose.model("Student", StudentSchema, "students");

module.exports = Student;
