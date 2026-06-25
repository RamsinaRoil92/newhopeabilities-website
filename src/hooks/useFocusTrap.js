import { useEffect } from 'react'

const focusableSelector = [
  'a[href]',
  'button:not([disabled])',
  'textarea:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',')

export function useFocusTrap(containerRef, active, onEscape) {
  useEffect(() => {
    if (!active || !containerRef.current) {
      return undefined
    }

    const container = containerRef.current
    const focusableElements = Array.from(container.querySelectorAll(focusableSelector))
    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    firstElement?.focus()

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        onEscape?.()
        return
      }

      if (event.key !== 'Tab' || focusableElements.length === 0) {
        return
      }

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault()
        lastElement.focus()
      }

      if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    container.addEventListener('keydown', handleKeyDown)
    return () => container.removeEventListener('keydown', handleKeyDown)
  }, [active, containerRef, onEscape])
}