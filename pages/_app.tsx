import { SessionProvider } from 'next-auth/react';
import Head from 'next/head';
import '@/styles/globals.css';
import Layout from '@/components/Layout';

function MyApp({ Component, pageProps }) {
	return (
		<SessionProvider session={pageProps.session}>
			<Head>
				<title>TODO List Maker</title>
				<meta name='description' content='Todo App' />
				<link rel='manifest' href='/manifest.json' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</SessionProvider>
	);
}

export default MyApp;
