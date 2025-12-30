import DecryptedText from "../ui/DecryptedText";

const About = () => {
  const panelSurface = { background: 'var(--panel-bg)', border: '1px solid var(--panel-border)', boxShadow: 'var(--panel-glow)' };
  const textPrimary = { color: 'var(--text-primary)' };
  const textStrong = { color: 'var(--text-strong)' };

  return (
    <section id="about" className="relative overflow-hidden py-20" style={{ backgroundColor: 'var(--bg-body)' }}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,59,111,0.08),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(255,77,136,0.08),transparent_30%)]" />

      <div className="container relative mx-auto px-4">
        <div className="mb-12 text-center space-y-3">
          <p className="text-xl uppercase tracking-[0.32em] text-cyber-blue">About</p>
          <h2 className="text-3xl md:text-3xl font-dystopian" style={textStrong}>
            <DecryptedText text="Who I Am" speed={60} />
          </h2>
          <p className="mx-auto max-w-2xl text-sm" style={textPrimary}>
            A security-conscious full-stack developer blending product sense with systems thinking. I love shipping polished interfaces,
            reliable APIs, and resilient infra while keeping a curious eye on emerging tech.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_1.1fr] items-start">
          <div className="relative overflow-hidden rounded-xl p-5" style={panelSurface}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,59,111,0.12),transparent_40%)] opacity-80" />
            <div className="relative flex flex-col gap-5">
              <div className="cyber-border p-2 max-w-md">
                <div className="relative overflow-hidden aspect-[3/3] rounded-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/20 via-transparent to-cyber-blue/10" />
                  <img src="/images/profile.jpg" alt="Ujwal Thakare" className="h-full w-full object-cover" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-sm">
                {[
                  { label: 'Based in', value: 'Nashik, India' },
                  { label: 'Availability', value: 'Open to Remote' },
                  { label: 'Focus', value: 'Full Stack, CyDevOps' },
                  { label: 'Interests', value: 'AI/ML, Cyber Security' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl px-3 py-3 text-left"
                    style={panelSurface}
                  >
                    <p className="text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--text-primary)', opacity: 0.8 }}>{item.label}</p>
                    <p className="font-semibold" style={textStrong}>{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.14em] text-cyber-blue">
                {['TypeScript', 'React', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Tailwind', 'OWASP']
                  .map((pill) => (
                    <span
                      key={pill}
                      className="rounded-full border border-cyber-blue/30 bg-cyber-blue/10 px-3 py-1 text-xs font-semibold text-cyber-blue"
                    >
                      {pill}
                    </span>
                  ))}
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-xl p-5" style={panelSurface}>
              <h3 className="text-lg font-cyber text-cyber-blue mb-3">What I do</h3>
              <p className="leading-relaxed" style={textPrimary}>
                I design and build full-stack experiences—clean UI, accessible flows, and dependable APIs. I care about performance,
                security-by-default, and developer ergonomics. On the back-end, I focus on well-modeled data, observability, and sensible automation.
              </p>
            </div>

            <div className="rounded-xl p-5" style={panelSurface}>
              <h3 className="text-lg font-cyber text-cyber-blue mb-4">Recent highlights</h3>
              <ul className="space-y-3 text-sm" style={textPrimary}>
                <li className="flex gap-3"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyber-blue" />Built AI-assisted portfolio interactions and hardened them with graceful fallbacks for speech APIs.</li>
                <li className="flex gap-3"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyber-blue" />Shipped dashboards and full-stack mini-projects with Python, React, and secure API gateways.</li>
                <li className="flex gap-3"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyber-blue" />Practiced threat-aware development using OWASP drills, auth hardening, and code review checklists.</li>
              </ul>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[{ label: 'Years Learning', value: '3+' }, { label: 'Projects', value: '15+' }, { label: 'Domains', value: 'Web · AI · Security' }].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl px-4 py-5 text-center"
                  style={panelSurface}
                >
                  <p className="text-2xl font-cyber" style={textStrong}>{stat.value}</p>
                  <p className="text-[11px] uppercase tracking-[0.16em] mt-1" style={{ color: 'var(--text-primary)', opacity: 0.8 }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;