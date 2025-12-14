import { Octokit } from 'octokit';
import * as fs from 'node:fs';

const octokit = new Octokit();

async function fetchLatestCommit() {
	const res = await octokit.request(
		"GET /repos/junyali/cuties-site/commits",
		{
			headers: {
				"X-GitHub-Api-Version": "2022-11-28",
			},
		}
	);

	const commitDate = new Date(res.data[0].commit.author.date);
	const commitInfo = {
		hash: res.data[0].sha.slice(0, 7),
		html_url: res.data[0].html_url,
		date: commitDate.toLocaleDateString("en-GB", {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		}),
	};

	fs.writeFileSync(
		"src/commitInfo.json",
		JSON.stringify(commitInfo, null, 2)
	);
}

fetchLatestCommit().catch((error) => {
	console.error("Failed to fetch latest commit:", error);
	process.exit(1);
});
