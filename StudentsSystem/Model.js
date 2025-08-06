import mongoose from "mongoose";
import UserSchema from "./Schema.js";
const model = mongoose.model("StudentSystem", UserSchema);
export default model;
