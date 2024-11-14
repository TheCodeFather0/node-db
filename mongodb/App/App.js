import express from "express";
import { client } from "./Utils/ClientDb.js";
import { MainRoute } from "./Routers/home.js";
import { MoviesRouter } from "./Routers/movies.js";
import cors from "cors";
const app = express();

app.use(cors());
app.use("/", MainRoute);
app.use("/users", MoviesRouter);

app.listen(8080, () => {
  console.log("http://localhost:8080");
  client.connect().then(() => {
    console.log("mongodb connect successfully");
  });
});
