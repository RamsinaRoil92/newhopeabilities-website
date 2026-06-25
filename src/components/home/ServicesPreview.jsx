import { services } from '../../content/services'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'
import { OptimizedImage } from '../ui/OptimizedImage'
import { Section } from '../ui/Section'

export function ServicesPreview() {
  const featuredServices = services.filter((service) => service.slug !== 'cleaning')

  return (
    <Section background="soft">
      <div className="mb-stack-lg flex flex-col items-start justify-between gap-stack-md md:flex-row md:items-end">
        <div>
          <h2 className="text-h2 text-primary-container">Tailored Support Services</h2>
          <p className="contrast-muted mt-stack-sm max-w-2xl text-body-md text-on-surface-variant">
            Flexible NDIS support shaped around your goals, routines, and the way you want to live.
          </p>
        </div>
        <Button to="/services" variant="secondary" showArrow>
          View All Services
        </Button>
      </div>

      <div className="grid gap-gutter lg:grid-cols-3">
        {featuredServices.map((service) => (
          <Card key={service.slug} className="flex overflow-hidden rounded-lg">
            <div className="flex min-h-full flex-col">
              <div className="aspect-[4/3] bg-surface-variant">
                <OptimizedImage src={service.image} alt={service.alt} width="800" height="600" />
              </div>
              <div className="flex flex-1 flex-col p-stack-lg">
                <h3 className="text-h3 text-primary-container">{service.title}</h3>
                <p className="contrast-muted mt-stack-sm flex-1 text-body-md text-on-surface-variant">
                  {service.shortDescription}
                </p>
                <Button to="/services" variant="text" className="mt-stack-md self-start px-0" showArrow>
                  Learn More
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}