"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publisherController = void 0;
const publisherEntity_1 = require("../entities/publisherEntity");
const publisherRepository_1 = require("../repository/publisherRepository");
var publisherController;
(function (publisherController) {
    publisherController.healthCheck = (req, res) => {
        return res.sendStatus(200);
    };
    publisherController.update = async (req, res) => {
        const id = parseInt(req.params.id);
        const updatedPublisher = req.body;
        const result = await publisherRepository_1.publisherRepository.update(id, updatedPublisher);
        if (result === null)
            return res.status(404).send({ error: "404 - Not Found" });
        return res.json(result);
    };
    publisherController.findById = async (req, res) => {
        const id = parseInt(req.params.id);
        const result = await publisherRepository_1.publisherRepository.findById(id);
        if (result.length === 0)
            return res.status(404).json({ error: "404 - Not found" });
        return res.json(result);
    };
    publisherController.del = async (req, res) => {
        const id = parseInt(req.params.id);
        const result = await publisherRepository_1.publisherRepository.del(id);
        if (result.affected === 0)
            return res.status(404).json({ error: "404 - Not Found" });
        return res.json(result);
    };
    publisherController.create = async (req, res) => {
        const { name, books } = req.body;
        if (!name)
            return res.status(500).send({ error: "Required field: name" });
        const newPublisher = new publisherEntity_1.Publisher(name, books);
        const result = await publisherRepository_1.publisherRepository.create(newPublisher);
        return res.status(201).json(result);
    };
    publisherController.getAll = async (req, res) => {
        const result = await publisherRepository_1.publisherRepository.getAll();
        if (result.length === 0)
            return res.status(404).send({ error: "404 - Not Found" });
        return res.json({ publishers: result });
    };
})(publisherController || (exports.publisherController = publisherController = {}));
