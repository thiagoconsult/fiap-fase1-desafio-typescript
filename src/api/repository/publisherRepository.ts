import { Publisher } from "../entities/publisherEntity";
import { apiDataSource } from "../database/dataSource";

export namespace publisherRepository {
  const repository = apiDataSource.getRepository(Publisher);

  export const update = async (id: number, updatedPublisher: Publisher) => {
    const _updatedPublisher = await repository.findOneBy({ id: id });

    if (_updatedPublisher) {
      _updatedPublisher.name = updatedPublisher.name;
      const result = await repository.save(_updatedPublisher);

      return result;
    }

    return null;
  };

  export const findById = async (id: number) => {
    const result = await repository.find({
      where: {
        id: id,
      },
    });

    return result;
  };

  export const del = async (id: number) => {
    const result = await repository.delete(id);

    return result;
  };

  export const create = async (newPublisher: Publisher) => {
    try {
      const result = await repository.save(newPublisher);
      return result;
    } catch (error) {
      return error;
    }
  };

  export const getAll = async () => {
    const result = await repository.find({
      relations: {
        books: true,
      },
    });
    return result;
  };
}
