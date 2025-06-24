'use client'

import { AnimatePresence, motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import Hero from './sections/Hero'
import Features from './sections/Features'
import Roadmap from './sections/Roadmap'

// Dynamically import the WebGL component with SSR turned off
const WhatWeAreBuilding = dynamic(
  () => import('./sections/WhatWeAreBuilding'),
  { ssr: false }
)

export default function Home() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <Features />
        <Roadmap />
        <WhatWeAreBuilding />
      </motion.div>
    </AnimatePresence>
  )
}
