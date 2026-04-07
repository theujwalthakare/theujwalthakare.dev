import { motion } from 'framer-motion';
import { useRef } from 'react';
import { SectionHeading } from '../ui/SectionHeading';

export function GitHubStats() {
  const ref = useRef(null);
  const textPrimary = { color: 'var(--text-primary, rgba(248, 250, 252, 0.82))' };
  const textStrong = { color: 'var(--text-strong, #f8fafc)' };

  const stats = [
    {
      title: 'GitHub Stats',
      src: 'https://github-readme-stats.vercel.app/api?username=ujwalthakare&show_icons=true&theme=tokyonight&bg_color=0f172a&border_color=00d9ff22&title_color=00d9ff&text_color=94a3b8&icon_color=7c3aed&hide_border=false',
      colSpan: 'md:col-span-1',
    },
    {
      title: 'Top Languages',
      src: 'https://github-readme-stats.vercel.app/api/top-langs?username=ujwalthakare&layout=compact&theme=tokyonight&bg_color=0f172a&border_color=00d9ff22&title_color=00d9ff&text_color=94a3b8',
      colSpan: 'md:col-span-1',
    },
    {
      title: 'Streak Stats',
      src: 'https://github-readme-streak-stats.vercel.app?user=ujwalthakare&theme=tokyonight&background=0f172a&border=00d9ff22&ring=00d9ff&fire=7c3aed&currStreakLabel=00d9ff',
      colSpan: 'md:col-span-2',
    },
  ];

  return (
    <section ref={ref} id="github" className="relative overflow-hidden px-4 py-20 md:px-8 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(59,130,246,0.15),transparent_40%),radial-gradient(circle_at_82%_14%,rgba(255,109,0,0.14),transparent_38%)]" />

      <div className="container-lg relative mx-auto">
        <SectionHeading index="07" title="GitHub Activity" className="mb-14" />

        {/* Live indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald/30 bg-emerald/10 px-3 py-1.5 text-xs md:text-sm"
          style={textPrimary}
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-2 h-2 rounded-full bg-emerald"
          />
          <span className="about-typography-eyebrow text-[10px] text-emerald">Syncing from GitHub...</span>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              viewport={{ once: true, margin: '-100px' }}
              className={`${stat.colSpan}`}
            >
              <div className="group relative h-full overflow-hidden rounded-2xl border border-cyan/20 bg-slate-900/45 p-0 backdrop-blur-xl transition-all duration-300 hover:border-violet/55 hover:shadow-[0_24px_70px_rgba(0,0,0,0.5),0_0_26px_rgba(255,109,0,0.2)]">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(59,130,246,0.2),transparent_36%),radial-gradient(circle_at_86%_14%,rgba(255,109,0,0.16),transparent_34%)] opacity-75 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative z-10 border-b border-cyan/15 px-4 py-3">
                  <h3 className="about-typography-title text-base md:text-lg" style={textStrong}>{stat.title}</h3>
                </div>

                <div className="relative z-10 bg-black/25 w-full h-full min-h-[300px] flex items-center justify-center p-2">
                  <img
                    src={stat.src}
                    alt={stat.title}
                    loading="lazy"
                    className="w-full h-auto"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.innerHTML =
                        '<div class="flex items-center justify-center w-full h-full min-h-[300px] text-muted"><div class="text-center"><svg class="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4m0 0l-4 4m4-4H3"></path></svg><p>' +
                        stat.title +
                        ' loading...</p></div></div>';
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recent Activity strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="group relative overflow-hidden rounded-2xl border border-cyan/20 bg-slate-900/45 p-6 backdrop-blur-xl transition-all duration-300 hover:border-violet/55 hover:shadow-[0_22px_64px_rgba(0,0,0,0.48),0_0_22px_rgba(255,109,0,0.18)] md:p-8"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_16%,rgba(59,130,246,0.18),transparent_38%),radial-gradient(circle_at_84%_14%,rgba(255,109,0,0.14),transparent_34%)] opacity-70 group-hover:opacity-95 transition-opacity duration-300" />
          <div className="relative z-10">
            <h3 className="about-typography-title mb-4 text-lg" style={textStrong}>Recent Activity</h3>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <div className="flex-1 flex items-center gap-3 rounded-lg border border-cyan/25 bg-slate-950/35 px-4 py-3">
              <span className="text-2xl">☕</span>
              <span className="about-typography-copy text-sm" style={textPrimary}>Java Internship Completion · 2025</span>
            </div>
            <div className="flex-1 flex items-center gap-3 rounded-lg border border-violet/35 bg-slate-950/35 px-4 py-3">
              <span className="text-2xl">🔒</span>
              <span className="about-typography-copy text-sm" style={textPrimary}>Google Cloud Skill Badge</span>
            </div>
            <div className="flex-1 flex items-center gap-3 rounded-lg border border-emerald/35 bg-slate-950/35 px-4 py-3">
              <span className="text-2xl">📮</span>
              <span className="about-typography-copy text-sm" style={textPrimary}>Postman API Expert</span>
            </div>
          </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default GitHubStats;
