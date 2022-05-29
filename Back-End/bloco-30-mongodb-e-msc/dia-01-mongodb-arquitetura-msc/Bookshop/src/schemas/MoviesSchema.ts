import { Schema } from 'mongoose';

export interface IMovie {
  title: string;
  releaseYear: number,
  publishedYear: number;
}

/*
  Uma vez que implementamos a interface Book,
  colocamos ela entre <>, para definir o tipo
  do Schema.
*/

export const MoviesSchema = new Schema<IMovie>({
  title: { type: String, required: true },
  releaseYear: { type: Number, required: true },
  publishedYear: { type: Number, required: false },
});