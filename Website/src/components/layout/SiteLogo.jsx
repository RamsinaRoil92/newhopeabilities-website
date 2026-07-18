import { site } from '../../content/site'
import { classNames } from '../../utils/classNames'

export function SiteLogo({ className = 'h-14' }) {
  return (
    <img
      src="/images/newhope-logo.png"
      alt={site.name}
      className={classNames('w-auto max-w-none object-contain object-left', className)}
      width={420}
      height={360}
      decoding="async"
    />
  )
}
