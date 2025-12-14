import { Header } from '../components/Header.tsx';
import { Divider } from '../components/Divider.tsx';
import { NavBar } from '../components/NavBar.tsx';
import { Footer } from '../components/Footer.tsx';
import { Project } from '../components/Project.tsx';
import { projects } from '../utilities/projects.ts';
import { Konami } from '../components/Konami';

export function Projects() {
	return (
		<div className="latte min-h-screen bg-ctp-base text-ctp-text">
			<Konami/>
			<Header/>
			<Divider/>
			<NavBar/>
			<Divider/>
			<section className="max-w-9xl mx-auto px-6 py-12 space-y-12">
				<div className="text-center space-y-4">
					<div className="relative inline-block transition-transform duration-300 ease-in-out hover:scale-110 hover:-rotate-4">
						<div className="absolute -inset-4 bg-gradient-to-r from-ctp-pink via-ctp-mauve to-ctp-lavender blur-lg opacity-20"></div>
						<h1 className="text-5xl text-ctp-pink font-bold">
							my projects
						</h1>
					</div>
					<p className="text-xl text-ctp-subtext1">
						silly use[ful/less] things i've made mraow~ :3
					</p>
				</div>
				<div className="space-y-6">
					{projects.map((project, index) => (
						<Project key={index} project={project}/>
					))}
				</div>
			</section>
			<Divider/>
			<Footer/>
		</div>
	);
}