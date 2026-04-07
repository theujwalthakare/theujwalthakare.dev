import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-primary-plum text-off-white py-40 px-8 md:px-20 relative overflow-hidden">
      <div className="editorial-grid relative z-10">
        <div className="col-span-12 lg:col-span-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-[clamp(3rem,8vw,6rem)] text-off-white leading-[0.9] mb-12 font-headline"
          >
            Let's build<br />
            something <span className="italic font-normal text-accent-crimson">unforgettable</span>.
          </motion.h2>

          <div className="flex flex-wrap gap-12 mt-20">
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              href="mailto:hello@ujwal.dev"
              className="group"
            >
              <div className="font-mono text-[10px] uppercase opacity-40 mb-4 group-hover:opacity-100 transition-opacity">
                Contact
              </div>
              <div className="text-2xl border-b border-off-white/20 pb-2 group-hover:border-accent-crimson transition-colors">
                Email Operator
              </div>
            </motion.a>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              href="https://linkedin.com/in/theujwalthakare"
              target="_blank"
              rel="noreferrer"
              className="group"
            >
              <div className="font-mono text-[10px] uppercase opacity-40 mb-4 group-hover:opacity-100 transition-opacity">
                Social
              </div>
              <div className="text-2xl border-b border-off-white/20 pb-2 group-hover:border-accent-crimson transition-colors">
                LinkedIn
              </div>
            </motion.a>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              href="https://github.com/theujwalthakare"
              target="_blank"
              rel="noreferrer"
              className="group"
            >
              <div className="font-mono text-[10px] uppercase opacity-40 mb-4 group-hover:opacity-100 transition-opacity">
                Source
              </div>
              <div className="text-2xl border-b border-off-white/20 pb-2 group-hover:border-accent-crimson transition-colors">
                GitHub
              </div>
            </motion.a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="col-span-12 lg:col-span-4 lg:text-right flex flex-col justify-end mt-20 lg:mt-0"
        >
          <div className="font-mono text-[10px] opacity-40 uppercase space-y-2">
            <p>© {currentYear} Digital Architect</p>
            <p>Designed with intentionality</p>
            <p>LAT: 19.0760 N // LNG: 72.8777 E</p>
          </div>
        </motion.div>
      </div>

      {/* Large background text */}
      <div className="absolute -bottom-20 -right-20 text-[20rem] font-headline opacity-[0.03] pointer-events-none select-none">
        UJWAL
      </div>
    </footer>
  );
};

export default Footer;