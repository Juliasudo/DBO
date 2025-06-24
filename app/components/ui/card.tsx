import { motion } from 'framer-motion'

interface CardProps {
  icon: string
  title: string
  description: string
  className?: string
}

export const Card: React.FC<CardProps> = ({ icon, title, description, className }) => {
  return (
    <motion.div
      className={`bg-light-card dark:bg-dark-card p-6 rounded-lg shadow-lg ${className}`}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-light-text dark:text-dark-text">{description}</p>
    </motion.div>
  )
}
