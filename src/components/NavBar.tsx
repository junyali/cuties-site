import { NavItem } from './NavItem';

import HomeImg from '../assets/nav_home.png';
import ProjectsImg from '../assets/nav_projects.png';
import ContactImg from '../assets/nav_contact.png';

export function NavBar() {
	return (
		<nav className="max-w-4xl mx-auto px-6 py-2">
			<div className="flex items-center justify-center gap-4 md:gap-6">
				<NavItem image={HomeImg} label="Home" href="/" />
				<NavItem image={ProjectsImg} label="Projects" href="/projects" />
				<NavItem image={ContactImg} label="Contact" href="/contact" />
			</div>
		</nav>
	);
}