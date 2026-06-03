import { useEffect, useMemo, useState } from 'react'
import { AccessibilityContext } from './accessibilityContext'

export function AccessibilityProvider({ children }) {
  const [highContrast, setHighContrast] = useState(false)
  const [textSize, setTextSize] = useState('default')

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('high-contrast', highContrast)
    root.classList.remove('text-size-large', 'text-size-larger')

    if (textSize !== 'default') {
      root.classList.add(textSize === 'large' ? 'text-size-large' : 'text-size-larger')
    }
  }, [highContrast, textSize])

  const value = useMemo(
    () => ({ highContrast, setHighContrast, textSize, setTextSize }),
    [highContrast, textSize],
  )

  return <AccessibilityContext.Provider value={value}>{children}</AccessibilityContext.Provider>
}
