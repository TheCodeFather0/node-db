import { changeRating } from "../Helpers/chnageRating.js";

export const setTeacherRating = (req, res, next) => {
  const name = req.query.name;
  const id = req.params.id;
  if (name) {
    changeRating("name", name, 2);
  } else if (id) {
    changeRating("id", id, 1);
  }
  next();
};
