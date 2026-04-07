import { motion } from 'framer-motion';
import { useRef } from 'react';
import { SectionHeading } from '../ui/SectionHeading';

export function Education() {
  const ref = useRef(null);
  const textStrong = { color: 'var(--text-strong, #f8fafc)' };

  const degrees = [
    {
      degree: 'Master of Computer Applications',
      institute: 'MET Bhujbal Knowledge City',
      location: 'Nashik, Maharashtra, India',
      CGPA: ' SGPA:  8.93/10',
      duration: 'Aug 2025 – Present',
      status: 'current',
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      institute: 'Savitribai Phule Pune University',
      location: 'Nashik, Maharashtra, India',
      CGPA: 'CGPA: 7.93/10',
      duration: 'Jun 2022 – Jul 2025',
      status: 'completed',
    },
  ];

  return (
    <section ref={ref} id="education" className="relative overflow-hidden px-4 py-20 md:px-8 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(59,130,246,0.15),transparent_40%),radial-gradient(circle_at_82%_18%,rgba(255,109,0,0.16),transparent_38%)]" />
      <div className="container-lg relative mx-auto">
        <SectionHeading index="05" title="Education" className="mb-14" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {degrees.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: idx * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              whileHover={{ y: -6, scale: 1.01 }}
            >
              <div
                className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 backdrop-blur-xl p-6 md:p-7 ${
                  edu.status === 'current'
                    ? 'border-emerald/30 bg-emerald/8 hover:border-emerald/60 hover:shadow-[0_20px_60px_rgba(0,0,0,0.48),0_0_24px_rgba(22,199,132,0.2)]'
                    : 'border-cyan/20 bg-slate-900/45 hover:border-violet/60 hover:shadow-[0_20px_60px_rgba(0,0,0,0.48),0_0_24px_rgba(255,109,0,0.2)]'
                }`}
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(59,130,246,0.2),transparent_36%),radial-gradient(circle_at_86%_14%,rgba(255,109,0,0.18),transparent_34%)] opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent" />

                <div className="relative z-10">
                  {/* Status Badge */}
                  <div className="mb-5">
                    <motion.span
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.15 }}
                      viewport={{ once: true }}
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold ${
                        edu.status === 'current'
                          ? 'bg-emerald/20 text-emerald border border-emerald/40'
                          : 'bg-cyan/20 text-cyan border border-cyan/40'
                      }`}
                    >
                      {edu.status === 'current' && (
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                          className="w-2 h-2 rounded-full bg-emerald"
                        />
                      )}
                      {edu.status === 'current' ? 'Current' : 'Completed'}
                    </motion.span>
                  </div>

                  {/* Content */}
                  <h3 className="about-typography-title text-xl md:text-2xl leading-tight mb-3" style={textStrong}>
                    {edu.degree}
                  </h3>
                  <p className="about-typography-copy text-sm md:text-[15px] mb-1.5" style={textStrong}>
                    {edu.institute}
                  </p>
                  <p className="about-typography-copy text-sm md:text-[15px] mb-1.5" style={textStrong}>
                    {edu.CGPA}
                  </p>
                  <p className="about-typography-copy text-xs md:text-sm mb-4" style={textStrong}>
                    {edu.location}
                  </p>
                  <div className="about-typography-eyebrow text-[10px] text-cyan border-t border-cyan/20 pt-4">
                    {edu.duration}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline visualization */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mt-14 md:mt-18 relative overflow-hidden rounded-2xl border border-cyan/20 bg-slate-900/45 backdrop-blur-xl p-6 md:p-8 transition-all duration-300 hover:border-cyan/40 hover:shadow-[0_20px_60px_rgba(0,0,0,0.48),0_0_20px_rgba(59,130,246,0.15)]"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_16%,rgba(59,130,246,0.18),transparent_40%)] opacity-80" />
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex-1">
                <div className="about-typography-eyebrow text-[10px] text-cyan mb-2">2022</div>
                <div className="about-typography-title text-lg md:text-xl" style={textStrong}>
                  BSc Computer Science
                </div>
              </div>
              <div className="hidden md:flex flex-1 h-1 bg-gradient-to-r from-cyan via-violet to-emerald mx-4 rounded-full" />
              <div className="md:hidden w-full h-px bg-gradient-to-r from-cyan to-violet rounded-full" />
              <div className="flex-1 text-right">
                <div className="about-typography-eyebrow text-[10px] text-emerald mb-2">2025+</div>
                <div className="about-typography-title text-lg md:text-xl" style={textStrong}>
                  Master of Computer Applications
                </div>
              </div>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}

export default Education;
