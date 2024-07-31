import express from 'express';
import {
    getAuthors, getAuthorById, getBooksByAuthorId, createAuthor, updateAuthor, deleteAuthor
} from '../controllers/authorController';
import { validate } from '../middleware/validate';
import { authorSchema } from '../validators/Schema';

const router = express.Router();

router.get('/authors', getAuthors);
router.get('/authors/:id', getAuthorById);
router.get('/authors/:id/books', getBooksByAuthorId);
router.post('/authors', validate(authorSchema), createAuthor);
router.put('/authors/:id', validate(authorSchema), updateAuthor);
router.delete('/authors/:id', deleteAuthor);

export default router;