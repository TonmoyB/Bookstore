import express from 'express';
import { getBooks, getBookById, createBook, updateBook, deleteBook } from '../controllers/bookController';
import { getBooksByAuthorId } from '../controllers/authorController';
import { validate } from '../middleware/validate';
import { bookSchema } from '../validators/Schema';

const router = express.Router();

router.get('/books', getBooks);
router.get('/books/:id', getBookById);
router.get('/books/author/:id', getBooksByAuthorId);
router.post('/books', validate(bookSchema), createBook);
router.put('/books/:id', validate(bookSchema), updateBook);
router.delete('/books/:id', deleteBook);

export default router;