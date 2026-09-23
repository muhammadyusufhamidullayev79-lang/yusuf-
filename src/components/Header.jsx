import { useState } from 'react';
import Icon from './Icons';
import Magnetic from './Magnetic';

/* Fixed top navigation.
   Props: profile {full, initials, roleTagline, availability}, navLinks [], links {} */
export default function Header({ profile, navLinks, links }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 border-b border-white/[0.06] backdrop-blur-[20px] bg-[#0B0C10]/80" role="banner">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 h-[72px] flex items-center justify-between">
        <a href="#" className="flex items-center gap-3" aria-label="Home - Muhammad Yusuf Hamidullayev">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8962F] text-black grid place-items-center font-sora font-extrabold text-[13px]">
            {profile.initials}
          </div>
          <div className="hidden sm:block leading-none">
            <div className="font-sora font-bold text-[13px] tracking-tight">{profile.full}</div>
            <div className="font-mono text-[10px] tracking-widest uppercase text-white/50 -mt-0.5">{profile.roleTagline}</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-[12px] font-medium tracking-widest uppercase text-white/60 hover:text-white transition">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase border border-[#D4AF37]/20 bg-[#D4AF37]/10 rounded-full px-3 py-1.5 text-[#D4AF37]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" aria-hidden="true"></span> {profile.availability}
          </div>
          <Magnetic
            href={links.telegram}
            target="_blank"
            rel="noopener"
            className="hidden md:inline-flex h-9 px-5 rounded-full bg-white text-black text-[13px] font-semibold items-center hover:bg-zinc-100 transition"
            aria-label="Connect on Telegram"
          >
            Let's Connect
          </Magnetic>
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden w-9 h-9 rounded-full border border-white/10 grid place-items-center"
            aria-expanded={menuOpen}
            aria-controls="mobileMenu"
            aria-label="Toggle menu"
          >
            <Icon name="menu" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div id="mobileMenu" className="md:hidden border-t border-white/5 bg-[#0B0C10]/95 backdrop-blur-xl" role="dialog" aria-label="Mobile menu">
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks
              .filter((l) => !l.hideInMobile)
              .map((l) => (
                <a key={l.href} href={l.href} onClick={closeMenu} className="font-sora font-semibold text-[18px]">
                  {l.label}
                </a>
              ))}
            <div className="grid grid-cols-3 gap-2 mt-2">
              <a
                href={links.telegram}
                target="_blank"
                rel="noopener"
                onClick={closeMenu}
                className="h-11 rounded-full bg-[#D4AF37] text-black grid place-items-center font-semibold text-[14px]"
              >
                Telegram
              </a>
              <a
                href={links.instagram}
                target="_blank"
                rel="noopener"
                onClick={closeMenu}
                className="h-11 rounded-full bg-white text-black grid place-items-center font-semibold text-[14px]"
              >
                Instagram
              </a>
              <a href={links.mailto} onClick={closeMenu} className="h-11 rounded-full border border-white/10 grid place-items-center font-semibold text-[14px]">
                Email
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
