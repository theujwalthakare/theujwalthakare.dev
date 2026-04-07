import { motion } from 'framer-motion';

interface ImpactStripProps {
  items: string[];
}

export function ImpactStrip({ items }: ImpactStripProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: '-100px' }}
      className="w-full mb-12 md:mb-16"
    >
      <div className="glass p-6 md:p-8">
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 overflow-x-auto pb-4">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex-shrink-0 flex items-center gap-3 px-4 py-3 border-l-2 border-cyan"
            >
              <span className="text-sm md:text-base text-muted italic">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
