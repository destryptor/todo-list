import connectToDatabase from '@/utils/db';
import UserModel from '@/models/User';

export default async function handler(req, res) {
	const db = await connectToDatabase();

	if (req.method === 'POST') {
		const { username } = req.body;

		try {
			const existingUser = await UserModel.findOne({ username: username });

			if (existingUser) {
				return res.status(404).json({});
			} else {
				return res.status(200).json({});
			}
		} catch (error) {
			console.error('Error:', error);
			return res.status(500).json({ error: 'Internal Server Error' });
		}
	} else {
		return res.status(405).end();
	}
}
