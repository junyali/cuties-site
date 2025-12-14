interface Properties {
	href?: string;
	title: string;
	image: string;
}

export function Button88x31({ href, title, image }: Properties) {
	const img = (
		<img
			src={image}
			alt={title}
			title={title}
			style={{ imageRendering: 'pixelated' }}
			className="w-[88px] h-[31px] block image-rendering-pixelated"
		/>
	);

	if (href) {
		return (
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className="transition-transform duration-200 hover:scale-105"
			>
				{img}
			</a>
		);
	}
	
	return (
		<div className="cursor-default">{img}</div>
	);
}
