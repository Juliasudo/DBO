'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Hero from './sections/Hero'
import ArchitectureSection from './sections/ArchitectureSection' // <-- Should be importing this
import Roadmap from './sections/Roadmap'
import WhatWeAreBuilding from './sections/WhatWeAreBuilding'

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
        <ArchitectureSection /> {/* <-- Should be using this component */}
        <Roadmap />
        <WhatWeAreBuilding />
      </motion.div>
    </AnimatePresence>
  )
}
