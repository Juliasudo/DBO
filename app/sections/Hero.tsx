'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center text-center hero-gradient text-white p-4 overflow-hidden">
      <motion.div
        className="z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <h1 className="text-6xl md:text-8xl font-bold font-display mb-4 tracking-tighter">Zeus</h1>
        <p className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto text-gray-200">
          The ultimate AI-powered assistant for seamless Web3 application deployment.
        </p>
        
        <motion.button
          className="bg-white text-brand-blue font-bold py-3 px-8 rounded-full shadow-lg transition-all"
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255,255,255,0.4)" }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
