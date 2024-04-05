import { DataSource } from "typeorm";
import { Book } from "../entities/bookEntity";
import { Publisher } from "../entities/publisherEntity";

export const apiDataSource = new DataSource({
  type: "sqlite",
  database: "./src/api/database/db.sqlite3",
  entities: [Book, Publisher],
  synchronize: true,
});
