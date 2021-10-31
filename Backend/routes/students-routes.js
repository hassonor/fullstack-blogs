const express = require("express");
const {getAllStudents, getStudent, addStudent, updateStudent,deleteOneStudent} = require("../controllers-layer/students-controller");
const {requireSignIn} = require("../middlewares/auth-middleware");
const router = express.Router();

router.get("/students",requireSignIn, getAllStudents);
router.get("/students/:id",requireSignIn, getStudent);

router.post("/students",requireSignIn, addStudent);
router.put("/students/:id",requireSignIn, updateStudent);

router.delete("/students/:id",requireSignIn, deleteOneStudent);

module.exports = router;
