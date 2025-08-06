import model from "../StudentsSystem/Model.js";
async function getAttendanceList(Branch, CollgeYear) {
  try {
    let data = await model.find({ Branch: Branch, CollegeYear: CollgeYear });
    console.log(`Students data fetched successfully`);
    let attendanceList = [];
    for (const document of data) {
      let Student = {};
      Student.name = document.name;
      Student.Roll_no = document.Roll_no;
      Student.Present = false;
      attendanceList.push(Student);
    }
    console.log(`Attendance list created successfully`);
    attendanceList.sort((a, b) => {
      return a.Roll_no - b.Roll_no;
    });
    console.log(attendanceList);
    return attendanceList;
  } catch (err) {
    console.log(`mongodb operational err${err}`);
  }
}
export default getAttendanceList;
