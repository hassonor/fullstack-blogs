require("../data-access-layer/dal");
const  Teacher = require("../models/teacher-model");

 function getExistTeacherAsync(email) {
    return Teacher.findOne({ email }).exec();

}

function addTeacherAsync(teacher){
    return teacher.save();
}

module.exports = {
    getExistTeacherAsync,
    addTeacherAsync,
};
