import { Book } from "../entities/bookEntity";
import { apiDataSource } from "../database/dataSource";

export namespace bookRepository {
  const repository = apiDataSource.getRepository(Book);

  export const update = async (id: number, updatedBook: Book) => {
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

  export const getById = async (id: number) => {
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

  export const del = async (id: number) => {
    const result = await repository.delete(id);
    return result;
  };

  export const create = async (newBook: Book) => {
    const result = await repository.save(newBook);
    return result;
  };

  export const getAll = async () => {
    const result = repository.find({
      relations: {
        publisher: true,
      },
    });
    return result;
  };
}
