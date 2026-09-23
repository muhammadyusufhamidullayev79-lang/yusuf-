/* One portfolio card.
   Props: project {id, title, subtitle, desc, metric, visual}, onSelect(project)

   visual.type:
     'photo'      — {image, imageAlt, badge, showArrow?}
     'typography' — {badge, foot}
     'code'       — {badge, code, foot}
*/
const badgeTones = {
  gold: 'bg-[#D4AF37] text-black',
  white: 'bg-white text-black',
  emerald: 'bg-emerald-500 text-black',
  emeraldDark: 'bg-[#0F382C] border border-emerald-500/20 text-emerald-200',
};

const footTones = {
  default: 'text-white/70',
  emerald: 'text-emerald-300',
  emeraldSoft: 'text-emerald-200',
  gold: 'text-[#D4AF37]',
};

export default function PortfolioCard({ project, onSelect }) {
  const { title, subtitle, metric, visual } = project;
  const badgeCls = `text-[10px] font-mono uppercase px-2.5 py-1 rounded-full font-bold ${badgeTones[visual.badge.tone] || badgeTones.gold}`;

  const handleKey = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelect(project);
    }
  };

  return (
    <article
      className="group relative rounded-[20px] border border-white/[0.08] bg-[#121417] overflow-hidden cursor-pointer focus-within:border-[#D4AF37]/30"
      tabIndex={0}
      role="button"
      aria-label={`View ${title} project`}
      onClick={() => onSelect(project)}
      onKeyDown={handleKey}
    >
      <div className="aspect-[4/3] overflow-hidden relative bg-[#1a1a1a]">
        {visual.type === 'photo' && (
          <>
            <img
              src={visual.image}
              width="800"
              height="600"
              loading="lazy"
              decoding="async"
              alt={visual.imageAlt}
              className="w-full h-full object-cover group-hover:scale-[1.05] transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" aria-hidden="true"></div>
            {visual.showArrow && (
              <div
                className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white text-black grid place-items-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition"
                aria-hidden="true"
              >
                ↗
              </div>
            )}
          </>
        )}

        {visual.type === 'typography' && (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-[#0A192F] to-[#0F382C]" aria-hidden="true"></div>
            <div className="absolute inset-0 grid place-items-center" aria-hidden="true">
              <div className="text-[64px] font-sora font-extrabold text-white/10">Aa</div>
            </div>
            <div className="absolute bottom-3 left-3 right-3 rounded-[10px] bg-black/60 backdrop-blur-md border border-white/10 p-2.5 flex justify-between items-center">
              {visual.foot.map((f) => (
                <span key={f.t} className={`text-[11px] font-mono ${footTones[f.tone] || footTones.default}`}>
                  {f.t}
                </span>
              ))}
            </div>
          </>
        )}

        {visual.type === 'code' && (
          <>
            <div className="p-4 font-mono text-[11px] leading-relaxed text-white/40" aria-hidden="true">
              {visual.code.map((line, i) => (
                <div key={i} className={line.some((p) => p.indent) ? 'pl-4' : ''}>
                  {line.map((part, j) => (
                    <span key={j} className={part.cls}>
                      {part.t}
                    </span>
                  ))}
                </div>
              ))}
            </div>
            <div className="absolute bottom-3 left-3 right-3 rounded-[10px] bg-[#0F382C]/80 backdrop-blur border border-emerald-500/20 p-2.5 flex justify-between">
              {visual.foot.map((f) => (
                <span key={f.t} className={`text-[11px] font-mono ${footTones[f.tone] || footTones.default}`}>
                  {f.t}
                </span>
              ))}
            </div>
          </>
        )}

        <div className={`absolute top-3 left-3 ${badgeCls}`}>{visual.badge.label}</div>
      </div>

      <div className="p-5">
        <h3 className="font-sora font-semibold text-[15px]">{title}</h3>
        <p className="text-[12px] text-white/50 mt-1">{subtitle}</p>
      </div>
    </article>
  );
}
