import express from "express";
import gettotalAttendance from "./AttendanceInfo.js";
import getAttendanceList from "./ListOfAttendance.js";
import saveAttendanceList from "./savingAttendanceList.js";
import MarkAttendance from "./Markattendance.js";
const Attendancerouter = express.Router();
Attendancerouter.get("/totalAttendance", async (req, res) => {
  try {
    const { Date, Branch, CollegeYear } = req.query;
    const attendance = await gettotalAttendance(Date, Branch, CollegeYear);
    res.json(attendance);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch total attendance" });
  }
});
Attendancerouter.get("/attendanceList", async (req, res) => {
  try {
    const { Branch, CollegeYear } = req.query;
    const attendanceList = await getAttendanceList(Branch, CollegeYear);
    res.json(attendanceList);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch attendance list" });
  }
});
Attendancerouter.post("/saveAttendance", async (req, res) => {
  try {
    const { Branch, CollegeYear } = req.body;
    await saveAttendanceList(Branch, CollegeYear);
    res.status(200).json({ message: "Attendance list saved successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to save attendance list" });
  }
});
Attendancerouter.put("/markAttendance", async (req, res) => {
  try {
    const { Branch, Date, CollegeYear, rollNumbers } = req.body;

    if (!Branch || !Date || !CollegeYear || !Array.isArray(rollNumbers)) {
      return res.status(400).json({ error: "Missing or invalid parameters" });
    }

    await MarkAttendance(Branch, Date, CollegeYear, rollNumbers);

    res
      .status(200)
      .json({ message: "Attendance marked successfully", rollNumbers });
  } catch (error) {
    res.status(500).json({ error: "Failed to mark attendance" });
  }
});

export default Attendancerouter;
