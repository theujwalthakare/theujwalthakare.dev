import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import HolographicCard from '../ui/HolographicCard';
import DecryptedText from '../ui/DecryptedText';
import { PROJECTS } from '../../data/projects';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects =
    filter === 'all'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === filter);


  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-dystopian mb-6 text-cyber-blue">
            <DecryptedText text="FEATURED PROJECTS" />
          </h2>
          <div className="h-1 w-24 bg-cyber-blue mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Here are some of the fully working, end-to-end projects I've built. Each one reflects my skills in real-world problem-solving and development.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['all', 'frontend', 'backend', 'fullstack'].map((cat) => (
              <button
                key={cat}
                className={`px - 4 py - 2 border ${filter === cat
                  ? 'border-cyber-blue text-cyber-blue bg-cyber-blue/10'
                  : 'border-gray-600 text-gray-400 hover:border-cyber-blue hover:text-cyber-blue'
                  } transition - colors duration - 300`}
                onClick={() => setFilter(cat)}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence>
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProjects.map((project) => (
              <HolographicCard key={project.title}>
                <div className="flex flex-col h-full p-6">
                  <div className="mb-4 flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyber-blue transition-colors duration-300">
                        {project.title}
                      </h3>
                      <span className="text-xs text-cyber-blue font-mono mt-1 block">
                        {project.category} // {project.technologies.slice(0, 2).join(', ')}
                      </span>
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                        title="View Code"
                      >
                        <FaGithub size={20} />
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-cyber-blue transition-colors"
                        title="Live Demo"
                      >
                        <FaExternalLinkAlt size={20} />
                      </a>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-cyber-blue/10 px-3 py-1 text-xs text-cyber-blue border border-cyber-blue/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </HolographicCard>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
