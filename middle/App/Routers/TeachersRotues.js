import { Router } from "express";
import getTeachers from "../Services/getTeachers.js";
import getTeacherById from "../Services/getTeacherById.js";
import { setTeacherRating } from "../Middleware/teachers.js";

export const TeacherRouter = new Router();

TeacherRouter.get("/", setTeacherRating, getTeachers);
TeacherRouter.get("/:id", setTeacherRating, getTeacherById);
