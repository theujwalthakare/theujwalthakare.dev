import { useState, useMemo } from 'react';
import useSound from '../../hooks/useSound';
import { motion, AnimatePresence } from 'framer-motion';
import { SKILLS, SKILL_CATEGORIES } from '../../data/skills';
import DecryptedText from '../ui/DecryptedText';

interface SkillNode {
  name: string;
  icon: any;
  category: string;
  level: number;
}

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredSkill, setHoveredSkill] = useState<SkillNode | null>(null);
  const play = useSound();
  const textPrimary = { color: 'var(--text-primary)' };
  const textStrong = { color: 'var(--text-strong)' };

  const filteredSkills = useMemo(() => {
    if (activeCategory === 'all') return SKILLS;
    return SKILLS.filter(s => s.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="skills" className="py-24 relative overflow-hidden min-h-screen flex flex-col justify-center" style={{ backgroundColor: 'var(--bg-body)' }}>

      {/* Background Decor */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-dystopian mb-6 tracking-wider" style={textStrong}>
            <DecryptedText text="SKILL_MATRIX" />
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  play('click');
                  setActiveCategory(cat.id);
                }}
                className={`px-6 py-2 border font-mono text-sm transition-all duration-300 relative overflow-hidden group ${activeCategory === cat.id
                  ? 'border-cyber-blue bg-cyber-blue/10 text-cyber-blue shadow-[0_0_15px_rgba(0,240,255,0.3)]'
                  : 'border-[color:var(--panel-border)] text-[color:var(--text-primary)]/70 hover:border-cyber-blue/50 hover:text-cyber-blue'
                  }`}
              >
                <div className={`absolute inset-0 bg-cyber-blue/10 transform -translate-x-full transition-transform duration-300 ${activeCategory === cat.id ? 'translate-x-0' : 'group-hover:translate-x-0'}`}></div>
                <span className="relative z-10 flex items-center gap-2">
                  {activeCategory === cat.id && <span className="w-2 h-2 bg-cyber-blue rounded-full animate-pulse" />}
                  {cat.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Hex Grid Layout */}
        <div className="flex flex-wrapjustify-center max-w-6xl mx-auto relative min-h-[400px]">
          <motion.div
            layout
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 md:gap-8 max-w-4xl mx-auto"
          >
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill) => (
                <HexNode
                  key={skill.name}
                  skill={skill}
                  onHover={setHoveredSkill}
                  onLeave={() => setHoveredSkill(null)}
                  textPrimary={textPrimary}
                />
              ))}
            </AnimatePresence>
          </motion.div>

        </div>

        {/* Floating Detail Panel (Desktop) */}
        <AnimatePresence>
          {hoveredSkill && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="fixed bottom-10 right-10 z-50 w-64 glass-panel p-4 border border-cyber-blue/30 hidden md:block pointer-events-none"
            >
              <div className="flex items-center gap-3 mb-3 border-b border-white/10 pb-2">
                <hoveredSkill.icon className="text-2xl text-cyber-pink" />
                <span className="font-dystopian text-lg">{hoveredSkill.name}</span>
              </div>
              <div className="space-y-2 font-mono text-xs" style={textPrimary}>
                <div className="flex justify-between" style={{ color: 'var(--text-primary)', opacity: 0.8 }}>
                  <span>PROFICIENCY</span>
                  <span className="text-cyber-blue">{hoveredSkill.level}%</span>
                </div>
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${hoveredSkill.level}%` }}
                    className="h-full bg-gradient-to-r from-cyber-blue to-cyber-pink"
                  />
                </div>
                <div className="flex justify-between pt-2" style={{ color: 'var(--text-primary)', opacity: 0.8 }}>
                  <span>CATEGORY</span>
                  <span className="uppercase" style={textStrong}>{hoveredSkill.category}</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

const HexNode = ({ skill, onHover, onLeave, textPrimary }: { skill: SkillNode, onHover: (s: SkillNode) => void, onLeave: () => void, textPrimary: React.CSSProperties }) => {
  const play = useSound();
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      whileHover={{ scale: 1.15, zIndex: 10 }}
      onMouseEnter={() => {
        play('hover');
        onHover(skill);
      }}
      onMouseLeave={onLeave}
      className="relative w-20 h-24 md:w-32 md:h-36 group cursor-pointer"
    >
      {/* Hexagon Shape */}
      <div
        className="absolute inset-0 bg-cyber-light/40 backdrop-blur-sm border-2 border-transparent transition-all duration-300 group-hover:border-cyber-blue/80 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]"
        style={{
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
        }}
      >
        {/* Inner Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center transition-colors" style={textPrimary}>
          <skill.icon className="text-3xl md:text-4xl mb-2 group-hover:scale-110 transition-transform duration-300 group-hover:text-cyber-blue" />
          <span className="text-[10px] md:text-xs font-mono tracking-widest bg-black/50 px-2 rounded">
            {skill.name}
          </span>
        </div>

        {/* Active Scan Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-blue/20 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000"></div>
      </div>

      {/* Decor Lines */}
      <div className="absolute -inset-1 border border-cyber-blue/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
      </div>

    </motion.div>
  );
};

export default Skills;