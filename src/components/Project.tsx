import { type Project } from '../utilities/projects.ts';
import { ProjectLink } from './ProjectLink';

export function Project({ project }: { project: Project }) {
	const statusColours = {
		completed: 'bg-ctp-green/20 text-ctp-green border-ctp-green/30',
		ongoing: 'bg-ctp-blue/20 text-ctp-blue border-ctp-blue/30',
		stalled: 'bg-ctp-yellow/20 text-ctp-yellow border-ctp-yellow/30',
		archived: 'bg-ctp-overlay0/20 text-ctp-overlay0 border-ctp-overlay0/30'
	};

	return (
		<div className="bg-ctp-surface0/40 backdrop-blur-sm border border-ctp-pink/20 rounded-lg p-6 hover:border-ctp-mauve/30 transition-all duration-300 hover:shadow-lg">
			<div className="flex flex-col md:flex-row gap-6">
				<div className="md:w-1/5 flex-shrink-0">
					<div className="relative group">
						<div className="absolute -inset-2 bg-gradient-to-r from-ctp-pink via-ctp-mauve to-ctp-lavender rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
						<img
							src={project.image}
							alt={project.title}
							className="relative w-full h-48 bg-ctp-base/50 object-cover rounded-lg border-2 border-ctp-overlay0/30"
						/>
					</div>
				</div>
				<div className="flex-1 space-y-4">
					<div className="flex items-start justify-between gap-4">
						<h3 className="text-2xl font-bold text-ctp-pink">
							{project.title}
						</h3>
						<div className="flex items-center gap-2 flex-shrink-0">
							{project.status && (
								<span className={`px-3 py-1 rounded-lg text-xs font-semibold border ${statusColours[project.status]}`}>
									{project.year}
								</span>
							)}
						</div>
					</div>
					<p className="text-ctp-subtext1 leading-relaxed">
						{project.description}
					</p>
					<div className="flex flex-wrap gap-2">
						{project.links.map((link, index) => (
							<ProjectLink key={index} link={link}/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}