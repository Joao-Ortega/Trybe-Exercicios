import Frame, { FrameSchema } from '../interfaces/Frame';
import Service, { ServiceError } from '.';
import FrameModel from '../models/Frame';

class FrameService extends Service<Frame> {
  constructor(model = new FrameModel()) {
    super(model);
  }

  create = async (obj: Frame): Promise<Frame | ServiceError | null> => {
    const parsed = FrameSchema.safeParse(obj);
    if (!parsed.success) {
      return { error: parsed.error };
    }
    return this.model.create(obj);
  };
}

export default FrameService;