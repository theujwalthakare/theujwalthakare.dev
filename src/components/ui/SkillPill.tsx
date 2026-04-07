import { motion } from 'framer-motion';

interface SkillPillProps {
  label: string;
  color?: 'cyan' | 'violet' | 'emerald' | 'amber' | 'blue';
}

export function SkillPill({ label, color = 'cyan' }: SkillPillProps) {
  const colorClasses = {
    cyan: 'bg-cyan/10 border-cyan/20 text-cyan hover:bg-cyan/20 hover:border-cyan/40',
    violet: 'bg-violet/10 border-violet/20 text-violet hover:bg-violet/20 hover:border-violet/40',
    emerald: 'bg-emerald/10 border-emerald/20 text-emerald hover:bg-emerald/20 hover:border-emerald/40',
    amber: 'bg-amber-500/10 border-amber-500/20 text-amber-300 hover:bg-amber-500/20 hover:border-amber-500/40',
    blue: 'bg-blue-500/10 border-blue-500/20 text-blue-300 hover:bg-blue-500/20 hover:border-blue-500/40',
  };

  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      className={`inline-flex items-center px-3 py-1.5 rounded-full font-mono text-xs font-medium border transition-all duration-300 cursor-default ${colorClasses[color]}`}
    >
      {label}
    </motion.span>
  );
}
