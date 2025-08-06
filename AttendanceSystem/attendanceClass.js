import getAttendanceList from "./ListOfAttendance.js";
class AttendanceClass {
  constructor(Branch, CollegeYear) {
    this.Date = new Date().toLocaleString();
    (this.Branch = Branch),
      (this.CollegeYear = CollegeYear),
      (this.attendance = []);
  }
  async init() {
    this.attendance = await getAttendanceList(this.Branch, this.CollegeYear);
    return this;
  }
}
export default AttendanceClass;
