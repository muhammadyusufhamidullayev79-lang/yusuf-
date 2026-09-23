import { useEffect, useRef } from 'react';

/* Project detail overlay.
   Props: project {title, desc, metric, visual{imageFull}}, meta [{label,value}],
          links {}, onClose() */
export default function ProjectModal({ project, meta, links, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    const previous = document.activeElement;
    closeRef.current?.focus();
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
      if (previous && previous.focus) previous.focus();
    };
  }, [onClose]);

  const hasImage = Boolean(project.visual && project.visual.imageFull);

  return (
    <div className="fixed inset-0 z-[100]" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-[12px]" onClick={onClose}></div>
      <div className="relative min-h-screen w-full flex items-start justify-center p-4 md:p-8 overflow-y-auto">
        <div className="relative w-full max-w-[900px] my-8 rounded-[24px] border border-white/10 bg-[#121417] overflow-hidden shadow-[0_32px_80px_-16px_rgba(0,0,0,0.9)]">
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white grid place-items-center hover:bg-white hover:text-black transition"
            aria-label="Close modal"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {hasImage && (
            <div className="aspect-[16/9] overflow-hidden bg-[#1a1a1a]">
              <img src={project.visual.imageFull} alt={project.title} width="1200" height="675" loading="lazy" className="w-full h-full object-cover" />
            </div>
          )}

          <div className="p-8 md:p-10">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/20 text-[#D4AF37]">
                {project.metric || 'Case study'}
              </span>
            </div>
            <h3 id="modalTitle" className="font-sora font-bold text-[28px] md:text-[32px] leading-[0.95] tracking-tight">
              {project.title}
            </h3>
            <p className="mt-4 text-[15px] leading-[1.7] text-white/60 max-w-[600px]">{project.desc}</p>

            <div className="mt-8 grid md:grid-cols-3 gap-4">
              {meta.map((m) => (
                <div key={m.label} className="rounded-[14px] border border-white/[0.06] bg-white/[0.03] p-4">
                  <div className="text-[11px] font-mono uppercase text-white/40">{m.label}</div>
                  <div className="mt-1 font-medium text-[14px]">{m.value}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-3">
              <a
                href={links.telegram}
                target="_blank"
                rel="noopener"
                className="h-11 px-6 rounded-full bg-[#D4AF37] text-black font-bold text-[14px] inline-flex items-center gap-2 hover:brightness-110 transition"
              >
                Start similar project →
              </a>
              <button type="button" onClick={onClose} className="h-11 px-6 rounded-full border border-white/10 text-[14px] hover:bg-white/5 transition">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
