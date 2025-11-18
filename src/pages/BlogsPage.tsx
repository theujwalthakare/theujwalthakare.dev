import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { blogArticles } from '../content/blogs';

const accentPalette = [
  'from-cyber-blue/40 via-transparent to-transparent',
  'from-cyber-pink/40 via-transparent to-transparent',
  'from-cyber-green/40 via-transparent to-transparent',
];

const BlogsPage = () => {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [subjectQuery, setSubjectQuery] = useState('');

  const subjects = useMemo(() => {
    const unique = new Set<string>();
    blogArticles.forEach((article) => article.tags.forEach((tag) => unique.add(tag)));
    return Array.from(unique).sort((a, b) => a.localeCompare(b));
  }, []);

  const filteredSubjects = useMemo(
    () => subjects.filter((subject) => subject.toLowerCase().includes(subjectQuery.trim().toLowerCase())),
    [subjectQuery, subjects]
  );

  const visibleArticles = useMemo(
    () => (selectedSubject ? blogArticles.filter((article) => article.tags.includes(selectedSubject)) : blogArticles),
    [selectedSubject]
  );

  return (
    <section className="relative mx-auto max-w-7xl px-4 py-24 text-white">
      <div className="absolute inset-0 -z-10 rounded-[4rem] bg-gradient-to-br from-cyber-blue/10 via-cyber-pink/10 to-transparent blur-3xl" />

      <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-white/[0.06] p-10 backdrop-blur-xl shadow-[0_0_70px_rgba(0,240,255,0.18)]">
        <header className="max-w-3xl space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.55em] text-cyber-blue/70">Knowledge Dispatches</p>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">Strategy dossiers for builders and operators.</h1>
          <p className="text-base text-white/70 md:text-lg">
            Browse the latest write-ups across security, delivery, and knowledge systems. Each card holds the executive summary, maintainer, and
            a direct launch pad into the full breakdown.
          </p>
          {selectedSubject && (
            <div className="rounded-full border border-cyber-green/50 bg-cyber-green/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-cyber-green">
              Filtering by subject: {selectedSubject}
            </div>
          )}
        </header>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {visibleArticles.map((article, index) => (
            <article
              key={article.slug}
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition duration-300 hover:-translate-y-1 hover:border-cyber-green/40 hover:shadow-[0_0_55px_rgba(0,255,157,0.25)]"
            >
              <div
                className={`pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-60 bg-gradient-to-br ${
                  accentPalette[index % accentPalette.length]
                }`}
              />
              <div className="relative z-10 flex flex-col gap-6">
                <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-white/50">
                  <span>{article.date}</span>
                  <span className="h-1 w-1 rounded-full bg-white/30" />
                  <span>{article.readingTime}</span>
                </div>
                <div className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white md:text-[1.65rem]">{article.title}</h2>
                  <p className="text-sm text-white/70 md:text-base">{article.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.3em] text-white/60">
                  {article.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/15 bg-white/5 px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative z-10 mt-8 flex items-center justify-between gap-6 border-t border-white/10 pt-6 text-sm text-white/70">
                <div>
                  <p className="uppercase tracking-[0.35em] text-white/50">Maintainer</p>
                  <p className="mt-1 text-white/80">{article.maintainer}</p>
                </div>
                <Link
                  to={`/blogs/${article.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-cyber-green/50 bg-cyber-green/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-cyber-green transition hover:bg-cyber-green/20"
                >
                  Open Blog
                  <span aria-hidden className="translate-y-[1px] transition group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {visibleArticles.length === 0 && (
          <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-10 text-center text-white/70">
            <p className="text-lg">No blogs found for that subject yet. Clear the filter or try another keyword.</p>
            <button
              type="button"
              onClick={() => {
                setSelectedSubject(null);
                setSubjectQuery('');
              }}
              className="mt-6 rounded-full border border-cyber-blue/60 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-cyber-blue hover:bg-cyber-blue/20"
            >
              Reset Search
            </button>
          </div>
        )}

        <section className="mt-16 rounded-3xl border border-white/10 bg-white/[0.04] p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl space-y-2">
              <h2 className="text-2xl font-semibold text-white md:text-[2rem]">Subject Navigator</h2>
              <p className="text-sm text-white/70 md:text-base">
                Search by discipline and tap a subject to filter the grid above. Use the control to clear back to the full knowledge feed when
                you are done exploring.
              </p>
            </div>
            <div className="flex flex-col gap-2 text-xs uppercase tracking-[0.35em] text-white/70">
              <label htmlFor="subject-search">Subject search</label>
              <input
                id="subject-search"
                type="search"
                value={subjectQuery}
                onChange={(event) => setSubjectQuery(event.target.value)}
                placeholder="Search subject keywords"
                className="w-full rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:border-cyber-blue focus:outline-none md:min-w-[280px]"
              />
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setSelectedSubject(null)}
              className={`rounded-full border px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] transition ${
                selectedSubject === null
                  ? 'border-cyber-blue/80 bg-cyber-blue/20 text-cyber-blue shadow-[0_0_20px_rgba(0,240,255,0.35)]'
                  : 'border-white/15 text-white/60 hover:border-cyber-blue/60 hover:text-cyber-blue'
              }`}
            >
              All Subjects
            </button>

            {filteredSubjects.map((subject) => (
              <button
                key={subject}
                type="button"
                onClick={() => setSelectedSubject((current) => (current === subject ? null : subject))}
                className={`rounded-full border px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] transition ${
                  selectedSubject === subject
                    ? 'border-cyber-pink/80 bg-cyber-pink/20 text-cyber-pink shadow-[0_0_20px_rgba(255,0,128,0.35)]'
                    : 'border-white/15 text-white/60 hover:border-cyber-pink/60 hover:text-cyber-pink'
                }`}
              >
                {subject}
              </button>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default BlogsPage;
