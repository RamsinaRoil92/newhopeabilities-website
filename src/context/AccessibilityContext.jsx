import { useEffect, useMemo, useState } from 'react'
import { AccessibilityContext } from './accessibilityContext'

const CONTRAST_KEY = 'nha-high-contrast'
const TEXT_SIZE_KEY = 'nha-text-size'

function readStoredContrast() {
  try {
    return localStorage.getItem(CONTRAST_KEY) === 'true'
  } catch {
    return false
  }
}

function readStoredTextSize() {
  try {
    const value = localStorage.getItem(TEXT_SIZE_KEY)
    return value === 'large' || value === 'larger' ? value : 'default'
  } catch {
    return 'default'
  }
}

export function AccessibilityProvider({ children }) {
  const [highContrast, setHighContrast] = useState(readStoredContrast)
  const [textSize, setTextSize] = useState(readStoredTextSize)

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('high-contrast', highContrast)
    root.classList.remove('text-size-large', 'text-size-larger')

    if (textSize !== 'default') {
      root.classList.add(textSize === 'large' ? 'text-size-large' : 'text-size-larger')
    }

    try {
      localStorage.setItem(CONTRAST_KEY, String(highContrast))
      localStorage.setItem(TEXT_SIZE_KEY, textSize)
    } catch {
      // Ignore storage failures (private mode, quota, etc.)
    }
  }, [highContrast, textSize])

  const value = useMemo(
    () => ({ highContrast, setHighContrast, textSize, setTextSize }),
    [highContrast, textSize],
  )

  return <AccessibilityContext.Provider value={value}>{children}</AccessibilityContext.Provider>
}
