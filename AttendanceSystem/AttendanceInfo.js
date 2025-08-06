import model from "./Model.js";
async function gettotalAttendance(Date, Branch, CollegeYear) {
  try {
    let data = await model.find({
      Date: { $regex: `^${Date}` },
      Branch: Branch,
      CollegeYear: CollegeYear,
    });
    
    console.log(`Attendance data fetched successfully`);
    let totalStudents = data[0].attendance.length;
    let totalPresent = 0;
    for (const Student of data[0].attendance) {
      if (Student.Present == true) {
        totalPresent++;
      }
    }
    console.log(`Total Students: ${totalStudents}`);
    console.log(`Total Present: ${totalPresent}`);
    return data
  } catch (err) {
    console.log(`mongodb operational err: ${err}`);
  }
}
export default gettotalAttendance;
