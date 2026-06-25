import { Button } from '../ui/Button'
import { OptimizedImage } from '../ui/OptimizedImage'
import { Section } from '../ui/Section'

export function MelbourneCta() {
  return (
    <Section background="white">
      <div className="overflow-hidden rounded-lg bg-primary-container shadow-ambient lg:grid lg:grid-cols-2">
        <div className="flex flex-col justify-center p-stack-lg text-white md:p-section-gap">
          <h2 className="text-h2">Proudly Supporting Our Melbourne Community</h2>
          <p className="mt-stack-sm text-body-md text-surface-container-low">
            We know Melbourne is not one-size-fits-all. From the inner city to the suburbs, we help you connect with local places, routines, and networks that fit your life.
          </p>
          <Button to="/contact" variant="light" className="mt-stack-lg self-start">
            Find Support Near You
          </Button>
        </div>
        <div className="relative min-h-72 lg:min-h-full">
          <OptimizedImage
            src="/images/melbourne-community.webp"
            alt="Accessible community paths near Federation Square and Flinders Street Station in Melbourne."
            width="900"
            height="700"
          />
          <div className="absolute inset-0 bg-primary-container/20" aria-hidden="true" />
        </div>
      </div>
    </Section>
  )
}