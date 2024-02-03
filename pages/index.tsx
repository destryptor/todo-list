import styles from '@/styles/Index.module.css';

const Home = () => {
	return (
		<div className={styles.container}>
			<div className={styles.box}>
				<h1 className={styles.title}>Welcome to the TODO List App!</h1>
				<h3 className={styles.body}>This is a TODO List maker made using MongoDB, Next.js, React, and Node.js. It allows users from anywhere in the world to maintain and stick to their own TODO lists.</h3>
				<div className={styles.body}>
					<button className={styles.button}>
						<a href='/dashboard'>Click here to go to your Dashboard and make your own list!</a>
					</button>
				</div>
				<div className={styles.salientfeatures}>
					<h2> Salient Features</h2>
					<div className={styles.feature}>Add, remove or check tasks as completed.</div>
					<div className={styles.feature}>Safe login and protection of lists with the help of NextAuth.</div>
					<div className={styles.feature}>Each task has its own deadline. Tasks are sorted by their deadlines.</div>
					<div className={styles.feature}>Lists are persisted using MongoDB, hence no worries about losing your list once you close the app!</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
