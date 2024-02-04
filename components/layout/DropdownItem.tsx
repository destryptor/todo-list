import React from 'react';
import Link from 'next/link';

interface DropdownItemProps {
	label: string;
	link: string;
	onClick: () => void;
}

const DropdownItem: React.FC<DropdownItemProps> = ({ label, link, onClick }) => {
	return (
		<Link href={link} onClick={onClick} className='item'>
			{label}
		</Link>
	);
};

export default DropdownItem;
