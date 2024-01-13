import Link from 'next/link';

const Home = () => {
	return (
		<div>
			<h1>Welcome to the Todo App</h1>
			<p>This is a simple Todo application using MongoDB, Next.js, React, and Node.js.</p>
			<p>
				<Link href='/dashboard'>
                    Go to Dashboard
				</Link>
			</p>
		</div>
	);
};

export default Home;
