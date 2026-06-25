import { values } from '../../content/services'
import { Card } from '../ui/Card'
import { IconCircle } from '../ui/IconCircle'
import { Section } from '../ui/Section'

export function PhilosophyGrid() {
  const philosophyValues = values.slice(0, 3)

  return (
    <Section background="soft">
      <div className="mx-auto mb-stack-lg max-w-2xl text-center">
        <h2 className="text-h1 text-primary-container">Why NewHope?</h2>
        <p className="contrast-muted mt-stack-sm text-body-lg text-on-surface-variant">
          We keep support practical, respectful, and centred on what helps you feel more at home in your life.
        </p>
      </div>
      <div className="grid gap-gutter md:grid-cols-3">
        {philosophyValues.map((value) => (
          <Card key={value.title} className="p-stack-lg">
            <IconCircle icon={value.icon} className="bg-primary-container text-white" />
            <h3 className="mt-stack-md text-h3 text-primary-container">{value.title} First</h3>
            <p className="contrast-muted mt-stack-sm text-body-md text-on-surface-variant">{value.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  )
}