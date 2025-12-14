import { useState, useEffect } from 'react';

type Palette = 'full' | 'pastel' | 'rainbow';

interface Properties {
	text: string;
	className?: string;
	palette?: Palette;
	colourCycleSpeed?: number;
	waveCycleSpeed?: number;
}

const PALETTE = {
	full: [
		"text-ctp-rosewater",
		"text-ctp-flamingo",
		"text-ctp-pink",
		"text-ctp-mauve",
		"text-ctp-red",
		"text-ctp-maroon",
		"text-ctp-peach",
		"text-ctp-yellow",
		"text-ctp-green",
		"text-ctp-teal",
		"text-ctp-sky",
		"text-ctp-sapphire",
		"text-ctp-blue",
		"text-ctp-lavender"
	],
	pastel: [
		"text-ctp-rosewater-50",
		"text-ctp-flamingo-50",
		"text-ctp-pink-50",
		"text-ctp-mauve-50",
		"text-ctp-sky-50",
		"text-ctp-lavender-50"
	],
	rainbow: [
		"text-ctp-red",
		"text-ctp-peach",
		"text-ctp-yellow",
		"text-ctp-green",
		"text-ctp-sky",
		"text-ctp-blue",
		"text-ctp-mauve"
	]
};

export function WaveText({
	text,
	className = "text-4xl font-bold",
	palette = 'full',
	colourCycleSpeed = 500,
	waveCycleSpeed = 1.5
}: Properties) {
	const [colourOffset, setColourOffset] = useState(0);
	const [isHovered, setIsHovered] = useState(false);

	const colours = PALETTE[palette];

	const activeColourSpeed = isHovered ? colourCycleSpeed / 2 : colourCycleSpeed;
	const activeWaveCycleSpeed = isHovered ? waveCycleSpeed / 2 : waveCycleSpeed;

	useEffect(() => {
		const interval = setInterval(() => {
			setColourOffset(prev => (prev + 1) % colours.length);
		}, activeColourSpeed);

		return () => clearInterval(interval);
	}, [activeColourSpeed, colours.length]);
	return (
		<h1
			className={className}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{text.split("").map((letter, index) => {
				const colourIndex = (colourOffset + index) % colours.length;

				return (
					<span
						key={index}
						className={`wave-letter ${colours[colourIndex]} transition-colors duration-500`}
						style={{
							animationDelay: `${index * 0.1}s`,
							animationDuration: `${activeWaveCycleSpeed}s`
						}}
					>
						{letter}
					</span>
				);
			})}
		</h1>
	);
}
