import styles from '@/styles/Index.module.css';

const Home = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Welcome to the TODO List App!</h1>
			<h3 className={styles.body}>This is a TODO List maker made using MongoDB, Next.js, React, and Node.js. It allows users from anywhere in the world to maintain and stick to their own TODO lists.</h3>
			<div className={styles.body}>
				<button className={styles.button}>
					<a href='/dashboard'>Click here to go to your Dashboard and make your own list!</a>
				</button>
			</div>
		</div>
	);
};

export default Home;
