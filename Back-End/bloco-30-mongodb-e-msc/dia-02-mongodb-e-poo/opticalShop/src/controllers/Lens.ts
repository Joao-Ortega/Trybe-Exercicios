// src/controllers/Lens.ts

import { Request, Response } from 'express';
import Controller, { RequestWithBody, ResponseError } from '.';
import LensService from '../service/Lens';
import Lens from '../interfaces/Lens';

class LensController extends Controller<Lens> {
  private _route: string;

  constructor(
    service = new LensService(),
    route = '/lenses',
  ) {
    super(service);
    this._route = route;
  }

  get route() { return this._route; }

  create = async (
    req: RequestWithBody<Lens>,
    res: Response<Lens | ResponseError>,
  ): Promise<typeof res> => {
    const { body } = req;
    try {
      const lens = await this.service.create(body);
      if (!lens) {
        return res.status(500).json({ error: this.errors.internal });
      }
      if ('error' in lens) {
        return res.status(400).json(lens);
      }
      return res.status(201).json(lens);
    } catch (err) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };

  readOne = async (
    req: Request<{ id: string; }>,
    res: Response<Lens | ResponseError>,
  ): Promise<typeof res> => {
    const { id } = req.params;
    try {
      const lens = await this.service.readOne(id);
      return lens
        ? res.json(lens)
        : res.status(404).json({ error: this.errors.notFound });
    } catch (error) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };
}

export default LensController;