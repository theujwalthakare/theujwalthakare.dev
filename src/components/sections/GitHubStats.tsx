import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import {
  FaArrowUpRightFromSquare,
  FaCode,
  FaGithub,
  FaGlobe,
  FaLocationDot,
  FaStar,
  FaUsers,
} from 'react-icons/fa6';
import { SectionHeading } from '../ui/SectionHeading';
import {
  fetchGitHubSummary,
  GITHUB_CARD_URLS,
  GITHUB_USERNAME,
  type GitHubSummary,
} from '../../services/githubStats';

const formatNumber = (value: number) => new Intl.NumberFormat('en-US').format(value);

const formatRelativeTime = (dateValue: string) => {
  const differenceInMinutes = Math.max(1, Math.round((Date.now() - new Date(dateValue).getTime()) / 60000));

  if (differenceInMinutes < 60) {
    return `${differenceInMinutes}m ago`;
  }

  const differenceInHours = Math.round(differenceInMinutes / 60);
  if (differenceInHours < 24) {
    return `${differenceInHours}h ago`;
  }

  const differenceInDays = Math.round(differenceInHours / 24);
  if (differenceInDays < 30) {
    return `${differenceInDays}d ago`;
  }

  const differenceInMonths = Math.round(differenceInDays / 30);
  if (differenceInMonths < 12) {
    return `${differenceInMonths}mo ago`;
  }

  const differenceInYears = Math.round(differenceInMonths / 12);
  return `${differenceInYears}y ago`;
};

type ThemeVariant = 'minimal' | 'cyber' | 'apple';

const UI_THEME: ThemeVariant = 'apple';

const THEME_CLASSES: Record<
  ThemeVariant,
  {
    surface: string;
    surfaceGlow: string;
    iconWrap: string;
    iconColor: string;
    title: string;
    statPill: string;
    statLabel: string;
    statValue: string;
    languageRow: string;
    languageBadge: string;
    languageTrack: string;
    languageBar: string;
    languageMeta: string;
  }
> = {
  minimal: {
    surface: 'border-[#2d3748] bg-[#0f1724] shadow-[0_12px_36px_rgba(2,6,23,0.28)] hover:border-[#3b4a63]',
    surfaceGlow: 'bg-[radial-gradient(circle_at_22%_8%,rgba(148,163,184,0.08),transparent_40%)]',
    iconWrap: 'border-[#3b4a63] bg-[#172235]',
    iconColor: 'text-[#8fb3e8]',
    title: 'text-[#e6edf7]',
    statPill: 'border-[#2d3a52] bg-[#111b2b] shadow-none',
    statLabel: 'text-[#8a9bb8]',
    statValue: 'text-[#e6edf7]',
    languageRow: 'border-[#2d3a52] bg-[#111b2b] shadow-none',
    languageBadge: 'border-[#415778] bg-[#15253b] text-[#9fc7ff]',
    languageTrack: 'bg-[#1a2a42]',
    languageBar: 'bg-[linear-gradient(90deg,#4f8eea,#5ec5d6)]',
    languageMeta: 'text-[#8a9bb8]',
  },
  cyber: {
    surface: 'border-cyan/55 bg-[#050c18] shadow-[0_0_0_1px_rgba(34,211,238,0.2),0_22px_70px_rgba(6,182,212,0.22)] hover:border-cyan',
    surfaceGlow: 'bg-[radial-gradient(circle_at_18%_10%,rgba(6,182,212,0.24),transparent_38%),radial-gradient(circle_at_88%_14%,rgba(16,185,129,0.2),transparent_34%)]',
    iconWrap: 'border-cyan/50 bg-cyan/15',
    iconColor: 'text-cyan',
    title: 'text-[#dcf8ff]',
    statPill: 'border-cyan/30 bg-[#061428] shadow-[inset_0_0_0_1px_rgba(34,211,238,0.14)]',
    statLabel: 'text-cyan/70',
    statValue: 'text-[#dcf8ff]',
    languageRow: 'border-cyan/30 bg-[#061428] shadow-[inset_0_0_0_1px_rgba(34,211,238,0.14)]',
    languageBadge: 'border-cyan/45 bg-cyan/10 text-cyan',
    languageTrack: 'bg-[#08213f]',
    languageBar: 'bg-[linear-gradient(90deg,#22d3ee,#34d399)]',
    languageMeta: 'text-cyan/70',
  },
  apple: {
    surface: 'border-[#263b5f] bg-[linear-gradient(150deg,#0b1225_0%,#0e1730_55%,#101b35_100%)] shadow-[0_22px_70px_rgba(4,9,20,0.42)] hover:border-cyan/45',
    surfaceGlow: 'bg-[radial-gradient(circle_at_20%_12%,rgba(59,130,246,0.12),transparent_42%),radial-gradient(circle_at_85%_18%,rgba(255,109,0,0.08),transparent_40%)]',
    iconWrap: 'border-[#3b5f90] bg-[#132746]',
    iconColor: 'text-[#86c7ff]',
    title: 'text-[#eaf2ff]',
    statPill: 'border-[#25395b] bg-[linear-gradient(140deg,rgba(11,23,44,0.9),rgba(13,27,50,0.72))] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]',
    statLabel: 'text-[#7e95b8]',
    statValue: 'text-[#eaf2ff]',
    languageRow: 'border-[#25395b] bg-[linear-gradient(140deg,rgba(11,23,44,0.9),rgba(13,27,50,0.72))] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]',
    languageBadge: 'border-[#3b5f90] bg-[#132746] text-[#86c7ff]',
    languageTrack: 'bg-[#142640]',
    languageBar: 'bg-[linear-gradient(90deg,#3b82f6,#2dd4bf)]',
    languageMeta: 'text-[#8ea6c9]',
  },
};

