import { MapPin, Phone, Mail } from 'lucide-react'
import { site } from '../../content/site'

export function Footer() {
  return (
    <footer className="border-t border-surface-variant bg-surface-container-lowest text-primary-container">
      <div className="mx-auto grid w-full max-w-container-max gap-8 px-margin-mobile py-12 md:grid-cols-[1.5fr_1fr] md:px-margin-desktop">
        <div>
          <p className="text-xl font-bold">{site.name}</p>
          <p className="mt-stack-sm max-w-sm text-body-md text-on-surface-variant">
            Compassionate disability support — proudly based in Melbourne, Victoria.
          </p>
          <ul className="mt-stack-lg space-y-2 text-sm text-on-surface-variant" role="list">
            <li className="flex items-center gap-2">
              <MapPin aria-hidden="true" className="h-4 w-4 shrink-0 text-secondary" />
              <span>{site.address}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone aria-hidden="true" className="h-4 w-4 shrink-0 text-secondary" />
              <a href={site.phoneHref} className="transition-colors hover:text-primary-container">{site.phone}</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail aria-hidden="true" className="h-4 w-4 shrink-0 text-secondary" />
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-primary-container">{site.email}</a>
            </li>
          </ul>
          <p className="mt-stack-md text-sm text-on-surface-variant">
            © {site.year} {site.name}. {site.ndisStatus}.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <p className="mb-stack-sm text-label-caps font-semibold uppercase text-primary-container">Quick Links</p>
          <ul className="space-y-2">
            {[
              { href: '#home',     label: 'Home' },
              { href: '#about',    label: 'About Us' },
              { href: '#services', label: 'Services' },
              { href: '#contact',  label: 'Contact' },
            ].map((link) => (
              <li key={link.href}>
                <a className="rounded text-on-surface-variant transition-colors hover:text-primary-container" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}