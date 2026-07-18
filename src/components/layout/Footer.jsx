import { Link } from 'react-router-dom'
import { Mail, MapPin } from 'lucide-react'
import { footerLinks, navigationLinks } from '../../content/navigation'
import { site } from '../../content/site'
import { SiteLogo } from './SiteLogo'

export function Footer() {
  return (
    <footer className="contrast-surface border-t border-surface-variant bg-surface-container-lowest text-primary-container">
      <div className="mx-auto grid w-full max-w-container-max gap-8 px-margin-mobile py-12 md:grid-cols-[1.2fr_1fr_1fr] md:px-margin-desktop">
        <div>
          <SiteLogo className="h-14" />
          <p className="contrast-muted mt-stack-sm max-w-sm text-body-md text-on-surface-variant">
            Warm, person-centred NDIS support across {site.serviceArea}.
          </p>
          <ul className="contrast-muted mt-stack-lg space-y-2 text-sm text-on-surface-variant" role="list">
            <li className="flex items-start gap-2">
              <Mail aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
              <a href={`mailto:${site.email}`} className="rounded transition-colors hover:text-primary-container">
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
              <span>{site.address}</span>
            </li>
          </ul>
          <p className="contrast-muted mt-stack-md text-sm text-on-surface-variant">
            © {site.year} {site.name}. {site.ndisStatus}.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <p className="mb-stack-sm text-label-caps font-semibold uppercase text-primary-container">Pages</p>
          <ul className="space-y-2">
            {navigationLinks.map((link) => (
              <li key={link.to}>
                <Link className="rounded text-on-surface-variant transition-colors hover:text-primary-container" to={link.to}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Helpful links">
          <p className="mb-stack-sm text-label-caps font-semibold uppercase text-primary-container">Helpful Links</p>
          <ul className="space-y-2">
            {footerLinks.map((link) => (
              <li key={link.label}>
                {link.to.endsWith('.xml') ? (
                  <a className="rounded text-on-surface-variant transition-colors hover:text-primary-container" href={link.to}>
                    {link.label}
                  </a>
                ) : (
                  <Link className="rounded text-on-surface-variant transition-colors hover:text-primary-container" to={link.to}>
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}
