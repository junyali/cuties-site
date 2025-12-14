interface Properties {
	image: string;
	label: string;
	href: string;
}

export function NavItem({image, label, href}: Properties) {
	return (
		<a
			href={href}
			className="group flex flex-col items-center gap-2 transition-all duration-300 hover:-translate-y-1"
		>
			<div className="relative">
				<div className="absolute -inset-3 bg-gradient-to-r from-ctp-pink via-ctp-mauve to-ctp-lavender rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
				<img
					src={image}
					alt={label}
					className="relative w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 transition-transform duration-300 group-hover:scale-110"
					style={{ imageRendering: 'pixelated' }}
				/>
			</div>
			<span className="text-sm md:text-base font-bold lg:text-lg text-ctp-subtext1 group-hover:text-ctp-pink transition-colors duration-300">
				{label}
			</span>
		</a>
	);
}