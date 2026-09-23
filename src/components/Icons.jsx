/* Inline SVG icon set — referenced by key from the data (props). */

const paths = {
  code: <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />,
  video: (
    <>
      <path d="M23 7l-7 5 7 5V7z" />
      <rect x="1" y="5" width="15" height="14" rx="2" />
    </>
  ),
  pen: <path d="M12 20h9M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />,
  bulb: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01" />
    </>
  ),
  telegram: <path d="M21 5L3 11L9 13L11 21L21 5Z" />,
  telegramBold: <path d="M21 5L3 11L9 13L11 21L21 5Z" strokeWidth="1.6" strokeLinejoin="round" />,
  instagram: (
    <>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
      <path d="M17.5 6.5h.01" />
    </>
  ),
  mail: (
    <>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <path d="M22 6l-10 7L2 6" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 18L18 6M6 6l12 12" />,
};

export default function Icon({ name, width = 18, height = 18, strokeWidth = 1.5, className = '' }) {
  const content = paths[name];
  if (!content) return null;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      className={className}
      aria-hidden="true"
    >
      {content}
    </svg>
  );
}
