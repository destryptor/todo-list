require('dotenv').config();

module.exports = {
	env: {
		MONGO_URL: process.env.MONGODB_URI,
	},
};
