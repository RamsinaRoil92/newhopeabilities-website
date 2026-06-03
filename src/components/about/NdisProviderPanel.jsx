import { CheckCircle2 } from 'lucide-react'
import { Section } from '../ui/Section'

export function NdisProviderPanel() {
  return (
    <Section id="ndis-standards" background="white">
      <div className="contrast-surface grid gap-stack-lg rounded-lg border border-outline-variant bg-surface-container-lowest p-stack-lg shadow-card md:grid-cols-[auto_1fr] md:p-12">
        <div className="flex h-28 w-28 items-center justify-center rounded-full bg-surface-variant text-primary-container md:h-32 md:w-32">
          <CheckCircle2 aria-hidden="true" className="h-16 w-16" />
        </div>
        <div>
          <h2 className="text-h2 text-primary-container">Registered NDIS Provider</h2>
          <p className="contrast-muted mt-stack-sm max-w-3xl text-body-md text-on-surface-variant">
            We work to the NDIS Practice Standards and keep quality, safety, and clear communication at the centre of our service. You can expect support that is planned with you, reviewed with care, and delivered by people who understand their responsibilities.
          </p>
        </div>
      </div>
    </Section>
  )
}