'use client';

import { motion } from 'framer-motion'
import data from '../lib/data.json'
import { MessageSquare, Code, Terminal } from 'lucide-react'

const icons = [
  <MessageSquare size={32} className="mb-4 text-brand-blue" />,
  <Code size={32} className="mb-4 text-brand-blue" />,
  <Terminal size={32} className="mb-4 text-brand-blue" />
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

const Features = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          Feature Set
        </motion.h2>
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {data.features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-light-card dark:bg-dark-card p-8 rounded-xl shadow-lg text-center border border-transparent hover:border-blue-500/30 transition-colors"
              variants={cardVariants}
              whileHover={{ y: -5 }}
            >
              {icons[index]}
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-light-text dark:text-dark-text">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Features
