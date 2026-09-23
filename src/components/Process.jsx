import Reveal from './Reveal';

/* "02.5 — How I Work" three-step strip.
   Props: eyebrow, steps [{no, title, desc, highlight}] */
export default function Process({ eyebrow, steps }) {
  return (
    <section id="process" className="py-16 md:py-20 border-t border-white/[0.06]" aria-labelledby="process-title">
      <Reveal className="flex items-center gap-3 mb-10">
        <div className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#D4AF37]">{eyebrow}</div>
        <div className="h-[1px] flex-1 bg-white/[0.06]"></div>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-5">
        {steps.map((step, i) => (
          <Reveal
            key={step.no}
            delay={i}
            className={`rounded-[20px] border p-6 ${
              step.highlight ? 'border-[#D4AF37]/20 bg-[#D4AF37]/[0.06]' : 'border-white/[0.06] bg-white/[0.02]'
            }`}
          >
            <div className="text-[11px] font-mono text-[#D4AF37] mb-3">{step.no}</div>
            <h3 id={i === 0 ? 'process-title' : undefined} className="font-sora font-semibold text-[16px]">
              {step.title}
            </h3>
            <p className={`text-[13px] mt-2 leading-[1.6] ${step.highlight ? 'text-white/60' : 'text-white/50'}`}>{step.desc}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
