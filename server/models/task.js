import mongoose, { Schema } from 'mongoose';
import cuid from 'cuid';

const TaskSchema = new Schema({ title: String,
  description: String,
  completed: { type: Boolean, default: false },
  private: { type: Boolean, default: false },
  dateAdded: { type: 'Date', default: Date.now, required: false },
  cuid: { type: 'String', default: cuid, required: true }, },
   { toObject: { virtuals: true }, toJSON: { virtuals: true } });

const Task = mongoose.model('Task', TaskSchema);
export default Task;
