import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface CounterStatProps {
  value: number;
  label: string;
}

export function CounterStat({ value, label }: CounterStatProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let count = 0;
    const increment = value / 60;
    const interval = setInterval(() => {
      count += increment;
      if (count >= value) {
        setDisplayValue(value);
        clearInterval(interval);
      } else {
        setDisplayValue(Math.floor(count));
      }
    }, 16);

    return () => clearInterval(interval);
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold text-cyan mb-2">{displayValue}</div>
      <div className="text-sm md:text-base text-muted font-medium">{label}</div>
    </motion.div>
  );
}
