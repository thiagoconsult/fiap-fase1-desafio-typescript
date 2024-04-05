import { Router, Request, Response } from "express";
import { bookController } from "../controller/bookController";

export const bookRoutes = Router();

bookRoutes.get("/healthCheck", bookController.healthCheck);
bookRoutes.put("/:id", bookController.update);
bookRoutes.get("/:id", bookController.findById);
bookRoutes.delete("/:id", bookController.del);
bookRoutes.post("/", bookController.create);
bookRoutes.get("/", bookController.getAll);
