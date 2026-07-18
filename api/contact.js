const FROM_EMAIL = 'NewHope Abilities <noreply@newhopeabilities.com.au>'
const TO_EMAIL = 'contact@newhopeabilities.com.au'
const SITE_URL = 'https://newhopeabilities.com.au'
const SITE_NAME = 'NewHope Abilities'
const SITE_ADDRESS = '470 St Kilda Rd, Melbourne VIC 3004'

const ROLE_LABELS = {
  participant: 'Participant',
  family: 'Family member or carer',
  coordinator: 'Support Coordinator',
  other: 'Other',
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function readBody(req) {
  if (req.body && typeof req.body === 'object') {
    return req.body
  }

  if (typeof req.body === 'string') {
    try {
      return JSON.parse(req.body)
    } catch {
      return null
    }
  }

  return null
}

function buildNotificationEmail({ name, phone, email, role, message }) {
  const roleLabel = ROLE_LABELS[role] || role
  const safeName = escapeHtml(name)
  const safePhone = escapeHtml(phone || 'Not provided')
  const safeEmail = escapeHtml(email)
  const safeRole = escapeHtml(roleLabel)
  const safeMessage = escapeHtml(message).replaceAll('\n', '<br />')

  return {
    from: FROM_EMAIL,
    to: [TO_EMAIL],
    reply_to: email,
    subject: `New website enquiry from ${name}`,
    text: [
      'New enquiry from the NewHope Abilities website',
      '',
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || 'Not provided'}`,
      `Role: ${roleLabel}`,
      '',
      'Message:',
      message,
    ].join('\n'),
    html: `
      <div style="font-family: Lexend, Arial, sans-serif; background:#f4f3f7; padding:32px 16px;">
        <div style="max-width:640px; margin:0 auto; background:#ffffff; border:1px solid #c4c6cf; border-radius:12px; overflow:hidden;">
          <div style="background:#1b365d; color:#ffffff; padding:24px 28px;">
            <p style="margin:0; font-size:13px; letter-spacing:0.08em; text-transform:uppercase; opacity:0.85;">Website enquiry</p>
            <h1 style="margin:8px 0 0; font-size:24px; line-height:1.3;">New message from ${safeName}</h1>
          </div>
          <div style="padding:28px; color:#1a1b1e; font-size:16px; line-height:1.6;">
            <p style="margin:0 0 16px;">A new enquiry was submitted through ${SITE_URL.replace('https://', '')}.</p>
            <table style="width:100%; border-collapse:collapse; margin:0 0 20px;">
              <tr><td style="padding:8px 0; color:#44474e; width:120px;">Name</td><td style="padding:8px 0; font-weight:600;">${safeName}</td></tr>
              <tr><td style="padding:8px 0; color:#44474e;">Email</td><td style="padding:8px 0;"><a href="mailto:${safeEmail}" style="color:#1b365d;">${safeEmail}</a></td></tr>
              <tr><td style="padding:8px 0; color:#44474e;">Phone</td><td style="padding:8px 0;">${safePhone}</td></tr>
              <tr><td style="padding:8px 0; color:#44474e;">Role</td><td style="padding:8px 0;">${safeRole}</td></tr>
            </table>
            <div style="background:#faf9fd; border:1px solid #e3e2e6; border-radius:10px; padding:16px 18px;">
              <p style="margin:0 0 8px; font-size:13px; letter-spacing:0.06em; text-transform:uppercase; color:#44474e; font-weight:600;">Message</p>
              <p style="margin:0;">${safeMessage}</p>
            </div>
          </div>
        </div>
      </div>
    `,
  }
}

function buildAutoReplyEmail({ name, email }) {
  const firstName = escapeHtml(name.trim().split(/\s+/)[0] || 'there')
  const logoUrl = `${SITE_URL}/images/newhope-logo.png`

  return {
    from: FROM_EMAIL,
    to: [email],
    reply_to: TO_EMAIL,
    subject: `Thanks for contacting ${SITE_NAME}`,
    text: [
      `Hi ${name.trim().split(/\s+/)[0] || 'there'},`,
      '',
      'Thank you for getting in touch with NewHope Abilities.',
      'We have received your message and will reply as soon as we can, usually within 1–2 business days.',
      '',
      'If your enquiry is urgent, please reply to this email and we will prioritise getting back to you.',
      '',
      'Kind regards,',
      'The NewHope Abilities team',
      '',
      SITE_ADDRESS,
      TO_EMAIL,
      SITE_URL,
    ].join('\n'),
    html: `
      <div style="font-family: Lexend, Arial, sans-serif; background:#f4f3f7; padding:32px 16px;">
        <div style="max-width:640px; margin:0 auto; background:#ffffff; border:1px solid #c4c6cf; border-radius:12px; overflow:hidden;">
          <div style="background:#1b365d; padding:28px; text-align:left;">
            <img src="${logoUrl}" alt="${SITE_NAME}" width="180" style="display:block; max-width:180px; height:auto; background:#ffffff; border-radius:8px; padding:10px 12px;" />
          </div>
          <div style="padding:32px 28px; color:#1a1b1e; font-size:16px; line-height:1.65;">
            <p style="margin:0 0 16px;">Hi ${firstName},</p>
            <p style="margin:0 0 16px;">
              Thank you for contacting <strong style="color:#1b365d;">${SITE_NAME}</strong>.
              We have received your message and appreciate you reaching out.
            </p>
            <p style="margin:0 0 16px;">
              A member of our team will review your enquiry and get back to you as soon as possible,
              usually within <strong>1–2 business days</strong>.
            </p>
            <p style="margin:0 0 24px;">
              If your enquiry is urgent, simply reply to this email and we will prioritise getting back to you.
            </p>
            <div style="background:#faf9fd; border-left:4px solid #1b365d; padding:16px 18px; margin:0 0 24px;">
              <p style="margin:0; color:#44474e;">
                Warm, person-centred NDIS support across Greater Melbourne —
                focused on dignity, independence, and community connection.
              </p>
            </div>
            <p style="margin:0 0 4px;">Kind regards,</p>
            <p style="margin:0 0 24px; font-weight:600; color:#1b365d;">The NewHope Abilities team</p>
            <a href="${SITE_URL}/contact" style="display:inline-block; background:#1b365d; color:#ffffff; text-decoration:none; font-weight:600; padding:14px 22px; border-radius:10px;">
              Visit our website
            </a>
          </div>
          <div style="padding:20px 28px; background:#faf9fd; border-top:1px solid #e3e2e6; color:#44474e; font-size:13px; line-height:1.6;">
            <p style="margin:0 0 4px; font-weight:600; color:#1b365d;">${SITE_NAME}</p>
            <p style="margin:0;">${SITE_ADDRESS}</p>
            <p style="margin:4px 0 0;">
              <a href="mailto:${TO_EMAIL}" style="color:#1b365d;">${TO_EMAIL}</a>
              ·
              <a href="${SITE_URL}" style="color:#1b365d;">${SITE_URL.replace('https://', '')}</a>
            </p>
            <p style="margin:12px 0 0; color:#74777f;">This is an automated confirmation of your website enquiry.</p>
          </div>
        </div>
      </div>
    `,
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed.' })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return res.status(500).json({ error: 'Email service is not configured.' })
  }

  const body = readBody(req)
  if (!body) {
    return res.status(400).json({ error: 'Invalid request body.' })
  }

  // Honeypot — bots often fill hidden fields
  if (body.company || body.website) {
    return res.status(200).json({ ok: true })
  }

  const name = String(body.name || '').trim()
  const phone = String(body.phone || '').trim()
  const email = String(body.email || '').trim().toLowerCase()
  const role = String(body.role || '').trim()
  const message = String(body.message || '').trim()

  if (!name || !phone || !email || !role || !message) {
    return res.status(400).json({ error: 'Please complete all required fields.' })
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' })
  }

  if (!ROLE_LABELS[role]) {
    return res.status(400).json({ error: 'Please choose a valid role.' })
  }

  if (name.length > 120 || phone.length > 40 || message.length > 5000) {
    return res.status(400).json({ error: 'One or more fields are too long.' })
  }

  const payload = [
    buildNotificationEmail({ name, phone, email, role, message }),
    buildAutoReplyEmail({ name, email }),
  ]

  try {
    const response = await fetch('https://api.resend.com/emails/batch', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    const result = await response.json().catch(() => ({}))

    if (!response.ok) {
      console.error('Resend error:', result)
      return res.status(502).json({
        error: 'We could not send your message right now. Please try again shortly.',
      })
    }

    return res.status(200).json({ ok: true })
  } catch (error) {
    console.error('Contact API failure:', error)
    return res.status(502).json({
      error: 'We could not send your message right now. Please try again shortly.',
    })
  }
}
