import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Footer from './layout/Footer';
import Navbar from './layout/Navbar';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	const [viewportWidth, setViewportWidth] = useState(720);
	const [isHamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);
	const router = useRouter();

	const updateViewportWidth = () => {
		setViewportWidth(window.innerWidth);
	};

	const toggleHamburgerMenu = () => {
		setHamburgerMenuOpen(!isHamburgerMenuOpen);
	};

	useEffect(() => {
		updateViewportWidth();
		window.addEventListener('resize', updateViewportWidth);
		return () => window.removeEventListener('resize', updateViewportWidth);
	}, []);

	useEffect(() => {
		setHamburgerMenuOpen(false);
	}, [router.asPath]);

	return (
		<>
			<div id='page-container'>
				<div id='content-wrap'>
					<div
						style={{
							maxHeight: 0,
							maxWidth: 0,
							overflow: 'scroll',
						}}
					>
						<input autoFocus={true} />
					</div>
					<Navbar />
					<div id='pagecontent'>{children}</div>
					<Footer />
				</div>
			</div>
		</>
	);
};

export default Layout;
