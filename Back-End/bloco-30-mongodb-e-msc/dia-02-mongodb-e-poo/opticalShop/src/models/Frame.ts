import { Schema, model as createModel, Document } from 'mongoose';
import Frame from '../interfaces/Frame';
import MongoModel from './MongoModel';

interface FrameDocument extends Frame, Document { }

const frameSchema = new Schema<FrameDocument>({
  material: String,
  color: String,
});

class FrameModel extends MongoModel<Frame> {
  constructor(model = createModel('Armacoes', frameSchema)) {
    super(model);
  }
}

export default FrameModel;