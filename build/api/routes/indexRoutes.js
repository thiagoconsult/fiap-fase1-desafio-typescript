"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const bookRoutes_1 = require("./bookRoutes");
const publisherRoutes_1 = require("./publisherRoutes");
const router = (app) => {
    app.use("/book", bookRoutes_1.bookRoutes);
    app.use("/publisher", publisherRoutes_1.publisherRoutes);
    app.use((req, res, next) => {
        res.sendStatus(404);
    });
};
exports.router = router;
