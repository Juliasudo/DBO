'use client'

import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative w-12 h-6 rounded-full p-1 bg-gray-300 dark:bg-gray-700 flex items-center"
    >
      <motion.div
        className="w-5 h-5 bg-white rounded-full shadow-md"
        layout
        transition={{ type: 'spring', stiffness: 700, damping: 30 }}
        style={{ marginLeft: theme === 'dark' ? 'auto' : '0' }}
      />
      <span className="absolute left-1.5 text-xs">☀️</span>
      <span className="absolute right-1.5 text-xs">🌙</span>
    </button>
  )
}
