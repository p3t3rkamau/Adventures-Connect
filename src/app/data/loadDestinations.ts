/// <reference types="vite/client" />

// src/data/loadDestinations.ts
//
// Auto-discovers all destination JSON files from:
//   src/data/destinations/**/*.json
//
// Example structure:
//   src/data/destinations/kenya.json
//   src/data/destinations/tanzania.json
//
// Just drop a new JSON file in the folder — no code changes needed.

import type { Destination } from '../../types/destination'

const destinationModules = import.meta.glob<{ default: Destination }>(
  './destinations/**/*.json',
  { eager: true }
)

export function loadDestinations(): Destination[] {
  const destinations: Destination[] = []

  for (const path in destinationModules) {
    const mod = destinationModules[path]
    const destination = mod?.default

    if (!destination) continue

    if (
      typeof destination.name !== 'string' ||
      typeof destination.country !== 'string' ||
      typeof destination.description !== 'string' ||
      !Array.isArray(destination.highlights) ||
      !destination.highlights.every(item => typeof item === 'string')
    ) {
      console.error('Invalid destination JSON:', path, destination)
      continue
    }

    destinations.push(destination)
  }

  return destinations.sort((a, b) => a.name.localeCompare(b.name))
}
export function getDestinationById(id: string): Destination | undefined {
  return loadDestinations().find(d => d.id === id)
}