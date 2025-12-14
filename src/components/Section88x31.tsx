import { Button88x31 } from './Button88x31';

const buttons = [
	{
		href: 'https://3kh0.net',
		title: '3kh0',
		image: '/88x31/3kh0.png'
	},
	{
		href: 'https://hack.club',
		title: 'Hack Club',
		image: '/88x31/hackclub.gif'
	},
	{
		href: 'https://gideon.sh/',
		title: 'Gideon',
		image: 'https://gideon.sh/88x31.gif'
	},
	{
		href: 'https://aconlin.com',
		title: 'Acon',
		image: '/88x31/acon.gif'
	},
	{
		href: 'https://phthallo.com',
		title: 'Phthallo',
		image: '/88x31/phthallo.png'
	},
	{
		href: 'https://lynn.pt',
		title: 'Lynn',
		image: '/88x31/lynn.png'
	},
	{
		href: 'https://ivie.codes',
		title: 'Ivie',
		image: '/88x31/ivie.png'
	},
	{
		href: 'https://skyfall.dev',
		title: 'Skyfall',
		image: '/88x31/skyfall.png'
	},
	{
		href: 'https://prpl.wtf',
		title: 'Emma',
		image: '/88x31/prplwtf.png'
	},
	{
		href: 'https://bunnyguy.foo',
		title: 'B4g',
		image: '/88x31/bunnyguy.gif'
	},
	{
		href: 'https://parkalex.dev',
		title: 'Alex Park',
		image: '/88x31/alexp.png'
	},
	{
		href: 'https://bomberfish.ca/',
		title: 'Bomberfish',
		image: 'https://bomberfish.ca/button.gif'
	},
	{
		title: 'Trans Rights Now',
		image: '/88x31/trn.gif'
	},
	{
		title: 'Asexuals Now',
		image: '/88x31/asexuals_now.gif'
	},
	{
		title: 'Pride',
		image: '/88x31/progresspride.png'
	},
	{
		title: ':3',
		image: '/88x31/misc-iuse3.gif'
	},
	{
		title: 'I use Arch btw',
		image: '/88x31/archbtw.png'
	},
]

export function Section88x31() {
	return (
		<section className="max-w-5xl mx-auto px-6 py-8">
			<div className="cursor-default mb-8">
				<img
					src="/88x31/junya.gif"
					alt="Junyaverse"
					title="Junyaverse"
					style={{ imageRendering: 'pixelated' }}
					className="w-[88px] h-[31px] block image-rendering-pixelated"
				/>
			</div>
			<div className="flex flex-wrap gap-0.5">
				{buttons.map((button, index) => (
					<Button88x31
						key={index}
						href={button.href}
						title={button.title}
						image={button.image}
					/>
				))}
			</div>
		</section>
	);
}