const theme = THEME_CLASSES[UI_THEME];

type SurfaceCardProps = {
  title: string;
  icon: ReactNode;
  children: ReactNode;
  className?: string;
};

const SurfaceCard = ({ title, icon, children, className }: SurfaceCardProps) => (
  <div className={`group relative flex flex-col overflow-hidden rounded-[1.5rem] border p-5 transition-all duration-300 ${theme.surface} ${className || ''}`}>
    <div className={`pointer-events-none absolute inset-0 ${theme.surfaceGlow}`} />
    <div className="relative z-10 flex items-center gap-3">
      <div className={`inline-flex h-9 w-9 items-center justify-center rounded-xl border ${theme.iconWrap} ${theme.iconColor}`}>
        {icon}
      </div>
      <h3 className={`text-base font-semibold md:text-lg ${theme.title}`}>{title}</h3>
    </div>
    <div className="relative z-10 mt-4 flex-1 min-h-0">{children}</div>
  </div>
);

type StatPillProps = {
  label: string;
  value: string;
};

const StatPill = ({ label, value }: StatPillProps) => (
  <div className={`rounded-2xl border px-4 py-3 ${theme.statPill}`}>
    <p className={`text-[10px] uppercase tracking-[0.2em] ${theme.statLabel}`}>{label}</p>
    <p className={`mt-1 text-xl font-semibold ${theme.statValue}`}>{value}</p>
  </div>
);

type LanguageRowProps = {
  language: string;
  count: number;
  share: number;
};

const LanguageRow = ({ language, count, share }: LanguageRowProps) => (
  <div className={`rounded-2xl border p-3 ${theme.languageRow}`}>
    <div className="flex items-center justify-between gap-3">
      <p className={`truncate font-semibold ${theme.statValue}`}>{language}</p>
      <span className={`rounded-full border px-2 py-1 text-[10px] uppercase tracking-[0.16em] ${theme.languageBadge}`}>
        {share}%
      </span>
    </div>
    <div className={`mt-3 h-2 overflow-hidden rounded-full ${theme.languageTrack}`}>
      <div
        className={`h-full rounded-full ${theme.languageBar}`}
        style={{ width: `${Math.max(8, share)}%` }}
      />
    </div>
    <p className={`mt-2 text-xs ${theme.languageMeta}`}>{count} repositories</p>
  </div>
);

