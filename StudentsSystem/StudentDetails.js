import NewUnique_Id from "./UniqueID.js";
class Students {
  constructor(
    name,
    Roll_no,
    Branch,
    Student_Ph,
    Father_Ph,
    Hostler,
    CollegeYear,
    Batch
  ) {
    this.U_id = NewUnique_Id(CollegeYear, Branch, Roll_no, Batch);
    this.name = name;
    this.Branch = Branch;
    this.Hostler = Hostler;
    this.Roll_no = Roll_no;
    this.Student_Ph = Student_Ph;
    this.Father_Ph = Father_Ph;
    this.CollegeYear = CollegeYear;
    this.Batch = Batch;
  }
}

export default Students;
