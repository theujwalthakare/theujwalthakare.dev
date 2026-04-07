import { motion } from 'framer-motion';

interface SectionHeadingProps {
  index: string;
  title: string;
  className?: string;
}

export function SectionHeading({ index, title, className }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: '-100px' }}
      className={className || 'mb-12 md:mb-16'}
    >
      <div className="label about-typography-eyebrow text-xs md:text-sm mb-3">// {index}.</div>
      <h2 className="title about-typography-title text-3xl md:text-5xl leading-tight">{title}</h2>
      <motion.div
        className="h-1 bg-gradient-to-r from-cyan to-violet rounded-full mt-6"
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      />
    </motion.div>
  );
}
