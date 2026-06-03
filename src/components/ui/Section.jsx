import { classNames } from '../../utils/classNames'

const backgroundClasses = {
  default: 'bg-background',
  white: 'bg-surface-container-lowest',
  soft: 'bg-surface-container-low',
  navy: 'bg-primary-container text-white',
}

export function Section({ children, className, containerClassName, background = 'default', as: Component = 'section', ...props }) {
  return (
    <Component className={classNames('py-16 md:py-section-gap', backgroundClasses[background], className)} {...props}>
      <div className={classNames('mx-auto w-full max-w-container-max px-margin-mobile md:px-margin-desktop', containerClassName)}>
        {children}
      </div>
    </Component>
  )
}