import { Link, Navigate, useParams } from 'react-router-dom';
import { getBlogBySlug } from '../content/blogs';

const BlogDetailPage = () => {
  const { slug } = useParams();
  const article = getBlogBySlug(slug ?? '');

  if (!article) {
    return <Navigate to="/blogs" replace />;
  }

  return (
    <section className="relative mx-auto max-w-5xl px-4 py-24 text-white">
      <div className="absolute inset-0 -z-10 rounded-[4rem] bg-gradient-to-br from-cyber-blue/15 via-cyber-pink/10 to-transparent blur-3xl" />

      <article className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-white/[0.07] p-10 md:p-14 backdrop-blur-xl shadow-[0_0_80px_rgba(0,240,255,0.22)]">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-cyber-blue/10 opacity-60" />

        <header className="relative z-10 space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-white/60">
            {article.date} · {article.readingTime}
          </p>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">{article.title}</h1>
          <p className="max-w-3xl text-base text-white/75 md:text-lg">{article.description}</p>
          <div className="flex flex-wrap gap-3">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/70"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="relative z-10 mt-12 space-y-10 text-white/80">
          {article.sections.map((section) => (
            <section
              key={section.heading ?? section.body[0]}
              className="space-y-5 rounded-2xl border border-white/10 bg-white/[0.05] p-6 md:p-8"
            >
              {section.heading && <h2 className="text-2xl font-semibold text-white md:text-[2rem]">{section.heading}</h2>}

              {section.body.map((paragraph, index) => (
                <p key={index} className="leading-relaxed text-white/75">
                  {paragraph}
                </p>
              ))}

              {section.list && (
                <ul className="list-disc space-y-2 pl-6 text-white/70">
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}

              {section.quote && (
                <blockquote className="rounded-2xl border border-cyber-blue/40 bg-cyber-blue/10 px-6 py-5 text-white/80">
                  {section.quote}
                </blockquote>
              )}
            </section>
          ))}
        </div>

        <footer className="relative z-10 mt-16 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-sm text-white/70 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="uppercase tracking-[0.3em] text-white/50">Updated</p>
            <p className="mt-1 text-white/80">{article.updated}</p>
            <p className="mt-4 uppercase tracking-[0.3em] text-white/50">Maintainer</p>
            <p className="mt-1 text-white/80">{article.maintainer}</p>
          </div>
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 rounded-full border border-cyber-blue/50 bg-cyber-blue/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-cyber-blue transition hover:bg-cyber-blue/20"
          >
            ← Back to Blogs
          </Link>
        </footer>
      </article>
    </section>
  );
};

export default BlogDetailPage;
