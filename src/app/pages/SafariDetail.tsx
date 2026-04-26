// src/pages/SafariDetail.tsx
import { useParams, Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { getSafariById } from '../data/loadSafaris'
import { SafariGallery } from '../components/SafariGallery'
import { SafariOverview } from '../components/SafariOverview'
import { SafariTabs } from '../components/SafariTabs'
import { SafariInclusions } from '../components/SafariInclusions'
import { SafariBookingSidebar } from '../components/SafariBookingSidebar'
import { SEOMeta } from '../components/SEOMeta'

const BASE_URL = 'https://www.adventuresconnect.co.ke'

export function SafariDetail() {
  const { id } = useParams<{ id: string }>()
  const safari = id ? getSafariById(id) : undefined

  if (!safari) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Safari not found</h1>
          <Link to="/safaris" className="text-[var(--safari-gold)] hover:underline">
            Browse all safaris
          </Link>
        </div>
      </div>
    )
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: safari.title,
    description: safari.description,
    image: safari.image,
    touristType: safari.experience,
    itinerary: {
      '@type': 'ItemList',
      numberOfItems: safari.itinerary.length,
    },
    offers: {
      '@type': 'Offer',
      price: safari.price,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: `${BASE_URL}/safari/${safari.id}`,
    },
    provider: {
      '@type': 'TravelAgency',
      name: 'Adventures Connect',
      url: BASE_URL,
    },
  }

  return (
    <div className="bg-white">
      <SEOMeta
        title={safari.title}
        description={`${safari.description} | ${safari.duration} | From USD ${safari.price.toLocaleString()} per person sharing.`}
        image={safari.image}
        url={`${BASE_URL}/safari/${safari.id}`}
        schema={schema}
      />

      {/* Hero gallery */}
      <SafariGallery images={safari.gallery} title={safari.title} />

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SafariOverview safari={safari} />
            <SafariTabs safari={safari} />
            <SafariInclusions safari={safari} />
          </motion.div>

          {/* Sticky sidebar */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <SafariBookingSidebar safari={safari} />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
