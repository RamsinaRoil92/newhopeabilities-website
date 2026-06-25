import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { classNames } from '../../utils/classNames'

const variants = {
  primary: 'bg-primary-container text-white hover:bg-primary shadow-card',
  secondary:
    'border-2 border-primary-container bg-transparent text-primary-container hover:bg-surface-container-highest',
  light: 'bg-white text-primary-container hover:bg-surface-container-highest shadow-card',
  heroOutline: 'border-2 border-white/75 bg-white/10 text-white shadow-none hover:bg-white/20',
  text: 'bg-transparent text-primary-container hover:bg-surface-container-high',
}

export function Button({
  children,
  to,
  href,
  type = 'button',
  variant = 'primary',
  className,
  showArrow = false,
  ...props
}) {
  const classes = classNames(
    'inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-6 py-3 text-button font-semibold transition-colors',
    variants[variant],
    className,
  )

  const content = (
    <>
      <span>{children}</span>
      {showArrow ? <ArrowRight aria-hidden="true" className="h-5 w-5" /> : null}
    </>
  )

  if (to) {
    return (
      <Link className={classes} to={to} {...props}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        {content}
      </a>
    )
  }

  return (
    <button className={classes} type={type} {...props}>
      {content}
    </button>
  )
}