import { Section } from './Section'

export function PageHero({ eyebrow, title, description }) {
  return (
    <Section className="pb-10 pt-14 md:pb-12 md:pt-16">
      <div className="mx-auto max-w-3xl text-center">
        {eyebrow ? <p className="mb-stack-sm text-label-caps font-semibold uppercase text-secondary">{eyebrow}</p> : null}
        <h1 className="text-h1 text-primary-container md:text-display">{title}</h1>
        <p className="contrast-muted mt-stack-md text-body-lg text-on-surface-variant">{description}</p>
      </div>
    </Section>
  )
}