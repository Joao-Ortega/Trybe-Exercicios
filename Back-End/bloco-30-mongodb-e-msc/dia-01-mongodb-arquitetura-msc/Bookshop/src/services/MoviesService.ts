import MoviesModel from '../models/MoviesModel';
import { IMovie } from '../schemas/MoviesSchema';

class MoviesService {
  constructor(private movieModel = new MoviesModel()) {}

  public async getMovies(): Promise<IMovie[]> {
    const movies = await this.movieModel.getMovies();
    return movies;
  }

  // public async createBook(bookData: object): Promise<IBook> {
  //   const book = await this.bookModel.createBook(bookData);
  //   return book;
  // }

  // public async getBook(id: string): Promise<IBook | null> {
  //   const data = await this.bookModel.getBook(id);
  //   return data;
  // }

  // public async updateBook(id: string, bookData: object): Promise<IBook | null> {
  //   const data = await this.bookModel.editBook(id, bookData);
  //   return data;
  // }

  // public async deleteBook(id: string): Promise<IBook | null> {
  //   const data = await this.bookModel.deleteBook(id);
  //   return data;
  // }
}

export default MoviesService;
