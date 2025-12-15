import { useState, useEffect, useRef } from 'react';

const konami_code = [
	'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'
];

export function Konami() {
	const [isOpen, setIsOpen] = useState(false);
	const [sequence, setSequence] = useState<string[]>([]);
	const [imageLoaded, setImageLoaded] = useState(false);
	const iframeRef = useRef<HTMLIFrameElement | null>(null);
	const audioRef = useRef<HTMLAudioElement | null>(null);

	useEffect(() => {
		const img = new Image();
		img.src = '/macintosh.png';
		img.onload = () => setImageLoaded(true);
	}, []);

	useEffect(() => {
		const handleKeyPress = (e: KeyboardEvent) => {
			const key = e.key;
			const newSequence = [...sequence, key].slice(-konami_code.length);
			setSequence(newSequence);

			if (newSequence.join(',') === konami_code.join(',')) {
				setIsOpen(true);
				setSequence([]);
			}
		};

		window.addEventListener('keydown', handleKeyPress);
		return () => window.removeEventListener('keydown', handleKeyPress);
	}, [sequence]);

	useEffect(() => {
		if (isOpen && imageLoaded) {
			if (audioRef.current) {
				audioRef.current.currentTime = 0;
				audioRef.current.play().catch(error => console.error(error));
			}

			setTimeout(() => {
				if (iframeRef.current) {
					iframeRef.current.focus();
				}
			}, 100);
		}
	}, [isOpen, imageLoaded])

	if (!isOpen) return null;

	return (
		<>
			<audio ref={audioRef} src="/StartupMacQuadraAV.wav" preload="auto"/>
			{isOpen && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-ctp-base/50"
					onClick={() => setIsOpen(false)}
				>
					<div
						className="relative rounded-xl shadow-2xl bg-ctp-base border border-gray-300 backdrop-blur-sm"
						style={{
							width: '80vw',
							height: '80vh'
						}}
						onClick={(e) => e.stopPropagation()}
					>
						<div className="bg-ctp-mantle border-b border-ctp-surface0 px-3 py-2.5 flex items-center">
							<div className="flex gap-2">
								<button
									onClick={() => setIsOpen(false)}
									className="w-3 h-3 rounded-full border border-red-700 bg-red-500 hover:bg-red-700 transition-colors"
									aria-label="close"
								/>
								<button
									className="w-3 h-3 rounded-full border border-yellow-700 bg-yellow-500 hover:bg-yellow-700 transition-colors"
									aria-label="minimise"
								/>
								<button
									className="w-3 h-3 rounded-full border border-green-700 bg-green-500 hover:bg-green-700 transition-colors"
									aria-label="maximise"
								/>
							</div>
							<div className="flex-1 text-center text-sm font-medium text-ctp-text">
								junyali.itch.io/jumper
							</div>
						</div>
						<div className="w-full h-full flex items-center justify-center">
							<div
								className="w-full h-full relative"
								style={{
									maxWidth: '953px',
									maxHeight: '620px',
									aspectRatio: '953/620'
								}}
							>
								<img
									src="/macintosh.png"
									alt=""
									className="relative w-full h-full z-10 pointer-events-none"
									style={{ imageRendering: 'crisp-edges' }}
								/>
								<iframe
									ref={iframeRef}
									src="https://itch.io/embed-upload/14837022?color=72A11D"
									className="absolute border-none z-0"
									style={{
										left: '22.03%',
										top: '7.74%',
										width: '33.67%',
										height: '39.19%'
									}}
									title="Game"
									allowFullScreen
								/>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}