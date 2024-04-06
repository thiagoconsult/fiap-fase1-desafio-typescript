"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
require("reflect-metadata");
const dataSource_1 = require("./database/dataSource");
const express_1 = __importDefault(require("express"));
const indexRoutes_1 = require("./routes/indexRoutes");
exports.app = (0, express_1.default)();
dataSource_1.apiDataSource
    .initialize()
    .then(() => console.log("Database started"))
    .catch((err) => console.log(err));
exports.app.use(express_1.default.json());
(0, indexRoutes_1.router)(exports.app);
