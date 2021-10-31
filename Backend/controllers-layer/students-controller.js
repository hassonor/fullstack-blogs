const Student = require("../models/student-model");
const logic = require('../business-logic-layer/students-logic.js')

export const getAllStudents = async (req,res)=>{
    try{
        let data = await  logic.getAllStudentsAsync();
        return res.json(data)
    }
    catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
}

export const getStudent = async (req, res) => {
    try {
        const id = req.params.id;
        let data = await  logic.getStudentByIdAsync(id);
        return res.json(data)
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
};

export const addStudent = async (req, res) => {
    try {
        let newStudent = req.body
        let data = await logic.addStudentAsync(newStudent)
        return res.json(data)
    } catch (err) {
        console.log("There was a problem");
        return res.status(400).send("Error");
    }
};

export const updateStudent = async (req, res) => {
    try {
        let id = req.params.id
        let studentToUpdate = req.body;
        let data = await logic.updateStudentAsync(id, studentToUpdate);
        return res.json(data)
    } catch (err) {
        console.log(err);
        return res.status(400).send("Error");
    }
};

export const deleteOneStudent = async (req, res) => {
    try {
        const id = req.params.id
        let status = await logic.deleteStudentAsync(id);
        return res.json(status);
    } catch (err) {
        console.log(err);
        return res.status(400).send("Error");
    }
};
