import connectToDatabase from '@/utils/db';
import TaskModel from '@/models/Task';

export default async function handler(req, res) {
	const db = await connectToDatabase();
	if (req.method === 'POST') {
		const { user } = req.body;
		const tasks = await TaskModel.find({ user: user });
		res.status(200).json(tasks);
	} else {
		res.status(405).end();
	}
}
