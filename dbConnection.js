import mongoose from "mongoose";
require("dotenv").config({ path: "./config.env" });
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`mongodb StudentSystem connected`))
  .catch((err) => console.log(`mongodb StudentSystem error ${err}`));
