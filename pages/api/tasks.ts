import connectToDatabase from '@/utils/db';
import TaskModel from '@/models/Task';

export default async function handler(req, res) {
	const db = await connectToDatabase();
	if (req.method === 'POST') {
		const { user, task, deadline, completed } = req.body;
		const newTask = new TaskModel({ user, task, deadline, completed });
		await newTask.save();
		res.status(201).json(newTask);
	} else if (req.method === 'DELETE') {
		const { id } = req.body;
		await TaskModel.findOneAndDelete({ _id: id });
		res.status(200).json({ message: 'Task deleted successfully' });
	} else if (req.method === 'PUT') {
		const { task, completed } = req.body;
		try {
			const updatedTask = await TaskModel.findOneAndUpdate({ task: task }, { $set: { completed } }, { new: true });

			if (!updatedTask) {
				res.status(404).json({ message: 'Task not found' });
				return;
			}

			res.status(200).json(updatedTask);
		} catch (error) {
			console.error('Error updating task:', error);
			res.status(500).json({ message: 'Internal Server Error' });
		}
	} else {
		res.status(405).end();
	}
}
