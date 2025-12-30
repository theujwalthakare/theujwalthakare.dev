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
  const panelSurface = { background: 'var(--panel-bg)', border: '1px solid var(--panel-border)', boxShadow: 'var(--panel-glow)' };
  const textPrimary = { color: 'var(--text-primary)' };
  const textStrong = { color: 'var(--text-strong)' };

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
    <section id="contact" className="py-16 relative overflow-hidden min-h-screen flex items-center" style={{ backgroundColor: 'var(--bg-body)' }}>
      {/* Matrix Rain / Grid Overlay */}
      <div className="absolute inset-0 bg-[length:30px_30px] opacity-25 pointer-events-none" style={{ backgroundImage: 'linear-gradient(var(--bg-grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--bg-grid-line) 1px, transparent 1px)' }}></div>

      <div className="container mx-auto px-4 relative z-10 w-full max-w-5xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">

          {/* Left: Info Terminal */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-dystopian mb-2" style={textStrong}>
                <DecryptedText text="ENCRYPTED COMMS" />
              </h2>
              <div className="h-1 w-24 bg-cyber-pink"></div>
            </div>

            <p className="font-mono text-sm leading-relaxed border-l-2 border-cyber-blue/30 pl-4" style={textPrimary}>
              Secure channel open. Send your inquiries, collaboration proposals, or mission briefings directly to my encrypted inbox.
              All transmissions are protected by end-to-end quantum encryption.
            </p>

            <div className="p-5 font-mono text-xs rounded-lg relative overflow-hidden group" style={panelSurface}>
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
            <div className="backdrop-blur-md rounded-lg overflow-hidden" style={panelSurface}>
              {/* Header */}
              <div className="p-2 flex items-center justify-between" style={{ background: 'var(--panel-bg-shade)', borderBottom: '1px solid var(--panel-border)' }}>
                <div className="flex gap-2 px-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <div className="font-mono text-xs text-cyber-blue/80 flex items-center gap-2">
                  <FaTerminal /> bash -- secure_uplink
                </div>
              </div>

              {/* Form Body */}
              <div className="p-6 relative min-h-[400px]" style={textPrimary}>
                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center p-8"
                  >
                    <FaCheckCircle className="text-5xl text-cyber-green mb-4" />
                    <h3 className="text-xl font-dystopian mb-2" style={textStrong}>PACKET SENT</h3>
                    <p className="font-mono text-xs" style={textPrimary}>Your transmission has been successfully uploaded to the server.</p>
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
                        className="w-full border rounded p-3 font-mono text-sm transition-all resize-none"
                        style={{ background: 'var(--panel-bg-lighter)', borderColor: 'var(--panel-border)', color: 'var(--text-primary)' }}
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
                        ? 'border-cyber-blue text-cyber-blue'
                        : 'border-gray-400 text-gray-500 cursor-wait'
                        }`}
                      style={status === 'idle' ? { background: 'var(--panel-bg-lighter)' } : { background: 'rgba(12, 14, 26, 0.2)' }}
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
        className="w-full border rounded py-2.5 pl-8 pr-3 font-mono text-sm transition-all"
        style={{ background: 'var(--panel-bg-lighter)', borderColor: 'var(--panel-border)', color: 'var(--text-primary)' }}
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
