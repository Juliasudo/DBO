'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center text-center bg-dark-bg text-white p-4 overflow-hidden">
      {/* Aurora Background Effect */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute bottom-0 left-[-20%] w-[80%] h-[80%] bg-brand-purple rounded-full filter blur-3xl opacity-20 dark:opacity-30 animate-[aurora-1_12s_ease-in-out_infinite]"></div>
        <div className="absolute top-0 right-[-20%] w-[80%] h-[80%] bg-brand-blue rounded-full filter blur-3xl opacity-20 dark:opacity-30 animate-[aurora-2_15s_ease-in-out_infinite]"></div>
      </div>
      
      <motion.div
        className="z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <h1 className="text-6xl md:text-8xl font-bold font-display mb-4 tracking-tighter">Zeus</h1>
        <p className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto text-gray-300">
          The ultimate AI-powered assistant for seamless Web3 application deployment.
        </p>
      </motion.div>

      {/* Animated Scroll Down Arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <Link href="#features" passHref>
          <motion.div
            className="cursor-pointer"
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ChevronDown className="w-8 h-8 text-gray-500 hover:text-white transition-colors" />
          </motion.div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
