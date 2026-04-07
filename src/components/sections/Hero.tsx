import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center px-8 md:px-20 pt-50  pb-20">
        <div className="editorial-grid">
          <div className="col-span-12 lg:col-span-9">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-mono text-xs uppercase tracking-[0.5em] mb-8 block text-accent-crimson">
                Senior Software Engineer
              </span>
              <h1 className="text-hero mb-12">
                Ujwal<br />
                Thakare
              </h1>
            </motion.div>
          </div>

          <div className="col-span-12 lg:col-span-4 lg:col-start-8 stagger-up">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-xl md:text-2xl italic leading-relaxed text-primary-plum/80 border-l-4 border-accent-crimson pl-8 py-4">
                Building robust digital architectures where precision meets poetic engineering.
                An operator of systems, a crafter of code.
              </p>

              <div className="mt-12 flex items-center gap-8 font-mono text-xs uppercase tracking-widest">
                <span className="opacity-40">Based in Mumbai</span>
                <div className="w-20 h-[1px] bg-primary-plum/20"></div>
                <span className="text-accent-crimson">Active Now</span>
              </div>

              {/* Social Links */}
              <div className="mt-12 flex gap-4">
                <a
                  href="https://github.com/theujwalthakare"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 border border-primary-plum/20 rounded-lg hover:border-accent-crimson hover:bg-accent-crimson/10 transition-all"
                  title="GitHub"
                >
                  <FaGithub className="text-primary-plum hover:text-accent-crimson" />
                </a>
                <a
                  href="https://linkedin.com/in/theujwalthakare"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 border border-primary-plum/20 rounded-lg hover:border-accent-crimson hover:bg-accent-crimson/10 transition-all"
                  title="LinkedIn"
                >
                  <FaLinkedin className="text-primary-plum hover:text-accent-crimson" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="px-8 md:px-20 mb-60">
        <div className="editorial-grid items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-4 border-t-8 border-primary-plum pt-8"
          >
            <div className="font-mono text-[10px] mb-4 opacity-50 uppercase tracking-widest">
              01 // GitHub Metrics
            </div>
            <div className="text-7xl font-headline">
              500<span className="text-accent-crimson">+</span>
            </div>
            <p className="mt-4 font-body italic text-lg text-primary-plum/80">
              Yearly contributions across specialized repositories.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-4 md:col-start-6 stagger-down border-t border-primary-plum/20 pt-8"
          >
            <div className="font-mono text-[10px] mb-4 opacity-50 uppercase tracking-widest">
              02 // Problem Solving
            </div>
            <div className="text-7xl font-headline">
              200<span className="text-accent-crimson">+</span>
            </div>
            <p className="mt-4 font-body italic text-lg text-primary-plum/80">
              LeetCode problems solved. Top 5% in global contests.
            </p>
          </motion.div>

          <div className="hidden lg:block col-span-2 col-start-11 text-vertical font-mono text-[10px] opacity-20 uppercase tracking-[1em] h-64 border-r border-primary-plum/10 pr-4">
            Data driven development
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;