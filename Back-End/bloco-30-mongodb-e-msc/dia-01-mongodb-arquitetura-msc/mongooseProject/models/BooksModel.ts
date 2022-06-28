import { model } from "mongoose";
import { bookSchema } from "..";
import { IBook } from "../interfaces/booksInter";

const bookModel = model<IBook>('books', bookSchema);