import { Mail, MapPin } from 'lucide-react'
import { site } from '../../content/site'

const details = [
  { label: 'Email Us', value: site.email, href: `mailto:${site.email}`, icon: Mail },
  { label: 'Location', value: site.address, icon: MapPin },
]

export function ContactDetails() {
  return (
    <aside className="rounded-lg bg-primary-container p-stack-lg text-white shadow-card" aria-label="Contact information">
      <h2 className="text-h3">Contact Information</h2>
      <ul className="mt-stack-lg space-y-stack-md">
        {details.map((detail) => {
          const Icon = detail.icon
          return (
            <li key={detail.label} className="flex items-start gap-4">
              <Icon aria-hidden="true" className="mt-1 h-6 w-6 shrink-0 text-inverse-primary" />
              <div>
                <p className="text-label-caps font-semibold uppercase text-inverse-primary">{detail.label}</p>
                {detail.href ? (
                  <a className="mt-1 inline-block rounded text-body-lg font-semibold text-white" href={detail.href}>
                    {detail.value}
                  </a>
                ) : (
                  <p className="mt-1 text-body-lg font-semibold text-white">{detail.value}</p>
                )}
              </div>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}