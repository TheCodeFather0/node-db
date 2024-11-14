import { Router } from "express";
import { client } from "../Utils/ClientDb.js";

export const MoviesRouter = new Router();

MoviesRouter.get("/", (req, res) => {
  client
    .db("sample_mflix")
    .collection("users")
    .find()
    .toArray()
    .then((value) => {
      res.send(value);
    });
});
