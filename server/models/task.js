import mongoose, { Schema } from 'mongoose';

const TaskSchema = new Schema({
    title: String,
    description: String,
    completed: { type: Boolean, default: false },
    private: { type: Boolean, default: false },
    dateAdded: { type: 'Date', default: Date.now, required: true },
    cuid: { type: 'String', required: false },
});

export const Task = mongoose.model('Task', TaskSchema);
