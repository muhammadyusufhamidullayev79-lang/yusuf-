/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        bg: '#0B0C10',
        emeraldDeep: '#0F382C',
        navy: '#0A192F',
        gold: '#D4AF37',
        goldLight: '#F5D76E',
        muted: '#9BA3AF',
      },
    },
  },
  plugins: [],
};
