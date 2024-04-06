"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiDataSource = void 0;
const typeorm_1 = require("typeorm");
const bookEntity_1 = require("../entities/bookEntity");
const publisherEntity_1 = require("../entities/publisherEntity");
exports.apiDataSource = new typeorm_1.DataSource({
    type: "sqlite",
    database: "./build/api/database/db.sqlite3",
    entities: [bookEntity_1.Book, publisherEntity_1.Publisher],
    synchronize: true,
});
