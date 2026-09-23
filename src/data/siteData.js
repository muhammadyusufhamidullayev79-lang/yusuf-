/* ============================================================
   Site data — the single source of truth.
   App.jsx imports this and passes slices to each component
   via props.
   ============================================================ */

export const profile = {
  full: 'Muhammad Yusuf Hamidullayev',
  first: 'Muhammad Yusuf',
  last: 'Hamidullayev',
  initials: 'MYH',
  roleTagline: 'Vibe Coding • Video • SMM',
  heroBadge: 'Tashkent • Working Worldwide • 4+ Months High-Impact',
  heroLead: 'Blending ',
  heroLeadStrong: 'Vibe Coding, High-End Video Editing, Copywriting & Audience Psychology',
  heroLeadEnd: ' to Scale Brands.',
  heroSupport:
    'I help education & corporate brands in Uzbekistan turn attention into revenue — fast AI-assisted builds, scroll-stopping Reels, and psychology-driven Telegram & Instagram systems.',
  availability: 'AVAILABLE • 2 SPOTS Q2',
};

export const links = {
  telegram: 'https://t.me/Yusuf_xan',
  telegramHandle: '@Yusuf_xan',
  instagram: 'https://www.instagram.com/yusuf_xan.7/',
  instagramHandle: '@yusuf_xan.7',
  email: 'muhammadyusufhamidullayev79@gmail.com',
  mailto: 'mailto:muhammadyusufhamidullayev79@gmail.com',
  github: 'https://github.com/muhammadyusufhamidullayev79-lang',
};

