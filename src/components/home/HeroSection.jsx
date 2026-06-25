import { Button } from '../ui/Button'

export function HeroSection() {
  return (
    <section className="overflow-hidden bg-primary text-white">
      <div className="grid min-h-[640px] w-full md:grid-cols-[minmax(0,0.5fr)_minmax(360px,0.5fr)]">
        <div className="flex items-center px-margin-mobile py-16 md:justify-end md:px-margin-desktop md:py-section-gap">
          <div className="max-w-[540px] py-stack-lg">
          <p className="mb-stack-md inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-label-caps font-semibold uppercase text-primary-fixed shadow-card backdrop-blur-sm">
            Melbourne NDIS Support
          </p>
          <h1 className="max-w-[13ch] text-[2.25rem] font-bold leading-[1.1] text-white sm:text-[2.65rem] md:text-[2.85rem] lg:text-[3.25rem]">
            Empowering you to live your best life, your way.
          </h1>
          <p className="mt-stack-md max-w-[580px] text-body-lg text-surface-container-low">
            Compassionate, person-centred support across Melbourne. We help you build confidence, stay connected, and keep daily life moving with care that respects your choices.
          </p>
          <div className="mt-stack-lg flex flex-col gap-stack-sm lg:flex-row">
            <Button to="/services" variant="light" showArrow>
              Explore Our Services
            </Button>
            <Button to="/about-us" variant="heroOutline">
              Meet Our Team
            </Button>
          </div>
          <p className="mt-stack-lg max-w-md text-body-md text-primary-fixed-dim">
            At home, out and about, and in the routines that matter most to you.
          </p>
          </div>
        </div>

        <div className="relative order-first min-h-[300px] overflow-hidden bg-secondary-container md:order-last md:min-h-full">
          <img
            src="/images/hero-cafe-melbourne.webp"
            alt="Support worker and participant sharing coffee at a sunny Melbourne cafe table."
            loading="eager"
            decoding="async"
            width="1600"
            height="1000"
            className="absolute inset-0 h-full w-full object-cover object-center saturate-[1.08] contrast-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/15 via-transparent to-white/10 md:bg-gradient-to-r md:from-primary/35 md:via-transparent md:to-transparent" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}