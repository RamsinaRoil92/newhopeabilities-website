import { MapPin, Mail } from 'lucide-react'
import { site } from '../../content/site'
import { SiteLogo } from './SiteLogo'

export function Footer() {
  return (
    <footer className="border-t border-surface-variant bg-surface-container-lowest text-primary-container">
      <div className="mx-auto grid w-full max-w-container-max gap-8 px-margin-mobile py-12 md:grid-cols-[1.5fr_1fr] md:px-margin-desktop">
        <div>
          <SiteLogo className="h-14" />
          <p className="mt-stack-sm max-w-sm text-body-md text-on-surface-variant">
            Compassionate disability support — proudly based in Melbourne, Victoria.
          </p>
          <ul className="mt-stack-lg space-y-2 text-sm text-on-surface-variant" role="list">
            <li className="flex items-start gap-2">
              <Mail aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-primary-container">
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
              <span>{site.address}</span>
            </li>
          </ul>
          <p className="mt-stack-md text-sm text-on-surface-variant">
            © {site.year} {site.name}.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <p className="mb-stack-sm text-label-caps font-semibold uppercase text-primary-container">Quick Links</p>
          <ul className="space-y-2">
            {[
              { href: '#home', label: 'Home' },
              { href: '#about', label: 'About Us' },
              { href: '#services', label: 'Services' },
              { href: '#contact', label: 'Contact' },
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
