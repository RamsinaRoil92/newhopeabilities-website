import { services } from '../content/services'
import { site } from '../content/site'

export function buildLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${site.url}/#localbusiness`,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    description: site.description,
    email: site.email,
    priceRange: '$$',
    image: `${site.url}/images/hero-cafe-melbourne.webp`,
    areaServed: {
      '@type': 'AdministrativeArea',
      name: site.serviceArea,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.addressStreet,
      addressLocality: site.addressLocality,
      addressRegion: site.addressRegion,
      postalCode: site.addressPostcode,
      addressCountry: site.addressCountry,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: site.email,
      contactType: 'NDIS support enquiries',
      areaServed: 'AU-VIC',
      availableLanguage: 'English',
    },
    knowsAbout: ['NDIS support', 'Disability support service', 'Community access', 'Self-care support'],
    makesOffer: services.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.title,
        description: service.description,
        areaServed: site.serviceArea,
        provider: {
          '@id': `${site.url}/#localbusiness`,
        },
      },
    })),
  }
}

export function buildWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${site.url}/#website`,
    name: site.name,
    url: site.url,
    inLanguage: 'en-AU',
    publisher: {
      '@id': `${site.url}/#localbusiness`,
    },
  }
}