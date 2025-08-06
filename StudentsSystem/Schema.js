import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  U_id:String ,
  name: String,
  Roll_no: Number,
  Branch: String,
  Student_Ph: Number,
  Father_Ph: Number,
  Hostler: Boolean,
  CollegeYear: Number,
  Batch: Number,
});
export default UserSchema;
