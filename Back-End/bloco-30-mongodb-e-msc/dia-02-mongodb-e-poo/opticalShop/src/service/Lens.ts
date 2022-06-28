import Lens, { lensSchema } from '../interfaces/Lens';
import Service, { ServiceError } from '.';
import LensModel from '../models/Lens';

class LensService extends Service<Lens> {
  constructor(model = new LensModel()) {
    super(model);
  }

  create = async (obj: Lens): Promise<Lens | ServiceError | null> => {
    const parsed = lensSchema.safeParse(obj);
    if (!parsed.success) {
      return { error: parsed.error };
    }
    return this.model.create(obj);
  };
}

export default LensService;