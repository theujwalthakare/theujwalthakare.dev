import { motion, useScroll } from 'framer-motion';
import { useState } from 'react';
import { useReducedMotion } from '../lib/useReducedMotion';

export function SectionProgressRail() {
  const prefersReducedMotion = useReducedMotion();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();

  const sections = [
    { id: 'home', label: 'Scene' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'github', label: 'GitHub' },
  ];

  const handleDotClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Hide on mobile
  if (prefersReducedMotion) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="hidden lg:flex fixed left-8 top-1/2 -translate-y-1/2 flex-col items-center gap-6 z-30"
    >
      {/* Container for dots and line */}
      <div className="relative flex flex-col items-center gap-4">
        {/* Animated line */}
        <motion.div
          className="absolute left-1/2 top-0 w-1 bg-gradient-to-b from-cyan to-violet rounded-full"
          style={{
            height: '100%',
            scaleY: scrollYProgress,
            transformOrigin: 'top',
          }}
        />

        {/* Dots */}
        <div className="relative flex flex-col gap-4">
          {sections.map((section, idx) => (
            <motion.div
              key={section.id}
              className="flex items-center gap-4 group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => handleDotClick(section.id)}
            >
              {/* Dot */}
              <motion.div
                className="w-3 h-3 rounded-full bg-cyan relative"
                whileHover={{ scale: 1.5, boxShadow: '0 0 15px rgba(0, 217, 255, 0.5)' }}
              >
                {hoveredIndex === idx && (
                  <motion.div
                    layoutId="hover"
                    className="absolute inset-0 rounded-full border-2 border-cyan"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1.4 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>

              {/* Label */}
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="text-xs font-mono uppercase tracking-widest text-muted opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
              >
                {section.label}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default SectionProgressRail;
