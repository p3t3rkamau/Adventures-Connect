// src/data/loadSafaris.ts

import type { Safari } from '../../types/safari'

/**
 * Vite automatically discovers all JSON safari files
 * inside src/data/json/** folders.
 */
const safariModules = import.meta.glob('./json/**/*.json', {
  eager: true
}) as Record<string, { default?: Safari }>

const safaris: Safari[] = []

function initSafaris() {
  for (const path in safariModules) {
    try {
      const mod = safariModules[path]

      if (!mod || !mod.default) {
        console.warn(`⚠️ Safari file skipped (no default export): ${path}`)
        continue
      }

      const safari = mod.default

      // Required fields validation
      if (!safari.id || !safari.title || !safari.country || typeof safari.price !== 'number') {
        console.warn(`⚠️ Invalid safari data skipped (missing required fields): ${path}`)
        continue
      }

      // Ensure arrays always exist so consumers don't need null-checks
      if (!Array.isArray(safari.gallery)) safari.gallery = []
      if (!Array.isArray(safari.highlights)) safari.highlights = []
      if (!Array.isArray(safari.itinerary)) safari.itinerary = []
      if (!Array.isArray(safari.included)) safari.included = []
      if (!Array.isArray(safari.notIncluded)) safari.notIncluded = []
      if (!Array.isArray(safari.accommodation)) safari.accommodation = []

      safaris.push(safari)
    } catch (error) {
      console.warn(`⚠️ Failed to load safari JSON: ${path}`, error)
    }
  }

  // Sort by price ascending
  safaris.sort((a, b) => a.price - b.price)
}

initSafaris()

export function loadSafaris(): Safari[] {
  return safaris
}

export function getSafariById(id: string): Safari | undefined {
  return safaris.find(s => s.id === id)
}

export function getSafarisByCountry(country: string): Safari[] {
  return safaris.filter(s => s.country.toLowerCase() === country.toLowerCase())
}

export function getSafarisByCategory(category: string): Safari[] {
  return safaris.filter(s => s.category === category)
}

export function getCountries(): string[] {
  return Array.from(new Set(safaris.map(s => s.country))).sort()
}

export function getCategories(): string[] {
  return Array.from(new Set(safaris.map(s => s.category))).sort()
}
