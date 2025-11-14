export interface BlogSection {
  heading?: string;
  body: string[];
  list?: string[];
  quote?: string;
}

export interface BlogArticle {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated: string;
  readingTime: string;
  tags: string[];
  sections: BlogSection[];
  maintainer: string;
}

export const blogArticles: BlogArticle[] = [
  {
    slug: 'resilient-web-apps-adversarial-environments',
    title: 'Designing Resilient Web Apps for Adversarial Environments',
    description:
      'A blueprint for delivering responsive web experiences that stay dependable under DDoS spikes, bad actor automation, and supply chain compromises.',
    date: 'October 2024',
    updated: 'Revalidated: January 2025',
    readingTime: '14 min read',
    tags: ['Application Security', 'Architecture', 'DevOps'],
    maintainer: 'Ujwal Thakare',
    sections: [
      {
        heading: 'Why resilience is now table stakes',
        body: [
          'Every public-facing product is, by default, sitting on an adversarial internet. Traffic bursts are as likely to be marketing wins as they are credential stuffing or DDoS rehearsals.',
          'The practical question becomes: how do we protect customer experience without bolting on a maze of point solutions? I frame resilience as a product capability, not an ops afterthought.',
        ],
      },
      {
        heading: 'Architecture guardrails I reach for first',
        body: [
          'Rather than chase every new exploit write-up, ship with guardrails that degrade gracefully. These are the controls that have paid rent repeatedly across deployments:',
        ],
        list: [
          'Layer 7 rate limiting defined per user intent (auth flows, search endpoints, file uploads).',
          'Zero-trust service mesh to keep lateral movement noisy and slow.',
          'Immutable infrastructure for runtime parity—drift belongs in git, not prod.',
          'Real-time observability on business metrics, not just CPU and memory charts.',
        ],
      },
      {
        heading: 'Exercise the failure paths',
        body: [
          'Resilience emerges from rehearsals. I schedule chaos windows where we intentionally break dependencies and replay what users would experience.',
          'The documentation template I use captures expected blast radius, on-call muscle memory, and go/no-go criteria for mitigation strategies.',
        ],
        quote:
          'Your playbooks are only as strong as the last time you stress-tested them. Treat incident runbooks like code: refactor, review, rehearse.',
      },
      {
        heading: 'Rollout checklist',
        body: [
          'Below is the abbreviated checklist my teams run before we call a build resilient enough for GA:',
        ],
        list: [
          'Synthetic traffic floods routed through staging and dark launch environments.',
          'Credential stuffing simulations validated against detection rules in the SIEM.',
          'Service-level objectives reviewed with the business and codified in alerts.',
          'Fail-open vs. fail-closed behaviours negotiated with customer success and legal.',
        ],
      },
    ],
  },
  {
    slug: 'threat-modeling-sprint-zero-ritual',
    title: 'Why Threat Modeling Should Be Your Sprint Zero Ritual',
    description:
      'Threat modeling done lightweight and continuously can be the multiplier that keeps delivery velocity high while hardening the product surface.',
    date: 'August 2024',
    updated: 'Revalidated: December 2024',
    readingTime: '11 min read',
    tags: ['Threat Modeling', 'Team Playbooks', 'Process'],
    maintainer: 'Ujwal Thakare',
    sections: [
      {
        heading: 'Threat modeling without the ceremony overhead',
        body: [
          'Sprint zero is where product assumptions harden. Instead of a whiteboard marathon, we spend 30 minutes enumerating actors, assets, and trust boundaries.',
          'The goal: a living diagram that engineers can attach mitigation issues to as they work. No slide decks, no PDF rot.',
        ],
      },
      {
        heading: 'Runbook for a 30-minute threat model',
        body: [
          'The cadence below is the template that has kept teams honest about security without derailing the sprint plan:',
        ],
        list: [
          'Prep: Product owner shares user stories and success metrics 24 hours prior.',
          'During: Engineers sketch data flows and call out decisions that feel risky or novel.',
          'After: Product + security co-create mitigation tickets and add them to the sprint backlog.',
        ],
      },
      {
        heading: 'Connecting the model to delivery',
        body: [
          'A threat model is useless unless it feeds your delivery loop. We anchor mitigations in the Definition of Done and trace them during code review.',
          'Retrospectives include a five-minute security check: did new threats surface? Should the model adapt? The ritual stays lightweight but persistent.',
        ],
      },
      {
        heading: 'Artifacts worth keeping',
        body: [
          'To prevent zombie documentation, we limit artifacts to the ones that influence future debates:',
        ],
        list: [
          'The current system context diagram (exported from our C4 model).',
          'A ticket list with risk labels and accountable owners.',
          'A short changelog capturing when and why the model evolved.',
        ],
      },
    ],
  },
  {
    slug: 'bootstrapping-personal-knowledge-base',
    title: 'Bootstrapping a Personal Knowledge Base with Obsidian + LLM Workflows',
    description:
      'How I built a system that keeps research, experiments, and teaching material discoverable—without drowning in tabs.',
    date: 'May 2024',
    updated: 'Revalidated: November 2024',
    readingTime: '9 min read',
    tags: ['Knowledge Management', 'AI', 'Productivity'],
    maintainer: 'Ujwal Thakare',
    sections: [
      {
        heading: 'Why Obsidian still wins for builders',
        body: [
          'Local-first markdown keeps my notes fast, portable, and lossless. I treat the vault as the source of truth and sync to cloud storage for redundancy.',
          'Forced linking and daily notes surface weak links in my understanding, which is the perfect trigger to research further or teach the concept.',
        ],
      },
      {
        heading: 'Prompting as a thinking partner',
        body: [
          'LLMs are integrated via a constrained prompt library. Each prompt references explicit notes so generations stay grounded.',
          'The workflow: capture → distill → interrogate with AI → publish. The AI step is there to highlight blind spots, not produce final copy.',
        ],
        list: [
          'Capture: Quick jot templates triggered with hotkeys in Obsidian.',
          'Distill: Weekly review where I refactor raw snippets into evergreen notes.',
          'Interrogate: Custom GPT prompts that pull from tagged notes only.',
          'Publish: Export to Notion or Markdown static sites depending on the audience.',
        ],
      },
      {
        heading: 'Automation that keeps the system humming',
        body: [
          'I rely on a small set of automations to remove friction while keeping me accountable:',
        ],
        list: [
          'Git-based backups triggered on directory changes.',
          'A cron job that surfaces three random evergreen notes for review.',
          'A build script that re-generates my public knowledge garden when tags change.',
        ],
      },
      {
        heading: 'When team sharing becomes the next step',
        body: [
          'When mentees or teammates need access, I publish curated collections through Notion databases or a static Quartz site.',
          'The key is to keep the source canonical—publishing is a projection layer, not the editing environment.',
        ],
      },
    ],
  },
];

export const getBlogBySlug = (slug: string) =>
  blogArticles.find((article) => article.slug === slug);
