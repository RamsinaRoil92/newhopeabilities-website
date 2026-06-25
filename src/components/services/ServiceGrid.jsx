import { services } from '../../content/services'
import { Card } from '../ui/Card'
import { IconCircle } from '../ui/IconCircle'
import { OptimizedImage } from '../ui/OptimizedImage'

export function ServiceGrid() {
  return (
    <div className="grid gap-gutter md:grid-cols-2">
      {services.map((service) => (
        <Card key={service.slug} className="flex flex-col p-stack-lg">
          <IconCircle icon={service.icon} className="bg-primary-fixed text-primary-container" />
          <h2 className="mt-stack-md text-h2 text-primary-container">{service.title}</h2>
          <p className="contrast-muted mt-stack-sm text-body-md text-on-surface-variant">{service.description}</p>
          <ul className="mt-stack-md space-y-2 text-body-md text-on-surface-variant">
            {service.points.map((point) => (
              <li key={point} className="flex gap-2">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-secondary" aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <div className="mt-stack-lg aspect-[16/9] overflow-hidden rounded-md bg-surface-variant">
            <OptimizedImage src={service.image} alt={service.alt} width="900" height="506" />
          </div>
        </Card>
      ))}
    </div>
  )
}