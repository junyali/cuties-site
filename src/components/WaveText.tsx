import { useState, useEffect } from 'react';

interface Properties {
	text: string;
	className?: string;
}

export function WaveText({ text, className = "text-4xl font-bold" }: Properties) {
	const [colourOffset, setColourOffset] = useState(0);
	const colours = [
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
	]

	useEffect(() => {
		const interval = setInterval(() => {
			setColourOffset(prev => (prev + 1) % colours.length);
		}, 500);

		return () => clearInterval(interval);
	}, []);
	return (
		<h1 className={className}>
			{text.split("").map((letter, index) => {
				const colourIndex = (colourOffset + index) % colours.length;

				return (
					<span
						key={index}
						className={`wave-letter ${colours[colourIndex]} transition-colors duration-500`}
						style={{
							animationDelay: `${index * 0.1}s`
						}}
					>
						{letter}
					</span>
				);
			})}
		</h1>
	);
}
