import { pageMeta } from '../content/pages'
import { Seo } from '../seo/Seo'
import { ServiceGrid } from '../components/services/ServiceGrid'
import { Button } from '../components/ui/Button'
import { PageHero } from '../components/ui/PageHero'
import { Section } from '../components/ui/Section'

export function Services() {
  return (
    <>
      <Seo {...pageMeta.services} image="/images/service-community-access.webp" />
      <PageHero
        eyebrow="Our Services"
        title="Support shaped around your day-to-day life."
        description="We provide practical, respectful support that helps you build confidence at home and in the community."
      />
      <Section className="pt-0">
        <ServiceGrid />
      </Section>
      <Section background="soft" className="text-center">
        <h2 className="text-h1 text-primary-container">Not sure which service is right for you?</h2>
        <p className="contrast-muted mx-auto mt-stack-sm max-w-2xl text-body-lg text-on-surface-variant">
          Tell us what you want support with, and we will talk through the options in plain English.
        </p>
        <Button to="/contact" className="mt-stack-lg">
          Enquire Now
        </Button>
      </Section>
    </>
  )
}