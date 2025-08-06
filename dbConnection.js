import mongoose from "mongoose";
mongoose
  .connect(
    "mongodb+srv://dev1234567zzz:9258013998@cluster0.ytokqug.mongodb.net/StudentAttendanceSystem"
  )
  .then(() => console.log(`mongodb StudentSystem connected`))
  .catch((err) => console.log(`mongodb StudentSystem error ${err}`));


