import Link from 'next/link';
import React from 'react';
import Dropdown from './Dropdown';

const Navbar = () => {
	const dropdownLinks = [
		{ name: 'Home', href: '/' },
		{ name: 'Dashboard', href: '/dashboard' },
		{ name: 'About Me!', href: '/about' },
	];
	return (
		<nav>
			<div className='navbar-full'>
				<ul>
					<h1>TODO List App</h1>
					<div className='navbar-container'></div>
					<Dropdown links={dropdownLinks} />
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
