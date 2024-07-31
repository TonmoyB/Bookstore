"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
const knex_1 = require("./knex");
const port = process.env.PORT || 3000;
(0, knex_1.runMigrations)()
    .then(() => {
    index_1.default.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
})
    .catch((error) => {
    console.error('Error running migrations:', error);
    process.exit(1);
});
