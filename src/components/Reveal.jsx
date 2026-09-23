import { useEffect, useRef, useState } from 'react';

/* Wraps content and fades/slides it in when scrolled into view.
   Props:
     as       — tag to render (default 'div')
     delay    — 0..3, maps to the .reveal-dN stagger classes
     className— extra classes
     ...rest  — any other attribute (id, aria-*, ...) is passed through
*/
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${inView ? 'in' : ''}${delay ? ` reveal-d${delay}` : ''} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}
