import React from 'react';
import styles from '@/styles/About.module.css';

const about = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>About Me!</h1>
			<div className={styles.card}>
				<div className={styles.imgcontainer}>
					<img src='profile-pic.jpeg' alt='myimage' />
				</div>
				<div className={styles.content}>
					<p className={styles.indcontent}> Hello! I am Sharanya Chakraborty, a Computer Science and Engineering Sophomore at IIT Kharagpur. </p>
					<p className={styles.indcontent}> Backend Development fascinates me, and for that purpose, currently, I have learnt the basics of NextJS, Node.js, the Express Framework and MongoDB as a NoSQL DBMS.</p>
					<p className={styles.indcontent}> For Frontend, I have learnt about React and can use basic CSS. </p>
					<p className={styles.indcontent}> I am proficient in using C++ and C. I am also learning Python. </p>
					<p className={styles.indcontent}> Apart from that, I have learnt Advanced Java, intricacies of the SPRING framework and REST APIs, along with a bit of SQL. </p>
				</div>
			</div>
		</div>
	);
};

export default about;
