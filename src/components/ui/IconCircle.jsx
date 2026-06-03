import {
  Accessibility,
  CheckCircle2,
  Footprints,
  Handshake,
  HeartHandshake,
  Home,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
  UsersRound,
} from 'lucide-react'
import { classNames } from '../../utils/classNames'

const icons = {
  Accessibility,
  CheckCircle2,
  Footprints,
  Handshake,
  HeartHandshake,
  Home,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
  UsersRound,
}

export function IconCircle({ icon, className, iconClassName, label }) {
  const Icon = icons[icon] || CheckCircle2

  return (
    <span
      className={classNames(
        'inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary-container text-secondary',
        className,
      )}
      aria-label={label}
      aria-hidden={label ? undefined : 'true'}
    >
      <Icon className={classNames('h-6 w-6', iconClassName)} aria-hidden="true" />
    </span>
  )
}