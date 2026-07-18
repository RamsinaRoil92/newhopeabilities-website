import { useState } from 'react'
import { Send } from 'lucide-react'

const initialValues = {
  name: '',
  phone: '',
  email: '',
  role: '',
  message: '',
  company: '',
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
  const [status, setStatus] = useState('idle')
  const [formError, setFormError] = useState('')

  function updateField(event) {
    const { name, value } = event.target
    setValues((currentValues) => ({ ...currentValues, [name]: value }))
    setErrors((currentErrors) => ({ ...currentErrors, [name]: undefined }))
    setFormError('')
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setStatus('idle')
      return
    }

    setStatus('submitting')
    setFormError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: values.name.trim(),
          phone: values.phone.trim(),
          email: values.email.trim(),
          role: values.role,
          message: values.message.trim(),
          company: values.company,
        }),
      })

      const result = await response.json().catch(() => ({}))

      if (!response.ok) {
        throw new Error(result.error || 'We could not send your message right now.')
      }

      setStatus('success')
      setValues(initialValues)
    } catch (error) {
      setStatus('error')
      setFormError(error.message || 'We could not send your message right now.')
    }
  }

  const isSubmitting = status === 'submitting'

  return (
    <div className="contrast-surface h-full rounded-lg border border-surface-container bg-surface-container-lowest p-stack-lg shadow-card md:p-12">
      <h2 className="text-h2 text-primary-container">Send us a message</h2>
      <form className="mt-stack-lg space-y-stack-md" onSubmit={handleSubmit} noValidate>
        <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
          <label htmlFor="company">Company</label>
          <input
            id="company"
            name="company"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={values.company}
            onChange={updateField}
          />
        </div>

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
              disabled={isSubmitting}
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
              disabled={isSubmitting}
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
            disabled={isSubmitting}
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
            disabled={isSubmitting}
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
            disabled={isSubmitting}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          <FieldError id="message-error" message={errors.message} />
        </div>

        {status === 'success' ? (
          <p className="rounded-lg bg-secondary-container p-4 text-body-md font-semibold text-on-secondary-fixed" role="status">
            Thank you. Your message has been sent, and a confirmation email is on its way to you.
          </p>
        ) : null}

        {formError ? (
          <p className="rounded-lg border-2 border-error bg-error-container p-4 text-body-md font-semibold text-on-error-container" role="alert">
            {formError}
          </p>
        ) : null}

        <button
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary-container px-8 py-3 text-button font-semibold text-white transition-colors hover:bg-primary disabled:cursor-not-allowed disabled:opacity-70 md:w-auto"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending…' : 'Send Enquiry'}
          <Send aria-hidden="true" className="h-5 w-5" />
        </button>
      </form>
    </div>
  )
}
