import { useEffect, useState, useRef, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { FaGithub, FaLinkedin, FaTwitter, FaNetworkWired, FaArrowRight, FaShieldAlt } from 'react-icons/fa';

// Assuming these exist in your project, if not, remove or replace with simple text
import DecryptedText from '../ui/DecryptedText';
import LoadingScreen from '../ui/LoadingScreen';

// --- 3D COMPONENT: CYBER NET ---
const CyberNet = (props: any) => {
  const ref = useRef<any>(null);
  // Generate 5000 random points on a sphere
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#00f3ff" // Cyber Blue
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

// --- MAIN HERO COMPONENT ---
const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [logs, setLogs] = useState<string[]>([]);
  const panelSurface = { background: 'var(--panel-bg)', border: '1px solid var(--panel-border)', boxShadow: 'var(--panel-glow)' };
  const textPrimary = { color: 'var(--text-primary)' };
  const textStrong = { color: 'var(--text-strong)' };

  // Terminal Logic
  useEffect(() => {
    if (isLoading) return;
    const bootLogs = [
      '> INITIALIZING SECURE CONNECTION...',
      '> HANDSHAKE ESTABLISHED.',
      '> DECRYPTING ASSETS...',
      '> MOUNTING VIRTUAL ENVIRONMENT...',
      '> ACCESS GRANTED: ADMIN'
    ];
    let i = 0;
    const interval = setInterval(() => {
      if (i < bootLogs.length) {
        setLogs(prev => [...prev, bootLogs[i]]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 600);
    return () => clearInterval(interval);
  }, [isLoading]);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden" style={{ backgroundColor: 'var(--bg-body)' }}>
      
      {/* 3D BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }} gl={{ antialias: true }} onError={(e) => console.error('Canvas error:', e)}>
          <Suspense fallback={null}>
            <CyberNet />
            <Preload all />
          </Suspense>
        </Canvas>
      </div>

      {/* OVERLAY GRADIENT for readability */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.15) 45%, rgba(0,0,0,0) 100%)' }}
      />

      {/* LOADING SCREEN */}
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* MAIN CONTENT */}
      {!isLoading && (
        <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10 pt-20">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* LEFT COLUMN: IDENTITY & AVATAR */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="lg:col-span-5 flex flex-col items-center lg:items-start"
            >
              <div className="relative group mb-8">
                {/* Rotating Ring */}
                <div className="absolute -inset-4 rounded-full border border-cyber-blue/30 border-dashed animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyber-blue to-cyber-pink blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                
                  <div className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-cyber-blue/50" style={{ background: 'var(--panel-bg)', borderColor: 'var(--panel-border)' }}>
                    <img src="/images/profile.jpg" alt="Profile" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" />
                    {/* Glitch Scanline Overlay */}
                    <div className="absolute inset-0 bg-scanline pointer-events-none opacity-20"></div>
                   </div>
                
                   <div className="absolute bottom-0 right-0" style={panelSurface}>
                     <FaShieldAlt className="text-xl text-cyber-blue" />
                   </div>
              </div>

                  <h1 className="text-5xl md:text-7xl font-bold font-dystopian tracking-tighter mb-4 text-center lg:text-left" style={textStrong}>
                 <span className="block text-xl font-mono text-cyber-pink mb-2 tracking-widest">OPERATIVE:</span>
                 <DecryptedText text="UJWAL THAKARE" speed={30} />
              </h1>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
                 {['Penetration Testing', 'Full Stack', 'Cloud Sec'].map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-cyber-blue/10 border border-cyber-blue/30 text-cyber-blue text-xs font-mono rounded tracking-wider uppercase">
                      {tag}
                    </span>
                 ))}
              </div>

              <div className="flex gap-4">
                <SocialButton icon={FaGithub} href="https://github.com/theujwalthakare" delay={0.1} />
                <SocialButton icon={FaLinkedin} href="https://linkedin.com/in/theujwalthakare" delay={0.2} />
                <SocialButton icon={FaTwitter} href="https://twitter.com" delay={0.3} />
              </div>
            </motion.div>

            {/* RIGHT COLUMN: TERMINAL & ACTIONS */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-7"
            >
              <div className="backdrop-blur-xl rounded-xl overflow-hidden relative" style={panelSurface}>
                
                {/* Terminal Header */}
                <div className="px-4 py-2 border-b flex items-center justify-between" style={{ borderColor: 'var(--panel-border)', background: 'var(--panel-bg-shade)' }}>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="text-[10px] font-mono flex items-center gap-2" style={textPrimary}>
                    <FaNetworkWired /> bash --secure
                  </div>
                </div>

                {/* Terminal Body */}
                <div className="p-6 font-mono text-sm h-[300px] flex flex-col justify-between" style={textPrimary}>
                  <div className="space-y-2">
                    {logs.map((log, i) => (
                      <div key={i} className="text-cyber-blue/80">
                        {log}
                      </div>
                    ))}
                    {logs.length === 5 && (
                       <motion.div 
                         initial={{ opacity: 0 }}
                         animate={{ opacity: 1 }}
                         className="mt-4 leading-relaxed border-l-2 border-cyber-pink pl-4"
                         style={textStrong}
                       >
                         <span className="opacity-70"># MISSION STATEMENT</span>
                         <br />
                         I architect resilient digital ecosystems. Blending offensive security knowledge with full-stack engineering to build applications that are as secure as they are beautiful.
                       </motion.div>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-cyber-pink mt-4 animate-pulse">
                    <span className="text-xs">AWAITING INPUT</span>
                    <span className="w-2 h-4 bg-cyber-pink block"></span>
                  </div>
                </div>
              
                {/* Action Footer */}
                <div className="p-4 border-t flex flex-wrap gap-4 items-center justify-between" style={{ borderColor: 'var(--panel-border)', background: 'var(--panel-bg-shade)' }}>
                   <div className="flex gap-4">
                     <StatItem label="Vulnerabilities" value="0" />
                     <StatItem label="Uptime" value="99.9%" />
                   </div>
                   
                   <button 
                     onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                     className="group flex items-center gap-2 bg-cyber-blue/15 hover:bg-cyber-blue/25 text-cyber-blue px-5 py-2 rounded text-sm font-bold tracking-wider transition-all border border-cyber-blue/50 hover:shadow-[0_0_20px_rgba(0,243,255,0.3)]"
                   >
                     EXECUTE
                     <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                   </button>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      )}
    </section>
  );
};

// --- SUB COMPONENTS ---

const SocialButton = ({ icon: Icon, href, delay }: { icon: any, href: string, delay: number }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noreferrer"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1 + delay }}
    className="w-12 h-12 flex items-center justify-center rounded-lg transition-all duration-300 hover:scale-110 border"
    style={{ borderColor: 'var(--panel-border)', background: 'var(--panel-bg-lighter)', color: 'var(--text-primary)' }}
  >
    <Icon className="text-lg" />
  </motion.a>
);

const StatItem = ({ label, value }: { label: string, value: string }) => (
  <div className="flex flex-col">
    <span className="text-[10px] uppercase tracking-wider" style={{ color: 'var(--text-primary)', opacity: 0.7 }}>{label}</span>
    <span className="text-sm font-mono" style={{ color: 'var(--text-strong)' }}>{value}</span>
  </div>
);

export default Hero;