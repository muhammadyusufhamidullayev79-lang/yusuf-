import Reveal from './Reveal';

/* Shared section heading: gold eyebrow + big title (with muted second line)
   and an optional side note / badge.
   titleId — id for the <h2>, referenced by the section's aria-labelledby. */
export default function SectionHeading({ eyebrow, title, titleMuted, side, sideAs = 'p', titleId }) {
  const SideTag = sideAs;
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
      <Reveal>
        <div className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#D4AF37] mb-4">{eyebrow}</div>
        <h2 id={titleId} className="font-sora font-bold text-[32px] md:text-[48px] leading-[0.95] tracking-[-0.03em]">
          {title} <br />
          <span className="text-white/40">{titleMuted}</span>
        </h2>
      </Reveal>
      {side && (
        <SideTag
          className={`reveal reveal-d1${
            SideTag === 'p' ? ' max-w-[380px] text-[14px] leading-[1.6] text-white/50' : ' text-[12px] font-mono text-white/50 border border-white/10 rounded-full px-4 py-2'
          }`}
        >
          {side}
        </SideTag>
      )}
    </div>
  );
}
