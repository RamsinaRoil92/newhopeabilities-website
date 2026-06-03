import { ContactDetails } from '../components/contact/ContactDetails'
import { ContactForm } from '../components/contact/ContactForm'
import { MapPanel } from '../components/contact/MapPanel'
import { PageHero } from '../components/ui/PageHero'
import { Section } from '../components/ui/Section'
import { pageMeta } from '../content/pages'
import { Seo } from '../seo/Seo'

export function Contact() {
  return (
    <>
      <Seo {...pageMeta.contact} image="/images/melbourne-map.webp" />
      <PageHero
        eyebrow="Get in Touch"
        title="Let us know how we can support you."
        description="Whether you are a participant, family member, carer, or coordinator, our team is ready to listen and help you take the next step."
      />
      <Section className="pt-0">
        <div className="grid gap-gutter lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
          <div className="flex flex-col gap-gutter lg:col-span-5">
            <ContactDetails />
            <MapPanel />
          </div>
        </div>
      </Section>
    </>
  )
}