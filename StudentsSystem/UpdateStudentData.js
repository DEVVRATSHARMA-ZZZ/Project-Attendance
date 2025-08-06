import model from "./Model.js";
import NewUnique_Id from "./UniqueID.js";
async function updateField(U_id, oldField, updatedData) {
  if (oldField == "Branch" || oldField == "Roll_no") {
    try {
      await model.updateOne(
        { U_id: U_id },
        { $set: { [oldField]: updatedData } }
        
      );
      console.log( `field updated`);
      let data = await model.findOne({ U_id: U_id });
      console.log( `data fetched`);
      await model.updateOne(
        { U_id: U_id },
        {
          $set: {
            U_id: NewUnique_Id(
              data.CollegeYear,
              data.Branch,
              data.Roll_no,
              data.Batch
            ),
          },
        }
      );
      console.log(`data updated`);
    } catch (err) {
      console.log(`mongodb operational err:${err}`);
    }
  } else {
    try {
      await model.updateOne(
        { U_id: U_id },
        { $set: { [oldField]: updatedData } }
      );
      console.log(`data updated`);
    } catch (error) {
      console.log(`mongodb operational error`);
    }
  }
}
export default updateField;
