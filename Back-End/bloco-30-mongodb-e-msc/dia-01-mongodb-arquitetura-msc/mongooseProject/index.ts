import { connect, Schema } from 'mongoose';
import { IBook } from './interfaces/booksInter';

export const bookSchema = new Schema<IBook>({
  title: { type: String, required: true },
  author: { type: String, required: true }
});

connect('mongodb://localhost:27017/meu_data_base');