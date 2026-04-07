import type { CSSProperties } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
// import { Light } from 'three';


type ExperienceItem = {
	role: string;
	company: string;
	period: string;
	bullets: string[];
	stack: string[];
};

const experienceItems: ExperienceItem[] = [
	{
		role: 'React Full-Stack Intern',
		company: 'Aquil Labs',
		period: 'Current',
		bullets: [
			'Building security-focused tools and enterprise-level applications with modern React and full-stack workflows.',
			'Working on data-driven features and structured application flows designed for scalable business use cases.',
			'Collaborating with the team to ship reliable UI, API, and integration improvements across the product.',
		],
		stack: ['React', 'Full Stack', 'Security Tools', 'Enterprise Apps', 'Data'],
	},
	{
		role: 'Internship Trainee - Java Development',
		company: 'Kiran Academy (Java By Kiran)',
		period: 'June 2025 - October 2025',
		bullets: [
			'Designed Java-based applications using OOP fundamentals to create modular, reusable components.',
			'Built and tested backend data-processing logic with structured exception handling to reduce debugging effort.',
			'Optimized DSA problem-solving across arrays, linked lists, trees, and sorting algorithms.',
		],
		stack: ['Java', 'OOP', 'DSA', 'Backend'],
	},
];

const Experience = () => {
	// const textPrimary: CSSProperties = { color: 'var(--text-primary, rgba(2, 7, 12, 0.82))'};
	const textStrong: CSSProperties = { color: 'var(--text-strong, #f8fafc)' };

	return (
		<section id="experience" className="relative overflow-hidden px-4 py-20 md:px-8 md:py-28">
			<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_16%,rgba(59,130,246,0.15),transparent_40%),radial-gradient(circle_at_86%_15%,rgba(255,109,0,0.16),transparent_38%)]" />

			<div className="container-lg relative">
				<SectionHeading index="02" title="Experience" className="mb-14" />
				<div className="relative mx-auto max-w-6xl">
					<div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-cyan/60 via-cyan/20 to-transparent lg:block" />
					<div className="pointer-events-none absolute left-4 top-0 h-full w-px bg-gradient-to-b from-cyan/60 via-cyan/20 to-transparent lg:hidden" />

					<div className="space-y-12 lg:space-y-20">
						{experienceItems.map((item, index) => {
							const isRight = index % 2 === 0;
							return (
								<motion.article
									key={item.role}
									initial={{ opacity: 0, y: 40 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.65, delay: index * 0.08 }}
									viewport={{ once: true, margin: '-110px' }}
									className="relative grid items-start gap-5 pl-10 lg:grid-cols-[minmax(0,1fr)_72px_minmax(0,1fr)] lg:gap-8 lg:pl-0"
								>
									<div className="relative h-full lg:col-start-2 lg:mx-auto lg:flex lg:items-start">
										<div
											className={`mt-14 h-3 w-3 rounded-full border ${isRight ? 'border-violet/80 bg-violet/70 shadow-[0_0_18px_rgba(255,109,0,0.58)]' : 'border-cyan/80 bg-cyan shadow-[0_0_18px_rgba(59,130,246,0.6)]'}`}
										/>
									</div>

									<motion.div
										whileHover={{ y: -7, scale: 1.01 }}
										transition={{ type: 'spring', stiffness: 260, damping: 22 }}
										className={`group relative overflow-hidden rounded-2xl border border-cyan/20 bg-slate-900/45 p-6 backdrop-blur-xl transition-all duration-300 hover:border-violet/60 hover:shadow-[0_22px_64px_rgba(0,0,0,0.46),0_0_26px_rgba(255,109,0,0.22)] md:p-7 lg:max-w-[520px] ${isRight ? 'lg:col-start-3 lg:justify-self-start' : 'lg:col-start-1 lg:justify-self-end'}`}
									>
										<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(59,130,246,0.22),transparent_38%),radial-gradient(circle_at_88%_12%,rgba(255,109,0,0.2),transparent_35%)] opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
										<div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/6 via-transparent to-transparent" />

										<div className="relative z-10">
											<div className="mb-4 flex flex-wrap items-start justify-between gap-3">
												<div className="space-y-1.5">
													<h3 className="about-typography-title text-xl leading-tight md:text-2xl" style={textStrong}>
														{item.role}
													</h3>
													<p className="about-typography-copy  text-sm md:text-[15px]" style={textStrong}>
														{item.company}
													</p>
												</div>

												<span className="about-typography-eyebrow rounded-full border border-cyan/25 bg-cyan/10 px-3 py-1 text-[10px] text-cyan">
													{item.period}
												</span>
											</div>

											<ul className="space-y-3 border-t border-cyan/20 pt-5">
												{item.bullets.map((point) => (
													<li key={point} className="about-typography-copy flex items-start gap-3 text-sm leading-relaxed" style={textStrong}>
														<span className="mt-1 text-cyan">›</span>
														<span>{point}</span>
													</li>
												))}
											</ul>

											<div className="mt-5 flex flex-wrap gap-2">
												{item.stack.map((tag) => (
													<span
														key={tag}
														className="about-typography-eyebrow rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[10px]"
														style={textStrong}
													>
														{tag}
													</span>
												))}
											</div>
										</div>
									</motion.div>
								</motion.article>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
