import mongoose from 'mongoose';

const MONGO_URL = process.env.MONGODB_URI;
if (!MONGO_URL) {
	throw new Error('Invalid URI');
}

export default async function connectToDatabase() {
	const opts = {
		connectTimeoutMS: 5000,
	};

	try {
		const db = await mongoose.connect(MONGO_URL, opts);
		return db;
	} catch (e) {
		throw e;
	}
}
