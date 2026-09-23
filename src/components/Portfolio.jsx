import { useState } from 'react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import PortfolioCard from './PortfolioCard';

/* "03 — Portfolio" section with category filters.
   Props: heading, projects [], filters [{id,label}], cta {title,desc,status,button},
          links {}, onSelect(project) */
export default function Portfolio({ heading, projects, filters, cta, links, onSelect }) {
  const [active, setActive] = useState('all');
  const visible = active === 'all' ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="py-20 md:py-28 border-t border-white/[0.06]" aria-labelledby="portfolio-title">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
        <Reveal>
          <div className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#D4AF37] mb-4">{heading.eyebrow}</div>
          <h2 id="portfolio-title" className="font-sora font-bold text-[32px] md:text-[48px] leading-[0.95] tracking-[-0.03em]">
            {heading.title} <br />
            <span className="text-white/40">{heading.titleMuted}</span>
          </h2>
        </Reveal>

        <Reveal delay={1} className="flex flex-wrap gap-2" role="group" aria-label="Portfolio filters">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              aria-pressed={active === f.id}
              onClick={() => setActive(f.id)}
              className={`h-9 px-4 rounded-full border border-white/10 text-[12px] font-mono uppercase tracking-wide transition ${
                active === f.id ? 'filter-active' : 'bg-white/[0.03] text-white/60 hover:text-white'
              }`}
            >
              {f.label}
            </button>
          ))}
        </Reveal>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {visible.map((project) => (
          <Reveal key={`${active}-${project.id}`}>
            <PortfolioCard project={project} onSelect={onSelect} />
          </Reveal>
        ))}

        {/* "Your project next" CTA tile */}
        <Reveal>
          <div className="rounded-[20px] border border-dashed border-white/15 bg-transparent flex flex-col justify-between p-6 min-h-[260px]" aria-label="Start your project">
            <div>
              <div className="w-10 h-10 rounded-full bg-white/[0.06] border border-white/10 grid place-items-center mb-4" aria-hidden="true">
                +
              </div>
              <h3 className="font-sora font-bold text-[18px]">{cta.title}</h3>
              <p className="text-[13px] text-white/50 mt-2 leading-[1.6]">{cta.desc}</p>
              <div className="mt-4 flex items-center gap-2 text-[11px] font-mono text-emerald-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> {cta.status}
              </div>
            </div>
            <a
              href={links.telegram}
              target="_blank"
              rel="noopener"
              className="mt-6 inline-flex h-10 px-5 rounded-full bg-[#D4AF37] text-black font-semibold text-[13px] items-center gap-2 w-fit hover:brightness-110 transition"
              aria-label="Start project on Telegram"
            >
              {cta.button}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
