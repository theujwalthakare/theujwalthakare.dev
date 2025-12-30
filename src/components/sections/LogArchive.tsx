import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFileCode, FaFolderOpen, FaCalendarAlt } from 'react-icons/fa';
import DecryptedText from '../ui/DecryptedText';
import useSound from '../../hooks/useSound';

// Mock Data for Logs
const LOG_ENTRIES = [
    {
        id: 'log-003',
        title: 'THE_NEURAL_UPGRADE.txt',
        date: '2025-12-28',
        category: 'SYSTEM_UPDATE',
        content: `> SYSTEM REPORT:
    
The interface has been successfully upgraded to V2.0.4.
Key modules integrated:
- Holographic styling for improved clarity.
- 3D Particle Canvas for depth perception.
- Secure Encrypted Comms channel.

This upgrade transitions the portfolio from a standard static site to a dynamic digital operative identity. Use the new chat terminal to query system parameters.`
    },
    {
        id: 'log-002',
        title: 'SECURITY_PROTOCOL_ALPHA.enc',
        date: '2025-11-15',
        category: 'RESEARCH',
        content: `> DECRYPTED CONTENT:

Exploring the implementation of zero-knowledge proofs in modern web apps. 
Authentication shouldn't just be secure; it should be invisible.
Working on a prototype for biometric-style login using just typing patterns.`
    },
    {
        id: 'log-001',
        title: 'QUANTA_INIT.log',
        date: '2025-10-01',
        category: 'LEGACY',
        content: `> INITIALIZATION SEQUENCE:
    
- Core Logic: React 19 loaded.
- Styling Engine: Tailwind CSS armed.
- Animation Drive: Framer Motion engaged.

Hello World. The journey begins.`
    }
];

const LogArchive = () => {
    const [selectedLog, setSelectedLog] = useState<string | null>(null);
    const play = useSound();

    const activeLogData = LOG_ENTRIES.find(l => l.id === selectedLog);

    return (
        <section id="logs" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-4xl relative z-10">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-dystopian mb-4 text-white">
                        <DecryptedText text="CAPTAIN'S LOG" />
                    </h2>
                    <div className="h-0.5 w-16 bg-cyber-pink mx-auto"></div>
                    <p className="text-gray-400 font-mono text-xs mt-4 tracking-widest">
                  // ACCESSING ENCRYPTED DATA ARCHIVES...
                    </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 min-h-[400px]">
                    {/* Left Column: File List */}
                    <div className="md:col-span-4 border-r border-gray-800 pr-4 space-y-2">
                        <div className="flex items-center gap-2 text-cyber-blue mb-4 font-mono text-sm border-b border-cyber-blue/20 pb-2">
                            <FaFolderOpen />
                            <span>/ROOT/LOGS/PUBLIC</span>
                        </div>

                        {LOG_ENTRIES.map((log) => (
                            <motion.button
                                key={log.id}
                                whileHover={{ x: 5 }}
                                onClick={() => { setSelectedLog(log.id); play('click'); }}
                                className={`w-full text-left p-3 rounded font-mono text-xs transition-colors flex items-center gap-3 ${selectedLog === log.id
                                    ? 'bg-cyber-blue/10 text-cyber-blue border border-cyber-blue/30'
                                    : 'text-gray-500 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                <FaFileCode />
                                <div>
                                    <div className="font-bold">{log.title}</div>
                                    <div className="text-[10px] opacity-60">{log.date}</div>
                                </div>
                            </motion.button>
                        ))}
                    </div>

                    {/* Right Column: File Viewer */}
                    <div className="md:col-span-8 bg-gray-900/50 border border-gray-800 rounded p-6 font-mono relative overflow-hidden">
                        <AnimatePresence mode="wait">
                            {activeLogData ? (
                                <motion.div
                                    key={activeLogData.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="h-full flex flex-col"
                                >
                                    <div className="flex justify-between items-start mb-6 border-b border-gray-700 pb-4">
                                        <div>
                                            <h3 className="text-xl text-cyber-pink font-bold mb-1">{activeLogData.title}</h3>
                                            <div className="flex items-center gap-2 text-xs text-gray-400">
                                                <FaCalendarAlt /> {activeLogData.date} | TAG: {activeLogData.category}
                                            </div>
                                        </div>
                                        <button onClick={() => setSelectedLog(null)} className="text-gray-500 hover:text-white">
                                            <FaTimes />
                                        </button>
                                    </div>

                                    <div className="text-sm text-gray-300 whitespace-pre-line leading-relaxed flex-grow">
                                        {activeLogData.content}
                                    </div>

                                    <div className="mt-8 pt-4 border-t border-gray-700 text-[10px] text-cyber-green/60">
                                        {'>'} END OF FILE. SIGNATURE VERIFIED.
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="h-full flex flex-col items-center justify-center text-gray-600 space-y-4"
                                >
                                    <FaFileCode className="text-4xl opacity-20" />
                                    <p className="text-xs tracking-widest">SELECT A FILE TO DECRYPT</p>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Decorative Scanline */}
                        <div className="absolute inset-0 bg-scanline pointer-events-none opacity-5"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Custom Icon
const FaTimes = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path></svg>
);

export default LogArchive;
