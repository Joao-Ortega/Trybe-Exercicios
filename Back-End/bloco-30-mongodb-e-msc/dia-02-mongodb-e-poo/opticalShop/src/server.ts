import express, { Router } from 'express';
import connectToDatabase from './models/connection';

class App {
  private app: express.Application;

  constructor() {
    this.app = express();
    this.app.use(express.json());
  }

  public startServer(port = 3001) {
    connectToDatabase();
    const actualPort = process.env.PORT || port;
    return this.app.listen(
      actualPort,
      () => console.log('Estamos online na porta: ', actualPort),
    );
  }

  public addRouter(router: Router) {
    this.app.use(router);
  }
}

export default App;