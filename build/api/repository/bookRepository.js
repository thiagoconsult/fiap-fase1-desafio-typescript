"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRepository = void 0;
const bookEntity_1 = require("../entities/bookEntity");
const dataSource_1 = require("../database/dataSource");
var bookRepository;
(function (bookRepository) {
    const repository = dataSource_1.apiDataSource.getRepository(bookEntity_1.Book);
    bookRepository.update = async (id, updatedBook) => {
        const _updatedBook = await repository.findOneBy({ id: id });
        if (_updatedBook) {
            _updatedBook.title = updatedBook.title;
            _updatedBook.author = updatedBook.author;
            _updatedBook.isbn = updatedBook.isbn;
            _updatedBook.anoPublicacao = updatedBook.anoPublicacao;
            _updatedBook.publisher = updatedBook.publisher;
            const result = await repository.save(_updatedBook);
            return result;
        }
        return null;
    };
    bookRepository.getById = async (id) => {
        const result = await repository.find({
            where: {
                id: id,
            },
            relations: {
                publisher: true,
            },
        });
        return result;
    };
    bookRepository.del = async (id) => {
        const result = await repository.delete(id);
        return result;
    };
    bookRepository.create = async (newBook) => {
        const result = await repository.save(newBook);
        return result;
    };
    bookRepository.getAll = async () => {
        const result = repository.find({
            relations: {
                publisher: true,
            },
        });
        return result;
    };
})(bookRepository || (exports.bookRepository = bookRepository = {}));
