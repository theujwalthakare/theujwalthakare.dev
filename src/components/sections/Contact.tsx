import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa6';
import { SectionHeading } from '../ui/SectionHeading';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const textStrong = { color: 'var(--text-strong, #f8fafc)' };

  const copyEmail = async () => {
    await navigator.clipboard.writeText('thakare2829@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const mailtoHref = `mailto:thakare2829@gmail.com?subject=${encodeURIComponent(`Portfolio inquiry from ${name || 'visitor'}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

  return (
    <section id="contact" className="relative overflow-hidden px-4 py-20 md:px-8 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(59,130,246,0.15),transparent_40%),radial-gradient(circle_at_82%_12%,rgba(255,109,0,0.14),transparent_38%)]" />
      <div className="container-lg relative">
        <SectionHeading index="09" title="Let's Build Something" className="mb-8" />
        <p className="mb-8 max-w-2xl about-typography-copy" style={textStrong}>Open to internships, collaborations and projects.</p>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="group relative overflow-hidden rounded-2xl border border-cyan/20 bg-slate-900/45 p-5 backdrop-blur-xl transition-all duration-300 hover:border-violet/55 hover:shadow-[0_22px_64px_rgba(0,0,0,0.48),0_0_22px_rgba(255,109,0,0.18)]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(59,130,246,0.18),transparent_38%),radial-gradient(circle_at_84%_12%,rgba(255,109,0,0.14),transparent_35%)] opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
              <div className="mb-3 flex items-center gap-2 text-cyan"><FaEnvelope /> <span className="about-typography-eyebrow text-[10px]">Email</span></div>
              <p className="mb-3 text-sm about-typography-copy" style={textStrong}>thakare2829@gmail.com</p>
              <button
                onClick={copyEmail}
                className="rounded-lg border border-cyan/30 bg-cyan/10 px-3 py-2 text-xs font-mono uppercase tracking-[0.2em] text-cyan transition hover:border-cyan hover:bg-cyan/20"
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-cyan/20 bg-slate-900/45 p-5 backdrop-blur-xl transition-all duration-300 hover:border-violet/55 hover:shadow-[0_22px_64px_rgba(0,0,0,0.48),0_0_22px_rgba(255,109,0,0.18)]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(59,130,246,0.18),transparent_38%),radial-gradient(circle_at_84%_12%,rgba(255,109,0,0.14),transparent_35%)] opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
              <div className="mb-3 flex items-center gap-2 text-cyan"><FaLinkedin /> <span className="about-typography-eyebrow text-[10px]">LinkedIn</span></div>
              <p className="mb-3 text-sm about-typography-copy" style={textStrong}>ujwalthakare-300b25264</p>
              <a
                href="https://linkedin.com/in/ujwalthakare-300b25264"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-cyan/30 bg-cyan/10 px-3 py-2 text-xs font-mono uppercase tracking-[0.2em] text-cyan transition hover:border-cyan hover:bg-cyan/20"
              >
                Visit
              </a>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-cyan/20 bg-slate-900/45 p-5 backdrop-blur-xl transition-all duration-300 hover:border-violet/55 hover:shadow-[0_22px_64px_rgba(0,0,0,0.48),0_0_22px_rgba(255,109,0,0.18)]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(59,130,246,0.18),transparent_38%),radial-gradient(circle_at_84%_12%,rgba(255,109,0,0.14),transparent_35%)] opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
              <div className="mb-3 flex items-center gap-2 text-cyan"><FaGithub /> <span className="about-typography-eyebrow text-[10px]">GitHub</span></div>
              <p className="mb-3 text-sm about-typography-copy" style={textStrong}>github.com/ujwalthakare</p>
              <a
                href="https://github.com/ujwalthakare"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-cyan/30 bg-cyan/10 px-3 py-2 text-xs font-mono uppercase tracking-[0.2em] text-cyan transition hover:border-cyan hover:bg-cyan/20"
              >
                Visit
              </a>
              </div>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
            className="group relative overflow-hidden rounded-2xl border border-cyan/20 bg-slate-900/45 p-5 backdrop-blur-xl transition-all duration-300 hover:border-violet/55 hover:shadow-[0_22px_64px_rgba(0,0,0,0.48),0_0_22px_rgba(255,109,0,0.18)]"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(59,130,246,0.18),transparent_38%),radial-gradient(circle_at_84%_12%,rgba(255,109,0,0.14),transparent_35%)] opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
            <div className="mb-4">
              <label className="mb-2 block about-typography-eyebrow text-[10px] text-cyan">Name</label>
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Your name"
                className="w-full rounded-lg border border-cyan/25 bg-slate-950/5 px-3 py-2 text-sm text-slate-1000 outline-none transition focus:border-cyan"
              />
            </div>

            <div className="mb-4">
              <label className="mb-2 block about-typography-eyebrow text-[10px] text-cyan">Email</label>
              <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="your@email.com"
                className="w-full rounded-lg border border-cyan/25 bg-slate-950/5 px-3 py-2 text-sm text-slate-1000 outline-none transition focus:border-cyan"
              />
            </div>

            <div className="mb-5">
              <label className="mb-2 block about-typography-eyebrow text-[10px] text-cyan">Message</label>
              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Tell me about the opportunity..."
                rows={6}
                className="w-full rounded-lg border border-cyan/25 bg-slate-950/5 px-3 py-2 text-sm text-slate-1000 outline-none transition focus:border-cyan"
              />
            </div>

            <a
              href={mailtoHref}
              className="inline-flex w-full items-center justify-center rounded-xl border border-cyan/40 bg-cyan/15 px-4 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-cyan transition hover:bg-cyan/25"
            >
              Send Message
            </a>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
