import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  FaArrowUpRightFromSquare,
  FaCircleXmark,
  FaCode,
  FaGithub,
  FaCloud,
  FaServer,
  FaShieldHalved,
} from 'react-icons/fa6';
import { SectionHeading } from '../ui/SectionHeading';
type ProjectItem = {
  title: string;
  description: string;
  purpose: string;
  details: string[];
  stack: string[];
  accent: 'cyan' | 'violet';
  coreTint: 'blue' | 'emerald' | 'slate' | 'amber';
  image: string;
  links: {
    github: string;
    demo: string;
  };
  status?: 'In development' | 'Live' | 'Archived';
};

const PROJECTS: ProjectItem[] = [
  {
    title: 'CyberShield Nexus',
    description:
      'A cybercrime assistance and intelligence platform enabling users to report incidents via chatbot/voice, analyze threats in real-time, and provide actionable cybersecurity guidance using integrated threat intelligence systems.',
    purpose:
      'Built to simplify cybercrime reporting and deliver immediate, context-aware security assistance to users and teams.',
    details: [
      'Conversational incident reporting through chatbot and voice input.',
      'Threat pattern analysis layer powered by search and intelligence APIs.',
      'Actionable guidance generation for remediation and response workflows.',
    ],
    stack: ['Python', 'Django', 'Elasticsearch', 'Threat Intelligence APIs', 'NLP', 'React'],
    accent: 'cyan',
    coreTint: 'blue',
    image: '/images/cybershield.jfif',
    links: {
      github: 'https://github.com/theujwalthakare/CyberShield',
      demo: 'https://theujwalthakare.dev',
    },
    status : 'In development',
  },
  {
    title: 'Digital Immune System (DIS)',
    description:
      'An experimental cognitive overlay security system for Kubernetes environments that detects anomalies, predicts failures, and enables self-healing infrastructure using AI-driven observability.',
    purpose:
      'Built to make cloud-native infrastructure resilient by combining predictive intelligence and self-healing automation.',
    details: [
      'Observability signals from Prometheus/Grafana used for anomaly detection.',
      'Service mesh telemetry and policy-aware behavior using Istio.',
      'Automated mitigation strategies for failure prevention and recovery.',
    ],
    stack: ['Kubernetes', 'Golang', 'Prometheus', 'Grafana', 'Istio', 'AI/ML'],
    accent: 'violet',
    coreTint: 'emerald',
    image: '/images/DIS.jfif',
    links: {
      github: 'https://github.com/theujwalthakare/DIS',
      demo: 'https://theujwalthakare.dev/DIS',
    },
    status: 'Live',
  },
  {
    title: 'ARJUNA',
    description:
      'Autonomous Runtime Judgment Unified Network Analyzer that monitors network activity, detects intrusions, and performs intelligent decision-making using AI-powered analysis and real-time telemetry.',
    purpose:
      'Built to improve intrusion detection speed and decision quality with an autonomous network analysis pipeline.',
    details: [
      'Real-time telemetry ingestion and event correlation engine.',
      'AI-assisted alert prioritization for faster response.',
      'Integrated detection workflows with monitoring and dashboard tools.',
    ],
    stack: ['Node.js', 'AI/ML', 'Snort', 'Grafana', 'WebSockets', 'MongoDB'],
    accent: 'cyan',
    coreTint: 'slate',
    image: '/images/arjuna.jfif',
    links: {
      github: 'https://github.com/theujwalthakare/ARJUNA',
      demo: 'https://theujwalthakare.dev',
    },
    status: 'In development',
  },
  {
    title: 'Build2Show',
    description:
      'A platform for students to build portfolios, track progress, and prepare for placements with project showcases, learning paths, and interview preparation tools.',
    purpose:
      'Built to help students turn work into visible outcomes and prepare systematically for placement opportunities.',
    details: [
      'Project showcase system with structured profile and portfolio flow.',
      'Progress tracking and learning-path guidance for preparation cycles.',
      'Interview readiness tools and curated preparation modules.',
    ],
    stack: ['React', 'Firebase', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    accent: 'violet',
    coreTint: 'amber',
    image: '/images/build2show.jfif',
    links: {
      github: 'https://github.com/theujwalthakare/portfolio-hub',
      demo: 'https://build2show.vercel.app',
    },
    status : 'Live',
  },
  {
    title: 'TechnoHack 2026',
    description:
      'A 2-day hackathon platform bringing together 200+ developers, creators, and students to turn ideas into impact through competitive challenges, real-world projects, and skill-building competitions.',
    purpose:
      'Built to organize and showcase a premier tech fest with event management, registration system, and competition tracking for aspiring innovators.',
    details: [
      '10 featured competitions including SQL Murder Mystery, WebSprint, CampusPreneurs, and BGMI Battle.',
      'Real-time event scheduling with venue details and participant management across 2-day hackathon cycle.',
    ],
    stack: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    accent: 'cyan',
    coreTint: 'amber',
    image: '/images/technohack.jfif',
    links: {
      github: 'https://github.com/theujwalthakare/technohack0.1',
      demo: 'https://technohack0-1.vercel.app',
    },
    status: 'Live',
  },
];

const iconFor = (title: string) => {
  if (title.includes('CyberShield')) return FaShieldHalved;
  if (title.includes('Digital Immune') || title.includes('DIS')) return FaCloud;
  if (title.includes('ARJUNA')) return FaServer;
  if (title.includes('Build2Show')) return FaCode;
  return FaCode;
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    if (!selectedProject) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleEscape);
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="px-4 py-20 md:px-8 md:py-28">
      <div className="container-lg">
        <div className="mb-12 md:mb-16">           
          <SectionHeading index="02" title="Build Projects" className="mb-14" />
          
          <p className="about-typography-copy max-w-md text-xs uppercase tracking-[0.18em]">
            A showcase of full-stack problem solving, backend architecture, and practical cloud delivery.
          </p>
        </div>
       

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PROJECTS.map((project, index) => {
            const Icon = iconFor(project.title);
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true, margin: '-100px' }}
                className="project-parent"
              >
                <article
                  className={`project-ref-card project-ref-card--${project.accent}`}
                  style={{ backgroundImage: `linear-gradient(160deg, rgba(15, 23, 42, 0.25) 0%, rgba(15, 23, 42, 0.72) 62%, rgba(15, 23, 42, 0.94) 100%), url(${project.image})` }}
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelectedProject(project)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      setSelectedProject(project);
                    }
                  }}
                >
                  <div className={`project-ref-logo project-ref-logo--${project.coreTint}`}>
                    <span className="project-ref-circle project-ref-circle1" />
                    <span className="project-ref-circle project-ref-circle2" />
                    <span className="project-ref-circle project-ref-circle3" />
                    <span className="project-ref-circle project-ref-circle4" />
                    <span className="project-ref-circle project-ref-circle5">
                      <Icon className="project-logo-icon" />
                    </span>
                  </div>

                  <div className="project-ref-glass" />

                  <div className="project-ref-content">
                    <span className="project-ref-title">{project.title}</span>
                    {/* <span className="project-ref-text">{project.description}</span> */}
                    <span className="project-ref-stack">{project.stack.join(' • ')}</span>
                  </div>

                  <div className="project-ref-bottom">
                    <div className="project-ref-social-buttons-container">
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} GitHub`}
                        className="project-ref-social-button project-ref-social-button1"
                        onClick={(event) => event.stopPropagation()}
                      >
                        <FaGithub />
                      </a>
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} Demo`}
                        className="project-ref-social-button project-ref-social-button2"
                        onClick={(event) => event.stopPropagation()}
                      >
                        <FaArrowUpRightFromSquare />
                      </a>
                      {/* <a href="https://x.com/" target="_blank" rel="noreferrer" aria-label={`${project.title} X`} className="project-ref-social-button project-ref-social-button3">
                        <FaXTwitter />
                      </a> */}
                    </div>
                  </div>
                </article>
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal-backdrop"
            onClick={() => setSelectedProject(null)}
            role="presentation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <motion.div
              className="project-modal-card"
              role="dialog"
              aria-modal="true"
              aria-label={`${selectedProject.title} details`}
              onClick={(event) => event.stopPropagation()}
              initial={{ opacity: 0, scale: 0.96, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 8 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            >
            <div className="project-modal-header">
              <div>
                <p className="project-modal-label">Project Deep Dive</p>
                <h3 className="project-modal-title">{selectedProject.title}</h3>
              </div>
              <button type="button" className="project-modal-close" aria-label="Close project details" onClick={() => setSelectedProject(null)}>
                <FaCircleXmark />
              </button>
            </div>

            <div className="project-modal-scroll">
              <div className="project-modal-banner" style={{ backgroundImage: `linear-gradient(155deg, rgba(15, 23, 42, 0.2) 0%, rgba(15, 23, 42, 0.74) 75%), url(${selectedProject.image})` }} />

              <section className="project-modal-section">
                <h4>What This Project Is Made For</h4>
                <p>{selectedProject.purpose}</p>
              </section>

              <section className="project-modal-section">
                <h4>Overview</h4>
                <p>{selectedProject.description}</p>
              </section>

              <section className="project-modal-section">
                <h4>Key Highlights</h4>
                <ul>
                  {selectedProject.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </section>

              <section className="project-modal-section">
                <h4>Tech Stack</h4>
                <p>{selectedProject.stack.join(' • ')}</p>

              </section>

              <section className="project-modal-actions">
                <a href={selectedProject.links.github} target="_blank" rel="noreferrer" className="project-modal-action">
                  <FaGithub /> GitHub
                </a>
                <a href={selectedProject.links.demo} target="_blank" rel="noreferrer" className="project-modal-action">
                  <FaArrowUpRightFromSquare /> Demo
                </a>
                {/* show status in beutifull UI */}
                <span className={`project-status project-status--${selectedProject.status === 'Live' ? 'live' : selectedProject.status === 'In development' ? 'dev' : 'archived'}`}>
                  {selectedProject.status}
                </span>
              </section>
               
            </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;
