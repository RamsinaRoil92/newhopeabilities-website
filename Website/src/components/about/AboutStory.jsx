import { OptimizedImage } from '../ui/OptimizedImage'
import { Section } from '../ui/Section'

export function AboutStory() {
  return (
    <Section className="pt-14 md:pt-16">
      <div className="grid items-center gap-gutter lg:grid-cols-2">
        <div>
          <p className="mb-stack-sm text-label-caps font-semibold uppercase text-secondary">Our Story</p>
          <h1 className="text-h1 text-primary-container md:text-display">Support that starts with listening.</h1>
          <div className="contrast-muted mt-stack-lg space-y-stack-md text-body-lg text-on-surface-variant">
            <p>
              NewHope Abilities was created for people who want support that feels steady, human, and genuinely useful. We believe good support begins with understanding what matters to you.
            </p>
            <p>
              Our team works alongside participants, families, carers, and coordinators across Melbourne to build support around real routines, personal goals, and everyday confidence.
            </p>
          </div>
        </div>
        <div className="aspect-[5/4] overflow-hidden rounded-lg shadow-ambient">
          <OptimizedImage
            src="/images/team-park-melbourne.webp"
            alt="Diverse NewHope Abilities support team standing together in a sunny Melbourne park."
            width="900"
            height="720"
          />
        </div>
      </div>
    </Section>
  )
}