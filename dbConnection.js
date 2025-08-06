import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log(`mongodb StudentSystem connected`))
  .catch((err) => console.log(`mongodb StudentSystem error ${err}`));
