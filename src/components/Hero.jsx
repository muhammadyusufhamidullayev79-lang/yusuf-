import Icon from './Icons';
import Magnetic from './Magnetic';
import Reveal from './Reveal';
import HeroVisual from './HeroVisual';

/* Above-the-fold section.
   Props: profile, links, stats [], trust {avatars,title,sub}, systems [] */
export default function Hero({ profile, links, stats, trust, systems }) {
  return (
    <section className="pt-[128px] md:pt-[160px] pb-16 md:pb-24 relative" aria-labelledby="hero-title">
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[1100px] h-[800px] blur-[140px] opacity-[0.22]" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(45% 50% at 30% 40%, #0F382C 0%, transparent 70%), radial-gradient(40% 45% at 70% 50%, #0A192F 0%, transparent 70%), radial-gradient(25% 30% at 50% 20%, rgba(212,175,55,0.22) 0%, transparent 70%)',
          }}
        ></div>
      </div>

      <div className="relative grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-8 items-center">
        <div>
          <Reveal className="inline-flex items-center gap-2 border border-white/[0.08] bg-white/[0.03] rounded-full px-3.5 py-1.5 mb-8 backdrop-blur">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true"></span>
            <span className="text-[11px] font-mono tracking-widest uppercase text-white/70">{profile.heroBadge}</span>
          </Reveal>

          <Reveal as="h1" delay={1} id="hero-title" className="font-sora font-extrabold leading-[0.9] tracking-[-0.04em] text-[40px] sm:text-[52px] md:text-[62px]">
            <span className="block text-white">{profile.first}</span>
            <span className="block gold-gradient">{profile.last}</span>
          </Reveal>

          <Reveal delay={2} className="mt-6 text-[18px] md:text-[20px] leading-[1.5] text-white/85 max-w-[560px] font-light">
            {profile.heroLead}
            <span className="text-white font-semibold">{profile.heroLeadStrong}</span>
            {profile.heroLeadEnd}
          </Reveal>

          <Reveal delay={2} className="mt-4 text-[14px] leading-[1.7] text-white/55 max-w-[520px]">
            {profile.heroSupport}
          </Reveal>

          <Reveal delay={3} className="mt-8 flex flex-wrap gap-3">
            <Magnetic href="#portfolio" className="h-[48px] px-7 rounded-full gold-btn font-bold text-[14px] inline-flex items-center gap-2" aria-label="View portfolio">
              View Portfolio
              <span className="w-6 h-6 rounded-full bg-black/15 grid place-items-center" aria-hidden="true">↗</span>
            </Magnetic>
            <Magnetic
              href={links.telegram}
              target="_blank"
              rel="noopener"
              className="h-[48px] px-7 rounded-full border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] text-white font-medium text-[14px] inline-flex items-center gap-2 transition"
              aria-label="Let's connect on Telegram"
            >
              <Icon name="telegram" width={16} height={16} />
              Let's Connect — Telegram
            </Magnetic>
          </Reveal>

          <Reveal delay={3} className="mt-10 flex flex-wrap items-center gap-6 border-t border-white/[0.06] pt-8">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2" aria-hidden="true">
                {trust.avatars.map((a) => (
                  <div key={a.char} className={`w-8 h-8 rounded-full border-2 border-[#0B0C10] grid place-items-center text-[10px] font-bold ${a.className}`}>
                    {a.char}
                  </div>
                ))}
              </div>
              <div className="text-[12px] font-mono leading-tight">
                <div className="text-white font-semibold">{trust.title}</div>
                <div className="text-white/50">{trust.sub}</div>
              </div>
            </div>
            <div className="h-8 w-[1px] bg-white/10 hidden sm:block" aria-hidden="true"></div>
            <div className="flex gap-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-sora font-bold text-[20px] leading-none">{s.value}</div>
                  <div className="text-[10px] font-mono uppercase tracking-wide text-white/50 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right visual card */}
        <Reveal delay={2} className="lg:pl-8">
          <HeroVisual systems={systems} links={links} />
          <div className="mt-4 flex items-center gap-2 text-[11px] font-mono text-white/40 lg:hidden">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Response time ~2h • Tashkent GMT+5
          </div>
        </Reveal>
      </div>
    </section>
  );
}