export function GitHubStats() {
  const profileCardClass =
    UI_THEME === 'minimal'
      ? 'border-[#2d3748] bg-[#0f1724] shadow-[0_12px_36px_rgba(2,6,23,0.28)] hover:border-[#3b4a63]'
      : UI_THEME === 'cyber'
        ? 'border-cyan/55 bg-[#050c18] shadow-[0_0_0_1px_rgba(34,211,238,0.2),0_22px_70px_rgba(6,182,212,0.22)] hover:border-cyan'
        : 'border-[#253557] bg-[linear-gradient(155deg,#0b1123_0%,#0c1830_55%,#101a33_100%)] shadow-[0_22px_70px_rgba(4,9,20,0.42)] hover:border-cyan/45';
  const profileGlowClass =
    UI_THEME === 'minimal'
      ? 'bg-[radial-gradient(circle_at_22%_8%,rgba(148,163,184,0.08),transparent_40%)]'
      : UI_THEME === 'cyber'
        ? 'bg-[radial-gradient(circle_at_18%_10%,rgba(6,182,212,0.24),transparent_38%),radial-gradient(circle_at_88%_14%,rgba(16,185,129,0.2),transparent_34%)]'
        : 'bg-[radial-gradient(circle_at_18%_10%,rgba(56,189,248,0.15),transparent_36%),radial-gradient(circle_at_88%_14%,rgba(14,165,233,0.10),transparent_34%)]';
  const profileNameClass = UI_THEME === 'cyber' ? 'text-[#dcf8ff]' : UI_THEME === 'minimal' ? 'text-[#e6edf7]' : 'text-[#eaf2ff]';
  const profileHandleClass = UI_THEME === 'cyber' ? 'text-cyan' : UI_THEME === 'minimal' ? 'text-[#8fb3e8]' : 'text-[#56a7ff]';
  const profileBioClass = UI_THEME === 'cyber' ? 'text-cyan/75' : UI_THEME === 'minimal' ? 'text-[#97a8c3]' : 'text-[#9cb1d6]';
  const profileMetaClass = UI_THEME === 'cyber' ? 'text-cyan/75' : UI_THEME === 'minimal' ? 'text-[#8a9bb8]' : 'text-[#afc0dc]';
  const profileButtonClass =
    UI_THEME === 'minimal'
      ? 'border-[#3b4a63] bg-[#172235] text-[#e6edf7] hover:border-[#526a8f] hover:bg-[#1a2940]'
      : UI_THEME === 'cyber'
        ? 'border-cyan/50 bg-cyan/10 text-cyan hover:border-cyan hover:bg-cyan/15'
        : 'border-[#2d4268] bg-[#13213e] text-[#ecf3ff] hover:border-cyan/45 hover:bg-[#172844]';
  const innerPanelClass =
    UI_THEME === 'minimal'
      ? 'border-[#2d3a52] bg-[#111b2b]'
      : UI_THEME === 'cyber'
        ? 'border-cyan/30 bg-[#061428]'
        : 'border-[#263954] bg-[#0c162c]';
  

  const innerPanelTextClass = UI_THEME === 'cyber' ? 'text-cyan/70' : UI_THEME === 'minimal' ? 'text-[#8a9bb8]' : 'text-[#7e95b8]';
  const strongTextClass = UI_THEME === 'cyber' ? 'text-[#dcf8ff]' : UI_THEME === 'minimal' ? 'text-[#e6edf7]' : 'text-[#eaf2ff]';
  const dividerClass = UI_THEME === 'cyber' ? 'border-cyan/30' : UI_THEME === 'minimal' ? 'border-[#3a4a63]' : 'border-[#2c4165]';
  
  
   const [summary, setSummary] = useState<GitHubSummary | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const languageScrollerRef = useRef<HTMLDivElement | null>(null);
  const [isLanguageScrollerHovering, setIsLanguageScrollerHovering] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    let active = true;

    const loadSummary = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await fetchGitHubSummary(GITHUB_USERNAME, abortController.signal);
        if (!active) {
          return;
        }

        setSummary(data);
      } catch (requestError) {
        if (abortController.signal.aborted || !active) {
          return;
        }

        setSummary(null);
        setError(requestError instanceof Error ? requestError.message : 'Unable to load live GitHub data.');
      } finally {
        if (!abortController.signal.aborted && active) {
          setLoading(false);
        }
      }
    };

    loadSummary();

    return () => {
      active = false;
      abortController.abort();
    };
  }, []);

  const profile = summary?.profile;
  const avatarUrl = profile?.avatar_url || `https://github.com/${GITHUB_USERNAME}.png`;
  const displayName = profile?.name?.trim() || 'Ujwal Thakare';
  const bio = profile?.bio?.trim() || 'Learning and building better software. Open-source enthusiast and endlessly curious builder.';
  const location = profile?.location?.trim();
  const website = profile?.blog?.trim() || profile?.html_url || `https://github.com/${GITHUB_USERNAME}`;
  const websiteLabel = profile?.blog?.trim() || 'GitHub profile';
  const latestRepo = summary?.latestRepo;
  const contributionsUrl = `https://ghchart.rshah.org/22c33e/theujwalthakare`;
  const streakUrl = GITHUB_CARD_URLS.streak(GITHUB_USERNAME);

  const languageRows = useMemo(() => {
    const counts = summary?.repos.reduce<Record<string, number>>((accumulator, repo) => {
      if (!repo.language) {
        return accumulator;
      }

      accumulator[repo.language] = (accumulator[repo.language] ?? 0) + 1;
      return accumulator;
    }, {}) ?? {};

    return Object.entries(counts)
      .sort((left, right) => right[1] - left[1])
      .slice(0, 6)
      .map(([language, count]) => ({
        language,
        count,
        share: summary?.repos.length ? Math.round((count / summary.repos.length) * 100) : 0,
      }));
  }, [summary]);

  useEffect(() => {
    const scroller = languageScrollerRef.current;
    if (!scroller || !languageRows.length) {
      return undefined;
    }

    let animationFrameId = 0;
    let lastTimestamp = performance.now();

    const tick = (timestamp: number) => {
      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      if (!isLanguageScrollerHovering && scroller.scrollHeight > scroller.clientHeight) {
        const maxScrollTop = scroller.scrollHeight - scroller.clientHeight;
        const nextScrollTop = scroller.scrollTop + delta * 0.018;

        if (nextScrollTop >= maxScrollTop - 1) {
          scroller.scrollTop = 0;
        } else {
          scroller.scrollTop = nextScrollTop;
        }
      }

      animationFrameId = window.requestAnimationFrame(tick);
    };

    animationFrameId = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(animationFrameId);
  }, [isLanguageScrollerHovering, languageRows.length]);

  return (
    <section id="github" className="relative overflow-hidden px-4 py-20 md:px-8 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(59,130,246,0.15),transparent_40%),radial-gradient(circle_at_82%_14%,rgba(255,109,0,0.14),transparent_38%)]" />

      <div className="container-lg relative mx-auto">
        <div className="mb-12 text-left">
          <SectionHeading index="07" title="GitHub Activity" className="mb-4" />
          <p className="max-w-3xl text-sm text-[var(--text-soft)] md:text-base">
            Explore my open-source contributions and latest projects directly from GitHub.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald/30 bg-emerald/10 px-3 py-1.5 text-xs text-[var(--text-strong)] md:text-sm">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="h-2 w-2 rounded-full bg-emerald"
            />
            <span className="about-typography-eyebrow text-[10px] text-emerald">
              {loading ? 'Syncing live GitHub profile...' : error ? 'Using public data fallback' : 'Live from GitHub public API'}
            </span>
          </div>

          <a
            href={website}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-[#11182a] px-3 py-1.5 text-xs text-[var(--text-strong)] transition hover:border-cyan/40 hover:text-cyan md:text-sm"
          >
            <FaGlobe size={12} />
            {websiteLabel}
          </a>

          {location ? (
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-[#11182a] px-3 py-1.5 text-xs text-[var(--text-strong)] md:text-sm">
              <FaLocationDot size={12} className="text-cyan" />
              {location}
            </span>
          ) : null}
        </div>

        {error ? (
          <div className="mb-8 rounded-2xl border border-amber-300/20 bg-amber-300/10 px-4 py-3 text-sm text-[var(--text-strong)]">
            {error}
          </div>
        ) : null}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
            className="xl:row-span-1"
          >
            <div className={`group relative flex h-full min-h-0 flex-col overflow-hidden rounded-[1.35rem] border p-5 transition-all duration-300 hover:-translate-y-0.5 xl:h-[430px] ${profileCardClass}`}>
              <div className={`pointer-events-none absolute inset-0 ${profileGlowClass}`} />
              <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-start gap-4">
                  <img
                    src={avatarUrl}
                    alt={`${displayName} avatar`}
                    loading="lazy"
                    className="h-16 w-16 rounded-full border border-cyan/25 object-cover shadow-[0_0_0_4px_rgba(99,102,241,0.08)]"
                  />
                  <div className="min-w-0 pt-1">
                    <h3 className={`truncate text-xl font-semibold ${profileNameClass}`}>{displayName}</h3>
                    <p className={`mt-1 text-sm ${profileHandleClass}`}>@{GITHUB_USERNAME}</p>
                  </div>
                </div>

                <p className={`mt-5 text-sm leading-6 ${profileBioClass}`}>{bio}</p>

                <div className="mt-5 grid grid-cols-3 gap-2">
                  <StatPill label="Repos" value={profile ? formatNumber(profile.public_repos) : '—'} />
                  <StatPill label="Followers" value={profile ? formatNumber(profile.followers) : '—'} />
                  <StatPill label="Following" value={profile ? formatNumber(profile.following) : '—'} />
                </div>

                <div className={`mt-4 flex flex-wrap items-center gap-3 text-xs ${profileMetaClass}`}>
                  {location ? (
                    <span className="inline-flex items-center gap-1.5">
                      <FaLocationDot size={11} className="text-[#5fa6ff]" />
                      {location}
                    </span>
                  ) : null}
                  {latestRepo ? (
                    <span className="inline-flex items-center gap-1.5">
                      <FaArrowUpRightFromSquare size={11} className="text-[#5fa6ff]" />
                      Latest push {formatRelativeTime(latestRepo.pushed_at)}
                    </span>
                  ) : null}
                </div>

                <a
                  href={website}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-auto inline-flex w-full items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold transition ${profileButtonClass}`}
                >
                  <FaGithub size={14} />
                  View Profile
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.06 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <SurfaceCard title="General Stats" icon={<FaStar size={15} />} className="border-[#263b5f] bg-[linear-gradient(150deg,#0b1225_0%,#0e1730_55%,#101b35_100%)] shadow-[0_22px_70px_rgba(4,9,20,0.42)] xl:h-[430px]">
              <div className="flex h-full min-h-0 flex-col">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <StatPill label="Public repos" value={profile ? formatNumber(profile.public_repos ?? 0) : '—'} />
                  <StatPill label="Followers" value={profile ? formatNumber(profile.followers ?? 0) : '—'} />
                  <StatPill label="Total stars" value={summary ? formatNumber(summary.totalStars) : '—'} />
                  <StatPill label="Latest push" value={latestRepo ? formatRelativeTime(latestRepo.pushed_at) : '—'} />
                </div>

                <div className={`mt-4 rounded-2xl border p-4 ${innerPanelClass}`}>
                  <div className={`flex items-center justify-between text-xs uppercase tracking-[0.18em] ${innerPanelTextClass}`}>
                    <span>Latest repo</span>
                    {latestRepo ? (
                      <a href={latestRepo.html_url} target="_blank" rel="noreferrer" className="text-[#5fa6ff] hover:underline">
                        Open
                      </a>
                    ) : (
                      <span>Loading</span>
                    )}
                  </div>
                  <p className={`mt-2 truncate text-base font-semibold ${strongTextClass}`}>
                    {latestRepo?.name || 'No public repositories yet'}
                  </p>
                  <p className={`mt-1 line-clamp-2 text-sm ${innerPanelTextClass}`}>
                    {latestRepo?.description || 'Your newest public repository will appear here.'}
                  </p>
                </div>
              </div>
            </SurfaceCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <SurfaceCard title="Top Languages" icon={<FaCode size={15} />} className="border-[#263b5f] bg-[linear-gradient(150deg,#0b1225_0%,#0e1730_55%,#101b35_100%)] shadow-[0_22px_70px_rgba(4,9,20,0.42)] xl:h-[430px]">
              <div
                ref={languageScrollerRef}
                className="h-full min-h-0 max-h-full overflow-y-auto pr-2 [scrollbar-width:thin] [scrollbar-color:rgba(59,130,246,0.45)_transparent]"
                onMouseEnter={() => setIsLanguageScrollerHovering(true)}
                onMouseLeave={() => setIsLanguageScrollerHovering(false)}
              >
                <div className="grid gap-3 pb-1">
                  {languageRows.length ? (
                    languageRows.map((item) => (
                      <LanguageRow key={item.language} language={item.language} count={item.count} share={item.share} />
                    ))
                  ) : (
                    <div className="rounded-2xl border border-white/5 bg-white/4 px-4 py-6 text-sm text-[#7f8dab]">
                      {loading ? 'Loading language breakdown...' : 'No language data available.'}
                    </div>
                  )}
                </div>
              </div>
            </SurfaceCard>
          </motion.div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-4"
          >
            <SurfaceCard title="Commit Streak" icon={<FaUsers size={15} />}>
              <div className={`rounded-2xl border p-4 ${innerPanelClass}`}>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div>
                    <p className={`text-2xl font-semibold ${strongTextClass}`}>{summary ? formatNumber(summary.totalStars) : '—'}</p>
                    <p className={`mt-1 text-[10px] uppercase tracking-[0.16em] ${innerPanelTextClass}`}>Stars</p>
                  </div>
                  <div className={`border-x ${dividerClass}`}>
                    <p className="text-2xl font-semibold text-cyan">{profile ? formatNumber(profile.public_repos ?? 0) : '—'}</p>
                    <p className={`mt-1 text-[10px] uppercase tracking-[0.16em] ${innerPanelTextClass}`}>Repos</p>
                  </div>
                  <div>
                    <p className={`text-2xl font-semibold ${strongTextClass}`}>{latestRepo ? formatRelativeTime(latestRepo.pushed_at) : '—'}</p>
                    <p className={`mt-1 text-[10px] uppercase tracking-[0.16em] ${innerPanelTextClass}`}>Latest</p>
                  </div>
                </div>
              </div>

              <a
                href={streakUrl}
                target="_blank"
                rel="noreferrer"
                className={`mt-4 block overflow-hidden rounded-2xl border p-2 ${innerPanelClass}`}
              >
                <img src={streakUrl} alt="GitHub streak stats" loading="lazy" className="w-full object-contain" />
              </a>
            </SurfaceCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.06 }}
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-8"
          >
            <SurfaceCard title="Contribution Heatmap" icon={<FaGithub size={15} />}>
              <div className={`rounded-2xl border p-4 ${innerPanelClass}`}>
                <img
                  src={contributionsUrl}
                  alt="GitHub contribution heatmap"
                  loading="lazy"
                  style={{ filter: 'invert(1) hue-rotate(180deg) brightness(1.5)' }}
                  className={`w-full rounded-xl border p-2  object-contain `}
                />
              </div>
              <div className={`mt-4 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] ${innerPanelTextClass}`}>
                <span>Less</span>
                <div className="flex items-center gap-1.5">
                  {[0, 1, 2, 3, 4].map((level) => (
                    <span
                      key={level}
                      className="inline-block h-3 w-3 rounded-[3px]"
                      style={{ backgroundColor: `rgba(45, 212, 191, ${0.18 + level * 0.18})` }}
                    />
                  ))}
                </div>
                <span>More</span>
              </div>
            </SurfaceCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default GitHubStats;
