import model from "./Model.js";

function removeStudent(U_id) {
  model
    .deleteOne({ U_id: U_id })
    .then(() => console.log(`Student with U_id ${U_id} removed successfully`))
    .catch((err) => console.error(`Error removing student: ${err}`));
}
export default removeStudent;
