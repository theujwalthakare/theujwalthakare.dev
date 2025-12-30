import { FaReact, FaJava, FaDocker, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { SiSpringboot, SiTypescript, SiTailwindcss, SiPostgresql, SiHibernate, SiJavascript, SiHtml5, SiCss3 } from 'react-icons/si';

export const SKILL_CATEGORIES = [
    { id: 'all', label: 'ALL MODULES' },
    { id: 'frontend', label: 'FRONTEND' },
    { id: 'backend', label: 'BACKEND' },
    { id: 'devops', label: 'DEVOPS/TOOLS' }
];

export const SKILLS = [
    { name: "React", icon: FaReact, category: "frontend", level: 90 },
    { name: "TypeScript", icon: SiTypescript, category: "frontend", level: 85 },
    { name: "Java", icon: FaJava, category: "backend", level: 95 },
    { name: "Spring Boot", icon: SiSpringboot, category: "backend", level: 90 },
    { name: "PostgreSQL", icon: SiPostgresql, category: "backend", level: 85 },
    { name: "Docker", icon: FaDocker, category: "devops", level: 80 },
    { name: "Hibernate", icon: SiHibernate, category: "backend", level: 85 },
    { name: "Tailwind", icon: SiTailwindcss, category: "frontend", level: 90 },
    { name: "Git", icon: FaGitAlt, category: "devops", level: 88 },
    { name: "SQL", icon: FaDatabase, category: "backend", level: 92 },
    { name: "JavaScript", icon: SiJavascript, category: "frontend", level: 90 },
    { name: "HTML5", icon: SiHtml5, category: "frontend", level: 95 },
    { name: "CSS3", icon: SiCss3, category: "frontend", level: 90 },
];
