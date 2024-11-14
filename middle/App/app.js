import express from "express";
import { writeFileSync } from "fs";
import getTeachers from "./Services/getTeachers.js";
import { TeacherRouter } from "./Routers/TeachersRotues.js";
import getBestTeacher from "./Services/getBestTeacher.js";

const app = express();

// midlleware
app.get((req, res) => {
  res.send({
    message: "welcome home page",
  });
});

app.use("/teachers", TeacherRouter);
app.get("/best-teacher", getBestTeacher);

app.listen(8080, () => {
  console.log(`http://localhost:8080`);
});
