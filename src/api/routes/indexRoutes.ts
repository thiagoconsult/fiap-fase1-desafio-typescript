import { bookRoutes } from "./bookRoutes";
import { publisherRoutes } from "./publisherRoutes";
import { Router, Request, Response, NextFunction } from "express";

export const router = (app: Router) => {
  app.use("/book", bookRoutes);
  app.use("/publisher", publisherRoutes);

  app.use((req: Request, res: Response, next: NextFunction) => {
    res.sendStatus(404);
  });
};
