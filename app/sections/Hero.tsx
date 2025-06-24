import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center text-center hero-gradient text-white p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4">Zeus</h1>
        <p className="text-xl md:text-2xl font-light mb-8">Web3 Deployment Assistant</p>
        <motion.button
          className="bg-white text-brand-blue font-bold py-3 px-8 rounded-full shadow-lg hover:bg-opacity-90 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </motion.div>
    </section>
  )
}

export default Hero
