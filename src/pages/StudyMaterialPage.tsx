const studyDrops = [
  {
    title: 'Full Stack Jumpstart Notes',
    format: 'Notion Handbook',
    focus: 'Fundamentals, deployment playbooks, debugging recipes',
    size: '38 pages',
    link: 'https://theujwalthakare.notion.site',
  },
  {
    title: 'Cybersecurity Lab Workbook',
    format: 'PDF Exercises',
    focus: 'SOC tooling, incident response drills, purple team tactics',
    size: '26 labs',
    link: 'https://theujwalthakare.notion.site',
  },
  {
    title: 'React + TypeScript Sprint Kit',
    format: 'GitHub Repository',
    focus: 'Component patterns, state machines, data fetching architecture',
    size: '12 curated templates',
    link: 'https://github.com/theujwalthakare',
  },
  {
    title: 'Career Compass Checklist',
    format: 'Google Sheet',
    focus: 'Interview prep loops, networking cadences, learning roadmap',
    size: 'Self-updating',
    link: 'https://docs.google.com',
  },
];

const StudyMaterialPage = () => {
  return (
    <section className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <header className="max-w-2xl mb-12">
          <p className="font-mono text-cyber-blue uppercase tracking-widest text-sm">Study Vault</p>
          <h1 className="text-4xl md:text-5xl font-dystopian text-white mt-4 mb-6">
            Resources I rely on to teach, mentor, and keep learning.
          </h1>
          <p className="text-gray-300 text-lg">
            Bookmark the assets you need — I refresh them frequently with labs, templates, and actionable notes from my own learning cycles.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {studyDrops.map((drop) => (
            <article
              key={drop.title}
              className="relative overflow-hidden rounded-xl border border-cyber-blue/30 bg-cyber-dark/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyber-blue/70"
            >
              <div className="mb-4">
                <p className="text-xs font-mono uppercase tracking-[0.35em] text-cyber-pink">{drop.format}</p>
                <h2 className="mt-3 text-2xl font-cyber text-white">{drop.title}</h2>
              </div>

              <p className="text-gray-300 mb-4">{drop.focus}</p>

              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-[0.3em] text-gray-400">{drop.size}</span>
                <a
                  href={drop.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-cyber-blue/60 px-4 py-2 text-xs font-mono uppercase tracking-[0.4em] text-cyber-blue transition hover:bg-cyber-blue/10"
                >
                  Access
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudyMaterialPage;
