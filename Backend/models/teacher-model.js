const mongoose = require("mongoose");
const {Schema} = require("mongoose");

const TeacherSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 64
    },
}, { versionKey: false, timestamps: true});

const Teacher = mongoose.model("Teacher", TeacherSchema, "teachers");

module.exports = Teacher;
