import { readFileSync, writeFileSync } from "fs";

export const changeRating = (type, data, count) => {
  let teachers = JSON.parse(readFileSync("./App/db.json"));
  const _teachers = teachers.map((t) => {
    if (t[type].toLowerCase() === data.toLowerCase()) {
      t.rating += count;
    }
    return t;
  });
  writeFileSync("./App/db.json", JSON.stringify(_teachers, null, 2));
};
