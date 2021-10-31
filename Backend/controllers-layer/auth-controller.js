const  Teacher = require("../models/teacher-model");
const logic = require("../business-logic-layer/auth-logic");
const { hashPassword, comparePassword } = require("../helpers/auth-helper.js");
const jwt = require("jsonwebtoken");

export const register = async (req, res) =>{
    const {name, email, password} = req.body;
    //validate params from body.
    if(!name) {
        return res.status(400).json({
            error: "Name is required"
        })
    }
    if(!password || password.length < 6) {
        return res.status(400).json({
            error: "Password is required and should be at least 6 characters."
        })
    }

    //verify the user not exist.
    const exist = await logic.getExistTeacherAsync(email);
    if(exist) {
        return res.status(400).json({
            error: "Email already in use."
        })
    }

    //hash salted the password.
    const hashedPassword = await hashPassword(password);

    const teacher = new Teacher({name, email, password: hashedPassword});
    try{
        await logic.addTeacherAsync(teacher);
        return res.json({
            ok: true,
        })
    }
    catch(err){
        console.log("REGISTER FAILED => ", err);
        return res.status(400).send("Error occurred. Please try again.")
    }

}

export const login = async(req, res) =>{
    try{
        const {email, password} = req.body;

        const teacher = await logic.getExistTeacherAsync(email);
        if(!teacher) {
            return res.status(401).json({
                error: "Teacher not found."
            })
        }

        //check password with the hashed password
        const match = await comparePassword(password, teacher.password);
        if(!match) {
            return res.status(401).json({
                error: "Wrong password."
            })
        }

        //creating jwt web token for the logged user.
        const token = jwt.sign({_id: teacher._id}, config.JWT_SECRET, {expiresIn: "1d"});

        teacher.password = undefined;

        res.json({
            token,
            teacher,
        });
    }
    catch(err){
        console.log(err);
        return res.status(400).send("Error. Please Try Again.");
    }
}

