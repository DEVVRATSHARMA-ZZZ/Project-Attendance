import mongoose from "mongoose";
import UserSchema from "./Schema.js";
const model = mongoose.model("AttendanceSystem", UserSchema);
export default model;