export const navLinks = [
  { label: 'Expertise', href: '#expertise' },
  { label: 'Experience', href: '#experience' },
  { label: 'Process', href: '#process', hideInMobile: true },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

export const heroStats = [
  { value: '+1.2k', label: 'IG followers 60d' },
  { value: '280k', label: 'Reels views' },
  { value: '2', label: 'Brands scaled' },
];

export const heroTrust = {
  avatars: [
    { char: 'P', className: 'bg-[#0F382C]' },
    { char: 'T', className: 'bg-[#0A192F]' },
    { char: '★', className: 'bg-[#D4AF37] text-black' },
  ],
  title: 'Pretest • UTY — Real brands',
  sub: 'Verified work, measurable growth',
};

/* Right-side "live workspace" card */
export const heroSystems = [
  {
    tag: 'VIBE CODE',
    title: 'Landing + CMS',
    progress: 85,
    box: 'bg-[#0F382C]/40 border-[#0F382C]/60',
    tagCls: 'text-emerald-200/70',
    barCls: 'bg-[#D4AF37]',
  },
  {
    tag: 'VIDEO',
    title: 'Reels Pack (12)',
    progress: 92,
    box: 'bg-[#0A192F]/60 border-white/10',
    tagCls: 'text-blue-200/60',
    barCls: 'bg-blue-400',
  },
  {
    tag: 'COPY',
    title: 'TG • 24 posts',
    ctr: '38% CTR',
    box: 'bg-white/[0.03] border-white/[0.06]',
    tagCls: 'text-white/40',
  },
  {
    tag: 'SMM',
    title: 'IG +42% growth',
    trend: '↑ trending',
    box: 'bg-white/[0.03] border-white/[0.06]',
    tagCls: 'text-white/40',
  },
];

/* 01 — Core Expertise */
export const expertiseHeading = {
  eyebrow: '01 — Core Expertise',
  title: 'Four pillars to',
  titleMuted: 'scale your brand.',
  side: 'Not just services — integrated systems that turn attention into trust and trust into sales.',
};

export const skills = [
  {
    id: 'vibe-coding',
    icon: 'code',
    title: 'Vibe Coding',
    desc: 'Building fast, AI-assisted digital solutions & web applications. From landing pages to full-stack tools — shipped in 48h-7 days, not months.',
    tags: ['Next.js • Framer • Webflow', 'Supabase • AI'],
    stat: 'Ship 3x faster',
    tone: 'emerald',
  },
  {
    id: 'video',
    icon: 'video',
    title: 'Professional Video Editing & Motion',
    desc: 'Retention-first Reels, ads, and brand films. Hook in 1.5s, captions, SFX, and motion that stops the scroll and drives action.',
    tags: ['Premiere Pro • After Effects', 'CapCut Pro • Motion'],
    stat: 'Avg. +240% retention • 280k views',
    tone: 'blue',
  },
  {
    id: 'copywriting',
    icon: 'pen',
    title: 'High-Converting Copywriting',
    desc: 'Psychology-driven hooks, storytelling, and CTAs that sell without sounding salesy. Built for Telegram, IG, and landing pages.',
    tags: ['Hooks • Story • CTA', 'UGC Scripts • 38% CTR'],
    stat: '3.2x avg. engagement',
    tone: 'gold',
  },
  {
    id: 'strategy',
    icon: 'bulb',
    title: 'Audience Psychology & Content Strategy',
    desc: 'Content strategy rooted in real behavior. Telegram growth loops, Instagram funnels, and posting systems that scale without burnout.',
    tags: ['Telegram • Instagram • Funnels', '+1.2k in 60 days'],
    stat: 'Community-first growth',
    tone: 'neutral',
  },
];

/* 02 — Experience */
export const experienceHeading = {
  eyebrow: '02 — Experience & Track Record',
  title: 'Real brands,',
  titleMuted: 'real growth.',
  badge: '4+ months • 2 major brands • Tashkent',
};

export const jobs = [
  {
    id: 'pretest',
    company: 'Pretest Mock Center',
    initial: 'P',
    meta: 'Education • SMM Lead • 2024',
    badge: 'SMM Lead',
    gradient: 'from-[#D4AF37] to-[#0F382C]',
    iconBox: 'bg-[#D4AF37] text-black',
    badgeCls: 'bg-[#D4AF37]/15 border-[#D4AF37]/20 text-[#D4AF37]',
    bullets: [
      [
        { t: 'SMM Lead, Copywriter, Mobilographer & Editor', tone: 'bold' },
        { t: ' — owned full content lifecycle from idea to publish, 5 posts/week + daily stories.' },
      ],
      [
        { t: 'Built ' },
        { t: 'Instagram & Telegram growth system', tone: 'white' },
        { t: ': +1,240 followers in 60 days, 32 Reels with 280k total views, CTR 38% on TG posts.' },
      ],
      [{ t: 'Created booking funnel: Reels → TG → trial lesson, increased trial bookings by +18%.' }],
    ],
    metrics: [
      { label: 'Growth', value: '+1.2k / 60d', tone: 'default' },
      { label: 'Views', value: '280k Reels', tone: 'default' },
      { label: 'Impact', value: '+18% leads', tone: 'gold' },
    ],
  },
  {
    id: 'uty',
    company: "O'zbekiston Temir Yo'llari",
    initial: 'UTY',
    meta: 'Corporate • Content Specialist • 2024',
    badge: 'Corporate',
    gradient: 'from-[#0A192F] to-[#0F382C]',
    iconBox: 'bg-[#0A192F] border border-white/10 text-white',
    badgeCls: 'bg-white/[0.06] border-white/10 text-white/60',
    bullets: [
      [
        { t: 'Corporate Copywriter & Content Specialist', tone: 'bold' },
        { t: ' — translated complex railway updates into audience-friendly stories for 100k+ subscribers.' },
      ],
      [
        { t: 'Produced ' },
        { t: '12 high-impact Reels', tone: 'white' },
        { t: ' for official IG & Telegram, avg 45k views, +35% engagement vs previous content.' },
      ],
      [{ t: 'Standardized corporate voice guide, improved consistency across 3 platforms.' }],
    ],
    metrics: [
      { label: 'Reels', value: '12 produced', tone: 'default' },
      { label: 'Avg Views', value: '45k / Reel', tone: 'default' },
      { label: 'Engagement', value: '+35% lift', tone: 'emerald' },
    ],
  },
];

/* 02.5 — Process */
export const processEyebrow = '02.5 — How I Work';

export const processSteps = [
  {
    no: '01 — DISCOVER',
    title: 'Audit & Psychology Map',
    desc: 'Audience interviews, competitor teardown, hook bank. We find what actually stops your audience.',
    highlight: false,
  },
  {
    no: '02 — BUILD',
    title: 'Vibe Code + Content System',
    desc: 'Landing or tool in 48h-7 days + 2 weeks of Reels, TG posts, and scripts — all in one Figma source.',
    highlight: false,
  },
  {
    no: '03 — SCALE',
    title: 'Test, Learn, Scale',
    desc: 'Daily Loom updates, CTR & retention tracking, double down on winners. No endless meetings.',
    highlight: true,
  },
];

/* 03 — Portfolio */
export const portfolioHeading = {
  eyebrow: '03 — Portfolio Showcase',
  title: 'Selected work',
  titleMuted: 'across formats.',
};

export const portfolioFilters = [
  { id: 'all', label: 'All' },
  { id: 'video', label: 'Video & Reels' },
  { id: 'copy', label: 'Copy & Strategy' },
  { id: 'campaign', label: 'TG & IG Campaigns' },
  { id: 'code', label: 'Vibe Coding' },
];

export const projects = [
  {
    id: 'pretest-reels',
    category: 'video',
    title: 'Pretest Reels Pack — 30 sec hooks',
    subtitle: '32 Reels • Retention-first • +18% leads',
    desc: '32 Reels produced in 60 days, 280k total views, avg 8.7k per Reel. Retention-first editing: hook in 1.5s, dynamic captions, SFX, pattern interrupts. Drove +18% trial bookings.',
    metric: '+18% leads',
    visual: {
      type: 'photo',
      image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=800&auto=format&fit=crop',
      imageFull: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1200&auto=format&fit=crop',
      imageAlt: 'Video editing timeline showing Reels for Pretest',
      badge: { label: 'Video & Reels • 280k views', tone: 'gold' },
      showArrow: true,
    },
  },
  {
    id: 'tg-copy',
    category: 'copy',
    title: 'High-converting TG post series — Pretest',
    subtitle: 'Psychology-driven copy • 24 posts • 38% CTR',
    desc: '24 Telegram posts, psychology-driven: curiosity gap, social proof, micro-CTA. Avg CTR 38%, 2.1k avg views, 12% forward rate. Built content calendar system.',
    metric: '38% CTR',
    visual: {
      type: 'typography',
      imageFull: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
      badge: { label: 'Copy & Strategy • 38% CTR', tone: 'white' },
      foot: [
        { t: '24 posts • 2.1k avg views', tone: 'default' },
        { t: '↑ 3.2x eng', tone: 'emerald' },
      ],
    },
  },
  {
    id: 'uty-campaign',
    category: 'campaign',
    title: 'UTY — Corporate Reels & Telegram system',
    subtitle: '12 Reels • 45k avg • +35% engagement',
    desc: '12 corporate Reels for Uzbekistan Railways official channels. Translated complex updates into stories. Avg 45k views per Reel, +35% engagement vs old content. Telegram cross-post system.',
    metric: '45k avg views',
    visual: {
      type: 'photo',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=800&auto=format&fit=crop',
      imageFull: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=1200&auto=format&fit=crop',
      imageAlt: 'Corporate social media campaign for Uzbekistan Railways',
      badge: { label: 'TG & IG Campaigns • UTY', tone: 'emerald' },
    },
  },
  {
    id: 'pretest-landing',
    category: 'code',
    title: 'Pretest Landing + Booking flow — Vibe Coded',
    subtitle: 'Next.js • Fast CMS • +22% conv',
    desc: 'Next.js landing + Supabase booking, built in 4 days. Fast CMS for non-tech team, 1.8s LCP, +22% conversion vs old Linktree. Vibe coding workflow: Figma → Framer → Code.',
    metric: '+22% conv',
    visual: {
      type: 'code',
      imageFull: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
      badge: { label: 'Vibe Coding • 4 days ship', tone: 'emeraldDark' },
      code: [
        [
          { t: 'const', cls: 'text-[#D4AF37]' },
          { t: ' ' },
          { t: 'brandScale', cls: 'text-white' },
          { t: ' = () => {' },
        ],
        [{ t: 'return ai.buildFast({ days: 4 })', cls: 'text-emerald-300', indent: true }],
        [{ t: '// +22% conversion, 1.8s LCP', cls: 'text-white/30', indent: true }],
        [{ t: '}' }],
      ],
      foot: [
        { t: 'Next.js • Supabase', tone: 'emeraldSoft' },
        { t: '1.8s LCP', tone: 'gold' },
      ],
    },
  },
  {
    id: 'motion-pack',
    category: 'video',
    title: 'Motion graphics pack — Titles & transitions',
    subtitle: 'Titles, transitions • -60% edit time',
    desc: 'Custom title animations, transitions, and brand sting for Pretest & UTY. After Effects + CapCut system, reusable for team. Cut editing time by 60%.',
    metric: '-60% edit time',
    visual: {
      type: 'photo',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop',
      imageFull: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop',
      imageAlt: 'Motion graphics title animation',
      badge: { label: 'Video & Motion • System', tone: 'gold' },
    },
  },
];

export const portfolioCta = {
  title: 'Your project next',
  desc: 'Need vibe coding + video + copy that converts? 2 spots left for Q2. Let’s build your growth system in 7 days.',
  status: 'Avg response ~2h',
  button: 'Start on Telegram →',
};

/* Modal meta (shown for every project) */
export const modalMeta = [
  { label: 'Role', value: 'Lead • Strategy → Ship' },
  { label: 'Timeline', value: '4-60 days • End-to-end' },
  { label: 'Stack', value: 'Figma • Code • Content' },
];

/* Contact */
export const contactData = {
  badge: 'Available for new projects • Reply ~2h • Tashkent GMT+5',
  titleA: 'Ready to elevate',
  titleB: 'your brand?',
  sub: 'Let’s turn your ideas into high-impact visuals and systems that scale. Fast execution, clear communication, measurable results — no fluff.',
  facts: [
    { label: 'Response', value: '~2 hours • GMT+5' },
    { label: 'Kickoff', value: 'Within 48 hours' },
    { label: 'Stack', value: 'Figma → Code → Content' },
  ],
};

export const footerData = {
  copyright: '© 2026 Muhammad Yusuf Hamidullayev. All rights reserved.',
  note: 'Built with Vibe Coding in Tashkent',
};
