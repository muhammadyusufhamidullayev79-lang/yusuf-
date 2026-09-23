import Icon from './Icons';
import Magnetic from './Magnetic';
import Reveal from './Reveal';

/* Contact CTA section.
   Props: data {badge, titleA, titleB, sub, facts[]}, links {} */
export default function Contact({ data, links }) {
  return (
    <section id="contact" className="py-20 md:py-28 border-t border-white/[0.06] relative overflow-hidden" aria-labelledby="contact-title">
      <div
        className="pointer-events-none absolute -bottom-32 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] blur-[120px] opacity-[0.18]"
        style={{ background: 'radial-gradient(60% 60% at 50% 50%, #D4AF37 0%, #0F382C 50%, transparent 70%)' }}
        aria-hidden="true"
      ></div>

      <div className="relative">
        <Reveal className="max-w-[800px]">
          <div className="inline-flex items-center gap-2 border border-[#D4AF37]/20 bg-[#D4AF37]/10 rounded-full px-3 py-1 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" aria-hidden="true"></span>
            <span className="text-[11px] font-mono tracking-widest uppercase text-[#D4AF37]">{data.badge}</span>
          </div>

          <h2 id="contact-title" className="font-sora font-extrabold text-[44px] md:text-[68px] leading-[0.9] tracking-[-0.04em]">
            {data.titleA}
            <br />
            <span className="gold-gradient">{data.titleB}</span>
          </h2>

          <p className="mt-6 text-[16px] leading-[1.6] text-white/60 max-w-[520px]">{data.sub}</p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Magnetic
              href={links.telegram}
              target="_blank"
              rel="noopener"
              className="h-[52px] px-7 rounded-full gold-btn font-bold text-[14px] inline-flex items-center gap-2 transition-all"
              aria-label="Telegram"
            >
              <Icon name="telegramBold" width={18} height={18} />
              Telegram — {links.telegramHandle}
            </Magnetic>
            <Magnetic
              href={links.instagram}
              target="_blank"
              rel="noopener"
              className="h-[52px] px-7 rounded-full border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] text-white font-medium text-[14px] inline-flex items-center gap-2 transition"
              aria-label={`Instagram - ${links.instagramHandle}`}
            >
              <Icon name="instagram" width={18} height={18} />
              Instagram — {links.instagramHandle}
            </Magnetic>
            <Magnetic
              href={links.mailto}
              className="h-[52px] px-7 rounded-full border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] text-white font-medium text-[14px] inline-flex items-center gap-2 transition"
              aria-label="Email"
            >
              <Icon name="mail" width={18} height={18} />
              {links.email}
            </Magnetic>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-[560px] border-t border-white/[0.06] pt-8">
            {data.facts.map((f) => (
              <div key={f.label}>
                <div className="text-[11px] font-mono uppercase tracking-widest text-white/40 mb-2">{f.label}</div>
                <div className="text-[14px] font-medium">{f.value}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
