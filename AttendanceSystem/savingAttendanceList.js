import model from "./Model.js";
import AttendanceClass from "./attendanceClass.js";
async function saveAttendanceList(Branch, CollegeYear) {
  try {
    let info = await new AttendanceClass(Branch, CollegeYear).init();
    await model.insertOne({
      Date: info.Date,
      Branch: info.Branch,
      CollegeYear: info.CollegeYear,
      attendance: info.attendance,
    });
    console.log(`attendanceList suceesfully saved`);
  } catch (err) {
    console.log(`Mongodb operational err: ${err}`);
  }
}
export default saveAttendanceList;
