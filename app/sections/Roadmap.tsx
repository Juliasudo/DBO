import { motion } from 'framer-motion'
import data from '../lib/data.json'

const Roadmap = () => {
  return (
    <section className="py-20 px-4 bg-light-card dark:bg-dark-card">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Roadmap</h2>
        <div className="relative max-w-2xl mx-auto">
          {/* Progress Indicator Line */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gray-300 dark:bg-gray-600" />
          
          {data.roadmap.map((item, index) => (
            <motion.div
              key={index}
              className="relative mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-brand-blue rounded-full mt-1.5 border-4 border-light-bg dark:border-dark-bg" />
              <div className={`w-1/2 ${index % 2 === 0 ? 'ml-auto pl-8' : 'pr-8'}`}>
                <div className="p-4 rounded-lg bg-light-bg dark:bg-dark-bg shadow-md">
                  <p className="text-sm font-semibold text-brand-blue">{item.quarter}</p>
                  <h3 className="text-lg font-bold mt-1">{item.title}</h3>
                  <p className="text-sm mt-2">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Roadmap
