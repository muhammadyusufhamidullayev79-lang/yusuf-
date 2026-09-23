/* Right side of the hero — the "live workspace" mock card.
   Props: systems [] (tag/title/progress or ctr or trend + tone classes), links {} */
export default function HeroVisual({ systems, links }) {
  return (
    <div className="relative rounded-[24px] border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-[1px] overflow-hidden">
      <div className="rounded-[23px] bg-[#101217] overflow-hidden">
        {/* window bar */}
        <div className="h-12 border-b border-white/[0.06] flex items-center justify-between px-5 bg-[#0F1216]">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="w-3 h-3 rounded-full bg-red-500/70"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500/70"></span>
            <span className="w-3 h-3 rounded-full bg-green-500/70"></span>
          </div>
          <div className="text-[11px] font-mono text-white/30">yusuf — live workspace</div>
          <div className="w-6 h-6 rounded-full bg-white/5 grid place-items-center text-[10px]" aria-hidden="true">◧</div>
        </div>

        <div className="p-6 space-y-5">
          <div className="flex gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8962F]"></div>
            <div className="flex-1 space-y-2">
              <div className="h-3 w-32 rounded-full bg-white/10"></div>
              <div className="h-2 w-48 rounded-full bg-white/[0.06]"></div>
            </div>
            <div className="text-[10px] font-mono px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 h-fit">LIVE</div>
          </div>

          <div className="rounded-[16px] bg-[#0B0C10] border border-white/[0.06] p-4 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-[11px] font-mono uppercase tracking-widest text-white/40">Active systems</span>
              <span className="text-[11px] font-mono text-[#D4AF37]">{systems.length} live</span>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              {systems.map((s) => (
                <div key={s.tag} className={`rounded-[12px] border p-3 ${s.box}`}>
                  <div className={`text-[11px] font-mono ${s.tagCls}`}>{s.tag}</div>
                  <div className="font-sora font-semibold text-[13px] mt-1">{s.title}</div>
                  {typeof s.progress === 'number' && (
                    <div className="mt-2 h-1 rounded-full bg-white/10 overflow-hidden">
                      <div className={`h-full ${s.barCls}`} style={{ width: `${s.progress}%` }}></div>
                    </div>
                  )}
                  {s.ctr && (
                    <div className="mt-2 flex gap-1 items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      <span className="text-[10px] font-mono text-white/50">{s.ctr}</span>
                    </div>
                  )}
                  {s.trend && <div className="mt-2 text-[10px] font-mono text-emerald-300">{s.trend}</div>}
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-2">
            <a href={links.telegram} target="_blank" rel="noopener" className="flex-1 h-10 rounded-full bg-white text-black font-semibold text-[13px] grid place-items-center">
              Telegram
            </a>
            <a href={links.mailto} className="flex-1 h-10 rounded-full border border-white/10 bg-white/[0.04] font-medium text-[13px] grid place-items-center">
              Email
            </a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute -bottom-20 -right-20 w-[300px] h-[300px] bg-[#D4AF37]/12 blur-[60px] rounded-full" aria-hidden="true"></div>
    </div>
  );
}
