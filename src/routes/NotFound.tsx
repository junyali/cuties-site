import { useEffect } from 'react';
import { createParticlesBackground } from '../utilities/particles.ts';
import { Header } from '../components/Header';
import { Divider } from '../components/Divider';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import { Konami } from '../components/Konami';

export function NotFound() {
	useEffect(() => {
		createParticlesBackground();
	}, []);
	return (
		<div className="latte min-h-screen bg-ctp-base text-ctp-text">
			<Konami/>
			<Header/>
			<Divider/>
			<NavBar/>
			<Divider/>
			<div className="flex-grow">
				<div className="items-center justify-center text-center space-y-2 px-6 py-20">
					<div className="relative inline-block">
						<div className="absolute -inset-8 bg-gradient-to-r from-ctp-pink via-ctp-mauve to-ctp-lavender blur-2xl opacity-30"></div>
						<h1 className="relative text-9xl font-bold bg-gradient-to-r from-ctp-pink via-ctp-mauve to-ctp-lavender bg-clip-text text-transparent">
							404
						</h1>
					</div>
					<h2 className="text-4xl font-bold text-ctp-pink">
						kitty not found TwT
					</h2>
					<p className="text-md text-ctp-subtext1 max-w-md mx-auto">
						you're lost if you didn't get that :3
					</p>
				</div>
			</div>
			<Divider/>
			<Footer/>
		</div>
	);
}