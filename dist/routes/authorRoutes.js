"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authorController_1 = require("../controllers/authorController");
const router = express_1.default.Router();
router.get('/authors', authorController_1.getAuthors);
router.get('/authors/:id', authorController_1.getAuthorById);
router.post('/authors', authorController_1.createAuthor);
router.put('/authors/:id', authorController_1.updateAuthor);
router.delete('/authors/:id', authorController_1.deleteAuthor);
exports.default = router;
