import { site } from '../../content/site'
import { classNames } from '../../utils/classNames'

export function SiteLogo({ className = 'h-12' }) {
  return (
    <img
      src="/images/newhope-abilities-logo.png"
      alt={site.name}
      className={classNames('w-auto', className)}
      width={180}
      height={180}
      decoding="async"
    />
  )
}
