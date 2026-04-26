// src/components/SEOMeta.tsx
// Inject dynamic <title> and <meta> tags per page using the document API.
// Usage: <SEOMeta title="..." description="..." image="..." />
// Place at the top of each page component.

import { useEffect } from 'react'

interface SEOMetaProps {
  title: string
  description?: string
  image?: string
  url?: string
  type?: 'website' | 'article'
  /** JSON-LD structured data object — serialized automatically */
  schema?: Record<string, unknown>
}

const SITE_NAME = 'Adventures Connect'
const BASE_URL = 'https://www.adventuresconnect.co.ke'
const DEFAULT_IMAGE = `${BASE_URL}/og-image.jpg`
const DEFAULT_DESC =
  'Premium safari tours across East & Southern Africa. Maasai Mara, Serengeti, gorilla trekking, beach holidays and more.'

export function SEOMeta({
  title,
  description = DEFAULT_DESC,
  image = DEFAULT_IMAGE,
  url = BASE_URL,
  type = 'website',
  schema,
}: SEOMetaProps) {
  const fullTitle = `${title} | ${SITE_NAME}`

  useEffect(() => {
    document.title = fullTitle
    setMeta('description', description)
    setMeta('og:title', fullTitle)
    setMeta('og:description', description)
    setMeta('og:image', image)
    setMeta('og:url', url)
    setMeta('og:type', type)
    setMeta('twitter:title', fullTitle)
    setMeta('twitter:description', description)
    setMeta('twitter:image', image)

    // Inject or update JSON-LD
    if (schema) {
      const id = 'seo-schema-ld'
      let el = document.getElementById(id) as HTMLScriptElement | null
      if (!el) {
        el = document.createElement('script')
        el.id = id
        el.type = 'application/ld+json'
        document.head.appendChild(el)
      }
      el.textContent = JSON.stringify(schema)
    }

    return () => {
      // Restore default title on unmount
      document.title = `${SITE_NAME} | East Africa Safari Tours & Packages`
    }
  }, [fullTitle, description, image, url, type, schema])

  return null
}

function setMeta(nameOrProp: string, content: string) {
  // Try og: as property, everything else as name
  const isProp = nameOrProp.startsWith('og:') || nameOrProp.startsWith('twitter:')
  const attr = isProp ? 'property' : 'name'
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${nameOrProp}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, nameOrProp)
    document.head.appendChild(el)
  }
  el.content = content
}
