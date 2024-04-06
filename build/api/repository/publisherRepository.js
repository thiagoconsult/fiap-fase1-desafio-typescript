"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publisherRepository = void 0;
const publisherEntity_1 = require("../entities/publisherEntity");
const dataSource_1 = require("../database/dataSource");
var publisherRepository;
(function (publisherRepository) {
    const repository = dataSource_1.apiDataSource.getRepository(publisherEntity_1.Publisher);
    publisherRepository.update = async (id, updatedPublisher) => {
        const _updatedPublisher = await repository.findOneBy({ id: id });
        if (_updatedPublisher) {
            _updatedPublisher.name = updatedPublisher.name;
            const result = await repository.save(_updatedPublisher);
            return result;
        }
        return null;
    };
    publisherRepository.findById = async (id) => {
        const result = await repository.find({
            where: {
                id: id,
            },
        });
        return result;
    };
    publisherRepository.del = async (id) => {
        const result = await repository.delete(id);
        return result;
    };
    publisherRepository.create = async (newPublisher) => {
        try {
            const result = await repository.save(newPublisher);
            return result;
        }
        catch (error) {
            return error;
        }
    };
    publisherRepository.getAll = async () => {
        const result = await repository.find({
            relations: {
                books: true,
            },
        });
        return result;
    };
})(publisherRepository || (exports.publisherRepository = publisherRepository = {}));
