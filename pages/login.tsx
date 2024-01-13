import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

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
	};

	const handleSignupInstead = () => {
		setSignupState(true);
		setLoginState(false);
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
		}
	};

	return (
		<div>
			<h1>Login</h1>
			{!loginState && !signupState ? (
				<>
					<button onClick={handleLoginState}>Log in</button>
					<button onClick={handleSignupState}>Sign up</button>
				</>
			) : null}

			{loginState ? (
				<div>
					<form>
						<label>
							Username:
							<input type='text' value={loginData.username} onChange={(e) => setLoginData({ ...loginData, username: e.target.value })} />
						</label>
						<label>
							Password:
							<input type='password' value={loginData.password} onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} />
						</label>
						<button type='button' onClick={handleLogin}>
							Log in
						</button>
						<button type='button' onClick={handleSignupInstead}>
							Sign up instead
						</button>
					</form>
					<span style={{ color: 'red' }}>{incorrectLogin && 'Incorrect Username or Password'}</span>
				</div>
			) : null}

			{signupState ? (
				<div>
					<form>
						<label>
							Username:
							<input type='text' value={signupData.username} onChange={(e) => setSignupData({ ...signupData, username: e.target.value })} />
						</label>
						<label>
							Password:
							<input type='password' value={signupData.password} onChange={(e) => setSignupData({ ...signupData, password: e.target.value })} />
						</label>
						<label>
							Confirm Password:
							<input type='password' value={signupData.confirmPassword} onChange={(e) => setSignupData({ ...signupData, confirmPassword: e.target.value })} />
						</label>
						<button type='button' onClick={handleSignup}>
							Sign up
						</button>
						<button type='button' onClick={handleLoginInstead}>
							Log in instead
						</button>
					</form>
				</div>
			) : null}
		</div>
	);
};

export default LoginPage;
