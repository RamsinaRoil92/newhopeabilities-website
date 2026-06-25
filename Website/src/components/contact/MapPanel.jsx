import { OptimizedImage } from '../ui/OptimizedImage'

export function MapPanel() {
  return (
    <figure className="contrast-surface min-h-80 overflow-hidden rounded-lg border border-surface-container bg-surface-container-lowest shadow-card">
      <OptimizedImage
        src="/images/melbourne-map.webp"
        alt="Stylised map showing the Greater Melbourne area served by NewHope Abilities."
        width="800"
        height="600"
      />
      <figcaption className="sr-only">NewHope Abilities supports participants across Greater Melbourne.</figcaption>
    </figure>
  )
}