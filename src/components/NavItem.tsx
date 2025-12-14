interface Properties {
	image: string;
	label: string;
	href: string;
}

export function NavItem({image, label, href}: Properties) {
	return (
		<a
			href={href}
			className="group flex flex-col items-center gap-3 transition-all duration-300 hover:-translate-y-1"
		>
			<div className="relative">
				<div className="absolute -inset-3 bg-gradient-to-r from-ctp-pink via-ctp-mauve to-ctp-lavender rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
				<img
					src={image}
					alt={label}
					className="relative w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 transition-transform duration-300 group-hover:scale-110"
				/>
			</div>
			<span className="text-sm md:text-base lg:text-lg text-ctp-subtext1 group-hover:text-ctp-pink transition-colors duration-300">
				{label}
			</span>
		</a>
	);
}