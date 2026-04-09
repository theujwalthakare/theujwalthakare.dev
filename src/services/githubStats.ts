export const GITHUB_USERNAME = 'theujwalthakare';

export const GITHUB_CARD_URLS = {
  stats: (username: string) =>
    `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&bg_color=0f172a&border_color=00d9ff22&title_color=00d9ff&text_color=94a3b8&icon_color=7c3aed&hide_border=false`,
  languages: (username: string) =>
    `https://github-readme-stats.vercel.app/api/top-langs?username=${username}&layout=compact&theme=tokyonight&bg_color=0f172a&border_color=00d9ff22&title_color=00d9ff&text_color=94a3b8`,
  streak: (username: string) =>
    `https://streak-stats.demolab.com?user=${username}&theme=tokyonight&background=0f172a&border=00d9ff22&ring=00d9ff&fire=7c3aed&currStreakLabel=00d9ff`,
} as const;

export type GitHubProfile = {
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
  bio: string | null;
  location: string | null;
  blog: string | null;
  company: string | null;
  public_repos: number;
  followers: number;
  following: number;
  public_gists: number;
  created_at: string;
  updated_at: string;
};

export type GitHubRepo = {
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  pushed_at: string;
  fork: boolean;
};

export type GitHubSummary = {
  profile: GitHubProfile;
  repos: GitHubRepo[];
  totalStars: number;
  totalForks: number;
  primaryLanguage: string;
  latestRepo: GitHubRepo | null;
  recentRepos: GitHubRepo[];
};

const githubRequestHeaders = {
  Accept: 'application/vnd.github+json',
  'X-GitHub-Api-Version': '2022-11-28',
};

const fetchJson = async <T,>(url: string, signal?: AbortSignal): Promise<T> => {
  const response = await fetch(url, {
    headers: githubRequestHeaders,
    signal,
  });

  if (!response.ok) {
    throw new Error(`GitHub request failed with status ${response.status}`);
  }

  return response.json() as Promise<T>;
};

const formatRepositoryList = (repos: GitHubRepo[]) =>
  [...repos]
    .filter((repo) => !repo.fork)
    .sort((left, right) => new Date(right.pushed_at).getTime() - new Date(left.pushed_at).getTime());

export const fetchGitHubSummary = async (
  username: string = GITHUB_USERNAME,
  signal?: AbortSignal,
): Promise<GitHubSummary> => {
  const [profile, repos] = await Promise.all([
    fetchJson<GitHubProfile>(`https://api.github.com/users/${username}`, signal),
    fetchJson<GitHubRepo[]>(`https://api.github.com/users/${username}/repos?per_page=100&sort=pushed&direction=desc`, signal),
  ]);

  const ownedRepos = formatRepositoryList(repos);
  const totalStars = ownedRepos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
  const totalForks = ownedRepos.reduce((sum, repo) => sum + repo.forks_count, 0);
  const languageCounts = ownedRepos.reduce<Record<string, number>>((counts, repo) => {
    if (!repo.language) {
      return counts;
    }

    counts[repo.language] = (counts[repo.language] ?? 0) + 1;
    return counts;
  }, {});

  const primaryLanguage = Object.entries(languageCounts)
    .sort((left, right) => right[1] - left[1])[0]?.[0] ?? 'Not available';

  const latestRepo = ownedRepos[0] ?? null;

  return {
    profile,
    repos: ownedRepos,
    totalStars,
    totalForks,
    primaryLanguage,
    latestRepo,
    recentRepos: ownedRepos.slice(0, 3),
  };
};
