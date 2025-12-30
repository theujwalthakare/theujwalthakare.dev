import { useState } from 'react';
import DecryptedText from '../ui/DecryptedText';

type TabKey = 'work' | 'education' | 'certifications';

type TimelineItem = {
  title: string;
  subtitle: string;
  period: string;
  location?: string;
  highlights: string[];
  skills?: string[];
};

const tabLabels: Record<TabKey, string> = {
  work: 'Work Experience',
  education: 'Education',
  certifications: 'Certifications',
};

const workExperience: TimelineItem[] = [
  {
    title: 'Training & Internship — Python Full Stack',
    subtitle: 'The Kiran Academy, Pune',
    period: '2025 (Ongoing)',
    location: 'Hybrid',
    highlights: [
      'Immersive track across Python, full-stack, data science, and ML with production-style exercises',
      'Built mini projects like portfolio sites, analytics dashboards, and a spam detector with model monitoring',
      'Practicing secure coding with OWASP Top 10 drills plus tooling such as Nmap and Burp Suite',
      'Placement prep: resume refinements, mock interviews, and timed technical assessments',
    ],
    skills: ['Python', 'React', 'Data Science', 'OWASP', 'Burp Suite'],
  },
];

const education: TimelineItem[] = [
  {
    title: 'B.Sc. Computer Science',
    subtitle: 'Savitribai Phule Pune University',
    period: '2022 – 2025',
    location: 'Pune, IN',
    highlights: [
      'Graduated with 7.93 CGPA and focused on applied software engineering tracks',
      'Projects spanning web apps, networking labs, and relational database design',
      'Coursework: cybersecurity, data structures, web programming, Java, and Python',
      'Active participant in tech fests and coding competitions with peer mentoring',
    ],
    skills: ['Cybersecurity', 'Data Structures', 'Web Programming', 'Java', 'Python'],
  },
];

const certifications: TimelineItem[] = [
  {
    title: 'Python Full Stack Development with AI & ML',
    subtitle: 'The Kiran Academy, Pune',
    period: '2025 (Ongoing)',
    highlights: [
      'Hands-on labs across Python, NumPy/Pandas, visualization, classical ML, and React + Node + MongoDB delivery',
    ],
    skills: ['Python', 'Machine Learning', 'Data Viz', 'React', 'MongoDB'],
  },
  {
    title: 'Java Full Stack Development (Core + Advanced)',
    subtitle: 'I-Tech Solutions, Nashik',
    period: 'Jan 2024 – Jul 2024',
    highlights: [
      'Completed 6-month program covering Core Java, Hibernate, Spring Boot, REST APIs, MVC patterns, and PostgreSQL',
    ],
    skills: ['Java', 'Spring Boot', 'Hibernate', 'REST', 'PostgreSQL'],
  },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('work');
  const panelSurface = { background: 'var(--panel-bg)', border: '1px solid var(--panel-border)', boxShadow: 'var(--panel-glow)' };
  const textPrimary = { color: 'var(--text-primary)' };
  const textStrong = { color: 'var(--text-strong)' };

  const renderTimeline = (items: TimelineItem[], label: string) => (
    <div className="grid gap-6 max-w-5xl mx-auto">
      {items.map((item, index) => (
        <article
          key={`${item.title}-${index}`}
          className="group relative overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1"
          style={panelSurface}
        >
          <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_20%_20%,rgba(0,240,255,0.12),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(255,59,111,0.08),transparent_32%)]" />
          <div className="absolute left-4 top-6 bottom-6 hidden w-px bg-cyber-blue/30 sm:block" />
          <div className="absolute left-[14px] top-12 hidden h-3 w-3 rounded-full bg-cyber-blue/80 shadow-[0_0_14px_rgba(0,240,255,0.45)] sm:block" />

          <div className="relative flex flex-col gap-4 p-6 sm:pl-12">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="space-y-1" style={textPrimary}>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cyber-blue">
                  <DecryptedText text={label} speed={40} />
                </p>
                <h3 className="text-xl font-cyber" style={textStrong}>{item.title}</h3>
                <p className="text-sm" style={{ color: 'var(--text-primary)', opacity: 0.8 }}>{item.subtitle}</p>
              </div>
              <div className="flex flex-col items-end gap-2 text-right">
                <span className="rounded-full border border-cyber-blue/30 px-3 py-1 text-xs font-medium text-cyber-blue/90">
                  {item.period}
                </span>
                {item.location && <span className="text-xs text-gray-400">{item.location}</span>}
              </div>
            </div>

            <ul className="grid gap-2 text-sm" style={textPrimary}>
              {item.highlights.map((highlight, bulletIndex) => (
                <li key={`${item.title}-highlight-${bulletIndex}`} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyber-blue/80" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            {item.skills && (
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <span
                    key={`${item.title}-${skill}`}
                    className="rounded-full border border-cyber-blue/30 bg-cyber-blue/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-cyber-blue"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        </article>
      ))}
    </div>
  );

  return (
    <section id="experience" className="relative overflow-hidden py-20" style={{ backgroundColor: 'var(--bg-body)' }}>
      <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 15% 20%, rgba(0,240,255,0.08), transparent 32%), radial-gradient(circle at 85% 10%, rgba(255,59,111,0.08), transparent 30%)' }} />
      <div className="container relative mx-auto px-4">
        <div className="mb-12 space-y-3 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-cyber-blue">Trajectory</p>
          <h2 className="text-4xl md:text-5xl font-dystopian" style={textStrong}>
            <DecryptedText text="Experience & Education" speed={48} />
          </h2>
          <p className="mx-auto max-w-2xl text-sm" style={textPrimary}>
            A snapshot of the work, education, and certifications shaping my engineering craft—with highlights that show delivery, security, and learning in motion.
          </p>
        </div>

        <div className="mb-10 flex justify-center">
          <div
            role="tablist"
            aria-label="Experience tabs"
            className="inline-flex items-center gap-2 rounded-full border border-cyber-blue/30 bg-cyber-dark/60 p-2 shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
          >
            {(['work', 'education', 'certifications'] as TabKey[]).map((tab) => (
              <button
                key={tab}
                role="tab"
                aria-selected={activeTab === tab}
                className={`rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-[0.12em] transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyber-pink ${
                  activeTab === tab
                    ? 'bg-cyber-blue/20 text-cyber-blue shadow-[0_10px_30px_rgba(0,240,255,0.25)]'
                    : 'text-gray-400 hover:text-cyber-blue'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'work' ? 'Work' : tab === 'education' ? 'Education' : 'Certifications'}
              </button>
            ))}
          </div>
        </div>

        {activeTab === 'work' && renderTimeline(workExperience, tabLabels.work)}
        {activeTab === 'education' && renderTimeline(education, tabLabels.education)}
        {activeTab === 'certifications' && renderTimeline(certifications, tabLabels.certifications)}
      </div>
    </section>
  );
};

export default Experience;