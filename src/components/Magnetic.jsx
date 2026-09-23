import { useEffect, useRef } from 'react';

/* Magnetic hover effect — the element drifts toward the cursor.
   Props: as (default 'a'), href/target/rel, className, children. */
export default function Magnetic({ as: Tag = 'a', className = '', children, ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const move = (e) => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      el.style.transform = `translate(${x * 0.15}px, ${y * 0.35}px)`;
    };
    const leave = () => {
      el.style.transform = 'translate(0,0)';
    };
    el.addEventListener('mousemove', move);
    el.addEventListener('mouseleave', leave);
    return () => {
      el.removeEventListener('mousemove', move);
      el.removeEventListener('mouseleave', leave);
    };
  }, []);

  return (
    <Tag ref={ref} className={`magnetic ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}
