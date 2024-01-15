import React, { useEffect, useState } from 'react';
import styles from '@/styles/Loading.module.css';

const Loading: React.FC = () => {
	return (
		<>
			<div className={styles.container}>
				<h1>
					<div className={styles.dots}>
						Loading <div className={styles.dot1}>.</div>
						<div className={styles.dot2}>.</div>
						<div className={styles.dot3}>.</div>
					</div>
					<br></br>
				</h1>
			</div>
		</>
	);
};

export default Loading;
