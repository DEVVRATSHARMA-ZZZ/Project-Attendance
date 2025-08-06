import model from "./Model.js";
async function MarkAttendance(Branch, Date, CollegeYear, rollNumbers) {
  try {
    const record = await model.findOne({
      Branch: Branch,
      Date: { $regex: `^${Date}` },
      CollegeYear: CollegeYear,
    });

    if (!record) {
      console.log("❌ No matching attendance record found");
      return;
    }

    record.attendance.forEach((student) => {
      if (rollNumbers.includes(student.Roll_no)) {
        student.Present = true;
      }
    });

    await record.save();
    console.log("✅ Attendance updated for:", rollNumbers);
  } catch (error) {
    console.error("❌ Error updating attendance:", error);
  }
}
export default MarkAttendance;
