import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaLock, FaTerminal, FaCheckCircle } from 'react-icons/fa';
import DecryptedText from '../ui/DecryptedText';

import useSound from '../../hooks/useSound';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'encrypting' | 'sending' | 'success' | 'error'>('idle');
  const [logs, setLogs] = useState<string[]>([]);
  const play = useSound();

  const addLog = (msg: string) => setLogs(prev => [...prev.slice(-4), `> ${msg}`]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('encrypting');
    addLog('INITIATING ENCRYPTION PROTOCOL...');

    // Simulate encryption delay
    setTimeout(() => {
      addLog('ENCRYPTING PAYLOAD...');
      setStatus('sending');

      // Simulate network request
      setTimeout(() => {
        if (Math.random() > 0.1) {
          setStatus('success');
          play('success');
          addLog('TRANSMISSION SUCCESSFUL.');
          setFormData({ name: '', email: '', message: '' });
        } else {
          setStatus('error');
          play('error');
          addLog('TRANSMISSION FAILED: SIGNAL LOST.');
        }
      }, 2000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden min-h-screen flex items-center">
      {/* Matrix Rain / Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.03)_1px,transparent_1px)] bg-[length:30px_30px] opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10 w-full max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left: Info Terminal */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-dystopian text-white mb-2">
                <DecryptedText text="ENCRYPTED COMMS" />
              </h2>
              <div className="h-1 w-24 bg-cyber-pink"></div>
            </div>

            <p className="text-gray-400 font-mono text-sm leading-relaxed border-l-2 border-cyber-blue/30 pl-4">
              Secure channel open. Send your inquiries, collaboration proposals, or mission briefings directly to my encrypted inbox.
              All transmissions are protected by end-to-end quantum encryption.
            </p>

            <div className="bg-cyber-dark/50 border border-cyber-blue/20 p-6 font-mono text-xs rounded-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-2 opacity-50"><FaLock /></div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-cyber-green">●</span>
                  <span className="text-cyber-blue">CHANNEL_STATUS: SECURE</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-cyber-green">●</span>
                  <span className="text-cyber-blue">LATENCY: 24ms</span>
                </div>
                <div>
                  <span className="text-gray-500 block mb-1">AVAILABLE PROTOCOLS:</span>
                  <div className="flex gap-2">
                    <SocialLink href="#" label="MAIL_TO" />
                    <SocialLink href="#" label="LINKED_IN" />
                    <SocialLink href="#" label="X_COM" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Input Terminal */}
          <div className="relative">
            {/* Terminal Frame */}
            <div className="bg-black/80 backdrop-blur-md border border-cyber-blue/30 rounded-lg overflow-hidden shadow-[0_0_30px_rgba(0,240,255,0.1)]">
              {/* Header */}
              <div className="bg-cyber-blue/10 border-b border-cyber-blue/30 p-2 flex items-center justify-between">
                <div className="flex gap-2 px-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <div className="font-mono text-xs text-cyber-blue/70 flex items-center gap-2">
                  <FaTerminal /> bash -- secure_uplink
                </div>
              </div>

              {/* Form Body */}
              <div className="p-6 relative min-h-[400px]">
                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center p-8"
                  >
                    <FaCheckCircle className="text-5xl text-cyber-green mb-4" />
                    <h3 className="text-xl font-dystopian text-white mb-2">PACKET SENT</h3>
                    <p className="text-gray-400 font-mono text-xs">Your transmission has been successfully uploaded to the server.</p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-6 text-cyber-blue hover:text-white underline font-mono text-xs"
                    >
                      SEND_NEW_MESSAGE
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <TerminalInput
                      label="IDENTITY" placeholder="ENTER_NAME"
                      name="name" value={formData.name} onChange={handleChange}
                    />
                    <TerminalInput
                      label="COORDINATES" placeholder="ENTER_EMAIL"
                      name="email" value={formData.email} onChange={handleChange}
                    />
                    <div className="space-y-1">
                      <label className="text-xs font-mono text-cyber-blue">PAYLOAD</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full bg-cyber-blue/5 border border-cyber-blue/20 rounded p-3 text-white font-mono text-sm focus:border-cyber-blue focus:outline-none focus:shadow-[0_0_10px_rgba(0,240,255,0.2)] transition-all resize-none"
                        placeholder="> ENTER_ENCRYPTED_MESSAGE..."
                      />
                    </div>

                    {/* Log Output */}
                    <div className="min-h-[60px] font-mono text-[10px] text-cyber-pink/80 p-2 border-l-2 border-cyber-pink/30 opacity-80">
                      {logs.map((log, i) => (
                        <div key={i}>{log}</div>
                      ))}
                      {status === 'encrypting' && (
                        <motion.div
                          animate={{ opacity: [0, 1, 0] }}
                          transition={{ repeat: Infinity, duration: 0.8 }}
                        >_</motion.div>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={status !== 'idle'}
                      className={`w-full py-4 font-mono font-bold text-sm tracking-widest transition-all duration-300 relative overflow-hidden group border ${status === 'idle'
                        ? 'bg-cyber-blue/10 border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-black'
                        : 'bg-cyber-dark border-gray-700 text-gray-500 cursor-wait'
                        }`}
                    >
                      {status === 'idle' && (
                        <span className="flex items-center justify-center gap-2 relative z-10">
                          <FaPaperPlane /> INITIATE UPLINK
                        </span>
                      )}
                      {status !== 'idle' && (
                        <span className="flex items-center justify-center gap-2 relative z-10 animate-pulse">
                          {status === 'encrypting' ? 'ENCRYPTING...' : 'TRANSMITTING...'}
                        </span>
                      )}
                      {status === 'idle' && <div className="absolute inset-0 bg-cyber-blue transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const TerminalInput = ({ label, placeholder, name, value, onChange }: any) => (
  <div className="space-y-1">
    <label className="text-xs font-mono text-cyber-blue">{label}</label>
    <div className="relative">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-mono text-xs">{'>'}</span>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className="w-full bg-cyber-blue/5 border border-cyber-blue/20 rounded py-2.5 pl-8 pr-3 text-white font-mono text-sm focus:border-cyber-blue focus:outline-none focus:shadow-[0_0_10px_rgba(0,240,255,0.2)] transition-all"
        placeholder={placeholder}
      />
    </div>
  </div>
);

const SocialLink = ({ href, label }: { href: string, label: string }) => (
  <a href={href} className="px-2 py-1 bg-cyber-blue/10 text-[10px] text-cyber-blue border border-cyber-blue/20 hover:bg-cyber-blue hover:text-black transition-colors">
    {label}
  </a>
);

export default Contact;
