import { Seo } from '../seo/Seo'
import { Section } from '../components/ui/Section'
import { site } from '../content/site'

export function Privacy() {
  return (
    <>
      <Seo
        title="Privacy Policy | NewHope Abilities"
        description="Learn how NewHope Abilities handles personal information for NDIS support enquiries."
        path="/privacy"
      />
      <Section>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-h1 text-primary-container md:text-display">Privacy Policy</h1>
          <div className="contrast-muted mt-stack-lg space-y-stack-md text-body-md text-on-surface-variant">
            <p>
              {site.name} respects your privacy. We only ask for information that helps us respond to your enquiry, understand your support needs, and communicate with you safely.
            </p>
            <p>
              Information sent through the local enquiry form is not connected to a live submission service yet. When a secure form provider is added, this policy should be reviewed and expanded before launch.
            </p>
            <p>
              For privacy questions, contact us at <a className="font-semibold text-primary-container" href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}