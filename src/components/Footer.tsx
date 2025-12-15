import { useEffect, useState } from 'react';
import { getLatestCommit } from '../api/GitHub';

interface CommitInfo {
	sha: string;
	url: string;
	date: string;
}

export function Footer() {
	const [commit, setCommit] = useState<CommitInfo | null>(null);

	useEffect(() => {
		const fetchCommit = async () => {
			const data = await getLatestCommit();
			if (data) {
				setCommit({
					sha: data.hash,
					url: data.html_url,
					date: data.date
				});
			}
		};

		fetchCommit().catch();
	}, []);
	return (
		<footer className="text-center py-8 text-ctp-subtext0 text-sm">
			<p className="mt-1">
				made by junya <span className="text-ctp-pink">{'<3'}</span>{' '}
				<span>
					(see the code{' '}
					<a
						href={commit?.url || "https://github.com/junyali/cuties-site"}
						className="text-ctp-mauve hover:underline"
					>
						here!!
					</a>
					)
				</span>
			</p>
			{commit && (
				<p className="mt-2 text-xs">
					<span className="text-ctp-sky">
						{commit.sha}
					</span>{' '}
					<span className="text-ctp-sapphire italic">
						{commit.date}
					</span>
				</p>
			)}
		</footer>
	);
}