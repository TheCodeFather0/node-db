import { Router } from "express";

export const MainRoute = new Router();

MainRoute.get("/", (req, res) => {
  res.status(200).send({
    message: "Welcome First App",
  });
});
