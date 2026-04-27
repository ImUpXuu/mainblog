export interface CommitInfo {
	sha: string;
	shortSha: string;
	date: string;
	message: string;
	author: string;
}

async function fetchWithRetry(url: string, options: RequestInit = {}, retries = 3): Promise<Response> {
	for (let i = 0; i < retries; i++) {
		try {
			const response = await fetch(url, options);
			if (response.ok) {
				return response;
			}
			if (response.status === 403 || response.status === 429) {
				const retryAfter = response.headers.get('retry-after');
				const waitTime = retryAfter ? parseInt(retryAfter) * 1000 : Math.pow(2, i) * 1000;
				await new Promise(resolve => setTimeout(resolve, waitTime));
				continue;
			}
			throw new Error(`HTTP ${response.status}: ${response.statusText}`);
		} catch (error) {
			if (i === retries - 1) throw error;
			const waitTime = Math.pow(2, i) * 1000;
			await new Promise(resolve => setTimeout(resolve, waitTime));
		}
	}
	throw new Error('All retries failed');
}

export async function getLatestCommit(): Promise<CommitInfo | null> {
	try {
		const headers: Record<string, string> = {
			'Accept': 'application/vnd.github.v3+json',
		};

		const token = import.meta.env.GITHUB_TOKEN;
		if (token) {
			headers['Authorization'] = `token ${token}`;
		}

		const response = await fetchWithRetry(
			'https://api.github.com/repos/ImUpXuu/mainblog/commits?per_page=1',
			{ headers }
		);

		const commits = await response.json();
		if (commits && commits.length > 0) {
			const commit = commits[0];
			return {
				sha: commit.sha,
				shortSha: commit.sha.substring(0, 7),
				date: commit.commit.author.date,
				message: commit.commit.message,
				author: commit.commit.author.name
			};
		}
		return null;
	} catch (error) {
		console.error('Error fetching git info:', error);
		return null;
	}
}

export async function getCommitHistory(limit = 100): Promise<CommitInfo[]> {
	try {
		const headers: Record<string, string> = {
			'Accept': 'application/vnd.github.v3+json',
		};

		const token = import.meta.env.GITHUB_TOKEN;
		if (token) {
			headers['Authorization'] = `token ${token}`;
		}

		const response = await fetchWithRetry(
			`https://api.github.com/repos/ImUpXuu/mainblog/commits?per_page=${limit}`,
			{ headers }
		);

		const commits = await response.json();
		return commits.map((commit: any) => ({
			sha: commit.sha,
			shortSha: commit.sha.substring(0, 7),
			date: commit.commit.author.date,
			message: commit.commit.message,
			author: commit.commit.author.name
		}));
	} catch (error) {
		console.error('Error fetching commit history:', error);
		return [];
	}
}

export function formatDate(dateString: string): string {
	const date = new Date(dateString);
	date.setHours(date.getHours() + 8);
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const day = String(date.getDate()).padStart(2, '0');
	const hour = String(date.getHours()).padStart(2, '0');
	const minute = String(date.getMinutes()).padStart(2, '0');

	return `${year}-${month}-${day} ${hour}:${minute}`;
}
