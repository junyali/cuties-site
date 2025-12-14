import { useLocation } from 'react-router';
import { WaveText } from './WaveText.tsx';

const pages: Record<string, string> = {
	'/': 'home sweet home ❀◕ ‿ ◕❀',
	'/projects': 'my projects (♡ >ω< ♡)',
	'/contact': 'contact junya ≧◡≦'
}

export function Header() {
	const location = useLocation();
	const subtitle = pages[location.pathname] || 'lost... ╚(•⌂•)╝';
	return (
		<header className="max-w-7xl mx-auto flex items-center justify-center gap-6 px-6 py-8">
			<div className="relative">
				<div className="absolute -inset-4 bg-gradient-to-r from-ctp-pink via-ctp-mauve to-ctp-lavender rounded-full blur-2xl opacity-30"></div>
				<img
					src="/junyacat.png"
					alt="meow"
					className="relative w-24 h-24 rounded-2xl border-4 border-ctp-pink/30 shadow-lg"
				/>
			</div>
			<div>
				<WaveText text="junyaverse" />
				<p className="text-sm text-ctp-subtext0 mt-1">{subtitle}</p>
			</div>
		</header>
	);
}