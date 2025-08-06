import express from "express";
import find from "./FindStudentByU_id.js";
import NewStudentEntry from "./NewStudentEntry.js";
import removeallStudents from "./removeAllStudents.js";
import removeStudent from "./RemoveStudent.js";
import updateField from "./UpdateStudentData.js";
import updateYear from "./UpdateYear.js";
const Studentrouter = express.Router();
Studentrouter.get("/findStudent", async (req, res) => {
  try {
    const { name, Branch, Roll_no, U_id } = req.query;
    const student = await find(name, Branch, Roll_no, U_id);
    if (student) {
      res.json(student);
    } else {
      res.status(404).json({ message: "Student not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to find student" });
  }
});
Studentrouter.post("/newStudent", async (req, res) => {
  try {
    const {
      name,
      Roll_no,
      Branch,
      Student_Ph,
      Father_Ph,
      Hostler,
      CollegeYear,
      Batch,
    } = req.body;
    await NewStudentEntry(
      name,
      Roll_no,
      Branch,
      Student_Ph,
      Father_Ph,
      Hostler,
      CollegeYear,
      Batch
    );
    res.status(201).json({ message: "New student added successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to add new student" });
  }
});
Studentrouter.delete("/removeStudent/:U_id", async (req, res) => {
  try {
    const { U_id } = req.params;
    await removeStudent(U_id);
    res
      .status(200)
      .json({ message: `Student with U_id ${U_id} removed successfully` });
  } catch (error) {
    res.status(500).json({ error: "Failed to remove student" });
  }
});
Studentrouter.delete("/removeAllStudents", async (req, res) => {
  try {
    await removeallStudents();
    res.status(200).json({ message: "All students removed successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to remove all students" });
  }
});
Studentrouter.put(
  "/updateField/:U_id/:oldField/:updatedData",
  async (req, res) => {
    try {
      const { U_id, oldField, updatedData } = req.params;

      await updateField(U_id, oldField, updatedData);
      res.status(200).json({ message: "Field updated successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to update field" });
    }
  }
);

Studentrouter.put("/updateYear", async (req, res) => {
  try {
    await updateYear();
    res.status(200).json({ message: "Year updated for all students" });
  } catch (error) {
    res.status(500).json({ error: "Failed to update year" });
  }
});
export default Studentrouter;
