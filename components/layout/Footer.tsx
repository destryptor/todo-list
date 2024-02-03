import React from 'react';
import Link from 'next/link';
import { BiLogoLinkedin, BiLogoGithub, BiLogoTwitter, BiLogoInstagram } from 'react-icons/bi';
import SocialHandles from './SocialHandles';

const SocialMedia = [
	{ name: 'GitHub', link: 'https://www.github.com/destryptor', icon: BiLogoGithub },
	{ name: 'LinkedIn', link: 'https://www.linkedin.com/in/sharanya-chakraborty', icon: BiLogoLinkedin },
	{ name: 'Twitter', link: 'https://twitter.com/destryptor', icon: BiLogoTwitter },
	{ name: 'Instagram', link: 'https://www.instagram.com/sharanya_chakraborty_', icon: BiLogoInstagram },
];

const Footer = () => {
	return (
		<footer>
			<span id='footer-name'>© 2024 Sharanya Chakraborty</span>
			<div id='contact-me'>
				<span className='float-middle'>Connect with Me!</span>
			</div>
			{SocialMedia.map(({ name, link, icon }) => (
				<SocialHandles title={name} link={link} Icon={icon} key={link} />
			))}
		</footer>
	);
};

export default Footer;
