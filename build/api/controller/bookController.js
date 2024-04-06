"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookController = void 0;
const bookEntity_1 = require("../entities/bookEntity");
const bookRepository_1 = require("../repository/bookRepository");
var bookController;
(function (bookController) {
    bookController.healthCheck = (req, res) => {
        return res.sendStatus(200);
    };
    bookController.update = async (req, res) => {
        const id = parseInt(req.params.id);
        const updatedBook = req.body;
        const result = await bookRepository_1.bookRepository.update(id, updatedBook);
        if (result === null)
            return res.status(404).send("404 - Not Found");
        return res.json(result);
    };
    bookController.findById = async (req, res) => {
        const id = parseInt(req.params.id);
        const result = await bookRepository_1.bookRepository.getById(id);
        if (result.length === 0)
            return res.status(404).json({ error: "404 - Not Found" });
        return res.json(result);
    };
    bookController.del = async (req, res) => {
        const id = parseInt(req.params.id);
        const result = await bookRepository_1.bookRepository.del(id);
        if (result.affected === 0)
            return res.status(404).send("404 - Not Found");
        return res.json(result);
    };
    bookController.create = async (req, res) => {
        const { title, author, isbn, anoPublicacao, publisher } = req.body;
        if (!title || !author)
            return res.status(500).send("required fields: title, author");
        const newBook = new bookEntity_1.Book(title, author, isbn, anoPublicacao, publisher);
        const result = await bookRepository_1.bookRepository.create(newBook);
        return res.status(201).json(result);
    };
    bookController.getAll = async (req, res) => {
        const result = await bookRepository_1.bookRepository.getAll();
        if (result.length === 0)
            return res.status(404).send("404 - Not Found");
        return res.json({ books: result });
    };
})(bookController || (exports.bookController = bookController = {}));
