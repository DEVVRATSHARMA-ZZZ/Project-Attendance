import Students from "./StudentDetails.js";
import model from "./Model.js";

async function NewStudentEntry(
  name,
  Roll_no,
  Branch,
  Student_Ph,
  Father_Ph,
  Hostler,
  CollegeYear,
  Batch
) {
  let newStudent = new Students(
    name,
    Roll_no,
    Branch,
    Student_Ph,
    Father_Ph,
    Hostler,
    CollegeYear,
    Batch
  );
  try {
    const ExistingStudent = await model.find({ Student_Ph: Student_Ph });
    if (ExistingStudent.length == 0) {
      const user = new model({ ...newStudent });
      await user
        .save()
        .then(() => console.log(`student data saved`))
        .catch((err) => console.log(`student data not saved: ${err}`));
    } else {
      console.log(`Student with this 
    Contact_no :${Student_Ph} already exist`);
    }
  } catch (error) {
    console.log(`mongodb Operational error ${error}`);
  }
}
export default NewStudentEntry;
