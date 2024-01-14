import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

import styles from '@/styles/Login.module.css';

const LoginPage = () => {
	const router = useRouter();
	const [loginState, setLoginState] = useState(false);
	const [signupState, setSignupState] = useState(false);
	const [loginData, setLoginData] = useState({ username: '', password: '' });
	const [signupData, setSignupData] = useState({
		username: '',
		password: '',
		confirmPassword: '',
		email: '',
	});
	const [incorrectLogin, setIncorrectLogin] = useState(false);
	const [incorrectSignup, setIncorrectSignup] = useState(false);

	const handleLoginState = () => {
		setLoginState(true);
		setSignupState(false);
	};

	const handleSignupState = () => {
		setSignupState(true);
		setLoginState(false);
	};

	const handleLoginInstead = () => {
		setLoginState(true);
		setSignupState(false);
		setIncorrectSignup(false);
	};

	const handleSignupInstead = () => {
		setSignupState(true);
		setLoginState(false);
		setIncorrectLogin(false);
	};

	const handleLogin = async () => {
		const result = await signIn('credentials', { ...loginData, redirect: false });
		if (result?.ok) {
			router.push('/dashboard');
		} else {
			setIncorrectLogin(true);
		}
	};

	const handleSignup = async () => {
		if (signupData.password !== signupData.confirmPassword) {
			alert('Password and Confirm Password do not match');
			return;
		}

		const result = await signIn('credentials', {
			username: signupData.username,
			password: signupData.password,
			signUp: true,
			redirect: false,
		});

		if (result?.ok) {
			router.push('/dashboard');
		} else {
			setIncorrectSignup(true);
		}
	};

	return (
		<>
			{!loginState && !signupState ? (
				<div className={styles.container}>
					<h1>Login</h1>
					<div className={styles.buttoncontainer}>
						<button className={styles.button} onClick={handleLoginState}>
							Log in
						</button>
						<button className={styles.button} onClick={handleSignupState}>
							Sign up
						</button>
					</div>
				</div>
			) : null}

			{loginState ? (
				<div className={styles.container}>
					<h1>Login</h1>
					<div className={`${styles.formcontainer} ${styles.form}`}>
						<form className={styles.form}>
							<input type='text' className={styles.inputfield} value={loginData.username} placeholder='Username' onChange={(e) => setLoginData({ ...loginData, username: e.target.value })} />
							<input type='password' className={styles.inputfield} value={loginData.password} placeholder='Password' onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} />
						</form>
						<span className={styles.errormessage}>{incorrectLogin && 'Incorrect Username or Password'}</span>
					</div>
					<button type='button' className={styles.button} onClick={handleLogin}>
						Log in
					</button>
					<button type='button' className={styles.instead} onClick={handleSignupInstead}>
						Sign up instead
					</button>
				</div>
			) : null}

			{signupState ? (
				<div className={styles.container}>
					<h1>Login</h1>
					<div className={`${styles.formcontainer} ${styles.form}`}>
						<form className={styles.form}>
							<input type='text' className={styles.inputfield} value={signupData.username} placeholder='Username' onChange={(e) => setSignupData({ ...signupData, username: e.target.value })} />

							<input type='password' className={styles.inputfield} value={signupData.password} placeholder='Password' onChange={(e) => setSignupData({ ...signupData, password: e.target.value })} />

							<input type='password' className={styles.inputfield} value={signupData.confirmPassword} placeholder='Confirm Password' onChange={(e) => setSignupData({ ...signupData, confirmPassword: e.target.value })} />

							<span className={styles.errormessage}>{incorrectSignup && 'Please fill all the details'}</span>
						</form>
					</div>
					<button type='button' className={styles.button} onClick={handleSignup}>
						Sign up
					</button>
					<button type='button' className={styles.instead} onClick={handleLoginInstead}>
						Log in instead
					</button>
				</div>
			) : null}
		</>
	);
};

export default LoginPage;
