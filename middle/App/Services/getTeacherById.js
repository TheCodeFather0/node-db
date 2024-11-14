import { readFileSync } from "fs";

const getTeacherById = (req, res) => {
  let teachers = JSON.parse(readFileSync("./App/db.json"));

  const id = req.params.id;
  const teacher = teachers.find((t) => t.id === id);
  if (teacher) {
    res.status(200).send(teacher);
  } else {
    res.status(404).send({
      message: "Teacher not found",
    });
  }
};

export default getTeacherById;
