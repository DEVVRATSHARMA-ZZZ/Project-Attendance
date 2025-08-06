import express from "express";
import mongoose from "mongoose";
import Attendancerouter from "./AttendanceSystem/routes.js";
import Studentrouter from "./StudentsSystem/Routes.js";
const app = express();
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://dev1234567zzz:9258013998@cluster0.ytokqug.mongodb.net"
  )
  .then(() => console.log(`mongodb connected`))
  .catch((err) => console.log(`mongodb error ${err}`));
app.use("/api/students", Studentrouter);
app.use("/api/attendance", Attendancerouter);
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
