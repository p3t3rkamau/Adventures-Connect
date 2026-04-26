// src/components/FeaturedDestination.tsx
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { loadSafaris } from '../data/loadSafaris'
import { Clock, ArrowRight } from 'lucide-react'
import type { Safari } from '../types/safari'

const allSafaris = loadSafaris()

// Pick 6 safaris to feature. Prefer a variety of price points.
const FEATURED_IDS = [
  'best-kenya-safari-south',       // 3 days – short intro safari
  'best-kenya-safari-central-south', // 5 days
  '5-days-tsavo-amboseli',         // 5 days midrange
  '8-days-amboseli-tsavo-malindi', // 8 days
  'best-maasai-mara-diani',        // 8 days luxury + beach
  'best-kenya-safari',             // 13 days flagship
]

function getFeaturedSafaris(): Safari[] {
  const byId = new Map(allSafaris.map(s => [s.id, s]))
  const picked: Safari[] = []
  for (const id of FEATURED_IDS) {
    const s = byId.get(id)
    if (s) picked.push(s)
  }
  // If some IDs don't exist, fill remaining slots from top of list
  if (picked.length < 6) {
    const pickedIds = new Set(picked.map(s => s.id))
    for (const s of allSafaris) {
      if (picked.length >= 6) break
      if (!pickedIds.has(s.id)) picked.push(s)
    }
  }
  return picked.slice(0, 6)
}

const featuredSafaris = getFeaturedSafaris()

const cardColors = [
  { from: '#c8a96e', via: '#7a4a1e', to: '#3d2008', accent: '#f0c060' },
  { from: '#e8917a', via: '#9b3a20', to: '#3a1508', accent: '#ffb090' },
  { from: '#8fbe7a', via: '#3a6b28', to: '#1a3510', accent: '#a8e080' },
  { from: '#d4aa55', via: '#8b5e1a', to: '#3a2008', accent: '#ffd070' },
  { from: '#7ab8a0', via: '#285e48', to: '#0e2820', accent: '#80e0c0' },
  { from: '#c09060', via: '#6b4020', to: '#2a1808', accent: '#e8b070' },
]

const animalIcons = ['🦁', '🐘', '🦒', '🦓', '🐆', '🦏']

export default function PopularSafaris() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-3 mb-3">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-[var(--safari-gold)]" />
            <p className="text-xs uppercase tracking-widest text-[var(--safari-gold)] font-semibold">
              Popular Packages
            </p>
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-[var(--safari-gold)]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--safari-brown-dark)] mb-3">
            Handpicked Safari Experiences
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            From quick 3-day adventures to grand 15-day expeditions — a safari for every traveller
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredSafaris.map((safari, i) => {
            const colors = cardColors[i % cardColors.length]
            const animal = animalIcons[i % animalIcons.length]
            return (
              <motion.div
                key={safari.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: Math.min(i * 0.08, 0.4) }}
              >
                <Link
                  to={`/safari/${safari.id}`}
                  className="group block rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: `linear-gradient(160deg, ${colors.from} 0%, ${colors.via} 50%, ${colors.to} 100%)`,
                  }}
                >
                  {/* Top area */}
                  <div className="relative h-44 flex items-start justify-between p-4 overflow-hidden">
                    {/* Big animal in background */}
                    <span className="absolute bottom-4 right-2 text-8xl opacity-[0.08] group-hover:opacity-[0.14] transition-opacity duration-300 pointer-events-none select-none leading-none">
                      {animal}
                    </span>
                    {/* Separator line */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-px"
                      style={{ background: `linear-gradient(to right, transparent, ${colors.accent}60, transparent)` }}
                    />
                    {/* Category badge */}
                    {safari.category && (
                      <span
                        className="text-[10px] uppercase tracking-widest px-2.5 py-1 rounded backdrop-blur-sm font-medium"
                        style={{
                          background: 'rgba(0,0,0,0.35)',
                          border: `1px solid ${colors.accent}70`,
                          color: colors.accent,
                        }}
                      >
                        {safari.category}
                      </span>
                    )}
                    {/* Duration chip */}
                    <div
                      className="flex items-center gap-1.5 ml-auto text-[11px]"
                      style={{
                        background: 'rgba(0,0,0,0.35)',
                        backdropFilter: 'blur(4px)',
                        color: 'rgba(255,255,255,0.75)',
                        padding: '4px 10px',
                        borderRadius: 4,
                      }}
                    >
                      <Clock className="w-3 h-3" />
                      {safari.duration}
                    </div>
                  </div>

                  {/* Body */}
                  <div
                    className="p-5"
                    style={{ background: 'rgba(0,0,0,0.42)', backdropFilter: 'blur(8px)' }}
                  >
                    <p
                      className="text-[10px] uppercase tracking-wider mb-2"
                      style={{ color: colors.accent }}
                    >
                      {safari.country} · {safari.experience}
                    </p>
                    <h3 className="text-lg font-semibold text-white leading-snug mb-2 line-clamp-2">
                      {safari.title}
                    </h3>
                    <p className="text-sm text-white/55 leading-relaxed mb-5 line-clamp-2">
                      {safari.description}
                    </p>

                    <div
                      className="flex items-center justify-between pt-4"
                      style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
                    >
                      <div>
                        <p className="text-[10px] uppercase tracking-wider text-white/40 mb-0.5">From</p>
                        <p className="text-2xl font-semibold leading-none" style={{ color: colors.accent }}>
                          ${safari.price.toLocaleString()}
                        </p>
                        <p className="text-[10px] text-white/30 mt-0.5">per person sharing</p>
                      </div>
                      <div
                        className="flex items-center gap-2 text-[11px] uppercase tracking-wider px-4 py-2.5 rounded transition-all duration-200 group-hover:scale-105"
                        style={{
                          border: `1px solid ${colors.accent}`,
                          color: colors.accent,
                        }}
                      >
                        View Details
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <Link
            to="/safaris"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--safari-gold)] to-[var(--safari-orange)] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm"
          >
            View All Safaris
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
