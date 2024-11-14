import { readFileSync } from "fs";

const getBestTeacher = (req, res) => {
  let teachers = JSON.parse(readFileSync("./App/db.json"));
  teachers.sort((a, b) => (a.rating > b.rating ? -1 : 0));

  res.status(200).send(teachers[0]);
};

export default getBestTeacher;
