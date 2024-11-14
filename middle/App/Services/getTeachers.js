import { readFileSync } from "fs";

const getTeachers = (req, res) => {
  let teachers = JSON.parse(readFileSync("./App/db.json"));

  const name = req.query.name;
  if (name) {
    const teacher = teachers.find(
      (t) => t.name.toLowerCase() === name.toLowerCase()
    );
    if (teacher) {
      res.status(200).send(teacher);
    } else {
      res.status(404).send({ message: "Teacher not found!" });
    }
  } else {
    res.status(200).send(teachers);
  }
};

export default getTeachers;
