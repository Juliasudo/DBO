import { Card } from '../components/ui/card'
import data from '../lib/data.json'

const Features = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Feature Set</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {data.features.map((feature, index) => (
            <Card
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
