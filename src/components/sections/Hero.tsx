import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaTerminal, FaCode, FaNetworkWired } from 'react-icons/fa';
import DecryptedText from '../ui/DecryptedText';
import LoadingScreen from '../ui/LoadingScreen';

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Fake Terminal Logs
  const [logs, setLogs] = useState<string[]>([]);
  useEffect(() => {
    if (isLoading) return;
    const bootLogs = [
      '> CONNECTING TO MAINFRAME...',
      '> AUTHENTICATING USER: VISITOR_01',
      '> ACCESS GRANTED.',
      '> LOADING PORTFOLIO ASSETS...',
      '> EXECUTING WELCOME PROTOCOL...'
    ];
    let i = 0;
    const interval = setInterval(() => {
      if (i < bootLogs.length) {
        setLogs(prev => [...prev, bootLogs[i]]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 800);
    return () => clearInterval(interval);
  }, [isLoading]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-6 h-full relative z-10">

          {/* LEFT COLUMN: IDENTITY MODULE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4 flex flex-col gap-6"
          >
            <div className="glass-panel p-6 border-l-4 border-cyber-blue relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-2 opacity-50">
                <FaNetworkWired className="text-cyber-blue text-2xl animate-pulse" />
              </div>
              <div className="relative z-10">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full border-2 border-cyber-blue/50 p-1 relative">
                  <div className="absolute inset-0 rounded-full border border-dashed border-cyber-pink animate-spin-slow"></div>
                  <img src="/images/profile.jpg" alt="Profile" className="rounded-full w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                </div>
                <h1 className="text-4xl font-dystopian text-white text-center mb-2">
                  <DecryptedText text="UJWAL THAKARE" />
                </h1>
                <div className="text-center font-mono text-cyber-blue/80 text-sm tracking-widest mb-6">
                  FULL STACK OPERATIVE
                </div>
                <div className="flex justify-center gap-4">
                  <SocialButton icon={FaGithub} href="https://github.com/theujwalthakare" delay={0.1} />
                  <SocialButton icon={FaLinkedin} href="https://linkedin.com/in/theujwalthakare" delay={0.2} />
                  <SocialButton icon={FaTwitter} href="https://twitter.com" delay={0.3} />
                </div>
              </div>
            </div>

            {/* Status Panel */}
            <div className="glass-panel p-6 font-mono text-xs text-gray-400">
              <div className="flex justify-between mb-2">
                <span>AVAILABILITY</span>
                <span className="text-green-400">● OPEN FOR WORK</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>LOCATION</span>
                <span>PUNE, INDIA</span>
              </div>
              <div className="h-px bg-white/10 my-3"></div>
              <div className="flex justify-between">
                <span>LAST COMMIT</span>
                <span>Today 14:02 UTC</span>
              </div>
            </div>
          </motion.div>

          {/* CENTER COLUMN: MAIN INTERFACE */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-8 flex flex-col justify-center gap-6"
          >
            <div className="glass-panel p-8 relative min-h-[400px] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-6 opacity-60">
                  <FaTerminal className="text-cyber-pink" />
                  <span className="font-mono text-xs">TERMINAL_V1.0.4</span>
                </div>

                <div className="font-mono text-sm space-y-2 mb-8 h-32 overflow-hidden text-cyber-blue/80">
                  {logs.map((log, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
                      {log}
                    </motion.div>
                  ))}
                </div>

                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  ARCHITECTING SECURE <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue to-cyber-pink">
                    DIGITAL ECOSYSTEMS
                  </span>
                </h2>

                <p className="text-gray-400 max-w-xl mb-8 leading-relaxed">
                  I specialize in building robust, scalable web applications with a security-first mindset.
                  Merging creative frontend design with powerful backend logic.
                </p>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="cyber-button group"
                >
                  <span className="group-hover:text-white transition-colors">INITIALIZE PROJECT VIEW</span>
                </button>
                <a href="#contact" className="px-6 py-2 font-cyber uppercase text-gray-400 hover:text-white transition-colors border border-transparent hover:border-white/20">
                  CONTACT_ME
                </a>
              </div>

              {/* Decorative Elements */}
              <div className="absolute bottom-4 right-4 flex gap-1">
                {[1, 2, 3].map(i => (
                  <div key={i} className={`w - 2 h - 8 ${i === 3 ? 'bg-cyber-pink animate-pulse' : 'bg-cyber-blue/30'} `}></div>
                ))}
              </div>
            </div>

            {/* Horizontal Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatCard label="PROJECTS" value="12+" icon={FaCode} delay={0.5} />
              <StatCard label="EXPERIENCE" value="3 YEARS" icon={FaNetworkWired} delay={0.6} />
              <StatCard label="STACK" value="FULL" icon={FaTerminal} delay={0.7} />
              <StatCard label="SECURITY" value="HIGH" icon={FaGithub} delay={0.8} />
            </div>
          </motion.div>

        </div>
      )}
    </section>
  );
};

const SocialButton = ({ icon: Icon, href, delay }: { icon: any, href: string, delay: number }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noreferrer"
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.5 + delay }}
    className="w-10 h-10 flex items-center justify-center rounded-full border border-cyber-blue/30 text-cyber-blue hover:bg-cyber-blue hover:text-black transition-all duration-300"
  >
    <Icon />
  </motion.a>
);

const StatCard = ({ label, value, icon: Icon, delay }: { label: string, value: string, icon: any, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className="bg-cyber-light/50 border border-white/5 p-4 rounded hover:border-cyber-blue/30 transition-colors"
  >
    <div className="flex justify-between items-start mb-2">
      <span className="text-xs font-mono text-gray-500">{label}</span>
      <Icon className="text-cyber-blue/50 text-xs" />
    </div>
    <div className="text-xl font-bold font-cyber text-white">{value}</div>
  </motion.div>
);

export default Hero;