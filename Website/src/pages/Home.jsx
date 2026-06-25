import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, CheckCircle, AlertCircle } from 'lucide-react'
import { Seo } from '../seo/Seo'
import { site } from '../content/site'

export function Home() {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(null)

  function handleChange(e) {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    // TODO: Wire up to your email provider (e.g. Formspree, EmailJS, or a serverless function)
    setSubmitted(true)
    setError(null)
  }

  return (
    <>
      <Seo
        title="Welcome — NewHope Abilities"
        description={site.description}
      />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        id="home"
        className="relative flex min-h-[70vh] flex-col items-center justify-center bg-primary px-margin-mobile py-20 text-center md:px-margin-desktop"
        aria-labelledby="hero-heading"
      >
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-label-caps font-semibold uppercase tracking-widest text-on-primary-container opacity-80">
            Melbourne, Victoria
          </p>
          <h1
            id="hero-heading"
            className="font-bold text-on-primary"
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
          {/* Address pill */}
          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-on-primary/20 bg-on-primary/10 px-5 py-2 text-sm text-on-primary">
            <MapPin aria-hidden="true" className="h-4 w-4 shrink-0" />
            <span>{site.address}</span>
          </div>
        </div>
      </section>

      {/* ── REGISTRATION NOTICE ──────────────────────────── */}
      <div className="bg-secondary-container">
        <div className="mx-auto flex max-w-container-max flex-wrap items-center gap-3 px-margin-mobile py-4 md:px-margin-desktop">
          <AlertCircle aria-hidden="true" className="h-5 w-5 shrink-0 text-on-secondary-container" />
          <p className="text-body-md text-on-secondary-container">
            <strong>Please note:</strong> NewHope Abilities is currently completing NDIS provider
            registration. We are not yet a registered NDIS provider — we will update this page as
            soon as registration is confirmed.
          </p>
        </div>
      </div>

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
            <p className="mt-4 text-body-lg text-on-surface-variant">
              We are currently in the process of completing our NDIS provider registration. Once
              registered, we will offer a range of supports tailored to individual goals and
              aspirations across Greater Melbourne.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: '🤝',
                title: 'Person-Centred',
                body: 'Every decision we make puts the participant first.',
              },
              {
                icon: '🌱',
                title: 'Community-Focused',
                body: 'We are proud to serve Melbourne and surrounding suburbs.',
              },
              {
                icon: '🏡',
                title: 'Local Team',
                body: 'Based at 470 St Kilda Road, right in the heart of Melbourne.',
              },
              {
                icon: '📋',
                title: 'Registering Now',
                body: 'NDIS registration currently in progress — updates coming soon.',
              },
            ].map(({ icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl border border-surface-variant bg-surface-container-low p-5"
              >
                <span className="text-3xl" role="img" aria-hidden="true">{icon}</span>
                <p className="mt-3 font-semibold text-primary-container">{title}</p>
                <p className="mt-1 text-sm text-on-surface-variant">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ─────────────────────────────── */}
      <section
        id="services"
        className="bg-surface-container-low px-margin-mobile py-section-gap md:px-margin-desktop"
        aria-labelledby="services-heading"
      >
        <div className="mx-auto max-w-container-max">
          <p className="mb-3 text-center text-label-caps font-semibold uppercase tracking-widest text-secondary">
            Our Services
          </p>
          <h2
            id="services-heading"
            className="text-center text-h1 font-bold text-primary-container"
          >
            What We Plan to Offer
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-body-lg text-on-surface-variant">
            Subject to NDIS registration, we intend to provide the following supports across Greater
            Melbourne.
          </p>

          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" role="list">
            {[
              {
                title: 'Community Access',
                body: 'Supporting participants to engage with their local community and pursue social goals.',
              },
              {
                title: 'Personal Care',
                body: 'Respectful, dignified assistance with daily self-care routines.',
              },
              {
                title: 'Domestic Assistance',
                body: 'Help with household tasks including cleaning, laundry, and home organisation.',
              },
              {
                title: 'Household Tasks',
                body: 'Practical support with meal preparation, shopping, and maintaining a comfortable home.',
              },
            ].map(({ title, body }) => (
              <li
                key={title}
                className="rounded-2xl border border-surface-variant bg-surface-container-lowest p-6 shadow-sm"
              >
                <p className="font-semibold text-primary-container">{title}</p>
                <p className="mt-2 text-sm text-on-surface-variant">{body}</p>
              </li>
            ))}
          </ul>

          <p className="mx-auto mt-8 max-w-lg text-center text-sm text-on-surface-variant">
            * Services are contingent upon successful NDIS provider registration. Please enquire
            below for updates.
          </p>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────── */}
      <section
        id="contact"
        className="mx-auto w-full max-w-container-max px-margin-mobile py-section-gap md:px-margin-desktop"
        aria-labelledby="contact-heading"
      >
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          {/* Contact details */}
          <div>
            <p className="mb-3 text-label-caps font-semibold uppercase tracking-widest text-secondary">
              Contact Us
            </p>
            <h2 id="contact-heading" className="text-h1 font-bold text-primary-container">
              Get in Touch
            </h2>
            <p className="mt-4 text-body-lg text-on-surface-variant">
              We would love to hear from you. Whether you are a potential participant, carer, or
              community partner — reach out and we will get back to you as soon as possible.
            </p>

            <ul className="mt-8 space-y-5" role="list">
              <li className="flex items-start gap-3">
                <MapPin aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-secondary" />
                <div>
                  <p className="font-semibold text-primary-container">Address</p>
                  <p className="text-on-surface-variant">470 St Kilda Road</p>
                  <p className="text-on-surface-variant">Melbourne VIC 3004</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-secondary" />
                <div>
                  <p className="font-semibold text-primary-container">Phone</p>
                  <a
                    href={site.phoneHref}
                    className="text-on-surface-variant transition-colors hover:text-primary-container"
                  >
                    {site.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-secondary" />
                <div>
                  <p className="font-semibold text-primary-container">Email</p>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-on-surface-variant transition-colors hover:text-primary-container"
                  >
                    {site.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-secondary" />
                <div>
                  <p className="font-semibold text-primary-container">Office Hours</p>
                  <p className="text-on-surface-variant">Monday – Friday, 9 am – 5 pm</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Connection form */}
          <div className="rounded-2xl border border-surface-variant bg-surface-container-low p-6 shadow-sm md:p-8">
            {submitted ? (
              <div className="flex flex-col items-center gap-4 py-8 text-center">
                <CheckCircle aria-hidden="true" className="h-12 w-12 text-secondary" />
                <p className="text-h3 font-semibold text-primary-container">Message Received</p>
                <p className="text-on-surface-variant">
                  Thank you for reaching out. We will be in contact with you shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                aria-label="Connection enquiry form"
                className="space-y-5"
              >
                <p className="text-h3 font-semibold text-primary-container">Send Us a Message</p>

                <div>
                  <label
                    htmlFor="name"
                    className="mb-1 block text-sm font-medium text-primary-container"
                  >
                    Full Name <span aria-hidden="true" className="text-error">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-outline-variant bg-surface-container-lowest px-4 py-3 text-on-surface focus:border-primary-container focus:outline-none focus:ring-2 focus:ring-primary-container/30"
                    placeholder="Jane Smith"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block text-sm font-medium text-primary-container"
                  >
                    Email Address <span aria-hidden="true" className="text-error">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-outline-variant bg-surface-container-lowest px-4 py-3 text-on-surface focus:border-primary-container focus:outline-none focus:ring-2 focus:ring-primary-container/30"
                    placeholder="jane@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1 block text-sm font-medium text-primary-container"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={formState.phone}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-outline-variant bg-surface-container-lowest px-4 py-3 text-on-surface focus:border-primary-container focus:outline-none focus:ring-2 focus:ring-primary-container/30"
                    placeholder="04xx xxx xxx"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1 block text-sm font-medium text-primary-container"
                  >
                    Message <span aria-hidden="true" className="text-error">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full resize-y rounded-xl border border-outline-variant bg-surface-container-lowest px-4 py-3 text-on-surface focus:border-primary-container focus:outline-none focus:ring-2 focus:ring-primary-container/30"
                    placeholder="Tell us a little about yourself or how we can help…"
                  />
                </div>

                {error ? (
                  <p role="alert" className="text-sm text-error">
                    {error}
                  </p>
                ) : null}

                <button
                  type="submit"
                  className="w-full rounded-xl bg-primary px-6 py-3 text-button font-semibold text-on-primary transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-container"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}