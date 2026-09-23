/* One experience card (company + bullets + metrics).
   Props: job {company, initial, meta, badge, gradient, iconBox, badgeCls, bullets, metrics} */
const bulletTone = {
  bold: 'text-white font-semibold',
  white: 'text-white',
};

const metricTone = {
  default: { box: 'bg-white/[0.03] border-white/[0.06]', label: 'text-white/40', value: 'text-white' },
  gold: { box: 'bg-[#D4AF37]/10 border-[#D4AF37]/20', label: 'text-[#D4AF37]', value: 'text-[#D4AF37]' },
  emerald: { box: 'bg-[#0F382C]/30 border-emerald-500/20', label: 'text-emerald-300', value: 'text-emerald-200' },
};

export default function ExperienceCard({ job }) {
  return (
    <div className="group relative rounded-[24px] border border-white/[0.08] bg-[#101217] overflow-hidden">
      <div className={`h-1 w-full bg-gradient-to-r ${job.gradient}`} aria-hidden="true"></div>
      <div className="p-7 md:p-8">
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-[12px] grid place-items-center font-sora font-extrabold ${job.iconBox}`}>{job.initial}</div>
            <div>
              <div className="font-sora font-bold text-[18px] leading-tight">{job.company}</div>
              <div className="text-[12px] font-mono uppercase tracking-wide text-white/50 mt-1">{job.meta}</div>
            </div>
          </div>
          <span className={`text-[11px] font-mono px-2.5 py-1 rounded-full border ${job.badgeCls}`}>{job.badge}</span>
        </div>

        <div className="space-y-4">
          {job.bullets.map((segments, i) => (
            <div key={i} className="flex gap-3 text-[14px] leading-[1.6] text-white/70">
              <span className="text-[#D4AF37] mt-1" aria-hidden="true">
                •
              </span>
              <span>
                {segments.map((s, j) =>
                  s.tone ? (
                    <span key={j} className={bulletTone[s.tone]}>
                      {s.t}
                    </span>
                  ) : (
                    <span key={j}>{s.t}</span>
                  )
                )}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-3 gap-3">
          {job.metrics.map((m) => {
            const t = metricTone[m.tone] || metricTone.default;
            return (
              <div key={m.label} className={`rounded-[12px] border p-3 ${t.box}`}>
                <div className={`text-[10px] font-mono uppercase ${t.label}`}>{m.label}</div>
                <div className={`font-semibold text-[13px] mt-1 ${t.value}`}>{m.value}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
