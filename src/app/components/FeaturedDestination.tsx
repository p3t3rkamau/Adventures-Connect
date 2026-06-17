// src/components/FeaturedDestination.tsx
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { loadSafaris } from '../data/loadSafaris'
import { Clock, ArrowRight } from 'lucide-react'
import  { ImageWithFallback } from './figma/ImageWithFallback'
import type { Safari } from '../../types/safari'

// Dynamically fetch the first 6 safaris from the data
function getFeaturedSafaris(): Safari[] {
  const allSafaris = loadSafaris()
  return allSafaris.slice(0, 6)
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
          className="text-center mb-8 md:mb-12"
        >
          <div className="inline-flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
            <div className="h-px w-6 md:w-10 bg-gradient-to-r from-transparent to-[var(--safari-gold)]" />
            <p className="text-xs md:text-sm uppercase tracking-widest text-[var(--safari-gold)] font-semibold">
              Popular Packages
            </p>
            <div className="h-px w-6 md:w-10 bg-gradient-to-l from-transparent to-[var(--safari-gold)]" />
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--safari-brown-dark)] mb-2 md:mb-3">
            Handpicked Safari Experiences
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-xl mx-auto px-2">
            From quick 3-day adventures to grand 15-day expeditions — a safari for every traveller
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {featuredSafaris.map((safari, i) => {
            const colors = cardColors[i % cardColors.length]
            const animal = animalIcons[i % animalIcons.length]
            const imageUrl = safari.gallery?.[0] || safari.image
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
                  className="group flex flex-col rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full"
                  style={{
                    background: `linear-gradient(160deg, ${colors.from} 0%, ${colors.via} 50%, ${colors.to} 100%)`,
                  }}
                >
                  {/* Image section */}
                  <div className="relative w-full h-40 md:h-48 overflow-hidden bg-gray-800 flex-shrink-0">
                    {imageUrl ? (
                      <ImageWithFallback
                        src={imageUrl}
                        alt={safari.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-6xl md:text-7xl opacity-20">
                        {animal}
                      </div>
                    )}
                  </div>

                  {/* Top info area */}
                  <div className="relative px-3 md:px-4 pt-3 md:pt-4 pb-2 flex items-start justify-between flex-wrap gap-2">
                    {/* Category badge */}
                    {safari.category && (
                      <span
                        className="text-[9px] md:text-[10px] uppercase tracking-widest px-2 md:px-2.5 py-1 rounded backdrop-blur-sm font-medium"
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
                      className="flex items-center gap-1 ml-auto text-[9px] md:text-[11px]"
                      style={{
                        background: 'rgba(0,0,0,0.35)',
                        backdropFilter: 'blur(4px)',
                        color: 'rgba(255,255,255,0.75)',
                        padding: '3px 8px',
                        borderRadius: 4,
                      }}
                    >
                      <Clock className="w-3 h-3" />
                      {safari.duration}
                    </div>
                  </div>

                  {/* Body */}
                  <div
                    className="flex-1 flex flex-col p-3 md:p-4"
                    style={{ background: 'rgba(0,0,0,0.42)', backdropFilter: 'blur(8px)' }}
                  >
                    <p
                      className="text-[9px] md:text-[10px] uppercase tracking-wider mb-1 md:mb-2"
                      style={{ color: colors.accent }}
                    >
                      {safari.country} · {safari.experience}
                    </p>
                    <h3 className="text-base md:text-lg font-semibold text-white leading-snug mb-1 md:mb-2 line-clamp-2">
                      {safari.title}
                    </h3>
                    <p className="text-xs md:text-sm text-white/55 leading-relaxed mb-3 md:mb-auto line-clamp-2 flex-1">
                      {safari.description}
                    </p>

                    <div
                      className="flex flex-col md:flex-row items-start md:items-center md:justify-between pt-3 md:pt-4 gap-3 md:gap-0"
                      style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
                    >
                      <div>
                        <p className="text-[8px] md:text-[10px] uppercase tracking-wider text-white/40 mb-0.5">From</p>
                        <p className="text-lg md:text-2xl font-semibold leading-none" style={{ color: colors.accent }}>
                          ${safari.price.toLocaleString()}
                        </p>
                        <p className="text-[8px] md:text-[10px] text-white/30 mt-0.5">per person sharing</p>
                      </div>
                      <div
                        className="flex items-center justify-center gap-1.5 md:gap-2 text-[9px] md:text-[11px] uppercase tracking-wider px-3 md:px-4 py-2 md:py-2.5 rounded transition-all duration-200 group-hover:scale-105 w-full md:w-auto"
                        style={{
                          border: `1px solid ${colors.accent}`,
                          color: colors.accent,
                        }}
                      >
                        View Details
                        <ArrowRight className="w-3 md:w-3.5 h-3 md:h-3.5 group-hover:translate-x-1 transition-transform" />
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
          className="text-center mt-8 md:mt-12"
        >
          <Link
            to="/safaris"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[var(--safari-gold)] to-[var(--safari-orange)] text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 text-xs md:text-sm"
          >
            View All Safaris
            <ArrowRight className="w-3.5 md:w-4 h-3.5 md:h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
