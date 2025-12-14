import { type ProjectLink } from '../utilities/projects.ts';

function getLinkIcon(type: ProjectLink["type"]): string {
	switch (type) {
		case "github": return "fab fa-github"
		case "demo": return "fas fa-external-link-alt"
		case "download": return "fas fa-download"
		case "website": return "fas fa-globe"
		case "video": return "fas fa-video"
		default: return "fas fa-link"
	}
}

export function ProjectLink({ link }: { link: ProjectLink}) {
	const colours = {
		github: 'bg-ctp-mauve/20 text-ctp-mauve border-ctp-mauve/30 hover:bg-ctp-mauve/30',
		demo: 'bg-ctp-pink/20 text-ctp-pink border-ctp-pink/30 hover:bg-ctp-pink/30',
		download: 'bg-ctp-lavender/20 text-ctp-lavender border-ctp-lavender/30 hover:bg-ctp-lavender/30',
		website: 'bg-ctp-sky/20 text-ctp-sky border-ctp-sky/30 hover:bg-ctp-sky/30',
		video: 'bg-ctp-flamingo/20 text-ctp-flamingo border-ctp-flamingo/30 hover:bg-ctp-flamingo/30'
	};
	return (
		<a
			href={link.url}
			target="_blank"
			rel="noopener noreferrer"
			className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 hover:-translate-y-0.5 ${colours[link.type]}`}
		>
			<i className={`${getLinkIcon(link.type)} mr-1.5`}></i>
			{link.label}
		</a>
	);
}