import { Header } from '../components/Header';
import { Divider } from '../components/Divider';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import { Konami } from '../components/Konami';

export function Contact() {
	const contacts =[
		{ name: "Signal", hover: "junya.03", href: "https://signal.me/#eu/pkmiCcXY0odJVH5kQ5JiguS1NKygzIyhDJvCifY9ETuQjR6AkI9JUaXRJmSlca8D" },
		{ name: "GitHub", hover: "junyali", href: "https://github.com/junyali" },
		{ name: "Email", hover: "cuties[-at-]kafka.moe", href: null },
		{ name: "Instagram", hover: "_junyanya", href: "https://instagram.com/_junyanya" }
	]

	return (
		<div className="latte min-h-screen bg-ctp-base text-ctp-text">
			<Konami/>
			<Header/>
			<Divider/>
			<NavBar/>
			<Divider/>
			<div className="flex-grow">
				<div className="items-center justify-center text-center space-y-2 px-6 py-20">
					<div className="relative inline-block transition-transform duration-300 ease-in-out hover:scale-110 hover:-rotate-4">
						<div className="absolute -inset-4 bg-gradient-to-r from-ctp-pink via-ctp-mauve to-ctp-lavender blur-lg opacity-20"></div>
						<h1 className="text-5xl text-ctp-pink font-bold">
							contact me
						</h1>
					</div>
					<p className="text-lg text-ctp-subtext1 mx-auto">
						don't be afraid, i don't bite! :3
					</p>
					<div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-ctp-text max-w-2xl mx-auto pt-4">
						{contacts.map((contact, index) => (
							<span key={index} className="group relative">
								{contact.href ? (
									<a
										href={contact.href}
										target="_blank"
										rel="noopener noreferrer"
										className="underline hover:text-ctp-pink transition-colors"
									>
										{contact.name}
									</a>
								) : (
									<span className="underline cursor-default">
										{contact.name}
									</span>
								)}
								<span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-3 py-1 bg-ctp-surface0 text-ctp-text rounded-md text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
									{contact.hover}
								</span>
							</span>
						))}
					</div>
				</div>
			</div>
			<Divider/>
			<Footer/>
		</div>
	);
}