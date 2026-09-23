import { useEffect, useRef } from 'react';

/* Thin gold gradient bar fixed at the top, width = page scroll %. */
export default function ScrollProgress() {
  const ref = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const s = max > 0 ? (window.scrollY / max) * 100 : 0;
      if (ref.current) ref.current.style.width = `${s}%`;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return <div ref={ref} className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-[#D4AF37] to-[#0F382C] z-[100] w-0" />;
}
