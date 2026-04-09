// import { motion } from 'framer-motion';
// import { useRef, useState } from 'react';
// import { SectionHeading } from '../ui/SectionHeading';

export function Achievements() {
  // const ref = useRef(null);
  // const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  // const textPrimary = { color: 'var(--text-primary, rgba(248, 250, 252, 0.82))' };
  // const textStrong = { color: 'var(--text-strong, #f8fafc)' };

  // const achievements = [
  //   {
  //     title: 'Java Development Internship',
  //     org: 'Kiran Academy (Java By Kiran)',
  //     year: '2025',
  //     description: 'Completed comprehensive Java development training with focus on OOP, DSA, and backend logic.',
  //   },
  //   {
  //     title: 'Secure Data Lake on Cloud Storage',
  //     org: 'Google Cloud',
  //     year: '2024',
  //     description: 'Earned skill badge by completing hands-on project building secure data lake architecture on GCP.',
  //   },
  //   {
  //     title: 'Postman API Fundamentals Expert',
  //     org: 'Postman',
  //     year: '2024',
  //     description: 'Student expert certification for API fundamentals and comprehensive API testing knowledge.',
  //   },
  // ];

  // const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
  //   const rect = e.currentTarget.getBoundingClientRect();
  //   setMousePos({
  //     x: e.clientX - rect.left,
  //     y: e.clientY - rect.top,
  //   });
  // };

  return (
    <section  id="achievements" className="relative overflow-hidden px-4 py-20 md:px-8 md:py-28">
     {/* <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(59,130,246,0.14),transparent_40%),radial-gradient(circle_at_82%_14%,rgba(255,109,0,0.14),transparent_38%)]" />
       <div className="container-lg relative mx-auto">
        <SectionHeading index="08" title="Achievements" className="mb-14" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="group relative mb-12 overflow-hidden rounded-2xl border border-cyan/20 bg-slate-900/45 p-6 backdrop-blur-xl transition-all duration-300 hover:border-violet/55 hover:shadow-[0_22px_60px_rgba(0,0,0,0.48),0_0_22px_rgba(255,109,0,0.18)] md:mb-16 md:p-8"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(59,130,246,0.18),transparent_38%),radial-gradient(circle_at_88%_12%,rgba(255,109,0,0.14),transparent_34%)] opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative z-10">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <div className="flex-1 flex items-center gap-3 rounded-lg border border-cyan/25 bg-slate-950/35 px-4 py-3">
              <span className="text-2xl">☕</span>
              <span className="about-typography-copy text-sm italic" style={textPrimary}>Internship Trainee - Java Dev at Kiran Academy</span>
            </div>
            <div className="flex-1 flex items-center gap-3 rounded-lg border border-violet/35 bg-slate-950/35 px-4 py-3">
              <span className="text-2xl">🔒</span>
              <span className="about-typography-copy text-sm italic" style={textPrimary}>Google Cloud Skill Badge - Secure Data Lake</span>
            </div>
            <div className="flex-1 flex items-center gap-3 rounded-lg border border-emerald/35 bg-slate-950/35 px-4 py-3">
              <span className="text-2xl">📮</span>
              <span className="about-typography-copy text-sm italic" style={textPrimary}>Postman Student Expert</span>
            </div>
          </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {achievements.map((achievement, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              viewport={{ once: true, margin: '-100px' }}
              onMouseMove={handleMouseMove}
              className="group cursor-default"
            >
              <div className="relative h-full overflow-hidden rounded-2xl border border-cyan/20 bg-slate-900/45 p-8 backdrop-blur-xl transition-all duration-300 hover:border-violet/55 hover:shadow-[0_22px_62px_rgba(0,0,0,0.5),0_0_22px_rgba(255,109,0,0.18)] md:p-10">
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: `radial-gradient(circle 160px at ${mousePos.x}px ${mousePos.y}px, rgba(59,130,246,0.18), transparent)`,
                  }}
                />

                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_16%,rgba(59,130,246,0.16),transparent_36%),radial-gradient(circle_at_86%_12%,rgba(255,109,0,0.12),transparent_34%)] opacity-75" />

                <div className="relative z-10 flex flex-col items-center text-center space-y-4 h-full">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="text-5xl"
                  >
                    🏆
                  </motion.div>

                  <h3 className="text-lg md:text-xl font-bold text-text leading-tight">
                    <span className="about-typography-title" style={textStrong}>{achievement.title}</span>
                  </h3>

                  <p className="about-typography-copy text-sm text-cyan" style={textPrimary}>{achievement.org}</p>

                  <p className="about-typography-eyebrow text-[10px] text-cyan">{achievement.year}</p>

                  <p className="about-typography-copy text-sm leading-relaxed flex-grow" style={textPrimary}>
                    {achievement.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div> */}
    </section>
  );
}

export default Achievements;
