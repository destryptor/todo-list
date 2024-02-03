import React from 'react';
import { useState, useEffect } from 'react';
import DropdownItem from './DropdownItem';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';

interface DropdownProps {
	links: { name: string; href: string }[];
}

const Dropdown: React.FC<DropdownProps> = ({ links }) => {
	const [isOpen, setIsOpen] = useState(false);

	const burgerOnClick = () => {
		setIsOpen(!isOpen);
	};

	const closeDropdown = () => {
		setIsOpen(false);
	};

	return (
		<div style={{ float: 'right', marginTop: '5px' }} id='dropdown'>
			<Link href='#' className='dropbtn' target='_self'>
				<GiHamburgerMenu size={30} onClick={burgerOnClick} />
			</Link>
			<div className={`dropdown-content ${isOpen ? 'open' : ''}`}>
				{links.map(({ name, href }) => (
					<DropdownItem label={name} link={href} key={href} onClick={closeDropdown} />
				))}
			</div>
		</div>
	);
};

export default Dropdown;
