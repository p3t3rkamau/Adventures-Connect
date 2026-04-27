// src/components/safari-detail/SafariTabs.tsx
import { useMemo, useState } from 'react'
import type { Safari } from '../../types/safari'

interface Props {
  safari: Safari
}

type Tab = 'itinerary' | 'pricing'
type SeasonPrice = number | Record<string, number>

function formatSeasonName(key: string) {
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, char => char.toUpperCase())
}

function formatDateRange(key: string) {
  return key.replaceAll('-', ' ')
}

function formatPrice(price: number) {
  return `$${price.toLocaleString()}`
}

export function SafariTabs({ safari }: Props) {
  const [activeTab, setActiveTab] = useState<Tab>('itinerary')

  const pricingEntries = useMemo(() => {
    return Object.entries(safari.pricing ?? {}).filter(([, value]) => {
      if (value === undefined || value === null) return false
      if (typeof value === 'number') return true
      return typeof value === 'object' && Object.keys(value).length > 0
    }) as [string, SeasonPrice][]
  }, [safari.pricing])

  return (
    <div className="mb-8">
      <div className="flex gap-4 border-b border-gray-200 mb-6">
        {(['itinerary', 'pricing'] as Tab[]).map(tab => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`pb-3 px-4 text-sm font-semibold capitalize transition-colors ${
              activeTab === tab
                ? 'text-[var(--safari-gold)] border-b-2 border-[var(--safari-gold)] -mb-px'
                : 'text-gray-500 hover:text-[var(--safari-gold)]'
            }`}
          >
            {tab === 'itinerary' ? 'Detailed Itinerary' : 'Pricing'}
          </button>
        ))}
      </div>

      {activeTab === 'itinerary' && (
        <div className="space-y-6">
          {safari.itinerary?.length ? (
            safari.itinerary.map((day, i) => (
              <div key={`${day.day}-${i}`} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-[var(--safari-gold)] to-[var(--safari-orange)] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    D{day.day}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-[var(--safari-brown-dark)] mb-1">
                    {day.title}
                  </h4>
                  <p className="text-gray-600">{day.description}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">Detailed itinerary coming soon.</p>
          )}
        </div>
      )}

      {activeTab === 'pricing' && (
        <div>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full">
              <thead className="bg-[var(--safari-cream)]">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-[var(--safari-brown-dark)]">
                    Season / Travel Dates
                  </th>
                  <th className="px-4 py-3 text-right font-semibold text-[var(--safari-brown-dark)]">
                    Price per Person
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {pricingEntries.length ? (
                  pricingEntries.flatMap(([seasonName, value]) => {
                    if (typeof value === 'number') {
                      return (
                        <tr key={seasonName}>
                          <td className="px-4 py-4 text-gray-700">
                            {formatSeasonName(seasonName)}
                          </td>
                          <td className="px-4 py-4 text-right font-bold text-[var(--safari-gold)]">
                            {formatPrice(value)}
                          </td>
                        </tr>
                      )
                    }

                    return Object.entries(value).map(([dateRange, price]) => (
                      <tr key={`${seasonName}-${dateRange}`}>
                        <td className="px-4 py-4 text-gray-700">
                          <span className="font-medium">
                            {formatSeasonName(seasonName)}
                          </span>
                          <span className="block text-sm text-gray-500">
                            {formatDateRange(dateRange)}
                          </span>
                        </td>
                        <td className="px-4 py-4 text-right font-bold text-[var(--safari-gold)]">
                          {formatPrice(price)}
                        </td>
                      </tr>
                    ))
                  })
                ) : (
                  <tr>
                    <td
                      colSpan={2}
                      className="px-4 py-6 text-center text-gray-500"
                    >
                      Pricing available on request.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-gray-500 italic">
            Prices are per person sharing. Solo traveler pricing available on request.
          </p>

          {safari.note && (
            <p className="mt-2 text-sm text-gray-500 italic">{safari.note}</p>
          )}
        </div>
      )}
    </div>
  )
}
