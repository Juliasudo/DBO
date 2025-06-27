import type { Config } from 'tailwindcss'
const { fontFamily } = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    './app/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './app/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
        display: ['var(--font-space-grotesk)', ...fontFamily.sans],
      },
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
        'gradient-dark': 'linear-gradient(135deg, #2a0a5e 0%, #1e3a8a 50%, #0d1117 100%)',
        'gradient-light': 'linear-gradient(135deg, #866ab9 0%, #6b89c8 100%)',
      },
      animation: {
        'gradient-bg': 'gradient-bg 15s ease infinite',
        'fade-in': 'fade-in 0.5s ease-in-out',
      },
      keyframes: {
        'gradient-bg': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
