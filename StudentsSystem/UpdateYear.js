import model from "./Model.js";
import NewUnique_Id from "./UniqueID.js";
async function updateYear() {
  try {
    let data = await model.find({});
    for (const document of data) {
      if (document.CollegeYear < 4) {
        document.CollegeYear += 1;
        document.U_id = NewUnique_Id(
          document.CollegeYear,
          document.Branch,
          document.Batch,
          document.Roll_no
        );
        await document.save();
      }else{
          await model.deleteOne({ U_id: document.U_id });
        console.log(`Student ${document.name} is already in final year`);
      }
    }
    console.log(`Year updated for all students`);
  } catch (err) {
    console.log(`mongodb operational err${err}`);
  }
}
export default updateYear;
