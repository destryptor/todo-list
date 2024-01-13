import mongoose, { Document, Schema, Model } from 'mongoose';

export interface ITask extends Document {
	user: string;
	task: string;
	deadline: Date;
	completed: boolean;
}

interface ITaskModel extends Model<ITask> {}

const taskSchema: Schema = new Schema({
	user: { type: String, required: true },
	task: { type: String, required: true },
	deadline: { type: Date, required: true },
	completed: { type: Boolean, default: false },
});

const TaskModel: ITaskModel = mongoose.models?.Task || mongoose.model<ITask, ITaskModel>('Task', taskSchema);

export default TaskModel;
