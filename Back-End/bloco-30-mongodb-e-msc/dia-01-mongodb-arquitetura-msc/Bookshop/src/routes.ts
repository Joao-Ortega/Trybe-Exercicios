import { Router } from 'express';

import BookController from './controllers/BookController';
import MoviesController from './controllers/MoviesController';

const bookController = new BookController();
const movieController = new MoviesController();
const routes = Router();

const booksId = "/books/:id";
routes.get("/movies", movieController.getBooks);
routes.get("/books", bookController.getBooks);
routes.post("/books", bookController.create);
routes.put(booksId, bookController.updateBook);
routes.delete(booksId, bookController.deleteBook);
routes.get(booksId, bookController.getBook);

export default routes;
