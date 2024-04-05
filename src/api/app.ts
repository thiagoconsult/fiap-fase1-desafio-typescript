import "reflect-metadata";
import { apiDataSource } from "./database/dataSource";
import express, { Express, NextFunction, Request } from "express";
import { router } from "./routes/indexRoutes";

export const app: Express = express();

apiDataSource
  .initialize()
  .then(() => console.log("Database started"))
  .catch((err) => console.log(err));

app.use(express.json());

router(app);
