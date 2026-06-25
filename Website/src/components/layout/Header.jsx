import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { site } from '../../content/site'
import { useFocusTrap } from '../../hooks/useFocusTrap'
import { AccessibilityTools } from '../accessibility/AccessibilityTools'
import { classNames } from '../../utils/classNames'

const anchorLinks = [
  { href: '#home',     label: 'Home' },
  { href: '#about',    label: 'About Us' },
  { href: '#services', label: 'Services' },
  { href: '#contact',  label: 'Contact' },
]

const linkClasses =
  'inline-flex min-h-12 items-center rounded-lg px-3 text-base font-medium transition-colors text-on-surface-variant hover:bg-surface-container-low hover:text-primary-container'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const panelRef = useRef(null)
  useFocusTrap(panelRef, menuOpen, () => setMenuOpen(false))

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-surface-container-high bg-surface-container-lowest/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex h-20 w-full max-w-container-max items-center justify-between gap-4 px-margin-mobile md:px-margin-desktop">
        <Link to="/" className="shrink-0 rounded-lg text-xl font-bold text-primary-container md:text-2xl" aria-label={`${site.name} home`}>
          {site.name}
        </Link>

        <nav className="hidden items-center gap-2 lg:flex" aria-label="Main navigation">
          {anchorLinks.map((link) => (
            <a key={link.href} href={link.href} className={linkClasses}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <AccessibilityTools />
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-button font-semibold text-on-primary transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-container"
          >
            Enquire Now
          </a>
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <a
            href="#contact"
            className="hidden rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-on-primary transition-opacity hover:opacity-90 sm:inline-flex"
          >
            Enquire Now
          </a>
          <button
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((v) => !v)}
            className="inline-flex min-h-12 min-w-12 items-center justify-center rounded-lg text-primary-container hover:bg-surface-container-low"
          >
            {menuOpen ? <X aria-hidden="true" className="h-6 w-6" /> : <Menu aria-hidden="true" className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div id="mobile-navigation" ref={panelRef} className="border-t border-surface-variant bg-surface-container-lowest px-margin-mobile py-stack-md shadow-overlay xl:hidden">
          <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
            {anchorLinks.map((link) => (
              <a key={link.href} href={link.href} className={classNames(linkClasses, 'w-full')} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-stack-md border-t border-surface-variant pt-stack-md">
            <AccessibilityTools compact />
          </div>
        </div>
      ) : null}
    </header>
  )
}