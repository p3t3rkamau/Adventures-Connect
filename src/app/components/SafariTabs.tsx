// src/components/safari-detail/SafariTabs.tsx
import { useState } from 'react'
import { Calendar, Users } from 'lucide-react'
import type { Safari, PricingPeriod } from '../../types/safari'

interface Props {
  safari: Safari
}

type Tab = 'itinerary' | 'pricing'

export function SafariTabs({ safari }: Props) {
  const [activeTab, setActiveTab] = useState<Tab>('itinerary')
  const [activePeriodId, setActivePeriodId] = useState<string>(
    safari.pricingPeriods?.[0]?.id ?? ''
  )

  const periods: PricingPeriod[] = safari.pricingPeriods ?? []
  const activePeriod = periods.find(p => p.id === activePeriodId) ?? periods[0]

  return (
    <div className="mb-8">
      {/* Main tabs */}
      <div className="flex gap-1 border-b border-gray-200 mb-6">
        {(['itinerary', 'pricing'] as Tab[]).map(tab => (
          <button
            key={tab}
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

      {/* ── Itinerary ───────────────────────────────────── */}
      {activeTab === 'itinerary' && (
        <div className="space-y-5">
          {safari.itinerary.map((day, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-11 h-11 bg-gradient-to-br from-[var(--safari-gold)] to-[var(--safari-orange)] rounded-full flex items-center justify-center text-white font-bold text-xs shadow-sm">
                  D{day.day}
                </div>
              </div>
              <div className="pt-1">
                <h4 className="text-base font-bold text-[var(--safari-brown-dark)] mb-1 leading-snug">
                  {day.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">{day.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ── Pricing ─────────────────────────────────────── */}
      {activeTab === 'pricing' && (
        <div>
          {periods.length === 0 ? (
            <div className="text-center py-8 text-gray-400 text-sm">
              Pricing information coming soon. Please contact us for a quote.
            </div>
          ) : (
            <>
              {/* Period tabs — scrollable on mobile */}
              <div className="mb-5">
                <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-3 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" /> Select Travel Period
                </p>
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                  {periods.map(period => (
                    <button
                      key={period.id}
                      onClick={() => setActivePeriodId(period.id)}
                      className={`flex-shrink-0 px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-200 whitespace-nowrap ${
                        activePeriodId === period.id
                          ? 'bg-[var(--safari-gold)] text-white shadow-sm'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {period.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Active period pricing card */}
              {activePeriod && (
                <div className="rounded-xl border border-gray-200 overflow-hidden">
                  {/* Card header */}
                  <div className="bg-[var(--safari-cream)] px-5 py-4 border-b border-gray-200">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[var(--safari-gold)]" />
                      <span className="font-semibold text-[var(--safari-brown-dark)] text-sm">
                        {activePeriod.label}
                      </span>
                    </div>
                  </div>

                  {/* Pricing row */}
                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <Users className="w-4 h-4 text-[var(--safari-gold)]" />
                        <span>2+ persons sharing</span>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-[var(--safari-gold)]">
                          {activePeriod.currency} {activePeriod.pricePerPersonSharing.toLocaleString()}
                        </p>
                        <p className="text-xs text-gray-400 mt-0.5">per person</p>
                      </div>
                    </div>

                    <p className="text-xs text-gray-400 mt-4 pt-3 border-t border-gray-100">
                      Prices are based on a minimum of {activePeriod.minPersons} persons travelling together and sharing a room.
                      Contact us for group rates or custom quotes.
                    </p>
                  </div>
                </div>
              )}

              {/* Summary table — all periods at a glance */}
              <div className="mt-5 rounded-xl border border-gray-100 overflow-hidden">
                <div className="bg-gray-50 px-4 py-2.5 border-b border-gray-100">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">All Period Rates</p>
                </div>
                <div className="divide-y divide-gray-100">
                  {periods.map(period => (
                    <button
                      key={period.id}
                      onClick={() => setActivePeriodId(period.id)}
                      className={`w-full flex items-center justify-between px-4 py-3 text-sm transition-colors text-left ${
                        activePeriodId === period.id
                          ? 'bg-[var(--safari-gold)]/8 text-[var(--safari-brown-dark)]'
                          : 'hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      <span className={activePeriodId === period.id ? 'font-semibold' : ''}>
                        {period.label}
                      </span>
                      <span className={`font-bold ${activePeriodId === period.id ? 'text-[var(--safari-gold)]' : 'text-gray-700'}`}>
                        {period.currency} {period.pricePerPersonSharing.toLocaleString()}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  )
}
