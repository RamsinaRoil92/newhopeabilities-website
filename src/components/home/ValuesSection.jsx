import { values } from '../../content/services'
import { Card } from '../ui/Card'
import { IconCircle } from '../ui/IconCircle'
import { Section } from '../ui/Section'

export function ValuesSection() {
  return (
    <Section background="white">
      <div className="mx-auto mb-stack-lg max-w-2xl text-center">
        <h2 className="text-h2 text-primary-container">Our Core Values</h2>
        <p className="contrast-muted mt-stack-sm text-body-md text-on-surface-variant">
          These principles guide every conversation, support plan, and visit.
        </p>
      </div>

      <div className="grid gap-gutter md:grid-cols-2 lg:grid-cols-4">
        {values.map((value) => (
          <Card key={value.title} className="p-stack-lg transition-shadow hover:shadow-ambient">
            <IconCircle icon={value.icon} />
            <h3 className="mt-stack-md text-h3 text-primary-container">{value.title}</h3>
            <p className="contrast-muted mt-stack-sm text-body-md text-on-surface-variant">{value.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  )
}