import { Link, Navigate, useParams } from 'react-router-dom';
import { getBlogBySlug } from '../content/blogs';

const BlogDetailPage = () => {
  const { slug } = useParams();
  const article = getBlogBySlug(slug ?? '');

  if (!article) {
    return <Navigate to="/blogs" replace />;
  }

  return (
    <article className="space-y-12">
      <header className="space-y-6">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
          {article.date} · {article.readingTime}
        </p>
        <h1 className="text-4xl font-semibold text-slate-900 md:text-5xl">{article.title}</h1>
        <p className="max-w-3xl text-lg text-slate-600">{article.description}</p>
        <div className="flex flex-wrap gap-3">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-medium uppercase tracking-[0.3em] text-slate-500"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <section className="space-y-10 text-slate-700">
        {article.sections.map((section) => (
          <div key={section.heading ?? section.body[0]} className="space-y-4">
            {section.heading && (
              <h2 className="text-2xl font-semibold text-slate-900">{section.heading}</h2>
            )}

            {section.body.map((paragraph, index) => (
              <p key={index} className="leading-relaxed text-slate-700">
                {paragraph}
              </p>
            ))}

            {section.list && (
              <ul className="list-disc space-y-2 pl-6 text-slate-700">
                {section.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}

            {section.quote && (
              <blockquote className="border-l-4 border-slate-300 bg-slate-100 px-6 py-4 text-slate-600">
                {section.quote}
              </blockquote>
            )}
          </div>
        ))}
      </section>

      <footer className="flex flex-col gap-4 border-t border-slate-200 pt-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p>Updated: {article.updated}</p>
          <p>Maintainer: {article.maintainer}</p>
        </div>
        <Link
          to="/blogs"
          className="inline-flex items-center justify-center rounded border border-slate-300 px-4 py-2 font-medium text-slate-600 transition hover:border-slate-400 hover:text-slate-900"
        >
          ← Back to knowledge feed
        </Link>
      </footer>
    </article>
  );
};

export default BlogDetailPage;
