import { useMemo } from 'react';
import {
  SiDjango,
  SiDocker,
  SiFirebase,
  SiGithub,
  SiGrafana,
  SiJavascript,
  SiKubernetes,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenjdk,
  SiPostman,
  SiPrometheus,
  SiPython,
  SiReact,
  SiTailwindcss,
} from 'react-icons/si';
import type { IconType } from 'react-icons';
import { SectionHeading } from '../ui/SectionHeading';

type StripIcon = {
  label: string;
  icon: IconType;
  href: string;
};

const TECH_LOGOS: StripIcon[] = [
  { label: 'Python', icon: SiPython, href: 'https://www.python.org/' },
  { label: 'OpenJDK', icon: SiOpenjdk, href: 'https://openjdk.org/' },
  { label: 'JavaScript', icon: SiJavascript, href: 'https://www.javascript.com/' },
  { label: 'React', icon: SiReact, href: 'https://react.dev/' },
  { label: 'Node.js', icon: SiNodedotjs, href: 'https://nodejs.org/' },
  { label: 'Next.js', icon: SiNextdotjs, href: 'https://nextjs.org/' },
  { label: 'Django', icon: SiDjango, href: 'https://www.djangoproject.com/' },
  { label: 'Tailwind CSS', icon: SiTailwindcss, href: 'https://tailwindcss.com/' },
  { label: 'Docker', icon: SiDocker, href: 'https://www.docker.com/' },
  { label: 'Kubernetes', icon: SiKubernetes, href: 'https://kubernetes.io/' },
  { label: 'MongoDB', icon: SiMongodb, href: 'https://www.mongodb.com/' },
  { label: 'Firebase', icon: SiFirebase, href: 'https://firebase.google.com/' },
  { label: 'GitHub', icon: SiGithub, href: 'https://github.com/' },
  { label: 'Postman', icon: SiPostman, href: 'https://www.postman.com/' },
  { label: 'Grafana', icon: SiGrafana, href: 'https://grafana.com/' },
  { label: 'Prometheus', icon: SiPrometheus, href: 'https://prometheus.io/' },
];

const Skills = () => {
  const loopLogos = useMemo(() => [...TECH_LOGOS, ...TECH_LOGOS], []);

  return (
    <section id="skills" className=" px-4 py-20 md:px-8 md:py-28">
      <div className="container-lg">
        <div className="mb-10 md:mb-16">
          <SectionHeading index="04" title="Techstack" />
          <p className="about-typography-copy mt-4 max-w-3xl text-sm md:text-base">
            Click any capability module to inspect full stack depth, implementation focus, and practical experience context.
          </p>
        </div>

        <div className="skill-marquee-shell" aria-label="Technical company logos">
          <div className="skill-marquee-row ">
            <div className="skill-marquee-track" style={{ animationDuration: '25s' }}>
              {loopLogos.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={`${item.label}-${index}`}
                    className="skill-marquee-chip"
                    aria-label={`Open ${item.label} website`}
                    title={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

      </div>

 
    </section>
  );
};

export default Skills;
