// src/data/loadSafaris.ts
//
// Auto-discovers ALL .json files inside src/data/json/**
// Organise by country like this:
//   src/data/json/kenya/best-kenya-safari-south.json
//   src/data/json/tanzania/serengeti-classic.json
//
// Adding a new JSON file to any country folder automatically
// makes it appear in the site — no code changes needed.

import type { Safari } from '../../types/safari'

// Vite's import.meta.glob must use a string literal — the ** glob
// handles all subfolders (countries) recursively.
const safariModules = import.meta.glob<{ default: Safari }>(
  './json/**/*.json',
  { eager: true }
)

/**
 * Returns all safaris loaded from the json/** folder.
 * Results are sorted by price ascending by default.
 */
export function loadSafaris(): Safari[] {
  const safaris: Safari[] = []

  for (const path in safariModules) {
    const mod = safariModules[path]
    if (mod?.default) {
      safaris.push(mod.default)
    }
  }

  // Stable sort by price so UI order is predictable
  return safaris.sort((a, b) => a.price - b.price)
}

/**
 * Returns a single safari by id, or undefined if not found.
 */
export function getSafariById(id: string): Safari | undefined {
  return loadSafaris().find(s => s.id === id)
}

/**
 * Returns all unique countries found across the loaded safaris.
 * Useful for building country-filter dropdowns.
 */
export function getCountries(): string[] {
  const all = loadSafaris().map(s => s.country)
  return Array.from(new Set(all)).sort()
}

/**
 * Returns all unique categories (luxury / budget / mid-range etc.)
 */
export function getCategories(): string[] {
  const all = loadSafaris().map(s => s.category)
  return Array.from(new Set(all)).sort()
}