import { useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { navigationLinks } from '../../content/navigation'
import { site } from '../../content/site'
import { useFocusTrap } from '../../hooks/useFocusTrap'
import { Button } from '../ui/Button'
import { AccessibilityTools } from '../accessibility/AccessibilityTools'
import { SiteLogo } from './SiteLogo'
import { classNames } from '../../utils/classNames'

function navLinkClasses({ isActive }) {
  return classNames(
    'inline-flex min-h-12 items-center rounded-lg px-3 text-base font-medium transition-colors',
    isActive
      ? 'text-primary-container underline decoration-2 underline-offset-8'
      : 'text-on-surface-variant hover:bg-surface-container-low hover:text-primary-container',
  )
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const panelRef = useRef(null)
  useFocusTrap(panelRef, menuOpen, () => setMenuOpen(false))

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-surface-container-high bg-surface-container-lowest/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex h-20 w-full max-w-container-max items-center justify-between gap-4 px-margin-mobile md:px-margin-desktop">
        <Link to="/" className="shrink-0 rounded-lg" aria-label={`${site.name} home`}>
          <SiteLogo className="h-14 md:h-16" />
        </Link>

        <nav className="hidden items-center gap-2 lg:flex" aria-label="Main navigation">
          {navigationLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={navLinkClasses}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <AccessibilityTools />
          <Button to="/contact">Enquire Now</Button>
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <Button to="/contact" className="hidden sm:inline-flex">Enquire Now</Button>
          <button
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((currentValue) => !currentValue)}
            className="inline-flex min-h-12 min-w-12 items-center justify-center rounded-lg text-primary-container hover:bg-surface-container-low"
          >
            {menuOpen ? <X aria-hidden="true" className="h-6 w-6" /> : <Menu aria-hidden="true" className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div id="mobile-navigation" ref={panelRef} className="border-t border-surface-variant bg-surface-container-lowest px-margin-mobile py-stack-md shadow-overlay xl:hidden">
          <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
            {navigationLinks.map((link) => (
              <NavLink key={link.to} to={link.to} className={navLinkClasses} onClick={() => setMenuOpen(false)}>
                {link.label}
              </NavLink>
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