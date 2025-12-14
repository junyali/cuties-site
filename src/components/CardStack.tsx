import { useState, useRef, useEffect, useCallback } from 'react';

const cards = [
	{
		content: (
			<div className="space-y-4 leading-relaxed">
				<h1 className="text-5xl text-ctp-pink-400 font-bold">
					hewwo!
				</h1>
				<h2 className="text-3xl font-bold">
					<span className="text-ctp-pink-200">i'm </span>
					<span className="text-ctp-pink-400/80">junya </span>
					<span className="text-ctp-pink-200">(</span>
					<span className="text-ctp-mauve-200/60">she</span>
					<span className="text-ctp-pink-200">/</span>
					<span className="text-ctp-mauve-400/60">her</span>
					<span className="text-ctp-pink-200">)</span>
					<span className="text-ctp-pink-200"> :3</span>
				</h2>
				<p className="text-2xl">
					<span className="text-ctp-pink/90">welcome to my lil corner of the internet hehe~</span>
				</p>
				<p className="text-2xl">
					<span className="text-ctp-pink/90">just a silly kitty making stuff mraow :3</span>
				</p>
			</div>
		)
	},
	{
		content: (
			<div className="space-y-4 leading-relaxed">
				<p className="py-16"></p>
			</div>
		)
	}
];

export function CardStack() {
	const [currentCard, setCurrentCard] = useState(0);
	const [isAnimating, setIsAnimating] = useState(false);
	const [animationClass, setAnimationClass] = useState('');
	const sectionRef = useRef<HTMLElement>(null);
	const scrollCooldown = useRef(false);

	const handleWheel = useCallback((e: WheelEvent) => {
		if (scrollCooldown.current || isAnimating) return;

		const isScrollingDown = e.deltaY > 0;
		const isScrollingUp = e.deltaY < 0;

		if (currentCard === cards.length - 1 && isScrollingDown) {
			return;
		}

		e.preventDefault();
		scrollCooldown.current = true;
		if (isScrollingDown && currentCard < cards.length - 1) {
			setAnimationClass('slide-out-left');
			setIsAnimating(true);

			setTimeout(() => {
				setCurrentCard(prev => prev + 1);
				setAnimationClass('slide-in-right');

				setTimeout(() => {
					setIsAnimating(false);
					setAnimationClass('');
				}, 400);
			}, 400);
		} else if (isScrollingUp && currentCard > 0) {
			setAnimationClass('slide-out-right');
			setIsAnimating(true);

			setTimeout(() => {
				setCurrentCard(prev => prev - 1);
				setAnimationClass('slide-in-left');

				setTimeout(() => {
					setIsAnimating(false);
					setAnimationClass('');
				}, 400);
			}, 400);
		}

		setTimeout(() => {
			scrollCooldown.current = false;
		}, 400);
	}, [currentCard, isAnimating]);
	
	useEffect(() => {
		const section = sectionRef.current;
		if (!section) return;
		
		section.addEventListener('wheel', handleWheel, { passive: false });
		
		return () => {
			section.removeEventListener('wheel', handleWheel);
		};
	}, [handleWheel]);

	return (
		<section ref={sectionRef} className="max-w-5xl mx-auto px-6 py-8 relative min-h-[60vh] flex items-center">
			<div className="relative w-full">
				{cards.map((_, index) => {
					if (index <= currentCard) return null;
					const offset = (index - currentCard) * 8;
					const scale = 1 - (index - currentCard) * 0.05;

					return (
						<div
							key={`stack-${index}`}
							className="absolute inset-0 pointer-events-none"
							style={{
								transform: `translateY(${offset}px) scale(${scale})`,
								zIndex: cards.length - index
							}}
						>
							<div className="absolute -inset-4 bg-gradient-to-r from-ctp-pink via-ctp-mauve to-ctp-lavender blur-lg opacity-20"></div>
							<div className="relative bg-ctp-mantle/50 backdrop-blur-lg border-2 border-ctp-overlay2/60 ring-ctp-mauve/30 p-8 shadow-xl"></div>
						</div>
					);
				})}
				<div className="relative" style={{ zIndex: 10 }}>
					<div className="absolute -inset-4 bg-gradient-to-r from-ctp-pink via-ctp-mauve to-ctp-lavender blur-lg opacity-20"></div>
					<div className={`relative bg-ctp-mantle/50 backdrop-blur-lg border-2 border-ctp-overlay2/60 ring-ctp-mauve/30 p-8 shadow-xl ${animationClass}`}>
						{cards[currentCard].content}
					</div>
				</div>
			</div>
		</section>
	);
}