import { motion, MotionValue, useTransform } from 'framer-motion';

type OverlayProps = {
  scrollYProgress: MotionValue<number>;
};

const Overlay = ({ scrollYProgress }: OverlayProps) => {
  // Section 1: Introduction (0% - 28%)
  const section1Opacity = useTransform(scrollYProgress, [0, 0.08, 0.25, 0.33], [0, 1, 1, 0]);
  const section1Y = useTransform(scrollYProgress, [0, 0.25], [60, -60]);
  const section1Scale = useTransform(scrollYProgress, [0, 0.12, 0.25], [0.95, 1, 0.95]);

  // Section 2: Craft (24% - 55%)
  const section2Opacity = useTransform(scrollYProgress, [0.2, 0.33, 0.52, 0.60], [0, 1, 1, 0]);
  const section2Y = useTransform(scrollYProgress, [0.2, 0.52], [80, -40]);
  const section2Scale = useTransform(scrollYProgress, [0.2, 0.33, 0.52], [0.95, 1, 0.95]);

  // Section 3: Systems (50% - 78%)
  const section3Opacity = useTransform(scrollYProgress, [0.47, 0.58, 0.75, 0.83], [0, 1, 1, 0]);
  const section3Y = useTransform(scrollYProgress, [0.47, 0.75], [70, -30]);
  const section3Scale = useTransform(scrollYProgress, [0.47, 0.58, 0.75], [0.95, 1, 0.95]);

  return (
    <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
      {/* Section 1: Introduction - Center */}
      <motion.div
        style={{
          opacity: section1Opacity,
          y: section1Y,
          scale: section1Scale,
        }}
        className="absolute inset-0 flex items-center justify-center px-6 py-12"
      >
        <div className="w-full max-w-3xl text-center">
          <motion.p className="mb-6 text-xs font-mono uppercase tracking-[0.35em] text-cyan-200/70 md:text-sm">
            // Introduction
          </motion.p>
          <motion.h1 className="text-balance text-4xl font-black leading-tight text-[var(--text-strong)] md:text-6xl lg:text-7xl">
           Ujwal Thakare
            <br />
            Creative Engineer.
          </motion.h1>
          <motion.p className="mt-6 text-sm leading-relaxed text-[var(--text-soft)] md:text-base">
            Crafting digital experiences that captivate and inspire.
          </motion.p>
        </div>
      </motion.div>

      {/* Section 2: Craft - Left Aligned */}
      <motion.div
        style={{
          opacity: section2Opacity,
          y: section2Y,
          scale: section2Scale,
        }}
        className="absolute left-0 top-1/3 w-full px-6 md:px-20"
      >
        <div className="max-w-2xl text-left">
          <motion.p className="mb-4 text-xs font-mono uppercase tracking-[0.35em] text-violet-300/70 md:text-sm">
            // Craft
          </motion.p>
          <motion.h2 className="text-balance text-3xl font-bold leading-tight text-[var(--text-strong)] md:text-5xl">
            I build digital
            <br />
            experiences.
          </motion.h2>
          <motion.p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--text-soft)] md:text-base">
            From concept to code, every pixel is intentional.
          </motion.p>
        </div>
      </motion.div>

      {/* Section 3: Systems - Right Aligned */}
      <motion.div
        style={{
          opacity: section3Opacity,
          y: section3Y,
          scale: section3Scale,
        }}
        className="absolute right-0 top-2/3 w-full px-6 md:px-20"
      >
        <div className="ml-auto max-w-2xl text-right">
          <motion.p className="mb-4 text-xs font-mono uppercase tracking-[0.35em] text-amber-300/70 md:text-sm">
            // Systems
          </motion.p>
          <motion.h2 className="text-balance text-3xl font-bold leading-tight text-[var(--text-strong)] md:text-5xl">
            Bridging design
            <br />
            and engineering.
          </motion.h2>
          <motion.p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--text-soft)] md:text-base">
            Performance meets aesthetics in every project.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default Overlay;
