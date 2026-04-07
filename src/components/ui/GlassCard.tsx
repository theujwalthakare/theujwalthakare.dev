import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'violet' | 'emerald';
  onClick?: () => void;
}

export function GlassCard({
  children,
  className,
  glowColor = 'cyan',
  onClick,
}: GlassCardProps) {
  const glowClasses = {
    cyan: 'hover:shadow-cyan/20',
    violet: 'hover:shadow-violet/20',
    emerald: 'hover:shadow-emerald/20',
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      onClick={onClick}
      className={`glass p-6 md:p-8 cursor-pointer ${glowClasses[glowColor]} ${className || ''}`}
    >
      {children}
    </motion.div>
  );
}
