import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { SectionHeading } from '../ui/SectionHeading';

type CertificateItem = {
  title: string;
  issuer: string;
  image: string;
  accent: 'cyan' | 'violet' | 'emerald' | 'amber';
};

export function Certifications() {
  const ref = useRef(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [activeCertificate, setActiveCertificate] = useState<CertificateItem | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const textStrong = { color: 'var(--text-strong, #f8fafc)' };

  const accentStyles = {
    cyan: {
      shell: 'bg-slate-900/90 border border-cyan/30',
      panel: 'bg-slate-900/80 shadow-cyan/50 border border-cyan/20',
      shadowA: 'shadow-cyan/70',
      shadowB: 'shadow-cyan/65',
      shadowC: 'shadow-cyan/70',
      shadowD: 'shadow-violet/60',
      shadowE: 'shadow-cyan/70',
      shadowF: 'shadow-violet/65',
      shadowDot: 'shadow-cyan/90',
      title: 'text-cyan-100',
    },
    violet: {
      shell: 'bg-slate-900/90 border border-violet/40',
      panel: 'bg-slate-900/80 shadow-violet/50 border border-violet/20',
      shadowA: 'shadow-violet/70',
      shadowB: 'shadow-violet/65',
      shadowC: 'shadow-cyan/70',
      shadowD: 'shadow-violet/65',
      shadowE: 'shadow-cyan/70',
      shadowF: 'shadow-violet/70',
      shadowDot: 'shadow-cyan/90',
      title: 'text-orange-100',
    },
    emerald: {
      shell: 'bg-slate-900/90  border border-emerald/35',
      panel: 'bg-slate-900/80 shadow-emerald/50 border border-emerald/20',
      shadowA: 'shadow-emerald/70',
      shadowB: 'shadow-cyan/65',
      shadowC: 'shadow-emerald/70',
      shadowD: 'shadow-violet/65',
      shadowE: 'shadow-cyan/70',
      shadowF: 'shadow-emerald/70',
      shadowDot: 'shadow-emerald/90',
      title: 'text-emerald-100',
    },
    amber: {
      shell: 'bg-slate-900/90 border border-violet/35',
      panel: 'bg-slate-900/80 shadow-violet/50 border border-violet/20',
      shadowA: 'shadow-violet/70',
      shadowB: 'shadow-orange-500/70',
      shadowC: 'shadow-cyan/70',
      shadowD: 'shadow-violet/60',
      shadowE: 'shadow-orange-500/65',
      shadowF: 'shadow-cyan/70',
      shadowDot: 'shadow-orange-400/90',
      title: 'text-amber-100',
    },
  };

  const certs: CertificateItem[] = [
    {
      title: 'Vaadin Certified Developer',
      issuer: 'Vaadin',
      image: './certs/vaadin-dev.png',
      accent: 'emerald',
    },
    // {
    //   title: 'Create a Secure Data Lake on Cloud Storage',
    //   issuer: 'Google Cloud',
    //   image: './certs/lake-claud.png',
    //   accent: 'cyan',
    // },
    {
      title: 'Postman API Fundamentals Student Expert',
      issuer: 'Postman',
      image: './certs/postman-api.png',
      accent: 'amber',
    },
    {
      title: 'Claude-101: Foundations of AI Safety',
      issuer: 'Claude AI',
      image: './certs/claude-101.png',
      accent: 'emerald',
    },
    {
      title: 'Git & GitHub Bootcamp',
      issuer: 'LetsUpgrade',
      image: './certs/git-github.png',
      accent: 'violet',
    },
    {
      title: 'SQL Bootcamp',
      issuer: 'LetsUpgrade',
      image: './certs/sql-bootcamp.png',
      accent: 'cyan',
    },
    {
      title:'Bypass CTF Challenge',
      issuer: 'Army Institute of Technology Pune, Maharashtra',
      image: './certs/bypass-ctf.png',
      accent: 'violet',
    },
     {
      title: 'Learn C++ Programming - Beginner to Advance',
      issuer: 'Udemy',
      image: './certs/c-cpp-advanced.jpg',
      accent: 'amber',
    },
    {
      title: 'TinyML1: Fundamentals of TinyML',
      issuer: 'HarvardX',
      image: './certs/TinyML.png',
      accent: 'emerald',
    },
   
  ];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const updateScrollState = () => {
      const maxLeft = container.scrollWidth - container.clientWidth;
      setCanScrollLeft(container.scrollLeft > 4);
      setCanScrollRight(container.scrollLeft < maxLeft - 4);
    };

    updateScrollState();
    container.addEventListener('scroll', updateScrollState);
    window.addEventListener('resize', updateScrollState);

    return () => {
      container.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [certs.length]);

  const scrollCards = (direction: 'left' | 'right') => {
    const container = scrollRef.current;
    if (!container) return;

    const cardStep = 280;
    const amount = direction === 'right' ? cardStep : -cardStep;
    container.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <section ref={ref} id="certifications" className="relative overflow-hidden px-4 py-20 md:px-8 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_20%,rgba(59, 131, 246, 0.02),transparent_40%),radial-gradient(circle_at_82%_14%,rgba(255,109,0,0.14),transparent_38%)]" />

      <div className="container-lg relative mx-auto">
        <SectionHeading index="06" title="Certifications" className="mb-14" />

        <div className="relative">
          <button
            type="button"
            aria-label="Scroll certificates left"
            onClick={() => scrollCards('left')}
            disabled={!canScrollLeft}
            className="absolute -left-3 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-cyan/35 bg-slate-950/80 text-cyan backdrop-blur-md transition hover:border-cyan hover:bg-slate-900 disabled:cursor-not-allowed disabled:opacity-35 lg:flex"
          >
            <FaChevronLeft className="h-4 w-4" />
          </button>

          <button
            type="button"
            aria-label="Scroll certificates right"
            onClick={() => scrollCards('right')}
            disabled={!canScrollRight}
            className="absolute -right-3 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-cyan/35 bg-slate-950/80 text-cyan backdrop-blur-md transition hover:border-cyan hover:bg-slate-900 disabled:cursor-not-allowed disabled:opacity-35 lg:flex"
          >
            <FaChevronRight className="h-4 w-4" />
          </button>

          <div
            ref={scrollRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 touch-pan-x [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {certs.map((cert, idx) => (
              <motion.div
                key={`${cert.title}-${idx}`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.55 }}
                viewport={{ once: true, margin: '-100px' }}
                className="group snap-start"
              >
                <button
                  type="button"
                  onClick={() => setActiveCertificate(cert)}
                  className={`cursor-pointer group overflow-hidden p-5 duration-1000 hover:duration-1000 relative w-64 h-64 rounded-xl text-left transition-colors ${accentStyles[cert.accent].shell}`}
                >
                  <div className={`group-hover:-top-3 bg-transparent -top-12 -left-12 absolute shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-24 h-24 ${accentStyles[cert.accent].shadowA}`} />
                  <div className={`group-hover:top-60 bg-transparent top-44 left-14 absolute shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-24 h-24 ${accentStyles[cert.accent].shadowB}`} />
                  <div className={`group-hover:-left-12 bg-transparent top-24 left-56 absolute shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-24 h-24 ${accentStyles[cert.accent].shadowC}`} />
                  <div className={`group-hover:-top-44 bg-transparent top-12 left-12 absolute shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-12 h-12 ${accentStyles[cert.accent].shadowD}`} />
                  <div className={`group-hover:left-44 bg-transparent top-12 left-12 absolute shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-44 h-44 ${accentStyles[cert.accent].shadowE}`} />
                  <div className={`group-hover:-left-2 bg-transparent -top-24 -left-12 absolute shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-64 h-64 ${accentStyles[cert.accent].shadowF}`} />
                  <div className={`group-hover:top-44 bg-transparent top-24 left-12 absolute shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-4 h-4 ${accentStyles[cert.accent].shadowDot}`} />

                  <div className={`w-full h-full shadow-xl p-3 opacity-65 rounded-xl flex-col gap-2 flex justify-center ${accentStyles[cert.accent].panel}`}>
                    <span className={`font-bold text-xl italic ${accentStyles[cert.accent].title}`}>{cert.title}</span>
                    <p className="text-neutral-300">
                      {cert.issuer} certificate. Click to open and view full certificate.
                    </p>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {activeCertificate && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCertificate(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-cyan/30 bg-slate-900/85 shadow-[0_28px_70px_rgba(0,0,0,0.65)]"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-cyan/20 px-4 py-3 sm:px-6">
                <div>
                  <p className="about-typography-eyebrow text-[10px] text-cyan">{activeCertificate.issuer}</p>
                  <h3 className="about-typography-title mt-1 text-lg sm:text-xl" style={textStrong}>{activeCertificate.title}</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveCertificate(null)}
                  className="rounded-md border border-cyan/30 bg-cyan/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-cyan transition-colors hover:bg-cyan/20"
                >
                  Close
                </button>
              </div>

              <div className="relative bg-black/40 p-3 sm:p-4">
                <img
                  src={activeCertificate.image}
                  alt={`${activeCertificate.title} certificate`}
                  className="max-h-[75vh] w-full rounded-lg object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Certifications;
