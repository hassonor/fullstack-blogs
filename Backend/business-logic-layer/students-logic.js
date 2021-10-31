require("../data-access-layer/dal");
const Student = require("../models/student-model.js")

const getAllStudentsAsync = () => {
    return new Promise((resolve, reject) => {
        Student.find({}, (err, persons) => {
            if (err) {
                reject(err);
            } else {
                resolve(persons);
            }
        });
    })
}

const getStudentByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        Student.findById({_id: id}, (err, student) => {
            if (err) {
                reject(err);
            } else {
                resolve(student);
            }
        });
    })
}

const addStudentAsync = (studentObj) => {
    return new Promise((resolve, reject) => {
        let newStudent = new Student({
            fullName: studentObj.fullName,
            email: studentObj.email,
            faculty: studentObj.faculty,
            dateOfBirth: studentObj.dateOfBirth,
            grades: studentObj.grades
        })

        newStudent.save((err) => {
            err ? reject(err) : resolve("Student Created")
        })
    })
}

const updateStudentAsync = (id, studentToUpdate) => {
    return new Promise((resolve, reject) => {
        Student.findByIdAndUpdate(id,
            {
                fullName: studentToUpdate.fullName,
                email: studentToUpdate.email,
                faculty: studentToUpdate.faculty,
                dateOfBirth: studentToUpdate.dateOfBirth,
                grades: studentToUpdate.grades
            }, (err) => {
                if (err)
                    reject(err)
                else
                    resolve("Student was Successfully Updated");
            })
    })
}

const deleteStudentAsync = (id) => {
    return new Promise((resolve, reject) => {
        Student.findByIdAndDelete(id, (err)=>{
            if (err) {
                reject(err)
            }
            else{
                resolve("Student were deleted successfully!");
            }
        })
    })
}

module.exports = {
    getAllStudentsAsync,
    getStudentByIdAsync,
    addStudentAsync,
    updateStudentAsync,
    deleteStudentAsync
}
