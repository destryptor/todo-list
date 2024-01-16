require('dotenv').config();

const withPWA = require('@ducanh2912/next-pwa').default({
	dest: 'public',
	cacheOnFrontEndNAv: true,
	aggresiveFrontEndNavCaching: true,
	reloadOnOnline: true,
	swcMinify: true,
	disable: false,
	workboxOptions: {
		disableDevLogs: true,
	},
});

module.exports = withPWA({
	env: {
		MONGO_URL: process.env.MONGODB_URI,
	},
});
