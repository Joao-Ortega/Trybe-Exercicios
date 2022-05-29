import { model as createModel } from 'mongoose';
import { IMovie, MoviesSchema } from '../schemas/MoviesSchema';

class MoviesModel {
  /*
    Criamos no construtor um model do Mongoose do tipo IBook, passando pro createModel(model do Mongoose) um nome e o schema de referência.
  */

  constructor(private movieModel = createModel<IMovie>("movies", MoviesSchema)) {}

  public async getMovies(): Promise<IMovie[]> {
    const movies = await this.movieModel.find(); 
    return movies;
  }
}

export default MoviesModel;
