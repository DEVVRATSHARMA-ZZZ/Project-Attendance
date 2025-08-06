import model from "./Model.js";
function removeallStudents() {
  model
    .deleteMany({})
    .then(() => console.log("All students removed successfully"))
    .catch((err) => console.error(`Error removing students: ${err}`));
}
export default removeallStudents;
