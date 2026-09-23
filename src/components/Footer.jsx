/* Footer strip (bottom of the contact area).
   Props: data {copyright, note}, links {} */
export default function Footer({ data, links }) {
  return (
    <div className="pt-8 border-t border-white/[0.06] mt-20 flex flex-col md:flex-row justify-between gap-4 text-[12px] font-mono text-white/40">
      <div className="flex flex-wrap gap-6">
        <span>{data.copyright}</span>
        <span className="hidden md:inline" aria-hidden="true">
          •
        </span>
        <span>{data.note}</span>
      </div>
      <div className="flex gap-6">
        <a href={links.telegram} target="_blank" rel="noopener" className="hover:text-white transition">
          Telegram
        </a>
        <a href={links.instagram} target="_blank" rel="noopener" className="hover:text-white transition">
          Instagram
        </a>
        <a href={links.mailto} className="hover:text-white transition">
          Email
        </a>
        <a href={links.github} target="_blank" rel="noopener" className="hover:text-white transition">
          GitHub
        </a>
      </div>
    </div>
  );
}
