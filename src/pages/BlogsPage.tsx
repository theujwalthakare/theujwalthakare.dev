import { Link } from 'react-router-dom';
import { blogArticles } from '../content/blogs';

const BlogsPage = () => {
  return (
    <section className="space-y-12">
      <header className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">Knowledge Dispatches</p>
        <h1 className="text-4xl font-semibold text-slate-900 md:text-5xl">
          Essays, teardown notes, and field learnings.
        </h1>
        <p className="max-w-3xl text-lg text-slate-600">
          These posts catalogue the architecture debates, security playbooks, and learning loops powering my work. Each one links deeper for
          reference-grade documentation.
        </p>
      </header>

      <div className="space-y-6">
        {blogArticles.map((article) => (
          <article
            key={article.slug}
            className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md md:flex-row md:items-center md:gap-8"
          >
            <div className="flex-1 space-y-4">
              <div className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
                {article.date} · {article.readingTime}
              </div>
              <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">{article.title}</h2>
              <p className="text-slate-600">{article.description}</p>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-300 bg-slate-100 px-3 py-1 text-xs font-medium uppercase tracking-[0.25em] text-slate-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="md:self-start">
              <Link
                to={`/blogs/${article.slug}`}
                className="inline-flex items-center justify-center rounded border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-slate-400 hover:text-slate-900"
              >
                Read the Article →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BlogsPage;
