import { Contrast, Type } from 'lucide-react'
import { useAccessibility } from '../../hooks/useAccessibility'
import { classNames } from '../../utils/classNames'

const textOptions = [
  { label: 'A', value: 'default', ariaLabel: 'Use default text size' },
  { label: 'A+', value: 'large', ariaLabel: 'Use large text size' },
  { label: 'A++', value: 'larger', ariaLabel: 'Use largest text size' },
]

export function AccessibilityTools({ compact = false }) {
  const { highContrast, setHighContrast, textSize, setTextSize } = useAccessibility()

  return (
    <div
      className={classNames(
        'flex items-center gap-2 text-primary-container',
        compact ? 'justify-between' : 'justify-end',
      )}
      aria-label="Accessibility tools"
    >
      <div className="flex items-center gap-1 rounded-full border border-outline-variant bg-surface-container-lowest p-1">
        <Type aria-hidden="true" className="ml-2 h-4 w-4" />
        {textOptions.map((option) => (
          <button
            key={option.value}
            type="button"
            aria-label={option.ariaLabel}
            aria-pressed={textSize === option.value}
            onClick={() => setTextSize(option.value)}
            className={classNames(
              'min-h-9 rounded-full px-3 text-sm font-semibold transition-colors',
              textSize === option.value
                ? 'bg-primary-container text-white'
                : 'text-primary-container hover:bg-surface-container-high',
            )}
          >
            {option.label}
          </button>
        ))}
      </div>
      <button
        type="button"
        aria-label={highContrast ? 'Turn off high contrast mode' : 'Turn on high contrast mode'}
        aria-pressed={highContrast}
        onClick={() => setHighContrast((currentValue) => !currentValue)}
        className={classNames(
          'inline-flex min-h-11 items-center gap-2 rounded-full border px-4 text-sm font-semibold transition-colors',
          highContrast
            ? 'border-primary-container bg-primary-container text-white'
            : 'border-outline-variant bg-surface-container-lowest text-primary-container hover:bg-surface-container-high',
        )}
      >
        <Contrast aria-hidden="true" className="h-4 w-4" />
        <span>{compact ? (highContrast ? 'Contrast on' : 'Contrast') : highContrast ? 'High contrast on' : 'High contrast'}</span>
      </button>
    </div>
  )
}
