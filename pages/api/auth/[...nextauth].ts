import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import connectToDatabase from '@/utils/db';
import bcrypt from 'bcrypt';
import UserModel, { IUser } from '@/models/User';

export default NextAuth({
	providers: [
		Credentials({
			name: 'Credentials',
			credentials: {
				username: { label: 'Username', type: 'text' },
				password: { label: 'Password', type: 'password' },
				signUp: { label: 'Sign Up', type: 'boolean' },
			},
			async authorize(credentials) {
				const { username, password, signUp } = credentials;

				await connectToDatabase();

				if (signUp) {
					const hashedPassword = await bcrypt.hash(password, 10);
					const userInstance = new UserModel({ username, password: hashedPassword as string });

					try {
						const createdUser = await userInstance.save();
						return Promise.resolve({ ...createdUser, name: username });
					} catch (error) {
						console.error('Error creating user:', error);
						return Promise.resolve(null);
					}
				} else {
					const user = await UserModel.findOne({ username });

					if (user && (await bcrypt.compare(password, user.password))) {
						return Promise.resolve({ ...user, name: username });
					} else {
						return Promise.resolve(null);
					}
				}
			},
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,
	pages: {
		signIn: '/login',
	},
});
