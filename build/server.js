"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./api/app");
const PORT = process.env.PORT;
app_1.app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
