import { useState } from 'react'
import { Send } from 'lucide-react'

const initialValues = {
  name: '',
  phone: '',
  email: '',
  role: '',
  message: '',
}

function validate(values) {
  const nextErrors = {}

  if (!values.name.trim()) {
    nextErrors.name = 'Please enter your full name.'
  }

  if (!values.phone.trim()) {
    nextErrors.phone = 'Please enter a phone number.'
  }

  if (!values.email.trim()) {
    nextErrors.email = 'Please enter your email address.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    nextErrors.email = 'Please enter a valid email address.'
  }

  if (!values.role) {
    nextErrors.role = 'Please choose the option that best describes you.'
  }

  if (!values.message.trim()) {
    nextErrors.message = 'Please tell us how we can help.'
  }

  return nextErrors
}

function FieldError({ id, message }) {
  if (!message) {
    return null
  }

  return (
    <p id={id} className="mt-2 text-sm font-semibold text-error" role="alert">
      {message}
    </p>
  )
}

export function ContactForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function updateField(event) {
    const { name, value } = event.target
    setValues((currentValues) => ({ ...currentValues, [name]: value }))
    setErrors((currentErrors) => ({ ...currentErrors, [name]: undefined }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    setSubmitted(Object.keys(nextErrors).length === 0)
  }

  return (
    <div className="contrast-surface h-full rounded-lg border border-surface-container bg-surface-container-lowest p-stack-lg shadow-card md:p-12">
      <h2 className="text-h2 text-primary-container">Send us a message</h2>
      <form className="mt-stack-lg space-y-stack-md" onSubmit={handleSubmit} noValidate>
        <div className="grid gap-stack-md md:grid-cols-2">
          <div>
            <label className="block text-label-caps font-semibold uppercase text-on-surface" htmlFor="name">
              Full Name
            </label>
            <input
              className="mt-stack-sm min-h-12 w-full rounded-lg border-2 border-outline-variant bg-surface p-3 text-on-surface focus:border-primary-container focus:ring-0"
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              value={values.name}
              onChange={updateField}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            <FieldError id="name-error" message={errors.name} />
          </div>
          <div>
            <label className="block text-label-caps font-semibold uppercase text-on-surface" htmlFor="phone">
              Phone Number
            </label>
            <input
              className="mt-stack-sm min-h-12 w-full rounded-lg border-2 border-outline-variant bg-surface p-3 text-on-surface focus:border-primary-container focus:ring-0"
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={values.phone}
              onChange={updateField}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
            />
            <FieldError id="phone-error" message={errors.phone} />
          </div>
        </div>

        <div>
          <label className="block text-label-caps font-semibold uppercase text-on-surface" htmlFor="email">
            Email Address
          </label>
          <input
            className="mt-stack-sm min-h-12 w-full rounded-lg border-2 border-outline-variant bg-surface p-3 text-on-surface focus:border-primary-container focus:ring-0"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={updateField}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          <FieldError id="email-error" message={errors.email} />
        </div>

        <div>
          <label className="block text-label-caps font-semibold uppercase text-on-surface" htmlFor="role">
            I am a
          </label>
          <select
            className="mt-stack-sm min-h-12 w-full rounded-lg border-2 border-outline-variant bg-surface p-3 text-on-surface focus:border-primary-container focus:ring-0"
            id="role"
            name="role"
            value={values.role}
            onChange={updateField}
            aria-invalid={Boolean(errors.role)}
            aria-describedby={errors.role ? 'role-error' : undefined}
          >
            <option value="">Please select your role</option>
            <option value="participant">Participant</option>
            <option value="family">Family member or carer</option>
            <option value="coordinator">Support Coordinator</option>
            <option value="other">Other</option>
          </select>
          <FieldError id="role-error" message={errors.role} />
        </div>

        <div>
          <label className="block text-label-caps font-semibold uppercase text-on-surface" htmlFor="message">
            Your Message
          </label>
          <textarea
            className="mt-stack-sm min-h-36 w-full resize-y rounded-lg border-2 border-outline-variant bg-surface p-3 text-on-surface focus:border-primary-container focus:ring-0"
            id="message"
            name="message"
            value={values.message}
            onChange={updateField}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          <FieldError id="message-error" message={errors.message} />
        </div>

        {submitted ? (
          <p className="rounded-lg bg-secondary-container p-4 text-body-md font-semibold text-on-secondary-fixed" role="status">
            Thank you. This local form is ready for a future submission service, and your message has passed validation.
          </p>
        ) : null}

        <button
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary-container px-8 py-3 text-button font-semibold text-white transition-colors hover:bg-primary md:w-auto"
          type="submit"
        >
          Send Enquiry
          <Send aria-hidden="true" className="h-5 w-5" />
        </button>
      </form>
    </div>
  )
}