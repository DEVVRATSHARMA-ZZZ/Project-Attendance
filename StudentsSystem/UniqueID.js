function NewUnique_Id(CollegeYear, Branch, Roll_no, Batch) {
    
  return `${CollegeYear}` + `${Branch}` + `${Batch}` + `${Roll_no}`;
}
export default NewUnique_Id;
