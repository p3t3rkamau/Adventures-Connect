// safari.ts — Central type definition for all safari data

export type SeasonPrice = number | Record<string, number>

export interface SafariPricing {
  lowSeason?: SeasonPrice
  midSeason?: SeasonPrice
  highSeason?: SeasonPrice
  peakSeason?: SeasonPrice
  shoulderSeason?: SeasonPrice
  greenSeason?: SeasonPrice
}

export interface ItineraryDay {
  day: number
  title: string
  description: string
}

export interface TravelInfo {
  clothes?: string
  food?: string
}

export interface Safari {
  id: string
  title: string
  country: string
  duration: string

  /** Lowest price across all periods — used for sorting & "from" display */
  price: number

  description: string
  image: string
  gallery: string[]

  category: string
  experience: string

  highlights: string[]
  itinerary: ItineraryDay[]

  included: string[]
  notIncluded: string[]

  /** New date-based pricing periods (preferred) */
  pricingPeriods?: PricingPeriod[]

  accommodation: string[]
  travelInfo?: TravelInfo
  note?: string
}
