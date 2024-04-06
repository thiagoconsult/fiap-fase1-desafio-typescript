import { Request, Response } from "express";
import { Book } from "../entities/bookEntity";
import { bookRepository } from "../repository/bookRepository";

export namespace bookController {
  export const healthCheck = (req: Request, res: Response) => {
    return res.sendStatus(200);
  };

  export const update = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const updatedBook = <Book>req.body;
    const result = await bookRepository.update(id, updatedBook);

    if (result === null) return res.status(404).send("404 - Not Found");

    return res.json(result);
  };

  export const findById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const result = await bookRepository.getById(id);

    if (result.length === 0)
      return res.status(404).json({ error: "404 - Not Found" });

    return res.json(result);
  };

  export const del = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const result = await bookRepository.del(id);

    if (result.affected === 0) return res.status(404).send("404 - Not Found");

    return res.json(result);
  };

  export const create = async (req: Request, res: Response) => {
    const { title, author, isbn, anoPublicacao, publisher } = <Book>req.body;

    if (!title || !author)
      return res.status(500).send("required fields: title, author");

    const newBook = new Book(title, author, isbn, anoPublicacao, publisher);
    const result = await bookRepository.create(newBook);

    return res.status(201).json(result);
  };

  export const getAll = async (req: Request, res: Response) => {
    const result = await bookRepository.getAll();

    if (result.length === 0) return res.status(404).send("404 - Not Found");

    return res.json({ books: result });
  };
}
