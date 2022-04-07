// ./routes/books.routes.ts

import { Router } from 'express';
import BookController from '../controllers/books.controller';
import validationBook from '../middlewares/books.middleware';

const router = Router();

const booksController = new BookController();

const booksSlashId = '/books/:id';

router.get('/', booksController.getAll);

router.get('/:id', booksController.getById);

router.post('/', validationBook, booksController.create);

router.put('/:id', validationBook, booksController.update);

export default router;