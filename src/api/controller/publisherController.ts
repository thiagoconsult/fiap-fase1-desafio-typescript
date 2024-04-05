import { Request, Response } from "express";
import { Publisher } from "../entities/publisherEntity";
import { publisherRepository } from "../repository/publisherRepository";

export namespace publisherController {
  export const healthCheck = (req: Request, res: Response) => {
    return res.sendStatus(200);
  };

  export const update = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const updatedPublisher = <Publisher>req.body;
    const result = await publisherRepository.update(id, updatedPublisher);

    if (result === null) return res.status(404).send("404 - Not Found");

    return res.json(result);
  };

  export const findById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const result = await publisherRepository.findById(id);

    if (result.length === 0)
      return res.status(404).json({ error: "404 - Not found" });

    return res.json(result);
  };

  export const del = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const result = await publisherRepository.del(id);
    if (result.affected === 0)
      return res.status(404).json({ error: "404 - Not Found" });

    return res.json(result);
  };

  export const create = async (req: Request, res: Response) => {
    const { name } = <Publisher>req.body;
    const newPublisher = new Publisher();
    newPublisher.name = name;

    const result = await publisherRepository.create(newPublisher);

    return res.status(201).json(result);
  };

  export const getAll = async (req: Request, res: Response) => {
    const result = await publisherRepository.getAll();
    return res.json({ publishers: result });
  };
}
