import { classNames } from '../../utils/classNames'

export function Card({ as: Component = 'article', className, children, ...props }) {
  return (
    <Component
      className={classNames(
        'contrast-surface rounded-lg border border-surface-variant bg-surface-container-lowest shadow-card',
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  )
}