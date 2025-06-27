'use client';

import { motion } from 'framer-motion';
import data from '../lib/data.json';
import { BrainCircuit, ToyBrick, TerminalSquare, Laptop, Shield, Lock } from 'lucide-react';
import React from 'react';

// Map icon names from data.json to actual icon components
const iconMap: { [key: string]: React.ReactNode } = {
  BrainCircuit: <BrainCircuit className="w-12 h-12 text-brand-blue mb-4" />,
  ToyBrick: <ToyBrick className="w-12 h-12 text-brand-blue mb-4" />,
  TerminalSquare: <TerminalSquare className="w-12 h-12 text-brand-blue mb-4" />,
  Laptop: <Laptop className="w-12 h-12 text-brand-blue mb-4" />,
  Shield: <Shield className="w-12 h-12 text-brand-blue mb-4" />,
  Lock: <Lock className="w-12 h-12 text-brand-blue mb-4" />,
};

const ArchitectureSection = () => {
  return (
    <section id="architecture" className="py-20 px-4 bg-light-bg dark:bg-dark-bg">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold font-display">Core Architecture</h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 mt-2 max-w-2xl mx-auto">
            How Zeus converts your intent into secure, deployable infrastructure.
          </p>
        </motion.div>

        <div className="space-y-16">
          {data.architecture.map((item, index) => (
            <motion.div
              key={item.title}
              className="flex flex-col md:flex-row items-center gap-8 md:gap-16"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:order-last' : ''}`}>
                <div className="bg-light-card dark:bg-dark-card p-8 rounded-xl shadow-lg">
                  {iconMap[item.icon]}
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-light-text dark:text-dark-text">{item.description}</p>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                {/* Placeholder for future images or graphics */}
                <div className="w-full h-64 bg-gray-200 dark:bg-dark-card rounded-xl flex items-center justify-center">
                  <span className="text-gray-400">Visual placeholder</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
