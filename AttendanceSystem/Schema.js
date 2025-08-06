import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  Date: String,
  Branch: { type: String, required: true },
  CollegeYear: { type: Number, required: true },
  attendance: [
    {
      name: { type: String, required: true },
      Roll_no: { type: Number, required: true },
      Present: { type: Boolean, required: true },
    },
  ],
});
export default UserSchema;
