// src/pages/Safaris.tsx
import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { motion } from 'motion/react'
import { loadSafaris } from '../data/loadSafaris'
import type { Safari } from '../..//types/safari'
import { Clock, DollarSign, ArrowRight, Filter, X } from 'lucide-react'

// Load once at module level — no async needed since eager:true is synchronous
const allSafaris = loadSafaris()

export function Safaris() {
  const [selectedCountry, setSelectedCountry] = useState('all')
  const [selectedBudget, setSelectedBudget] = useState('all')
  const [selectedExperience, setSelectedExperience] = useState('all')
  const [showFilters, setShowFilters] = useState(false)

  // Derive filter options directly from loaded data so they stay in sync automatically
  const countries = useMemo(
    () => Array.from(new Set(allSafaris.map(s => s.country))).sort(),
    []
  )
  const categories = useMemo(
    () => Array.from(new Set(allSafaris.map(s => s.category))).sort(),
    []
  )
  const experiences = useMemo(
    () => Array.from(new Set(allSafaris.map(s => s.experience))).sort(),
    []
  )

  const filteredSafaris = useMemo(() => {
    return allSafaris.filter(safari => {
      if (selectedCountry !== 'all' && safari.country.toLowerCase() !== selectedCountry) return false
      if (selectedBudget !== 'all' && safari.category !== selectedBudget) return false
      if (selectedExperience !== 'all' && safari.experience !== selectedExperience) return false
      return true
    })
  }, [selectedCountry, selectedBudget, selectedExperience])

  const isFiltered = selectedCountry !== 'all' || selectedBudget !== 'all' || selectedExperience !== 'all'

  function clearFilters() {
    setSelectedCountry('all')
    setSelectedBudget('all')
    setSelectedExperience('all')
  }

  return (
    <div>
      {/* Hero */}
      <div className="relative h-[300px] md:h-[400px] bg-gradient-to-r from-[var(--safari-brown-dark)] to-[var(--safari-brown)]">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1738508041350-03453c14811c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Our Safari Packages
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
                Choose from our carefully curated safari experiences across East Africa
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Mobile filter toggle */}
          <div className="lg:hidden mb-6">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="w-full flex items-center justify-center gap-2 bg-[var(--safari-cream)] px-6 py-3 rounded-lg font-semibold text-[var(--safari-brown-dark)]"
            >
              <Filter className="w-5 h-5" />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
              {isFiltered && (
                <span className="ml-1 bg-[var(--safari-gold)] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  !
                </span>
              )}
            </button>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar filters */}
            <div className={`lg:w-64 flex-shrink-0 ${showFilters ? 'block' : 'hidden lg:block'}`}>
              <div className="bg-[var(--safari-cream)] p-6 rounded-xl sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-[var(--safari-brown-dark)]">Filter Safaris</h3>
                  {isFiltered && (
                    <button
                      onClick={clearFilters}
                      className="text-xs text-gray-500 hover:text-[var(--safari-gold)] flex items-center gap-1"
                    >
                      <X className="w-3 h-3" /> Clear
                    </button>
                  )}
                </div>

                <FilterSelect
                  label="By Country"
                  value={selectedCountry}
                  onChange={setSelectedCountry}
                  options={countries.map(c => ({
                    value: c.toLowerCase(),
                    label: c,
                  }))}
                />

                <FilterSelect
                  label="By Budget"
                  value={selectedBudget}
                  onChange={setSelectedBudget}
                  options={categories.map(c => ({
                    value: c,
                    label: c.charAt(0).toUpperCase() + c.slice(1),
                  }))}
                />

                <FilterSelect
                  label="By Experience"
                  value={selectedExperience}
                  onChange={setSelectedExperience}
                  options={experiences.map(e => ({
                    value: e,
                    label: e.charAt(0).toUpperCase() + e.slice(1),
                  }))}
                />
              </div>
            </div>

            {/* Safari grid */}
            <div className="flex-1">
              <div className="mb-6 flex items-center gap-3 flex-wrap">
                <p className="text-gray-600">
                  Showing{' '}
                  <span className="font-bold text-[var(--safari-gold)]">{filteredSafaris.length}</span>{' '}
                  safari{filteredSafaris.length !== 1 ? 's' : ''}
                </p>
                {/* Active filter chips */}
                {selectedCountry !== 'all' && (
                  <FilterChip label={selectedCountry} onRemove={() => setSelectedCountry('all')} />
                )}
                {selectedBudget !== 'all' && (
                  <FilterChip label={selectedBudget} onRemove={() => setSelectedBudget('all')} />
                )}
                {selectedExperience !== 'all' && (
                  <FilterChip label={selectedExperience} onRemove={() => setSelectedExperience('all')} />
                )}
              </div>

              {filteredSafaris.length === 0 ? (
                <div className="text-center py-16">
                  <p className="text-gray-500 text-lg mb-4">No safaris match your selected filters.</p>
                  <button
                    onClick={clearFilters}
                    className="text-[var(--safari-gold)] hover:underline font-semibold"
                  >
                    Clear all filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredSafaris.map((safari, index) => (
                    <SafariCard key={safari.id} safari={safari} index={index} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function FilterSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  options: { value: string; label: string }[]
}) {
  return (
    <div className="mb-6">
      <label className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--safari-gold)] bg-white"
      >
        <option value="all">All</option>
        {options.map(o => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  )
}

function FilterChip({ label, onRemove }: { label: string; onRemove: () => void }) {
  return (
    <span className="flex items-center gap-1 bg-[var(--safari-gold)]/10 text-[var(--safari-gold)] text-sm px-3 py-1 rounded-full capitalize">
      {label}
      <button onClick={onRemove} aria-label={`Remove ${label} filter`}>
        <X className="w-3 h-3" />
      </button>
    </span>
  )
}

function SafariCard({ safari, index }: { safari: Safari; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.3) }}
    >
      <Link
        to={`/safari/${safari.id}`}
        className="group block bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full"
      >
        {/* Image */}
        <div className="aspect-[4/3] relative overflow-hidden">
          <img
            src={safari.image}
            alt={safari.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <span className="bg-[var(--safari-gold)] text-white px-3 py-1 rounded-full text-xs font-semibold capitalize">
              {safari.category}
            </span>
            <span className="bg-white/90 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold capitalize">
              {safari.country}
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-[var(--safari-brown-dark)] mb-2 group-hover:text-[var(--safari-gold)] transition-colors">
            {safari.title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-2 text-sm">{safari.description}</p>

          <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <Clock className="w-4 h-4" />
              <span>{safari.duration}</span>
            </div>
            <div className="flex items-center gap-1 text-[var(--safari-gold)] font-bold text-sm">
              <DollarSign className="w-4 h-4" />
              <span>From ${safari.price.toLocaleString()}</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[var(--safari-gold)] group-hover:text-[var(--safari-orange)] transition-colors">
            <span className="font-semibold text-sm">View Details</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}