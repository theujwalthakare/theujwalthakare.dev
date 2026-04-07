import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronUp, FaDiscord, FaInstagram } from 'react-icons/fa';

export function Footer() {
  const [showScroll, setShowScroll] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setShowScroll(latest > 400);
    });
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  const socialLinks = [
    {
      icon: FaGithub,
      href: 'https://github.com/theujwalthakare',
      label: 'GitHub',
    },
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/ujwal-thakare-300b25264?lipi=urn%3Ali%3Apage%3Ad_UNKNOWN_ROUTE_profile-edit.topcard%3BGDW%2FpwDpSEWzf7Sak0A6JQ%3D%3D',
      label: 'LinkedIn',
    },
    {
      icon: FaEnvelope,
      href: 'mailto:thakare2829@gmail.com',
      label: 'Email',
    },
    {
      icon: FaDiscord,
      href: 'https://discord.com/users/ujwalthakare#2829',
      label: 'Discord',
    },
    {
      icon: FaInstagram,
      href: 'https://www.instagram.com/theujwalthakre/',
      label: 'Instagram',
    },
];

  return (
    <footer className="relative border-t border-cyan/10">
      <div className="bg-bg/20 backdrop-blur-md">
        <div className="container-lg mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-16">
          {/* Top section: Wordmark + Nav Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 md:mb-16"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-8">
              {/* Wordmark */}
              {/* <div className="text-3xl md:text-4xl font-bold">
                <span className="text-text">UT</span>
                <span className="text-cyan">.</span>
              </div> */}

              {/* Nav Links */}
              {/* <div className="hidden md:flex gap-8 text-sm font-mono uppercase tracking-wider flex-wrap">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className="text-muted hover:text-cyan transition-colors"
                    whileHover={{ color: '#00d9ff' }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div> */}
            </div>
          </motion.div>

          {/* Social Icons Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center gap-4 md:gap-6 mb-12 md:mb-16"
          >
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full glass text-cyan hover:text-violet transition-colors"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)',
                  }}
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-xs md:text-sm text-muted font-mono uppercase tracking-wider"
          >
            Designed & built by Ujwal Thakare · 2025
          </motion.div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-6 md:bottom-8 right-6 md:right-8 w-12 h-12 md:w-14 md:h-14 rounded-full glass flex items-center justify-center text-cyan hover:text-violet transition-colors z-40"
            whileHover={{
              scale: 1.1,
              boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)',
            }}
            aria-label="Scroll to top"
          >
            <FaChevronUp className="w-5 h-5 md:w-6 md:h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}

export default Footer;
