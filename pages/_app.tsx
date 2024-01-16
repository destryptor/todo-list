import { SessionProvider } from 'next-auth/react';
import Head from 'next/head';
import '@/styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<SessionProvider session={pageProps.session}>
			<Head>
				<title>TODO List Maker</title>
				<meta name='description' content='Todo App' />
				<link rel='manifest' href='/manifest.json' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Component {...pageProps} />
		</SessionProvider>
	);
}

export default MyApp;
