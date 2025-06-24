import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // <-- THIS LINE IS CRITICAL
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'brand-purple': '#2a0a5e',
        'brand-blue': '#1e3a8a',
        'dark-bg': '#0d1117',
        'light-bg': '#f0f2f5',
        'dark-card': '#161b22',
        'light-card': '#ffffff',
        'dark-text': '#c9d1d9',
        'light-text': '#24292e',
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #2a0a5e 0%, #1e3a8a 100%)',
        'gradient-light': 'linear-gradient(135deg, #866ab9 0%, #6b89c8 100%)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
}
export default config
