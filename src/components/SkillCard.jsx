import Icon from './Icons';

/* One expertise card.
   Props: skill {icon, title, desc, tags[], stat, tone} */
const tones = {
  emerald: {
    card: 'bg-gradient-to-br from-[#0F382C]/30 to-[#0B0C10]',
    glow: 'bg-emerald-500/10 group-hover:bg-emerald-500/15 transition',
    iconBox: 'bg-[#0F382C] border-emerald-500/20 text-emerald-200',
  },
  blue: {
    card: 'bg-gradient-to-br from-[#0A192F]/60 to-[#0B0C10]',
    glow: 'bg-blue-500/10 group-hover:bg-blue-500/15 transition',
    iconBox: 'bg-[#0A192F] border-blue-500/20 text-blue-200',
  },
  gold: {
    card: 'bg-gradient-to-br from-[#D4AF37]/[0.08] to-[#0B0C10]',
    glow: 'bg-[#D4AF37]/10 group-hover:bg-[#D4AF37]/15 transition',
    iconBox: 'bg-[#D4AF37]/15 border-[#D4AF37]/20 text-[#D4AF37]',
  },
  neutral: {
    card: 'bg-[#121417]',
    glow: 'bg-white/[0.04]',
    iconBox: 'bg-white/[0.06] border-white/10 text-white/70',
  },
};

export default function SkillCard({ skill }) {
  const t = tones[skill.tone] || tones.neutral;
  return (
    <div className={`card-hover group relative rounded-[24px] border border-white/[0.08] ${t.card} p-7 md:p-8 overflow-hidden`}>
      <div className={`absolute top-0 right-0 w-[200px] h-[200px] blur-[40px] rounded-full ${t.glow}`} aria-hidden="true"></div>
      <div className="relative">
        <div className={`w-12 h-12 rounded-[12px] border grid place-items-center mb-6 ${t.iconBox}`} aria-hidden="true">
          <Icon name={skill.icon} width={22} height={22} />
        </div>
        <h3 className="font-sora font-bold text-[20px] tracking-tight">{skill.title}</h3>
        <p className="mt-3 text-[14px] leading-[1.6] text-white/60">{skill.desc}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {skill.tags.map((tag) => (
            <span key={tag} className="text-[11px] px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/[0.06]">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-6 flex items-center gap-2 text-[12px] font-mono text-[#D4AF37]">
          <span>{skill.stat}</span>
          <span className="w-6 h-[1px] bg-[#D4AF37]/30" aria-hidden="true"></span>
        </div>
      </div>
    </div>
  );
}
