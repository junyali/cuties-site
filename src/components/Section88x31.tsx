import { Button88x31 } from './Button88x31';

const buttons =[
	{
		href: '/',
		title: 'Junyaverse',
		image: '/88x31/junya.gif'
	}
]

export function Section88x31() {
	return (
		<section className="max-w-7xl mx-auto px-6 py-8">
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