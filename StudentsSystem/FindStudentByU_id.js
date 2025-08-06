import model from "./Model.js";

async function find(Name, Branch, Roll_no, U_id) {
  try {
    let query = {};
    if (Name) query.name = Name; 
    if (Branch) query.Branch = Branch;
    if (Roll_no) query.Roll_no = Roll_no;
    if (U_id) query.U_id = U_id;
    let data = await model.find(query);
    console.log("Student data found:", data);
    if (data.length === 0) {
      console.log("No student found with the provided criteria.");
      return null;
    }
    return data;
  } catch (error) {
    console.error("Error finding student by U_id:", error);
    throw error;
  }
}
export default find;
