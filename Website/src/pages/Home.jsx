import { AlertCircle, MapPin } from 'lucide-react'
import { site } from '../content/site'
import { Section } from '../components/ui/Section'

export default function Home() {
  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="mx-auto flex w-full max-w-container-max flex-col items-center px-margin-mobile py-section-gap text-center md:px-margin-desktop">
        <div className="max-w-4xl">
          <h1
            className="font-bold text-primary-container"
            style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', lineHeight: '1.15' }}
          >
            Welcome to<br />
            <span className="text-secondary-fixed-dim">NewHope Abilities</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-body-lg text-on-primary opacity-90">
            {site.tagline}
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-secondary px-8 py-4 text-button font-semibold text-on-secondary shadow transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-fixed"
          >
            Get in Touch
          </a>
          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-on-primary/20 bg-on-primary/10 px-5 py-2 text-sm text-on-primary">
            <MapPin aria-hidden="true" className="h-4 w-4 shrink-0" />
            <span>{site.address}</span>
          </div>
        </div>
      </section>

      {/* ── ABOUT US ─────────────────────────────────────── */}
      <section
        id="about"
        className="mx-auto w-full max-w-container-max px-margin-mobile py-section-gap md:px-margin-desktop"
        aria-labelledby="about-heading"
      >
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-label-caps font-semibold uppercase tracking-widest text-secondary">
              About Us
            </p>
            <h2 id="about-heading" className="text-h1 font-bold text-primary-container">
              Who We Are
            </h2>
            <p className="mt-4 text-body-lg text-on-surface-variant">
              NewHope Abilities is a Melbourne-based disability support provider with a deep
              commitment to person-centred care. We believe every person deserves support that
              respects their individuality, promotes independence, and nurtures genuine connection.
            </p>
            <p className="mt-4 text-body-lg text-on-surface-variant">
              Our team is passionate about walking alongside participants and their families — not
              just providing services, but building lasting, trusting relationships within the
              community.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
