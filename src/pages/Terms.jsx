import { Seo } from '../seo/Seo'
import { Section } from '../components/ui/Section'
import { site } from '../content/site'

export function Terms() {
  return (
    <>
      <Seo
        title="Terms of Service | NewHope Abilities"
        description="Read the local website terms for NewHope Abilities."
        path="/terms"
      />
      <Section>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-h1 text-primary-container md:text-display">Terms of Service</h1>
          <div className="contrast-muted mt-stack-lg space-y-stack-md text-body-md text-on-surface-variant">
            <p>
              This website provides general information about {site.name} and our NDIS support services in Melbourne. It does not replace personalised advice or a service agreement.
            </p>
            <p>
              Service details, availability, and suitability are confirmed through conversation with you, your family, carer, or coordinator. Any future public launch should include a full legal review.
            </p>
            <p>
              For questions about these terms, contact <a className="font-semibold text-primary-container" href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}