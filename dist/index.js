"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authorRoutes_1 = __importDefault(require("./routes/authorRoutes"));
const bookRoutes_1 = __importDefault(require("./routes/bookRoutes"));
const bodyParser = require('body-parser');
const app = (0, express_1.default)();
const port = 3000;
app.use(bodyParser.json());
app.use('/authors', authorRoutes_1.default);
app.use('/books', bookRoutes_1.default);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
exports.default = app;
