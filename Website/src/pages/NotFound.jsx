import { Seo } from '../seo/Seo'
import { Button } from '../components/ui/Button'
import { Section } from '../components/ui/Section'

export function NotFound() {
  return (
    <>
      <Seo title="Page Not Found | NewHope Abilities" description="The page you requested could not be found." path="/404" />
      <Section className="min-h-[60vh] text-center">
        <p className="text-label-caps font-semibold uppercase text-secondary">404</p>
        <h1 className="mt-stack-sm text-h1 text-primary-container md:text-display">Page not found</h1>
        <p className="contrast-muted mx-auto mt-stack-md max-w-xl text-body-lg text-on-surface-variant">
          We could not find that page. You can return home or get in touch with the team.
        </p>
        <div className="mt-stack-lg flex flex-col justify-center gap-stack-sm sm:flex-row">
          <Button to="/">Return Home</Button>
          <Button to="/contact" variant="secondary">Contact Us</Button>
        </div>
      </Section>
    </>
  )
}