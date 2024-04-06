import { Router } from "express";
import { publisherController } from "../controller/publisherController";

export const publisherRoutes = Router();

publisherRoutes.get("/healthCheck", publisherController.healthCheck);
publisherRoutes.put("/:id", publisherController.update);
publisherRoutes.get("/:id", publisherController.findById);
publisherRoutes.delete("/:id", publisherController.del);
publisherRoutes.post("/", publisherController.create);
publisherRoutes.get("/", publisherController.getAll);
