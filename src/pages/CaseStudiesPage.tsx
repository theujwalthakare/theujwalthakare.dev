const caseStudies = [
  {
    title: 'Threat Intel Automation',
    subtitle: 'Security Operations | 2024',
    description:
      'Designed an automation pipeline that collects OSINT feeds, enriches them with MITRE ATT&CK context, and distributes prioritized alerts to SOC teams.',
    stack: ['TypeScript', 'Next.js', 'FastAPI', 'PostgreSQL', 'Docker'],
    highlight:
      'Reduced mean-time-to-detect by 47% and kept analysts focused on high-impact incidents.',
    url: 'https://github.com/theujwalthakare',
  },
  {
    title: 'Adaptive Learning LMS',
    subtitle: 'EdTech Platform | 2023',
    description:
      'Built a progressive web experience that adapts study paths based on learner performance signals and integrates live lab environments for practice.',
    stack: ['React', 'Node.js', 'GraphQL', 'Redis', 'AWS'],
    highlight:
      'Drove a 33% increase in course completion rates by personalizing content sequencing.',
    url: 'https://github.com/theujwalthakare',
  },
  {
    title: 'Cyber Range Simulator',
    subtitle: 'University Capstone | 2022',
    description:
      'Implemented a hands-on cyber-range with scenario authoring tools, scoring dashboards, and isolated network topologies for blue/red team exercises.',
    stack: ['Python', 'Django', 'Terraform', 'Azure', 'Ansible'],
    highlight:
      'Enabled faculty to deploy new training exercises in minutes instead of hours.',
    url: 'https://github.com/theujwalthakare',
  },
];

const CaseStudiesPage = () => {
  return (
    <section className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-12">
          <p className="font-mono text-cyber-blue uppercase tracking-widest text-sm">Case Studies</p>
          <h1 className="text-4xl md:text-5xl font-dystopian text-white mt-4 mb-6">
            Deep dives into mission-critical builds.
          </h1>
          <p className="text-gray-300 text-lg">
            Each case study captures the problem framing, architectural decisions, and measurable outcomes that shaped my major projects.
          </p>
        </div>

        <div className="grid gap-10">
          {caseStudies.map((study) => (
            <article
              key={study.title}
              className="relative overflow-hidden rounded-xl border border-cyber-blue/40 bg-cyber-dark/80 p-8 shadow-[0_0_30px_rgba(0,240,255,0.08)] transition-transform duration-300 hover:-translate-y-1"
            >
              <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-cyber text-white">{study.title}</h2>
                  <p className="text-sm text-cyber-pink mt-1">{study.subtitle}</p>
                </div>
                <a
                  href={study.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-start md:self-center inline-flex items-center gap-2 border border-cyber-blue/60 bg-cyber-dark px-4 py-2 text-sm font-mono uppercase tracking-[0.2em] text-cyber-blue transition hover:bg-cyber-blue/10"
                >
                  View Build Journal
                </a>
              </header>

              <p className="text-gray-300 leading-relaxed mb-6">{study.description}</p>

              <div className="flex flex-wrap gap-3 mb-6">
                {study.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-cyber-blue/40 bg-cyber-dark/60 px-4 py-1 text-xs font-mono uppercase tracking-widest text-gray-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <p className="text-cyber-blue text-sm font-mono uppercase tracking-[0.3em]">{study.highlight}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesPage;
