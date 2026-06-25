import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import { buildLocalBusinessSchema, buildWebsiteSchema } from './schema'
import { site } from '../content/site'

export function Seo({ title, description, path = '/', image = '/images/hero-cafe-melbourne.webp' }) {
  const location = useLocation()
  const canonicalPath = path || location.pathname
  const canonicalUrl = `${site.url}${canonicalPath}`
  const imageUrl = `${site.url}${image}`
  const schema = [buildLocalBusinessSchema(), buildWebsiteSchema()]

  return (
    <Helmet>
      <html lang="en-AU" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}